import { speakSanskritWithNinada, useNinadaVoice } from "../lib/ninadaTts";

interface NinadaSpeakButtonProps {
  text: string;
  utteranceId: string;
  label?: string;
  variant?: "orb" | "pill" | "inline";
  title?: string;
}

export function NinadaSpeakButton({
  text,
  utteranceId,
  label,
  variant = "inline",
  title
}: NinadaSpeakButtonProps) {
  const ninada = useNinadaVoice();
  const isCurrent = ninada.activeUtteranceId === utteranceId;
  const isBusy = isCurrent && (ninada.phase === "loading" || ninada.phase === "synthesizing");
  const isPlaying = isCurrent && ninada.phase === "playing";

  const buttonTitle =
    title ||
    (isPlaying
      ? "Stop Ninada Sanskrit recitation"
      : "Pronounce in Sanskrit via Ninada 24 kHz (Puruṣa · Male voice)");

  const iconSize = variant === "orb" ? 22 : 15;

  return (
    <button
      type="button"
      className={`ninada-speak-btn ninada-speak-${variant} ${isCurrent ? "is-active" : ""} ${
        isPlaying ? "is-playing" : ""
      }`}
      onClick={(e) => {
        e.stopPropagation();
        void speakSanskritWithNinada(text, utteranceId);
      }}
      title={buttonTitle}
      aria-label={buttonTitle}
      aria-pressed={isCurrent}
    >
      {isBusy ? (
        <svg
          className="ninada-spin"
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.1"
          aria-hidden="true"
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      ) : isPlaying ? (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <rect x="6.5" y="6.5" width="11" height="11" rx="2" />
        </svg>
      ) : variant === "orb" ? (
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M8 5.5v13l10.5-6.5L8 5.5z" />
        </svg>
      ) : (
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          {variant === "pill" && <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />}
        </svg>
      )}
      {label && (
        <span>
          {isBusy
            ? ninada.phase === "loading" && ninada.progressPct > 0
              ? `Loading ${ninada.progressPct}%`
              : "Synthesizing…"
            : isPlaying
            ? "Stop"
            : label}
        </span>
      )}
    </button>
  );
}
