import React from "react";
import type { KoshaEntry } from "../types";

interface MatrikaGridProps {
  ekaksharaEntries: KoshaEntry[];
  selectedId: string;
  onSelectEntry: (id: string) => void;
}

const GROUPS: Array<{ label: string; slice: [number, number] }> = [
  { label: "Svarāḥ · Sixteen vowels", slice: [0, 16] },
  { label: "Ka-varga & Ca-varga", slice: [16, 26] },
  { label: "Ṭa-varga & Ta-varga", slice: [26, 36] },
  { label: "Pa-varga, Antaḥstha & Ūṣman", slice: [36, 51] },
  { label: "Amarakośa Nānārtha monosyllables", slice: [51, 999] }
];

export const MatrikaGrid: React.FC<MatrikaGridProps> = ({
  ekaksharaEntries,
  selectedId,
  onSelectEntry
}) => {
  return (
    <section className="matrika-sheet" aria-label="Ekakshara Matrika and Amarakosha Nanartha Matrix">
      <div className="matrika-intro">
        <h2 className="section-h2">
          Tantrasārasaṅgraha Mātṛkā (1.10) &amp; Amarakośa Monosyllables
        </h2>
        <p className="matrika-sub">
          Select any Sanskrit syllable (अ–क्ष) or classical monosyllabic stem (गौः, भूः, मा, श्रीः) to inspect its fourfold Tattvavāda and Amarakośa senses.
        </p>
      </div>

      <div className="matrika-groups">
        {GROUPS.map((group) => {
          const items = ekaksharaEntries.slice(group.slice[0], group.slice[1]);
          if (items.length === 0) return null;
          return (
            <div key={group.label} className="matrika-band">
              <div className="matrika-band-head">
                <h3 className="matrika-band-title">{group.label}</h3>
                <span className="matrika-band-count num">{items.length}</span>
              </div>
              <div className="matrika-cells">
                {items.map((entry) => {
                  const charDeva = entry.deva.split(" ")[0];
                  const isActive = entry.id === selectedId;
                  return (
                    <button
                      key={entry.id}
                      type="button"
                      className={`matrika-cell ${isActive ? "is-active" : ""}`}
                      onClick={() => onSelectEntry(entry.id)}
                      title={`${entry.deva} (${entry.iast})`}
                    >
                      <span className="matrika-cell-char" lang="sa">{charDeva}</span>
                      <span className="matrika-cell-iast">{entry.stem}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
