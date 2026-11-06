import { useState } from "react";
import type { EkaksharaRegister, KoshaEntry, Pillar } from "../types";
import { AcousticProsodyStrip } from "./AcousticProsodyStrip";
import { NinadaSpeakButton } from "./NinadaSpeakButton";

interface EntryLeafProps {
  entry: KoshaEntry | undefined;
  allEntriesById: Map<string, KoshaEntry>;
  onSelectRelated: (id: string) => void;
}

const PILLAR_NAMES: Record<Pillar, string> = {
  kosha: "Amarakośa · Classical Lexicon",
  lakshana: "Lakṣaṇa · Śāstric Definition",
  ekakshara: "Ekākṣara · Monosyllabic Nānārtha",
  nirukti: "Nirukti · Etymological Derivation"
};

const REGISTER_TITLES: Record<EkaksharaRegister, { title: string; sanskrit: string }> = {
  "parama-mukhya": {
    title: "Sovereign sense (Parama-Mukhya)",
    sanskrit: "परममुख्यवृत्तिः"
  },
  "taratamya-daivata": {
    title: "Vedic & Devatā hierarchy (Tāratamya)",
    sanskrit: "तारतम्य-दैवतवृत्तिः"
  },
  "amarakosha-nanartha": {
    title: "Classical polysemy (Amarakośa Nānārtha)",
    sanskrit: "अमरकोश-नानार्थवर्गः"
  },
  "vyakarana-avyaya": {
    title: "Grammar & indeclinable usage (Vyākaraṇa)",
    sanskrit: "व्याकरण-धातुवृत्तिः"
  }
};

function expandReadablePos(entry: KoshaEntry): string {
  const p = (entry.pos || "").toLowerCase();
  if (entry.pillar === "ekakshara") {
    if (p.includes("strī")) return "Monosyllable · feminine (स्त्रीलिङ्ग)";
    if (p.includes("napuṃ")) return "Monosyllable · neuter (नपुंसकलिङ्ग)";
    if (p.includes("avyaya")) return "Monosyllable · indeclinable (अव्यय)";
    return "Monosyllable · ekākṣara (एकाक्षर-पदम्)";
  }
  if (p.includes("dhātu") || p.includes("verb")) return "Verbal root · √dhātu (धातुः)";
  if (p.includes("avyaya") || p.includes("ind.")) return "Indeclinable · avyaya (अव्ययम्)";
  if (p.includes("sarvanāma") || p.includes("pron.")) return "Pronoun · sarvanāma (सर्वनाम)";
  if (p.includes("saṅkhyā") || p.includes("num.")) return "Numeral · saṅkhyā (सङ्ख्या)";
  if (p.includes("viśeṣaṇa") || p.includes("adj.")) return "Adjective · viśeṣaṇa (विशेषणम्)";
  if (p.includes("puṃ-strī")) return "Noun · masc. / fem. (पुं-स्त्रीलिङ्ग)";
  if (p.includes("strī") || p.includes("(f.)")) return "Noun · feminine (स्त्रीलिङ्ग)";
  if (p.includes("napuṃ") || p.includes("(n.)")) return "Noun · neuter (नपुंसकलिङ्ग)";
  if (p.includes("puṃ") || p.includes("(m.)")) return "Noun · masculine (पुंलिङ्ग)";
  return entry.pos || "Substantive · nāman";
}

