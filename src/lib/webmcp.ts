import rawDataset from "../data/tattvakosha.json";
import { speakSanskritWithNinada, setNinadaVoiceGender, type NinadaGender } from "./ninadaTts";
import { scanSanskritProsody } from "./sanskritProsody";
import { buildSearchIndex, searchKosha } from "./sanskritSearch";
import type { KoshaDataset } from "../types";

interface WebMcpToolSpec {
  name: string;
  description: string;
  parameters?: Record<string, unknown>;
  inputSchema?: Record<string, unknown>;
  handler?: (args: Record<string, unknown>) => Promise<unknown>;
  execute?: (args: Record<string, unknown>) => Promise<unknown>;
}

interface ModelContextNavigator {
  modelContext?: {
    registerTool?: (tool: WebMcpToolSpec) => void;
  };
}

interface WindowWithTattvakoshaWebMcp extends Window {
  __tattvakoshaWebMcpBootstrapped?: boolean;
  __tattvakoshaWebMcp?: {
    search: (args: Record<string, unknown>) => Promise<unknown>;
    entry: (args: Record<string, unknown>) => Promise<unknown>;
    open: (args: Record<string, unknown>) => Promise<unknown>;
    pronounce: (args: Record<string, unknown>) => Promise<unknown>;
  };
}

let registered = false;

export function registerTattvakoshaWebMcp(): void {
  if (registered || typeof window === "undefined" || typeof navigator === "undefined") return;
  registered = true;

  const dataset = rawDataset as unknown as KoshaDataset;
  const byId = new Map(dataset.entries.map((e) => [e.id, e]));
  let searchIndex: ReturnType<typeof buildSearchIndex> | null = null;
  const getIndex = () => {
    if (!searchIndex) searchIndex = buildSearchIndex(dataset.entries);
    return searchIndex;
  };

  const searchFn = async (args: Record<string, unknown>) => {
    const query = String(args.query || "").trim();
    const pillar = String(args.pillar || "all");
    const limit = Math.max(1, Math.min(30, Number(args.limit || 10)));
    const matches = searchKosha(getIndex(), query).filter(
      (e) => pillar === "all" || e.pillar === pillar
    );
    return {
      query,
      count: Math.min(limit, matches.length),
      totalMatched: matches.length,
      results: matches.slice(0, limit).map((e) => ({
        id: e.id,
        deva: e.deva,
        iast: e.iast,
        pillar: e.pillar,
        domain: e.domain,
        englishGlosses: e.englishGlosses,
        meaningShort: e.meaningShort,
        source: e.source
      }))
    };
  };

  const entryFn = async (args: Record<string, unknown>) => {
    const id = String(args.id || "").trim();
    const entry = byId.get(id);
    if (!entry) {
      return { error: `Entry '${id}' not found` };
    }
    return {
      ...entry,
      prosody: scanSanskritProsody(entry.deva)
    };
  };

  const openFn = async (args: Record<string, unknown>) => {
    const id = String(args.id || "lexicon").trim();
    window.location.hash = `#${id}`;
    return { opened: id, url: window.location.href };
  };

  const pronounceFn = async (args: Record<string, unknown>) => {
    const text = String(args.text || "").trim();
    const voice: NinadaGender = "male";
    setNinadaVoiceGender(voice);
    await speakSanskritWithNinada(text, `webmcp-${Date.now()}`);
    return { spoken: text, voice, sampleRateHz: 24000 };
  };

  const win = window as unknown as WindowWithTattvakoshaWebMcp;
  win.__tattvakoshaWebMcp = {
    search: searchFn,
    entry: entryFn,
    open: openFn,
    pronounce: pronounceFn
  };

  if (win.__tattvakoshaWebMcpBootstrapped) return;
  const mc = (navigator as unknown as ModelContextNavigator).modelContext;
  if (!mc || typeof mc.registerTool !== "function") return;
  win.__tattvakoshaWebMcpBootstrapped = true;

  const defineTool = (
    name: string,
    description: string,
    schema: Record<string, unknown>,
    fn: (args: Record<string, unknown>) => Promise<unknown>
  ) => {
    try {
      mc.registerTool!({
        name,
        description,
        parameters: schema,
        inputSchema: schema,
        handler: fn,
        execute: fn
      });
    } catch {
      // Ignore duplicate registration across HMR
    }
  };

  defineTool(
    "search_tattvakosha",
    "Search 688 classical Sanskrit headwords by Devanāgarī, IAST, ASCII phonetic, or English gloss.",
    {
      type: "object",
      properties: {
        query: { type: "string", description: "Devanāgarī, IAST, ASCII, or English search query" },
        pillar: {
          type: "string",
          enum: ["all", "kosha", "lakshana", "ekakshara", "nirukti"],
          default: "all"
        },
        limit: { type: "number", default: 10 }
      },
      required: ["query"]
    },
    searchFn
  );

  defineTool(
    "get_sanskrit_entry",
    "Retrieve the complete scholarly entry, sūtra, padaccheda split, Ekākṣara registers, prosody scan, and citation for a headword ID.",
    {
      type: "object",
      properties: {
        id: { type: "string", description: "Entry ID such as jiva, ekakshara-a, pramana, surya" }
      },
      required: ["id"]
    },
    entryFn
  );

  defineTool(
    "open_sanskrit_entry",
    "Open a specific Sanskrit headword inside the Tattvakośa lexicon workbench.",
    {
      type: "object",
      properties: {
        id: { type: "string", description: "Entry ID to open (or 'lexicon' for the default reader)" }
      },
      required: ["id"]
    },
    openFn
  );

  defineTool(
    "pronounce_sanskrit",
    "Recite a Sanskrit headword or sūtra at 24,000 Hz in the browser using Ninada v5.1 ONNX (male voice).",
    {
      type: "object",
      properties: {
        text: { type: "string", description: "Devanāgarī Sanskrit text to pronounce" },
        voice: { type: "string", enum: ["male"], default: "male" }
      },
      required: ["text"]
    },
    pronounceFn
  );
}
