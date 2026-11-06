import { useMemo } from "react";
import { speakSanskritWithNinada, useNinadaVoice } from "../lib/ninadaTts";
import { scanSanskritProsody } from "../lib/sanskritProsody";

interface AcousticProsodyStripProps {
  deva: string;
  utteranceId: string;
}

/**
 * Signature Tattvakośa Element (Achromatic Ledger · Carbon Ink + Sindūra Prosody):
 * Combines 24,000 Hz Ninada Sanskrit Neural TTS playback with an authentic
 * Pāṇinian Chandas Prosody Meter (akṣara breakdown + laghu 1-mātrā / guru 2-mātrā bars).
 */
export function AcousticProsodyStrip({ deva, utteranceId }: AcousticProsodyStripProps) {
  const ninada = useNinadaVoice();
  const scan = useMemo(() => scanSanskritProsody(deva), [deva]);

  const isThisActive = ninada.activeUtteranceId === utteranceId;
  const isPlaying = isThisActive && ninada.phase === "playing";
  const isBusy =
    isThisActive && (ninada.phase === "loading" || ninada.phase === "synthesizing");

  const handleTogglePlay = () => {
    void speakSanskritWithNinada(deva, utteranceId);
  };

  return (
    <div
      className={`prosody-strip ${isPlaying ? "is-playing" : ""} ${isBusy ? "is-busy" : ""}`}
      role="region"
      aria-label="Sanskrit 24 kHz pronunciation and prosodic meter"
    >
      <button
        type="button"
        className={`prosody-play-btn ${isPlaying || isBusy ? "is-active" : ""}`}
        onClick={handleTogglePlay}
        aria-label={isPlaying ? `Stop pronouncing ${deva}` : `Pronounce ${deva} in 24 kHz Sanskrit voice`}
        title="Ninada 24,000 Hz Classical Sanskrit Neural TTS"
      >
        {isBusy ? (
          <svg className="ninada-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
            <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
          </svg>
        ) : isPlaying ? (
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M8 5.2v13.6L19.2 12 8 5.2z" />
          </svg>
        )}
        <span>{isBusy ? "Synthesizing" : isPlaying ? "Playing 24 kHz" : "Pronounce"}</span>
      </button>

      {scan.syllables.length > 0 && (
        <div className="prosody-meter" aria-label={`Prosodic scan: ${scan.syllables.length} syllables, ${scan.totalMatras} matras`}>
          <div className="prosody-bars" aria-hidden="true">
            {scan.syllables.map((syl, idx) => (
              <div
                key={`${syl.text}-${idx}`}
                className={`prosody-unit weight-${syl.weight}`}
                style={{ animationDelay: `${idx * 95}ms` }}
              >
                <span className="prosody-bar-track">
                  <span className="prosody-bar-fill" />
                </span>
                <span className="prosody-syl" lang="sa">{syl.text}</span>
              </div>
            ))}
          </div>

          <div className="prosody-summary num">
            <span className="prosody-count">
              {scan.syllables.length} {scan.syllables.length === 1 ? "akṣara" : "akṣaras"}
            </span>
            <span className="prosody-sep" aria-hidden="true">·</span>
            <span className="prosody-matra">{scan.totalMatras} mātrā</span>
          </div>
        </div>
      )}
    </div>
  );
}
