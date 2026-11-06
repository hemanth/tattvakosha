import { useSyncExternalStore } from "react";

export type NinadaGender = "male" | "female";
export type NinadaEnginePhase = "unloaded" | "loading" | "ready" | "synthesizing" | "playing" | "error";

export interface NinadaVoiceState {
  phase: NinadaEnginePhase;
  voice: NinadaGender;
  activeUtteranceId: string | null;
  progressPct: number;
  statusText: string;
  isNeural: boolean;
  vocoderBackend: string;
  ttfaMs: number | null;
}

const SAMPLE_RATE = 24000;
const VOICE_STORAGE_KEY = "tattvakosha-ninada-voice";

function readInitialVoice(): NinadaGender {
  if (typeof window === "undefined") return "male";
  const saved = window.localStorage.getItem(VOICE_STORAGE_KEY);
  return saved === "female" ? "female" : "male";
}

let state: NinadaVoiceState = {
  phase: "unloaded",
  voice: readInitialVoice(),
  activeUtteranceId: null,
  progressPct: 0,
  statusText: "Ninada 24kHz · SA",
  isNeural: true,
  vocoderBackend: "wasm",
  ttfaMs: null
};

const listeners = new Set<() => void>();
function emit() {
  for (const fn of listeners) fn();
}

function patchState(partial: Partial<NinadaVoiceState>) {
  state = { ...state, ...partial };
  emit();
}

export function subscribeNinada(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function getNinadaSnapshot(): NinadaVoiceState {
  return state;
}

export function useNinadaVoice(): NinadaVoiceState {
  return useSyncExternalStore(subscribeNinada, getNinadaSnapshot, getNinadaSnapshot);
}

/**
 * Normalizes dictionary headwords and Sanskrit lakṣaṇas for clean 24 kHz studio recitation.
 */
export function cleanSanskritForRecitation(rawText: string): string {
  let text = rawText
    .replace(/√/g, "")
    .replace(/\([^)]*\)/g, " ")
    .replace(/\[[^\]]*\]/g, " ")
    .replace(/^[\u2013\u2014\-]+|[\u2013\u2014\-]+$/g, "")
    .replace(/-\s+/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (!text) return "";

  // Ensure prosodic closure for short headwords and single syllables
  if (!/[।॥.!?]$/.test(text)) {
    text = `${text} ।`;
  }
  return text;
}

// Singleton runtime handles
let synthWorker: Worker | null = null;
let audioCtx: AudioContext | null = null;
let workletNode: AudioWorkletNode | null = null;
let workletReady = false;
let workletInitPromise: Promise<void> | null = null;

let reqSeq = 1;
let activeReqId = 0;
let activePlaySessionId = 0;
let currentChunks: Float32Array[] = [];
let fallbackNodes: AudioBufferSourceNode[] = [];
let fallbackNextTime = 0;
let fallbackEndTimer: number | null = null;

// LRU utterance cache (`${voice}:${cleanedText}` -> Float32Array @ 24kHz)
const pcmCache = new Map<string, Float32Array>();
const MAX_PCM_CACHE = 32;

function rememberPcm(key: string, chunks: Float32Array[]) {
  if (chunks.length === 0) return;
  let total = 0;
  for (const c of chunks) total += c.length;
  if (total === 0) return;
  const merged = new Float32Array(total);
  let offset = 0;
  for (const c of chunks) {
    merged.set(c, offset);
    offset += c.length;
  }
  if (pcmCache.has(key)) pcmCache.delete(key);
  pcmCache.set(key, merged);
  while (pcmCache.size > MAX_PCM_CACHE) {
    const oldest = pcmCache.keys().next().value;
    if (oldest !== undefined) pcmCache.delete(oldest);
    else break;
  }
}

async function ensureAudioPipeline(): Promise<AudioContext> {
  if (!audioCtx) {
    const Ctor = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new Ctor({ latencyHint: "interactive" });
  }
  if (audioCtx.state === "suspended") {
    await audioCtx.resume().catch(() => {});
  }

  if (!workletReady && audioCtx.audioWorklet && !workletInitPromise) {
    workletInitPromise = (async () => {
      try {
        const workletUrl = new URL("./ninada/pcm-stream-worklet.js", window.location.href).href;
        await audioCtx!.audioWorklet.addModule(workletUrl);
        workletNode = new AudioWorkletNode(audioCtx!, "ninada-stream-processor", {
          numberOfInputs: 0,
          numberOfOutputs: 1,
          outputChannelCount: [1]
        });
        workletNode.port.onmessage = (ev: MessageEvent) => {
          const m = ev.data || {};
          if (m.sessionId && m.sessionId !== activePlaySessionId) return;
          if (m.type === "ended") {
            patchState({
              phase: "ready",
              activeUtteranceId: null
            });
          } else if (m.type === "underrun" && workletNode) {
            workletNode.port.postMessage({
              type: "watermark",
              watermarkSamples: Math.round(0.28 * SAMPLE_RATE)
            });
          }
        };
        workletNode.connect(audioCtx!.destination);
        workletReady = true;
      } catch {
        workletReady = false;
      }
    })();
  }

  if (workletInitPromise) {
    await workletInitPromise;
  }
  return audioCtx;
}

