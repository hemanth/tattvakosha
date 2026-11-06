import { useCallback, useEffect, useMemo, useState } from "react";
import rawDataset from "./data/tattvakosha.json";
import { ContemplateView } from "./components/ContemplateView";
import { DictionaryFolio } from "./components/DictionaryFolio";
import { EntryLeaf } from "./components/EntryLeaf";
import { Header } from "./components/Header";
import { LandingPage, type OpenLexiconTarget } from "./components/LandingPage";
import { MatrikaGrid } from "./components/MatrikaGrid";
import { SearchBar } from "./components/SearchBar";
import { WordList } from "./components/WordList";
import { compareAkaraadi, getInitialVarna } from "./lib/sanskritSort";
import { buildSearchIndex, searchKosha } from "./lib/sanskritSearch";
import type { FontScale, KoshaDataset, KoshaEntry, PillarFilter, ThemeMode, ViewMode } from "./types";

const dataset = rawDataset as unknown as KoshaDataset;
const SAVED_STORAGE_KEY = "tattvakosha-saved-ids";

function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") return "light";
  const stored = window.localStorage.getItem("tattvakosha-theme");
  if (stored === "light" || stored === "dark") return stored;
  return "light";
}

function getInitialFontScale(): FontScale {
  if (typeof window === "undefined") return "normal";
  const stored = window.localStorage.getItem("tattvakosha-font-scale");
  if (stored === "normal" || stored === "large" || stored === "xlarge") return stored;
  return "normal";
}

function getInitialSavedIds(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(SAVED_STORAGE_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? new Set(parsed.filter((x) => typeof x === "string")) : new Set();
  } catch {
    return new Set();
  }
}

const LANDING_SECTION_HASHES = new Set(["", "ekakshara", "registers", "method", "corpus"]);

