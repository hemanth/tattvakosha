import { useEffect } from "react";
import { stopSanskritSpeech } from "../lib/ninadaTts";
import type { KoshaEntry } from "../types";
import { NinadaSpeakButton } from "./NinadaSpeakButton";

interface ContemplateViewProps {
  entry: KoshaEntry | undefined;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function ContemplateView({ entry, onClose, onPrev, onNext }: ContemplateViewProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      stopSanskritSpeech();
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  if (!entry) return null;

  return (
    <div className="contemplate-backdrop" role="dialog" aria-modal="true" aria-label="Svādhyāya Contemplation">
      <div className="contemplate-topbar">
        <span className="contemplate-tag">Svādhyāya · Contemplation</span>
        <div className="contemplate-controls">
          <NinadaSpeakButton
            text={`${entry.deva} । ${entry.lakshanaDeva}`}
            utteranceId={`contemplate-${entry.id}`}
            variant="pill"
            label="Recite via Ninada"
          />
          <button type="button" className="ninada-speak-btn ninada-speak-pill" onClick={onPrev} aria-label="Previous entry">
            ← Prev
          </button>
          <button type="button" className="ninada-speak-btn ninada-speak-pill" onClick={onNext} aria-label="Next entry">
            Next →
          </button>
          <button type="button" className="ninada-speak-btn ninada-speak-pill" onClick={onClose}>
            Exit (Esc)
          </button>
        </div>
      </div>

      <div className="contemplate-stage">
        <p className="contemplate-domain">{entry.domain}</p>
        <h2 className="contemplate-word" lang="sa">{entry.deva}</h2>
        <p className="contemplate-iast">{entry.iast}</p>

        <div className="contemplate-divider" aria-hidden="true" />

        <p className="contemplate-sutra" lang="sa">{entry.lakshanaDeva}</p>
        <p className="contemplate-sutra-iast">{entry.lakshanaIast}</p>

        <p className="contemplate-meaning">{entry.meaningShort}</p>

        <p className="contemplate-cite">
          <span lang="sa">{entry.source.granthaDeva}</span> · {entry.source.grantha} ({entry.source.locator})
        </p>
      </div>
    </div>
  );
}