export function EntryLeaf({ entry, allEntriesById, onSelectRelated }: EntryLeafProps) {
  const [copied, setCopied] = useState(false);

  if (!entry) {
    return (
      <div className="reader-content-split">
        <article className="entry-main-sheet entry-empty-state">
          <h2 className="section-h2">No headword selected</h2>
          <p className="empty-deva" lang="sa">कृपया सूचीतः पदं चिनुत ।</p>
          <p className="empty-note">Choose a headword from the list or adjust your active filters.</p>
        </article>
      </div>
    );
  }

  const copyCitation = async () => {
    const text = `${entry.deva} (${entry.iast}) · ${entry.lakshanaDeva} [${entry.lakshanaIast}]\n"${entry.meaningShort}"\nSource: ${entry.source.grantha} (${entry.source.locator})`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // ignore clipboard errors
    }
  };

  const showStem =
    Boolean(entry.stem) &&
    entry.stem.toLowerCase() !== entry.iast.toLowerCase() &&
    entry.pillar !== "ekakshara";

  const relatedEntries = entry.related
    .map((id) => allEntriesById.get(id))
    .filter((item): item is KoshaEntry => Boolean(item));

  return (
    <div className="reader-content-split" aria-live="polite">
      {/* Primary Lexicon Sheet */}
      <article className="entry-main-sheet">
        <header className="entry-head">
          <div className="entry-head-top">
            <div className="entry-word-cluster">
              <h2 className="entry-word-deva" lang="sa">{entry.deva}</h2>
              <div className="entry-phonetics-row">
                <span className="entry-iast">/{entry.iast}/</span>
                <span className="entry-pos-line">{expandReadablePos(entry)}</span>
              </div>
            </div>

            <button
              type="button"
              className="btn-tertiary"
              onClick={copyCitation}
              title="Copy formatted Sanskrit citation"
            >
              {copied ? "Copied citation" : "Copy citation"}
            </button>
          </div>

          {/* Signature Product Element: Live Chandas Prosody & Ninada 24 kHz Strip */}
          <AcousticProsodyStrip deva={entry.deva} utteranceId={`leaf-hw-${entry.id}`} />
        </header>

        {/* English Equivalents & Structured Senses */}
        <section className="entry-block" aria-labelledby="senses-heading">
          <h3 id="senses-heading" className="section-h2">
            Meanings and senses
          </h3>

          {entry.englishGlosses.length > 0 && (
            <div className="gloss-tag-row" aria-label="English equivalents">
              {entry.englishGlosses.map((g, idx) => (
                <span key={`${g}-${idx}`} className="gloss-tag">
                  {g}
                </span>
              ))}
            </div>
          )}

          {entry.ekaksharaSenses && entry.ekaksharaSenses.length > 0 ? (
            <>
              <p className="entry-summary-lead">{entry.meaningShort}</p>
              <ol className="sense-list">
                {entry.ekaksharaSenses.map((sense, idx) => {
                  const meta = REGISTER_TITLES[sense.register];
                  return (
                    <li key={sense.register} className="sense-row">
                      <span className="sense-index num">{idx + 1}.</span>
                      <div className="sense-content">
                        <div className="sense-register-line">
                          <strong className="sense-register-name">{meta.title}</strong>
                          <span className="sense-register-deva" lang="sa">{meta.sanskrit}</span>
                          {sense.formDeva && (
                            <span className="sense-form-chip" lang="sa">
                              {sense.formDeva} · {sense.formIast}
                            </span>
                          )}
                        </div>
                        <p className="sense-primary">{sense.gloss}</p>
                        <p className="sense-note">{sense.samanvaya}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </>
          ) : (
            <ol className="sense-list">
              <li className="sense-row">
                <span className="sense-index num">1.</span>
                <div className="sense-content">
                  <p className="sense-primary">{entry.meaningShort}</p>
                </div>
              </li>
              {entry.meaningDeep && entry.meaningDeep !== entry.meaningShort && (
                <li className="sense-row">
                  <span className="sense-index num">2.</span>
                  <div className="sense-content">
                    <p className="sense-note">{entry.meaningDeep}</p>
                  </div>
                </li>
              )}
            </ol>
          )}
        </section>

        {/* Deep Exegesis for Ekākṣara */}
        {entry.ekaksharaSenses && entry.ekaksharaSenses.length > 0 && entry.meaningDeep && (
          <section className="entry-block" aria-labelledby="commentary-heading">
            <h3 id="commentary-heading" className="section-h2">
              Śāstric commentary (Tātparya)
            </h3>
            <p className="sense-note">{entry.meaningDeep}</p>
          </section>
        )}

        {/* Secondary Corroborating Authority */}
        {entry.secondaryLakshana && (
          <section className="entry-block" aria-labelledby="corroborating-heading">
            <h3 id="corroborating-heading" className="section-h2">
              Corroborating authority
            </h3>
            <blockquote className="pramana-quote is-secondary">
              <p className="pramana-deva" lang="sa">{entry.secondaryLakshana.deva}</p>
              <p className="pramana-iast">{entry.secondaryLakshana.iast}</p>
              <p className="pramana-trans">“{entry.secondaryLakshana.translation}”</p>
              <footer className="pramana-cite">Source: {entry.secondaryLakshana.source}</footer>
            </blockquote>
          </section>
        )}
      </article>

      {/* Right Scholarly Ledger Rail: Pramāṇa, Padaccheda & Cross-References */}
      <div className="entry-scholarly-rail" role="region" aria-label="Canonical source, morphology, and related terms">
        {entry.lakshanaDeva && (
          <section className="rail-card" aria-labelledby="pramana-heading">
            <div className="rail-card-head">
              <h3 id="pramana-heading" className="rail-card-title">
                Pramāṇa citation
              </h3>
              <NinadaSpeakButton
                text={entry.lakshanaDeva}
                utteranceId={`leaf-lak-${entry.id}`}
                variant="pill"
                label="Recite"
              />
            </div>

            <blockquote className="pramana-quote">
              <p className="pramana-deva" lang="sa">{entry.lakshanaDeva}</p>
              <p className="pramana-iast">{entry.lakshanaIast}</p>
              <footer className="pramana-cite">
                <span lang="sa">{entry.source.granthaDeva}</span> · {entry.source.grantha}
                {entry.source.locator ? ` (${entry.source.locator})` : ""} · {entry.source.author}
              </footer>
            </blockquote>
          </section>
        )}

        {entry.padaccheda.length > 0 && (
          <section className="rail-card" aria-labelledby="padaccheda-heading">
            <h3 id="padaccheda-heading" className="rail-card-title">
              Morphology (Padaccheda)
            </h3>
            <div className="pada-ledger">
              {entry.padaccheda.map((part, idx) => (
                <div key={`${part.iast}-${idx}`} className="pada-row">
                  <div className="pada-term">
                    <strong className="pada-deva" lang="sa">{part.deva}</strong>
                    <span className="pada-iast">{part.iast}</span>
                  </div>
                  <span className="pada-meaning">{part.gloss}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="rail-card" aria-labelledby="ledger-meta-heading">
          <h3 id="ledger-meta-heading" className="rail-card-title">
            Lexical record
          </h3>
          <dl className="kv-ledger">
            <div className="kv-row">
              <dt>Register</dt>
              <dd>{PILLAR_NAMES[entry.pillar]}</dd>
            </div>
            <div className="kv-row">
              <dt>Thematic varga</dt>
              <dd>{entry.domain}</dd>
            </div>
            {showStem && (
              <div className="kv-row">
                <dt>Prātipadika / root</dt>
                <dd>{entry.stem}</dd>
              </div>
            )}
            <div className="kv-row">
              <dt>Entry index</dt>
              <dd className="num">#{entry.index}</dd>
            </div>
          </dl>

          {relatedEntries.length > 0 && (
            <div className="related-block">
              <div className="related-label">Related headwords</div>
              <div className="related-chips">
                {relatedEntries.map((rel) => (
                  <button
                    key={rel.id}
                    type="button"
                    className="related-chip"
                    onClick={() => onSelectRelated(rel.id)}
                  >
                    <span lang="sa">{rel.deva}</span>
                    <span className="related-chip-iast">{rel.iast}</span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