function shouldStartOnLanding(entries: KoshaEntry[]): boolean {
  if (typeof window === "undefined") return true;
  const params = new URLSearchParams(window.location.search);
  if (params.get("app") === "1") return false;
  const hash = window.location.hash.replace(/^#/, "").trim();
  if (LANDING_SECTION_HASHES.has(hash)) return true;
  if (hash === "lexicon" || entries.some((e) => e.id === hash)) return false;
  return true;
}

function getInitialEntryId(entries: KoshaEntry[]): string {
  if (typeof window !== "undefined") {
    const hash = window.location.hash.replace(/^#/, "").trim();
    if (hash && entries.some((e) => e.id === hash)) {
      return hash;
    }
  }
  const featured = entries.find((e) => e.id === "jiva") ?? entries[0];
  return featured?.id ?? "";
}

export function App() {
  const [isLanding, setIsLanding] = useState(() => shouldStartOnLanding(dataset.entries));
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);
  const [fontScale, setFontScale] = useState<FontScale>(getInitialFontScale);
  const [viewMode, setViewMode] = useState<ViewMode>("reader");
  const [query, setQuery] = useState("");
  const [pillar, setPillar] = useState<PillarFilter>("all");
  const [domain, setDomain] = useState("all");
  const [letterFilter, setLetterFilter] = useState("all");
  const [savedIds, setSavedIds] = useState<Set<string>>(getInitialSavedIds);
  const [selectedId, setSelectedId] = useState(() => getInitialEntryId(dataset.entries));
  const [contemplating, setContemplating] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("tattvakosha-theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-font-scale", fontScale);
    window.localStorage.setItem("tattvakosha-font-scale", fontScale);
  }, [fontScale]);

  const cycleFontScale = useCallback(() => {
    setFontScale((prev) => (prev === "normal" ? "large" : prev === "large" ? "xlarge" : "normal"));
  }, []);

  const toggleSaveEntry = useCallback((id: string) => {
    setSavedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(SAVED_STORAGE_KEY, JSON.stringify(Array.from(next)));
      }
      return next;
    });
  }, []);

  const allEntriesById = useMemo(() => {
    const map = new Map<string, KoshaEntry>();
    for (const e of dataset.entries) {
      map.set(e.id, e);
    }
    return map;
  }, []);

  const ekaksharaEntries = useMemo(
    () => dataset.entries.filter((e) => e.pillar === "ekakshara"),
    []
  );

  const searchIndex = useMemo(() => buildSearchIndex(dataset.entries), []);
  const isSearching = query.trim().length > 0;

  // Step 1: Filter by search query, pillar / saved, and domain
  const preLetterEntries = useMemo(() => {
    const searched = searchKosha(searchIndex, query);
    const matched = searched.filter((entry) => {
      if (pillar === "saved") {
        if (!savedIds.has(entry.id)) return false;
      } else if (pillar !== "all" && entry.pillar !== pillar) {
        return false;
      }
      if (domain !== "all" && entry.domain !== domain) return false;
      return true;
    });
    if (isSearching) {
      return matched;
    }
    return [...matched].sort(compareAkaraadi);
  }, [searchIndex, query, pillar, domain, isSearching, savedIds]);

  const availableLetters = useMemo(() => {
    const set = new Set<string>();
    for (const entry of preLetterEntries) {
      set.add(getInitialVarna(entry));
    }
    return set;
  }, [preLetterEntries]);

  // Step 2: Apply Akārādi alphabet filter
  const filteredEntries = useMemo(() => {
    if (letterFilter === "all") return preLetterEntries;
    return preLetterEntries.filter((e) => getInitialVarna(e) === letterFilter);
  }, [preLetterEntries, letterFilter]);

  useEffect(() => {
    if (filteredEntries.length > 0 && !filteredEntries.some((e) => e.id === selectedId)) {
      setSelectedId(filteredEntries[0].id);
    }
  }, [filteredEntries, selectedId]);

  const selectEntry = useCallback((id: string, switchToReader = false) => {
    setSelectedId(id);
    if (switchToReader) {
      setViewMode("reader");
    }
    if (typeof window !== "undefined") {
      window.history.replaceState(null, "", `#${id}`);
    }
  }, []);

  const handlePickRandom = useCallback(() => {
    const pool = filteredEntries.length > 1 ? filteredEntries : dataset.entries;
    const candidates = pool.filter((e) => e.id !== selectedId);
    const pick = candidates[Math.floor(Math.random() * candidates.length)] ?? pool[0];
    if (pick) {
      selectEntry(pick.id, true);
    }
  }, [filteredEntries, selectedId, selectEntry]);

  const handleSelectRelated = useCallback(
    (id: string) => {
      if (!filteredEntries.some((e) => e.id === id)) {
        setQuery("");
        setPillar("all");
        setDomain("all");
        setLetterFilter("all");
      }
      selectEntry(id, true);
    },
    [filteredEntries, selectEntry]
  );

  const handleSelectFromMatrika = useCallback(
    (id: string) => {
      setQuery("");
      setPillar("ekakshara");
      setDomain("all");
      setLetterFilter("all");
      selectEntry(id, true);
    },
    [selectEntry]
  );

  const handleResetFilters = useCallback(() => {
    setQuery("");
    setPillar("all");
    setDomain("all");
    setLetterFilter("all");
  }, []);

  const activeEntry = useMemo(
    () => allEntriesById.get(selectedId) ?? filteredEntries[0],
    [allEntriesById, selectedId, filteredEntries]
  );

  const stepContemplate = useCallback(
    (delta: number) => {
      if (filteredEntries.length === 0) return;
      const idx = filteredEntries.findIndex((e) => e.id === selectedId);
      const base = idx >= 0 ? idx : 0;
      const nextIdx = (base + delta + filteredEntries.length) % filteredEntries.length;
      selectEntry(filteredEntries[nextIdx].id);
    },
    [filteredEntries, selectedId, selectEntry]
  );

  useEffect(() => {
    const syncFromLocation = () => {
      const hash = window.location.hash.replace(/^#/, "").trim();
      const params = new URLSearchParams(window.location.search);
      if (params.get("app") === "1") {
        setIsLanding(false);
        return;
      }
      if (LANDING_SECTION_HASHES.has(hash)) {
        setIsLanding(true);
        return;
      }
      if (hash === "lexicon") {
        setIsLanding(false);
        return;
      }
      if (allEntriesById.has(hash)) {
        setSelectedId(hash);
        setIsLanding(false);
      }
    };
    window.addEventListener("hashchange", syncFromLocation);
    window.addEventListener("popstate", syncFromLocation);
    return () => {
      window.removeEventListener("hashchange", syncFromLocation);
      window.removeEventListener("popstate", syncFromLocation);
    };
  }, [allEntriesById]);

  const handleOpenLexicon = useCallback((target?: OpenLexiconTarget) => {
    setQuery("");
    setLetterFilter("all");
    setPillar(target?.pillar ?? "all");
    setDomain(target?.domain ?? "all");
    setViewMode(target?.viewMode ?? "reader");
    if (target?.entryId) {
      setSelectedId(target.entryId);
    }
    setContemplating(Boolean(target?.contemplate));
    setIsLanding(false);
    if (typeof window !== "undefined") {
      const nextHash = target?.entryId ? `#${target.entryId}` : "#lexicon";
      window.history.pushState(null, "", nextHash);
      window.scrollTo(0, 0);
    }
  }, []);

  const handleGoLanding = useCallback(() => {
    setContemplating(false);
    setIsLanding(true);
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", window.location.pathname + window.location.search);
      window.scrollTo(0, 0);
    }
  }, []);

  if (isLanding) {
    return <LandingPage dataset={dataset} onOpenLexicon={handleOpenLexicon} />;
  }

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header
        meta={dataset.meta}
        query={query}
        onChangeQuery={(q) => {
          setQuery(q);
          if (viewMode === "matrika" && q.trim()) {
            setViewMode("reader");
          }
        }}
        pillar={pillar}
        onChangePillar={setPillar}
        domain={domain}
        onChangeDomain={setDomain}
        savedCount={savedIds.size}
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
        fontScale={fontScale}
        onCycleFontScale={cycleFontScale}
        viewMode={viewMode}
        onChangeViewMode={setViewMode}
        onGoLanding={handleGoLanding}
      />

      <div className="app-canvas">
        <SearchBar
          viewMode={viewMode}
          pillar={pillar}
          domain={domain}
          filteredCount={filteredEntries.length}
          totalCount={dataset.meta.totalEntries}
          letterFilter={letterFilter}
          onChangeLetterFilter={setLetterFilter}
          availableLetters={availableLetters}
          isSaved={activeEntry ? savedIds.has(activeEntry.id) : false}
          hasActiveEntry={Boolean(activeEntry)}
          onToggleSave={() => {
            if (activeEntry) toggleSaveEntry(activeEntry.id);
          }}
          onPickRandom={handlePickRandom}
          onOpenContemplate={() => setContemplating(true)}
          onResetFilters={handleResetFilters}
        />

        <main id="main-content" className="canvas-main">
          {viewMode === "matrika" ? (
            <MatrikaGrid
              ekaksharaEntries={ekaksharaEntries}
              selectedId={selectedId}
              onSelectEntry={handleSelectFromMatrika}
            />
          ) : viewMode === "directory" ? (
            <DictionaryFolio
              entries={filteredEntries}
              isSearching={isSearching}
              letterFilter={letterFilter}
              selectedId={selectedId}
              onOpenInReader={(id) => selectEntry(id, true)}
              onResetFilters={handleResetFilters}
            />
          ) : (
            <div className="reader-grid">
              <WordList
                entries={filteredEntries}
                selectedId={activeEntry?.id ?? ""}
                isSearching={isSearching}
                onSelect={(id) => selectEntry(id, false)}
              />
              <EntryLeaf
                entry={activeEntry}
                allEntriesById={allEntriesById}
                onSelectRelated={handleSelectRelated}
              />
            </div>
          )}
        </main>

        <footer className="canvas-footer">
          <span lang="sa">
            अमरकोशः · पाणिनीय-धातुपाठः · सर्वमूलग्रन्थाः (श्रीमध्वाचार्यः) · निरुक्तम्
          </span>
          <span className="footer-sep" aria-hidden="true">·</span>
          <span>
            Audio:{" "}
            <a href="https://huggingface.co/gnumanth/ninada" target="_blank" rel="noreferrer">
              Ninada 24 kHz Sanskrit Neural TTS
            </a>
          </span>
          <span className="footer-sep" aria-hidden="true">·</span>
          <span>
            Corpus:{" "}
            <a href="https://huggingface.co/datasets/gnumanth/tattvakosha" target="_blank" rel="noreferrer">
              gnumanth/tattvakosha
            </a>
          </span>
        </footer>
      </div>

      {contemplating && (
        <ContemplateView
          entry={activeEntry}
          onClose={() => setContemplating(false)}
          onPrev={() => stepContemplate(-1)}
          onNext={() => stepContemplate(1)}
        />
      )}
    </div>
  );
}
