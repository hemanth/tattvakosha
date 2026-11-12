import { useEffect, useRef, useState } from "react";
import { preloadNinadaSanskrit, useNinadaVoice } from "../lib/ninadaTts";
import type { FontScale, KoshaMeta, PillarFilter, ThemeMode, ViewMode } from "../types";
import { VargaDropdown } from "./VargaDropdown";

interface HeaderProps {
  meta: KoshaMeta;
  query: string;
  onChangeQuery: (q: string) => void;
  pillar: PillarFilter;
  onChangePillar: (p: PillarFilter) => void;
  domain: string;
  onChangeDomain: (d: string) => void;
  savedCount: number;
  theme: ThemeMode;
  onToggleTheme: () => void;
  fontScale: FontScale;
  onCycleFontScale: () => void;
  viewMode: ViewMode;
  onChangeViewMode: (mode: ViewMode) => void;
  onGoLanding: () => void;
}

const SCALE_LABELS: Record<FontScale, string> = {
  normal: "100%",
  large: "110%",
  xlarge: "120%"
};

const PILLAR_ITEMS: Array<{ id: PillarFilter; label: string }> = [
  { id: "all", label: "All headwords" },
  { id: "kosha", label: "Amarakośa · Kośa" },
  { id: "lakshana", label: "Śāstra · Lakṣaṇa" },
  { id: "ekakshara", label: "Monosyllabic · Ekākṣara" },
  { id: "nirukti", label: "Etymology · Nirukti" },
  { id: "saved", label: "Saved entries" }
];