function stopFallbackNodes() {
  if (fallbackEndTimer !== null) {
    window.clearTimeout(fallbackEndTimer);
    fallbackEndTimer = null;
  }
  for (const node of fallbackNodes) {
    try {
      node.stop();
      node.disconnect();
    } catch {
      // ignore already stopped
    }
  }
  fallbackNodes = [];
  fallbackNextTime = 0;
}

function schedulePcmFallback(ctx: AudioContext, pcm: Float32Array, sampleRate: number, isFinal: boolean, sessionId: number) {
  if (pcm.length > 0) {
    const buffer = ctx.createBuffer(1, pcm.length, sampleRate);
    buffer.getChannelData(0).set(pcm);
    const src = ctx.createBufferSource();
    src.buffer = buffer;
    src.connect(ctx.destination);
    const startAt = Math.max(ctx.currentTime + 0.015, fallbackNextTime);
    src.start(startAt);
    fallbackNextTime = startAt + pcm.length / sampleRate;
    fallbackNodes.push(src);
  }

  if (isFinal) {
    const remainingMs = Math.max(40, (fallbackNextTime - ctx.currentTime) * 1000 + 40);
    fallbackEndTimer = window.setTimeout(() => {
      if (activePlaySessionId === sessionId) {
        patchState({ phase: "ready", activeUtteranceId: null });
      }
    }, remainingMs);
  }
}

function ensureSynthWorker(): Worker {
  if (synthWorker) return synthWorker;

  const workerUrl = new URL("./ninada/synth-worker.mjs", window.location.href).href;
  const worker = new Worker(workerUrl, { type: "module" });

  worker.addEventListener("message", (ev: MessageEvent) => {
    const msg = ev.data || {};

    if (msg.type === "progress") {
      const pct = Math.max(1, Math.min(99, Number(msg.pct || 0)));
      const label =
        msg.phase === "compile"
          ? `Compiling Ninada SA…`
          : msg.fromCache
          ? `Loading cached SA (${pct}%)`
          : `Loading Ninada SA (${pct}%)`;
      patchState({
        phase: "loading",
        progressPct: pct,
        statusText: label
      });
      return;
    }

    if (msg.type === "ready") {
      const backend = msg.vocoderBackend === "webgpu" ? "WebGPU" : msg.isNeural ? "WASM" : "Klatt";
      patchState({
        phase: state.activeUtteranceId ? state.phase : "ready",
        progressPct: 100,
        isNeural: Boolean(msg.isNeural),
        vocoderBackend: String(msg.vocoderBackend || "wasm"),
        statusText: msg.isNeural ? `Ninada 24kHz · ${backend}` : "Ninada · Klatt"
      });
      return;
    }

    if (msg.reqId && msg.reqId !== activeReqId) {
      return;
    }

    if (msg.type === "chunk") {
      const pcm: Float32Array = msg.pcm;
      const sr = Number(msg.sampleRate || SAMPLE_RATE);
      if (pcm && pcm.length > 0) {
        // Clone before transferring or storing so LRU cache keeps intact Float32Array
        const copyForCache = pcm.slice();
        currentChunks.push(copyForCache);

        patchState({
          phase: "playing",
          ttfaMs: typeof msg.ttfaMs === "number" ? Math.round(msg.ttfaMs) : state.ttfaMs
        });

        if (workletReady && workletNode) {
          workletNode.port.postMessage(
            {
              type: "push",
              sessionId: activePlaySessionId,
              pcm,
              sampleRate: sr
            },
            [pcm.buffer]
          );
        } else if (audioCtx) {
          schedulePcmFallback(audioCtx, copyForCache, sr, false, activePlaySessionId);
        }
      }
      return;
    }

    if (msg.type === "done") {
      const finishedSession = activePlaySessionId;
      const cacheKey = currentCacheKey;
      if (cacheKey && currentChunks.length > 0) {
        rememberPcm(cacheKey, currentChunks);
      }
      currentChunks = [];

      if (workletReady && workletNode) {
        workletNode.port.postMessage({
          type: "eos",
          sessionId: finishedSession
        });
      } else if (audioCtx) {
        schedulePcmFallback(audioCtx, new Float32Array(0), SAMPLE_RATE, true, finishedSession);
      } else {
        patchState({ phase: "ready", activeUtteranceId: null });
      }
      return;
    }

    if (msg.type === "error") {
      currentChunks = [];
      patchState({
        phase: "error",
        activeUtteranceId: null,
        statusText: "Ninada unavailable"
      });
    }
  });

  worker.addEventListener("error", () => {
    patchState({
      phase: "error",
      activeUtteranceId: null,
      statusText: "Ninada Worker error"
    });
  });

  synthWorker = worker;
  return worker;
}

