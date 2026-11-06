import { useEffect, useMemo, useRef, useState } from "react";
import { formatDictPos, getInitialVarna, SANSKRIT_ALPHABET_ORDER } from "../lib/sanskritSort";
import type { KoshaEntry } from "../types";
import { NinadaSpeakButton } from "./NinadaSpeakButton";

interface DictionaryFolioProps {
  entries: KoshaEntry[];
  isSearching: boolean;
  letterFilter: string;
  selectedId: string;
  onOpenInReader: (id: string) => void;
  onResetFilters: () => void;
}

const VARNA_IAST: Record<string, string> = {
  "अ": "a", "आ": "ā", "इ": "i", "ई": "ī", "उ": "u", "ऊ": "ū",
  "ऋ": "ṛ", "ॠ": "ṝ", "ऌ": "ḷ", "ॡ": "ḹ", "ए": "e", "ऐ": "ai",
  "ओ": "o", "औ": "au", "अं": "aṃ", "अः": "aḥ",
  "क": "ka", "ख": "kha", "ग": "ga", "घ": "gha", "ङ": "ṅa",
  "च": "ca", "छ": "cha", "ज": "ja", "झ": "jha", "ञ": "ña",
  "ट": "ṭa", "ठ": "ṭha", "ड": "ḍa", "ढ": "ḍha", "ण": "ṇa",
  "त": "ta", "थ": "tha", "द": "da", "ध": "dha", "न": "na",
  "प": "pa", "फ": "pha", "ब": "ba", "भ": "bha", "म": "ma",
  "य": "ya", "र": "ra", "ल": "la", "व": "va",
  "श": "śa", "ष": "ṣa", "स": "sa", "ह": "ha", "ळ": "ḷa", "क्ष": "kṣa"
};

const PAGE_BATCH = 120;

export function DictionaryFolio({
  entries,
  isSearching,
  letterFilter,
  selectedId,
  onOpenInReader,
  onResetFilters
}: DictionaryFolioProps) {
  const [visibleLimit, setVisibleLimit] = useState<number>(PAGE_BATCH);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (letterFilter !== "all" || isSearching || entries.length <= PAGE_BATCH) {
      setVisibleLimit(entries.length);
    } else {
      setVisibleLimit(PAGE_BATCH);
    }
  }, [entries.length, letterFilter, isSearching]);

  useEffect(() => {
    if (visibleLimit >= entries.length) return;
    const node = sentinelRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (obs) => {
        if (obs[0]?.isIntersecting) {
          setVisibleLimit((prev) => Math.min(entries.length, prev + PAGE_BATCH));
        }
      },
      { rootMargin: "480px" }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [visibleLimit, entries.length]);

  const slicedEntries = useMemo(
    () => entries.slice(0, visibleLimit),
    [entries, visibleLimit]
  );

  const groupedSections = useMemo(() => {
    if (isSearching) {
      return [{ letter: "", entries: slicedEntries }];
    }
    const map = new Map<string, KoshaEntry[]>();
    for (const entry of slicedEntries) {
      const v = getInitialVarna(entry);
      const list = map.get(v);
      if (list) list.push(entry);
      else map.set(v, [entry]);
    }
    const orderRank = new Map<string, number>();
    SANSKRIT_ALPHABET_ORDER.forEach((ch, idx) => orderRank.set(ch, idx));
    return Array.from(map.entries())
      .sort((a, b) => (orderRank.get(a[0]) ?? 99) - (orderRank.get(b[0]) ?? 99))
      .map(([letter, list]) => ({ letter, entries: list }));
  }, [slicedEntries, isSearching]);

  if (entries.length === 0) {
    return (
      <section className="directory-sheet directory-empty" aria-label="Lexicon directory">
        <h2 className="section-h2">No matching headwords</h2>
        <p className="empty-deva" lang="sa">न किञ्चित् पदं लब्धम्</p>
        <p className="empty-note">No headwords match the active search or alphabet filter.</p>
        <button type="button" className="btn-secondary" onClick={onResetFilters}>
          Reset all filters
        </button>
      </section>
    );
  }

  return (
    <section className="directory-sheet" aria-label="Lexicon directory">
      {groupedSections.map((section) => (
        <div key={section.letter || "search-results"} className="dir-group">
          {section.letter && (
            <div className="dir-group-head">
              <div className="dir-group-letter">
                <h2 className="dir-letter-deva" lang="sa">{section.letter}</h2>
                <span className="dir-letter-iast">/{VARNA_IAST[section.letter] || ""}/</span>
              </div>
              <span className="dir-letter-count num">{section.entries.length} entries</span>
            </div>
          )}

          <div className="dir-grid">
            {section.entries.map((entry) => {
              const isSelected = entry.id === selectedId;
              const glossLead =
                entry.englishGlosses.length > 0
                  ? entry.englishGlosses.slice(0, 4).join(", ")
                  : "";

              return (
                <article
                  key={entry.id}
                  className={`dir-card ${isSelected ? "is-selected" : ""}`}
                  onClick={() => onOpenInReader(entry.id)}
                >
                  <div className="dir-card-top">
                    <div className="dir-card-titles">
                      <h3 className="dir-hw-deva" lang="sa">{entry.deva}</h3>
                      <span className="dir-hw-iast">{entry.iast}</span>
                      <span className="dir-hw-pos">{formatDictPos(entry)}</span>
                    </div>
                    <NinadaSpeakButton
                      text={entry.deva}
                      utteranceId={`dir-hw-${entry.id}`}
                      variant="inline"
                    />
                  </div>

                  {glossLead && <p className="dir-card-gloss">{glossLead}</p>}
                  <p className="dir-card-def">{entry.meaningShort}</p>

                  <div className="dir-card-foot">
                    <span className="dir-card-source">{entry.source.grantha}</span>
                    <span className="dir-card-open">Open entry</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      ))}

      {visibleLimit < entries.length && (
        <div ref={sentinelRef} className="dir-load-more">
          <button
            type="button"
            className="btn-secondary num"
            onClick={() => setVisibleLimit((prev) => Math.min(entries.length, prev + PAGE_BATCH))}
          >
            Showing {visibleLimit} of {entries.length} · Load more
          </button>
        </div>
      )}
    </section>
  );
}
