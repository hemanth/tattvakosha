import { useEffect, useMemo, useRef, useState } from "react";
import { formatDictPos, getInitialVarna } from "../lib/sanskritSort";
import type { KoshaEntry } from "../types";

interface WordListProps {
  entries: KoshaEntry[];
  selectedId: string;
  isSearching: boolean;
  onSelect: (id: string) => void;
}

const INITIAL_BATCH = 36;
const BATCH_STEP = 60;

export function WordList({ entries, selectedId, isSearching, onSelect }: WordListProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visibleLimit, setVisibleLimit] = useState(INITIAL_BATCH);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  const selectedIndex = useMemo(
    () => entries.findIndex((e) => e.id === selectedId),
    [entries, selectedId]
  );

  // Reset batch when entry set changes, while keeping selectedId within the rendered window
  useEffect(() => {
    const needed = selectedIndex >= 0 ? Math.max(INITIAL_BATCH, selectedIndex + 12) : INITIAL_BATCH;
    setVisibleLimit(Math.min(entries.length, needed));
  }, [entries, selectedIndex]);

  // Smoothly load next batch when scrolling near the end of the rendered window
  useEffect(() => {
    const sentinel = sentinelRef.current;
    const root = scrollRef.current;
    if (!sentinel || visibleLimit >= entries.length) return;

    const observer = new IntersectionObserver(
      (records) => {
        if (records.some((r) => r.isIntersecting)) {
          setVisibleLimit((prev) => Math.min(entries.length, prev + BATCH_STEP));
        }
      },
      { root, rootMargin: "220px" }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [visibleLimit, entries.length, mobileOpen]);

  if (entries.length === 0) {
    return (
      <section className="headword-pane" aria-label="Headword list">
        <div className="pane-header">
          <h2 className="pane-title">Headwords</h2>
          <span className="pane-count num">0</span>
        </div>
        <div className="pane-empty">
          <p className="empty-deva" lang="sa">न किञ्चित् पदं लब्धम्</p>
          <p className="empty-note">No headwords match the active query or varga filter.</p>
        </div>
      </section>
    );
  }

  const activeEntry = (selectedIndex >= 0 ? entries[selectedIndex] : entries[0]) ?? entries[0];
  const visibleEntries = entries.slice(0, visibleLimit);
  let prevVarna = "";

  return (
    <section className={`headword-pane ${mobileOpen ? "is-mobile-open" : ""}`} aria-label="Headword list">
      <div className="pane-header">
        <h2 className="pane-title">Headwords</h2>
        <span className="pane-count num">{entries.length}</span>
      </div>

      {/* Compact Mobile Headword Selector Bar */}
      <button
        type="button"
        className="mobile-headword-toggle"
        onClick={() => setMobileOpen((o) => !o)}
        aria-expanded={mobileOpen}
      >
        <span className="mobile-hw-current">
          <span className="mobile-hw-count num">Browse {entries.length} ·</span>
          <strong className="mobile-hw-deva" lang="sa">{activeEntry?.deva}</strong>
          <span className="mobile-hw-iast">{activeEntry?.iast}</span>
        </span>
        <span className="mobile-hw-action">{mobileOpen ? "Close list" : "Switch word"}</span>
      </button>

      <div ref={scrollRef} className="headword-scroll" role="listbox" aria-label="Sanskrit headwords">
        {visibleEntries.map((entry) => {
          const active = entry.id === selectedId;
          const varna = !isSearching ? getInitialVarna(entry) : "";
          const showDivider = !isSearching && varna !== prevVarna;
          if (showDivider) prevVarna = varna;

          const glossPreview =
            entry.englishGlosses.length > 0
              ? entry.englishGlosses.slice(0, 3).join(", ")
              : entry.meaningShort;

          return (
            <div key={entry.id}>
              {showDivider && (
                <div className="varna-sticky-head" lang="sa" aria-hidden="true">
                  {varna}
                </div>
              )}
              <button
                type="button"
                role="option"
                aria-selected={active}
                className={`hw-row ${active ? "is-active" : ""}`}
                onClick={() => {
                  onSelect(entry.id);
                  setMobileOpen(false);
                }}
              >
                <div className="hw-row-line1">
                  <span className="hw-row-deva" lang="sa">{entry.deva}</span>
                  <span className="hw-row-pos">{formatDictPos(entry)}</span>
                </div>
                <div className="hw-row-line2">
                  <span className="hw-row-iast">{entry.iast}</span>
                  {glossPreview && (
                    <>
                      <span className="hw-row-sep" aria-hidden="true">·</span>
                      <span className="hw-row-gloss">{glossPreview}</span>
                    </>
                  )}
                </div>
              </button>
            </div>
          );
        })}

        {visibleLimit < entries.length && (
          <div ref={sentinelRef} className="hw-more-wrap">
            <button
              type="button"
              className="hw-more-btn num"
              onClick={() => setVisibleLimit((prev) => Math.min(entries.length, prev + BATCH_STEP))}
            >
              Show more ({visibleLimit} of {entries.length})
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
