import { SANSKRIT_ALPHABET_ORDER } from "../lib/sanskritSort";
import type { PillarFilter, ViewMode } from "../types";

interface SearchBarProps {
  viewMode: ViewMode;
  pillar: PillarFilter;
  domain: string;
  filteredCount: number;
  totalCount: number;
  letterFilter: string;
  onChangeLetterFilter: (letter: string) => void;
  availableLetters: Set<string>;
  isSaved: boolean;
  hasActiveEntry: boolean;
  onToggleSave: () => void;
  onPickRandom: () => void;
  onOpenContemplate: () => void;
  onResetFilters: () => void;
}

const THUMB_INDEX_LETTERS = SANSKRIT_ALPHABET_ORDER.filter(
  (ch) => !["ॠ", "ऌ", "ॡ", "अः", "ङ", "ञ", "ण", "ळ"].includes(ch)
);

const SCOPE_TITLES: Record<PillarFilter, string> = {
  all: "Classical Sanskrit Lexicon",
  kosha: "Amarakośa Nominal Lexicon",
  lakshana: "Śāstric Lakṣaṇa Definitions",
  ekakshara: "Ekākṣara Monosyllabic Kośa",
  nirukti: "Vaidika & Bhagavan-Nāma Nirukti",
  saved: "Saved Headwords"
};

export function SearchBar({
  viewMode,
  pillar,
  domain,
  filteredCount,
  totalCount,
  letterFilter,
  onChangeLetterFilter,
  availableLetters,
  isSaved,
  hasActiveEntry,
  onToggleSave,
  onPickRandom,
  onOpenContemplate,
  onResetFilters
}: SearchBarProps) {
  const pageTitle =
    viewMode === "matrika"
      ? "Ekākṣara Varṇamālā Matrix"
      : viewMode === "directory"
      ? `${SCOPE_TITLES[pillar]} · Directory`
      : SCOPE_TITLES[pillar];

  const isFiltered = pillar !== "all" || domain !== "all" || letterFilter !== "all";

  return (
    <section className="canvas-header-zone" aria-label="Workspace scope and alphabet index">
      <div className="canvas-title-row">
        <div className="canvas-title-block">
          <h1 className="canvas-h1">{pageTitle}</h1>
          <p className="canvas-subline num">
            {filteredCount === totalCount
              ? `${totalCount} headwords across 17 Amarakośa and Sarvamūla vargas · canonical Akārādi order`
              : `Showing ${filteredCount} of ${totalCount} headwords${
                  domain !== "all" ? ` in ${domain}` : ""
                }${letterFilter !== "all" ? ` · initial varṇa ${letterFilter}` : ""}`}
          </p>
        </div>

        <div className="canvas-actions">
          {isFiltered && (
            <button type="button" className="btn-secondary" onClick={onResetFilters}>
              Reset filters
            </button>
          )}
          <button
            type="button"
            className="btn-secondary"
            onClick={onPickRandom}
            title="Select a random Sanskrit headword"
          >
            Surprise word
          </button>
          {hasActiveEntry && (
            <>
              <button
                type="button"
                className={`btn-secondary ${isSaved ? "is-selected" : ""}`}
                onClick={onToggleSave}
                aria-pressed={isSaved}
              >
                {isSaved ? "Saved" : "Save"}
              </button>
              <button type="button" className="btn-primary" onClick={onOpenContemplate}>
                Svādhyāya
              </button>
            </>
          )}
        </div>
      </div>

      {viewMode !== "matrika" && (
        <nav className="varna-strip" aria-label="Sanskrit Akārādi alphabetical filter">
          <button
            type="button"
            className={`varna-chip varna-all ${letterFilter === "all" ? "is-active" : ""}`}
            onClick={() => onChangeLetterFilter("all")}
          >
            All (अ–क्ष)
          </button>
          {THUMB_INDEX_LETTERS.map((ch) => {
            const hasEntries = availableLetters.has(ch);
            const isSelected = letterFilter === ch;
            return (
              <button
                key={ch}
                type="button"
                lang="sa"
                disabled={!hasEntries && !isSelected}
                className={`varna-chip ${isSelected ? "is-active" : ""} ${!hasEntries ? "is-empty" : ""}`}
                onClick={() => onChangeLetterFilter(isSelected ? "all" : ch)}
                aria-label={`Headwords starting with ${ch}`}
              >
                {ch}
              </button>
            );
          })}
        </nav>
      )}
    </section>
  );
}