let currentCacheKey: string | null = null;

export function stopSanskritSpeech(): void {
  activeReqId += 1;
  activePlaySessionId += 1;
  currentChunks = [];
  currentCacheKey = null;

  if (synthWorker) {
    synthWorker.postMessage({ type: "cancel" });
  }
  if (workletReady && workletNode) {
    workletNode.port.postMessage({ type: "stop" });
  }
  stopFallbackNodes();
  if (typeof window !== "undefined" && "speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }

  if (state.activeUtteranceId !== null || state.phase === "playing" || state.phase === "synthesizing") {
    patchState({
      phase: state.phase === "unloaded" ? "unloaded" : "ready",
      activeUtteranceId: null
    });
  }
}

export function setNinadaVoiceGender(nextVoice: NinadaGender): void {
  if (state.voice === nextVoice) return;
  stopSanskritSpeech();
  if (typeof window !== "undefined") {
    window.localStorage.setItem(VOICE_STORAGE_KEY, nextVoice);
  }
  patchState({ voice: nextVoice });
  if (synthWorker) {
    synthWorker.postMessage({ type: "load_lang", lang: "sa", voice: nextVoice });
  }
}

export function preloadNinadaSanskrit(): void {
  if (typeof window === "undefined") return;
  const worker = ensureSynthWorker();
  if (state.phase === "unloaded") {
    patchState({ phase: "loading", progressPct: 5, statusText: "Warming Ninada SA…" });
    worker.postMessage({ type: "init", lang: "sa", voice: state.voice });
  }
}

/**
 * Speaks a Sanskrit headword or lakṣaṇa using the 24,000 Hz Ninada Sanskrit neural specialist.
 * Clicking the currently active utterance toggles stop.
 */
export async function speakSanskritWithNinada(rawSanskrit: string, utteranceId: string): Promise<void> {
  if (typeof window === "undefined") return;

  // Toggle stop if user clicked the currently speaking button
  if (state.activeUtteranceId === utteranceId && (state.phase === "playing" || state.phase === "synthesizing" || state.phase === "loading")) {
    stopSanskritSpeech();
    return;
  }

  stopSanskritSpeech();

  const cleaned = cleanSanskritForRecitation(rawSanskrit);
  if (!cleaned) return;

  const voice = state.voice;
  const cacheKey = `sa:${voice}:${cleaned}`;
  const sessionId = ++activePlaySessionId;

  patchState({
    activeUtteranceId: utteranceId,
    phase: state.phase === "unloaded" ? "loading" : "synthesizing"
  });

  const ctx = await ensureAudioPipeline();
  if (activePlaySessionId !== sessionId) return; // Cancelled while unlocking AudioContext

  // Reset AudioWorklet ring buffer for this utterance
  if (workletReady && workletNode) {
    workletNode.port.postMessage({
      type: "reset",
      sessionId,
      sampleRate: SAMPLE_RATE,
      watermarkSamples: Math.round(0.055 * SAMPLE_RATE),
      recoveryWatermarkSec: 0.28
    });
  } else {
    fallbackNextTime = ctx.currentTime + 0.015;
  }

  // Instant 0ms replay from LRU PCM cache
  const cachedPcm = pcmCache.get(cacheKey);
  if (cachedPcm) {
    patchState({ phase: "playing", ttfaMs: 0 });
    if (workletReady && workletNode) {
      const transferCopy = cachedPcm.slice();
      workletNode.port.postMessage(
        {
          type: "push",
          sessionId,
          pcm: transferCopy,
          sampleRate: SAMPLE_RATE
        },
        [transferCopy.buffer]
      );
      workletNode.port.postMessage({ type: "eos", sessionId });
    } else {
      schedulePcmFallback(ctx, cachedPcm, SAMPLE_RATE, true, sessionId);
    }
    return;
  }

  // Stream live from Ninada SA specialist Worker
  const worker = ensureSynthWorker();
  const reqId = ++reqSeq;
  activeReqId = reqId;
  currentCacheKey = cacheKey;
  currentChunks = [];

  worker.postMessage({
    type: "stream",
    reqId,
    lang: "sa",
    voice,
    text: cleaned,
    rate: cleaned.length <= 12 ? 0.92 : 0.96,
    tier: "auto"
  });
}

// Auto-warm silently if Ninada SA ONNX weights are already present in CacheStorage
if (typeof window !== "undefined" && "caches" in window) {
  const idle = (window as unknown as { requestIdleCallback?: (cb: () => void) => void }).requestIdleCallback || ((cb: () => void) => setTimeout(cb, 1200));
  idle(async () => {
    try {
      const keys = await window.caches.keys();
      if (keys.some((k) => k.startsWith("ninada-onnx-"))) {
        preloadNinadaSanskrit();
      }
    } catch {
      // Ignore storage inspection restrictions
    }
  });
}