export function Header({
  meta,
  query,
  onChangeQuery,
  pillar,
  onChangePillar,
  domain,
  onChangeDomain,
  savedCount,
  theme,
  onToggleTheme,
  fontScale,
  onCycleFontScale,
  viewMode,
  onChangeViewMode,
  onGoLanding
}: HeaderProps) {
  const ninada = useNinadaVoice();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== inputRef.current) {
        const tag = (document.activeElement?.tagName || "").toLowerCase();
        if (tag !== "input" && tag !== "textarea" && tag !== "select") {
          e.preventDefault();
          inputRef.current?.focus();
        }
      } else if (e.key === "Escape") {
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        } else if (document.activeElement === inputRef.current) {
          if (query) onChangeQuery("");
          else inputRef.current?.blur();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [query, onChangeQuery, mobileMenuOpen]);

  const getPillarCount = (id: PillarFilter): number => {
    if (id === "all") return meta.totalEntries;
    if (id === "saved") return savedCount;
    return meta.pillarCounts[id] ?? 0;
  };

  const selectView = (mode: ViewMode) => {
    onChangeViewMode(mode);
    setMobileMenuOpen(false);
  };

  const selectPillar = (nextPillar: PillarFilter) => {
    onChangePillar(nextPillar);
    if (viewMode === "matrika" && nextPillar !== "ekakshara") {
      onChangeViewMode("reader");
    }
    setMobileMenuOpen(false);
  };

  const navContent = (
    <>
      {/* Product Mark & Scope */}
      <button
        type="button"
        className="rail-brand rail-brand-btn"
        onClick={() => {
          setMobileMenuOpen(false);
          onGoLanding();
        }}
        title="Return to Tattvakośa overview"
      >
        <svg
          className="rail-mark"
          width="26"
          height="26"
          viewBox="0 0 32 32"
          fill="none"
          aria-hidden="true"
        >
          <rect width="32" height="32" rx="6" fill="currentColor" />
          <path
            d="M8.5 10h15M16 10v12.5M10.5 16c2.2 0 5.5 1.8 5.5 5.5"
            stroke="var(--surface)"
            strokeWidth="2.1"
            strokeLinecap="round"
          />
          <circle cx="22" cy="21" r="2.3" fill="var(--data-hue)" />
        </svg>
        <div className="rail-brand-text">
          <div className="rail-brand-name">
            <span>Tattvakośa</span>
            <span className="rail-brand-deva" lang="sa">तत्त्वकोशः</span>
          </div>
          <span className="rail-brand-sub num">{meta.totalEntries} classical entries</span>
        </div>
      </button>

      {/* Search Field with Label */}
      <div className="rail-search-block">
        <label htmlFor="kosha-search-input" className="rail-field-label">
          Search lexicon
        </label>
        <div className="rail-search-wrap">
          <svg
            className="rail-search-icon"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="7.5" />
            <path d="m20 20-3.8-3.8" />
          </svg>
          <input
            id="kosha-search-input"
            ref={inputRef}
            type="search"
            className="rail-search-input"
            value={query}
            onChange={(e) => onChangeQuery(e.target.value)}
            placeholder="Sanskrit, IAST, gloss…"
            autoComplete="off"
            spellCheck={false}
          />
          {query ? (
            <button
              type="button"
              className="rail-search-clear"
              onClick={() => {
                onChangeQuery("");
                inputRef.current?.focus();
              }}
              aria-label="Clear search query"
            >
              ×
            </button>
          ) : (
            <span className="rail-shortcut-hint" aria-hidden="true">/</span>
          )}
        </div>
      </div>

      {/* Views Navigation */}
      <nav className="rail-group" aria-label="Workspace views">
        <div className="rail-group-title">Views</div>
        <button
          type="button"
          className={`rail-nav-row ${viewMode === "reader" ? "is-active" : ""}`}
          onClick={() => selectView("reader")}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v18H6.5A2.5 2.5 0 0 1 4 18.5v-13Z" />
            <path d="M8 7h8M8 11h8M8 15h5" />
          </svg>
          <span className="rail-nav-label">Lexicon reader</span>
        </button>

        <button
          type="button"
          className={`rail-nav-row ${viewMode === "directory" ? "is-active" : ""}`}
          onClick={() => selectView("directory")}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <rect x="3" y="4" width="8" height="7" rx="1.5" />
            <rect x="13" y="4" width="8" height="7" rx="1.5" />
            <rect x="3" y="13" width="8" height="7" rx="1.5" />
            <rect x="13" y="13" width="8" height="7" rx="1.5" />
          </svg>
          <span className="rail-nav-label">Card directory</span>
        </button>

        <button
          type="button"
          className={`rail-nav-row ${viewMode === "matrika" ? "is-active" : ""}`}
          onClick={() => selectView("matrika")}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M4 6h16M4 12h16M4 18h16M9 4v16M15 4v16" />
          </svg>
          <span className="rail-nav-label">Varṇamālā matrix</span>
          <span className="rail-nav-count num">{meta.pillarCounts.ekakshara}</span>
        </button>

        <button
          type="button"
          className="rail-nav-row"
          onClick={() => {
            setMobileMenuOpen(false);
            onGoLanding();
          }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <path d="M4 11.5 12 4l8 7.5" />
            <path d="M6.5 10v9.5h11V10" />
          </svg>
          <span className="rail-nav-label">Edition overview</span>
        </button>
      </nav>

      {/* Lexical Registers */}
      <nav className="rail-group" aria-label="Lexical registers">
        <div className="rail-group-title">Registers</div>
        {PILLAR_ITEMS.map((item) => {
          const active = pillar === item.id;
          const count = getPillarCount(item.id);
          return (
            <button
              key={item.id}
              type="button"
              className={`rail-nav-row ${active ? "is-active" : ""}`}
              onClick={() => selectPillar(item.id)}
            >
              <span className="rail-nav-label">{item.label}</span>
              <span className="rail-nav-count num">{count}</span>
            </button>
          );
        })}
      </nav>

      {/* Thematic Varga Scope */}
      <div className="rail-group">
        <div className="rail-group-title">Thematic varga</div>
        <VargaDropdown
          value={domain}
          onChange={(nextDomain) => {
            onChangeDomain(nextDomain);
            setMobileMenuOpen(false);
          }}
          domainCounts={meta.domainCounts}
          totalEntries={meta.totalEntries}
        />
      </div>

      {/* Bottom Voice & Display Controls */}
      <div className="rail-footer">
        <div className="rail-voice-box" role="group" aria-label="Ninada 24 kHz male Sanskrit voice">
          <button
            type="button"
            className={`rail-voice-status phase-${ninada.phase}`}
            onClick={() => preloadNinadaSanskrit()}
            title="Ninada v5.1 24,000 Hz Classical Sanskrit Neural TTS (Puruṣa · Male voice)"
          >
            <span className="voice-dot" aria-hidden="true" />
            <span className="voice-status-text">{ninada.statusText}</span>
          </button>
          <span className="rail-voice-badge" lang="sa" title="Puruṣa · Male 24 kHz Sanskrit Voice">
            पुं
          </span>
        </div>

        <div className="rail-utility-row">
          <button
            type="button"
            className="rail-util-btn num"
            onClick={onCycleFontScale}
            aria-label={`Reading scale ${SCALE_LABELS[fontScale]}`}
            title="Cycle reading font scale"
          >
            Scale {SCALE_LABELS[fontScale]}
          </button>
          <button
            type="button"
            className="rail-util-btn"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Switch to light surface" : "Switch to dark surface"}
          >
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </button>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Open-Plane Left Sidebar */}
      <aside className="app-rail" aria-label="Lexicon navigation">
        {navContent}
      </aside>

      {/* Phone / Tablet Folded 48px Top Bar */}
      <header className="mobile-topbar">
        <div className="mobile-topbar-left">
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(true)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-sheet"
            aria-label="Open navigation menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
            </svg>
          </button>
          <button
            type="button"
            className="mobile-brand-btn"
            onClick={onGoLanding}
            aria-label="Return to Tattvakośa overview"
          >
            <span className="mobile-brand-name">Tattvakośa</span>
            <span className="mobile-brand-deva" lang="sa">तत्त्वकोशः</span>
          </button>
        </div>

        <div className="mobile-topbar-right">
          <button
            type="button"
            className="mobile-voice-mini"
            onClick={() => preloadNinadaSanskrit()}
            aria-label="Ninada 24 kHz male Sanskrit voice"
            title="Puruṣa · Male 24 kHz Sanskrit Voice"
          >
            <span className={`voice-dot phase-${ninada.phase}`} aria-hidden="true" />
            <span className="mobile-voice-tag" lang="sa">पुं</span>
          </button>

          <button
            type="button"
            className="mobile-icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      {/* Mobile Search Strip directly accessible without opening menu */}
      <div className="mobile-search-bar">
        <label htmlFor="mobile-kosha-search" className="sr-only">
          Search Sanskrit dictionary
        </label>
        <svg
          className="rail-search-icon"
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="7.5" />
          <path d="m20 20-3.8-3.8" />
        </svg>
        <input
          id="mobile-kosha-search"
          type="search"
          className="mobile-search-input"
          value={query}
          onChange={(e) => onChangeQuery(e.target.value)}
          placeholder="Search Sanskrit, IAST, or English…"
          autoComplete="off"
          spellCheck={false}
        />
        {query && (
          <button
            type="button"
            className="rail-search-clear"
            onClick={() => onChangeQuery("")}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      {/* Mobile Full-Screen Navigation Sheet */}
      {mobileMenuOpen && (
        <div
          className="mobile-sheet-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          role="dialog"
          aria-modal="true"
          id="mobile-nav-sheet"
          aria-label="Navigation and filters"
        >
          <div className="mobile-sheet-panel" onClick={(e) => e.stopPropagation()}>
            <div className="mobile-sheet-head">
              <strong>Navigation &amp; Filters</strong>
              <button
                type="button"
                className="mobile-close-btn"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
              >
                Close
              </button>
            </div>
            <div className="mobile-sheet-body">{navContent}</div>
          </div>
        </div>
      )}
    </>
  );
}
