import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import {
  speakSanskritWithNinada,
  useNinadaVoice
} from "../lib/ninadaTts";
import { scanSanskritProsody } from "../lib/sanskritProsody";
import type { EkaksharaRegister, KoshaDataset, PillarFilter, ViewMode } from "../types";
import "../styles/landing.css";

export interface OpenLexiconTarget {
  entryId?: string;
  pillar?: PillarFilter;
  domain?: string;
  viewMode?: ViewMode;
  contemplate?: boolean;
}

interface LandingPageProps {
  dataset: KoshaDataset;
  onOpenLexicon: (target?: OpenLexiconTarget) => void;
}

const FEATURED_EKAKSHARA_IDS = [
  "ekakshara-a",
  "ekakshara-aa",
  "ekakshara-i",
  "ekakshara-u",
  "ekakshara-ri",
  "ekakshara-sat-pada",
  "ekakshara-cit-pada",
  "ekakshara-kham-pada"
];

const REGISTER_LABELS: Record<EkaksharaRegister, string> = {
  "parama-mukhya": "Sovereign sense · Parama-Mukhya",
  "taratamya-daivata": "Vedic & Devatā · Tāratamya",
  "amarakosha-nanartha": "Classical polysemy · Amarakośa",
  "vyakarana-avyaya": "Grammar & usage · Vyākaraṇa"
};

interface CorpusRow {
  kind: string;
  focus: string;
  count: number;
  target: OpenLexiconTarget;
  groupStart?: boolean;
}

const MOMENTS = [
  {
    title: "Cited from the grantha",
    desc: "Every entry quotes its classical Sanskrit authority with exact kāṇḍa, adhyāya, or sūtra locator before offering a translation.",
    img: "landing/manuscript-rag.jpg",
    w: 1709,
    h: 1171,
    alt: "Handwritten Sanskrit manuscript folio in black ink on handmade rag paper",
    space: 28
  },
  {
    title: "Split by padaccheda",
    desc: "Sandhi compounds are resolved into constituent stems and roots so readers see how each philosophical definition is constructed.",
    img: "landing/manuscript-folio12.jpg",
    w: 1500,
    h: 2342,
    alt: "Portrait Sanskrit śāstra leaf numbered twelve in dense black calligraphy",
    space: 76
  },
  {
    title: "Ordered in Akārādi",
    desc: "Headwords follow Pāṇinian phonemic order from अ to क्ष, keeping vowels, anusvāra, visarga, and stop series intact.",
    img: "landing/ui-matrika.jpg",
    w: 1800,
    h: 1238,
    alt: "Tattvakośa Ekākṣara Varṇamālā matrix arranging seventy Sanskrit monosyllables",
    space: 20
  },
  {
    title: "Grounded in Tattvavāda",
    desc: "Śāstra definitions draw directly on Śrī Madhvācārya’s Sarvamūla works alongside Jayatīrtha’s Nyāyasudhā and Pramāṇapaddhati.",
    img: "landing/keshava-balligrama.jpg",
    w: 1076,
    h: 2000,
    alt: "Twelfth-century stone sculpture of standing Viṣṇu as Keśava carved by Dasoja of Balligrama",
    space: 86
  },
  {
    title: "Scanned in mātrās",
    desc: "Each headword is segmented into Pāṇinian akṣaras and weighed as laghu or guru according to Pingala’s Chandaḥśāstra.",
    img: "landing/manuscript-cord.jpg",
    w: 1786,
    h: 902,
    alt: "Cord-bound Devanāgarī Sanskrit manuscript folio in black and vermilion ink",
    space: 38
  },
  {
    title: "Recited at 24 kHz",
    desc: "Ninada v5.1 recites classical Sanskrit directly in the browser via ONNX in a studio male voice.",
    img: "landing/ui-reader.jpg",
    w: 2200,
    h: 1375,
    alt: "Tattvakośa three-pane lexicon reader displaying jīvaḥ with live prosody bars and citation",
    space: 64
  }
];

function shortSyllableGlyph(deva: string): string {
  const idx = deva.indexOf(" (");
  return idx > 0 ? deva.slice(0, idx) : deva;
}

export function LandingPage({ dataset, onOpenLexicon }: LandingPageProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [activeSylId, setActiveSylId] = useState(FEATURED_EKAKSHARA_IDS[0]);
  const ninada = useNinadaVoice();

  // Choreographed section part entrances (SKILL.md Step 9)
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const nodes = Array.from(root.querySelectorAll<HTMLElement>("[data-lp-reveal]"));
    if (nodes.length === 0) return;

    const vh = window.innerHeight || 900;
    for (const el of nodes) {
      if (el.getBoundingClientRect().top < vh * 1.04) {
        el.classList.add("is-inview");
      }
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-inview");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -4% 0px" }
    );

    for (const el of nodes) {
      if (!el.classList.contains("is-inview")) {
        io.observe(el);
      }
    }
    return () => io.disconnect();
  }, []);

  const featuredSyllables = useMemo(() => {
    const byId = new Map(dataset.entries.map((e) => [e.id, e]));
    return FEATURED_EKAKSHARA_IDS.map((id) => byId.get(id)).filter(
      (e): e is NonNullable<typeof e> => Boolean(e)
    );
  }, [dataset.entries]);

  const activeSyl =
    featuredSyllables.find((e) => e.id === activeSylId) ?? featuredSyllables[0];

  const prosody = useMemo(
    () => scanSanskritProsody(activeSyl ? shortSyllableGlyph(activeSyl.deva) : "अ"),
    [activeSyl]
  );

  const utteranceId = activeSyl ? `lp-syl-${activeSyl.id}` : "lp-syl";
  const isSpeakingThis =
    ninada.activeUtteranceId === utteranceId &&
    (ninada.phase === "loading" ||
      ninada.phase === "synthesizing" ||
      ninada.phase === "playing");

  const handleAuditionSpeak = () => {
    if (!activeSyl) return;
    void speakSanskritWithNinada(shortSyllableGlyph(activeSyl.deva), utteranceId);
  };

  const handleSelectSyllable = (id: string, deva: string) => {
    setActiveSylId(id);
    void speakSanskritWithNinada(shortSyllableGlyph(deva), `lp-syl-${id}`);
  };

  const corpusRows: CorpusRow[] = useMemo(() => {
    const pc = dataset.meta.pillarCounts;
    const dc = dataset.meta.domainCounts;
    return [
      {
        kind: "Kośa register",
        focus: "Amarakośa · Nāmaliṅgānuśāsana",
        count: pc.kosha ?? 404,
        target: { pillar: "kosha" }
      },
      {
        kind: "Lakṣaṇa register",
        focus: "Śrī Madhvācārya’s Sarvamūla definitions",
        count: pc.lakshana ?? 154,
        target: { pillar: "lakshana" }
      },
      {
        kind: "Ekākṣara register",
        focus: "Tantrasārasaṅgraha Mātṛkā & Nānārtha",
        count: pc.ekakshara ?? 70,
        target: { pillar: "ekakshara" }
      },
      {
        kind: "Nirukti register",
        focus: "Yāska’s Nirukta & Bhagavan-nāma derivations",
        count: pc.nirukti ?? 60,
        target: { pillar: "nirukti" }
      },
      {
        kind: "Śāstra varga",
        focus: "Pramāṇa & Logic",
        count: dc["Pramāṇa & Logic"] ?? 52,
        target: { domain: "Pramāṇa & Logic" },
        groupStart: true
      },
      {
        kind: "Śāstra varga",
        focus: "Padārtha & Metaphysics",
        count: dc["Padārtha & Metaphysics"] ?? 40,
        target: { domain: "Padārtha & Metaphysics" }
      },
      {
        kind: "Śāstra varga",
        focus: "Tattva & Ontology",
        count: dc["Tattva & Ontology"] ?? 36,
        target: { domain: "Tattva & Ontology" }
      },
      {
        kind: "Śāstra varga",
        focus: "Sādhana & Mukti",
        count: dc["Sādhana & Mukti"] ?? 26,
        target: { domain: "Sādhana & Mukti" }
      },
      {
        kind: "Vyākaraṇa & Kośa",
        focus: "Dhātupāṭha & Kriyā (Verbal Roots)",
        count: dc["Dhātupāṭha & Kriyā (Verbal Roots)"] ?? 70,
        target: { domain: "Dhātupāṭha & Kriyā (Verbal Roots)" },
        groupStart: true
      },
      {
        kind: "Vyākaraṇa & Kośa",
        focus: "Prakṛti & Loka (Nature & Cosmos)",
        count: dc["Prakṛti & Loka (Nature & Cosmos)"] ?? 60,
        target: { domain: "Prakṛti & Loka (Nature & Cosmos)" }
      },
      {
        kind: "Vyākaraṇa & Kośa",
        focus: "Vidyā, Vāk & Kalā (Knowledge & Speech)",
        count: dc["Vidyā, Vāk & Kalā (Knowledge & Speech)"] ?? 48,
        target: { domain: "Vidyā, Vāk & Kalā (Knowledge & Speech)" }
      },
      {
        kind: "Vyākaraṇa & Kośa",
        focus: "Avyaya & Nipāta (Indeclinables)",
        count: dc["Avyaya & Nipāta (Indeclinables & Particles)"] ?? 46,
        target: { domain: "Avyaya & Nipāta (Indeclinables & Particles)" }
      }
    ];
  }, [dataset.meta]);

  return (
    <div ref={rootRef} className="lp-root">
      <a href="#lp-main" className="skip-link">
        Skip to content
      </a>

      {/* Top Navigation */}
      <header className="lp-nav">
        <nav className="lp-nav-links" aria-label="Page sections">
          <a href="#ekakshara" className="lp-plain-link">
            Ekākṣara
          </a>
          <a href="#registers" className="lp-plain-link">
            Registers
          </a>
          <a href="#method" className="lp-plain-link">
            Method
          </a>
          <a href="#corpus" className="lp-plain-link">
            Corpus
          </a>
        </nav>

        <a
          href="#lexicon"
          className="lp-wordmark"
          onClick={(e) => {
            e.preventDefault();
            onOpenLexicon();
          }}
        >
          <span>Tattvakośa</span>
          <span className="lp-wordmark-deva" lang="sa">
            तत्त्वकोशः
          </span>
        </a>

        <div className="lp-nav-cta">
          <button
            type="button"
            className="lp-btn-primary"
            onClick={() => onOpenLexicon()}
          >
            Open the lexicon
          </button>
        </div>
      </header>

      <main id="lp-main">
        {/* Hero : Stepped Title, Two Photographs */}
        <section className="lp-hero lp-shell" aria-labelledby="lp-hero-title">
          <div className="lp-grid">
            <div className="lp-hero-title-wrap">
              <h1 id="lp-hero-title" className="lp-h1">
                <span className="lp-h1-line">
                  <span className="lp-h1-inner" style={{ "--line-i": 0 } as CSSProperties}>
                    Sanskrit cited,
                  </span>
                </span>
                <span className="lp-h1-line lp-h1-line-step">
                  <span className="lp-h1-inner" style={{ "--line-i": 1 } as CSSProperties}>
                    spoken whole
                  </span>
                </span>
              </h1>
            </div>

            <div className="lp-hero-top-photo lp-hero-enter" style={{ "--enter-i": 0 } as CSSProperties}>
              <img
                className="lp-drift-img"
                src="landing/manuscript-cord.jpg"
                width={1786}
                height={902}
                alt="Cord-tied Devanāgarī Sanskrit manuscript folio written in black and vermilion ink"
                decoding="async"
              />
            </div>

            <div className="lp-hero-left-plate lp-hero-enter" style={{ "--enter-i": 1 } as CSSProperties}>
              <div className="lp-plate-frame">
                <img
                  src="landing/ui-reader.jpg"
                  width={2200}
                  height={1375}
                  alt="Tattvakośa three-pane lexicon workbench showing jīvaḥ, prosody bars, and Viṣṇutattvavinirṇaya citation"
                  decoding="async"
                />
              </div>
              <p className="lp-plate-caption">
                <span>Lexicon workbench · जीवः (jīvaḥ)</span>
                <span>Viṣṇutattvavinirṇaya 1.81</span>
              </p>
            </div>

            <div className="lp-hero-copy">
              <p className="lp-lead lp-hero-enter" style={{ "--enter-i": 2 } as CSSProperties}>
                688 classical headwords drawn from Amarakośa and Śrī Madhvācārya’s
                Sarvamūla sūtras, recited in your browser at 24&nbsp;kHz.
              </p>
              <div className="lp-hero-actions lp-hero-enter" style={{ "--enter-i": 3 } as CSSProperties}>
                <button
                  type="button"
                  className="lp-btn-primary"
                  onClick={() => onOpenLexicon()}
                >
                  Open the lexicon
                </button>
                <a href="#ekakshara" className="lp-plain-link">
                  Hear an Ekākṣara
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1 : Showcase: Frame Run, One Lifted + Live Ekākṣara Reader */}
        <section
          id="ekakshara"
          className="lp-section-toned"
          aria-labelledby="lp-ekakshara-heading"
        >
          <div className="lp-shell lp-grid">
            <div className="lp-showcase-left">
              <h2
                id="lp-ekakshara-heading"
                className="lp-h2"
                data-lp-reveal
                style={{ "--stagger": 0 } as CSSProperties}
              >
                One syllable, four meanings
              </h2>
              <p
                className="lp-body"
                data-lp-reveal
                style={{ "--stagger": 1 } as CSSProperties}
              >
                In the Ekākṣara tradition, a single syllable stands as a complete word.
                Pick any syllable below to hear it recited at 24&nbsp;kHz and compare its
                meanings across Vedānta, Vedic deity lore, Amarakośa, and grammar.
              </p>

              {/* One Live Thing (data-ui) */}
              {activeSyl && (
                <div
                  className="lp-auditioner"
                  data-ui
                  data-lp-reveal
                  style={{ "--stagger": 2 } as CSSProperties}
                  aria-label="Interactive Ekākṣara reader and 24 kHz audio player"
                >
                  <div className="lp-syllable-bar" role="group" aria-label="Choose a Sanskrit monosyllable">
                    {featuredSyllables.map((item) => {
                      const glyph = shortSyllableGlyph(item.deva);
                      const selected = item.id === activeSyl.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          className={`lp-syl-btn ${selected ? "is-active" : ""}`}
                          aria-pressed={selected}
                          onClick={() => handleSelectSyllable(item.id, item.deva)}
                        >
                          {glyph}
                        </button>
                      );
                    })}
                  </div>

                  <div className="lp-audition-head">
                    <div className="lp-audition-word">
                      <strong className="lp-audition-deva" lang="sa">
                        {activeSyl.deva}
                      </strong>
                      <span className="lp-audition-iast">
                        /{shortSyllableGlyph(activeSyl.iast)}/
                      </span>
                    </div>

                    <div className="lp-audition-controls">
                      <button
                        type="button"
                        className="lp-speak-action"
                        onClick={handleAuditionSpeak}
                      >
                        {isSpeakingThis ? "Stop" : "Pronounce"}
                      </button>
                    </div>
                  </div>

                  <div className="lp-prosody-inline">
                    <span className="lp-prosody-bars" aria-hidden="true">
                      {prosody.syllables.map((s, idx) => (
                        <span
                          key={`${s.text}-${idx}`}
                          className={`lp-p-bar ${s.weight === "guru" ? "is-guru" : "is-laghu"}`}
                        />
                      ))}
                    </span>
                    <span>
                      {prosody.syllables.length}{" "}
                      {prosody.syllables.length === 1 ? "akṣara" : "akṣaras"} ·{" "}
                      {prosody.totalMatras} mātrā
                    </span>
                  </div>

                  <div className="lp-sense-stack">
                    {(activeSyl.ekaksharaSenses ?? []).map((sense) => (
                      <div key={sense.register} className="lp-sense-item">
                        <span className="lp-sense-reg">{REGISTER_LABELS[sense.register]}</span>
                        <span className="lp-sense-gloss">{sense.gloss}</span>
                      </div>
                    ))}
                  </div>

                  <div className="lp-audition-foot">
                    <span className="lp-audition-cite">
                      {activeSyl.source.grantha} ({activeSyl.source.locator})
                    </span>
                    <button
                      type="button"
                      className="lp-btn-tonal"
                      onClick={() =>
                        onOpenLexicon({ entryId: activeSyl.id, pillar: "ekakshara" })
                      }
                    >
                      Inspect in lexicon
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="lp-showcase-right">
              <div className="lp-frame-run">
                <div
                  className="lp-run-item is-lifted"
                  data-lp-reveal
                  style={{ "--stagger": 1 } as CSSProperties}
                >
                  <div className="lp-run-pic">
                    <img
                      src="landing/ui-ekakshara.jpg"
                      width={1800}
                      height={1141}
                      alt="Four-register Ekākṣara entry leaf for primal syllable a in Tattvakośa"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="lp-run-meta">
                    <strong>अ (अजः) leaf</strong>
                    <span>4 senses</span>
                  </div>
                </div>

                <div
                  className="lp-run-item"
                  data-lp-reveal
                  style={{ "--stagger": 2 } as CSSProperties}
                >
                  <div className="lp-run-pic">
                    <img
                      src="landing/talapatra-folio.jpg"
                      width={2000}
                      height={1180}
                      alt="Illuminated twelfth-century Sanskrit palm-leaf manuscript folio"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="lp-run-meta">
                    <strong>Tālapatra folio</strong>
                    <span>ca. 1120 CE</span>
                  </div>
                </div>

                <div
                  className="lp-run-item"
                  data-lp-reveal
                  style={{ "--stagger": 3 } as CSSProperties}
                >
                  <div className="lp-run-pic">
                    <img
                      src="landing/ui-matrika.jpg"
                      width={1800}
                      height={1238}
                      alt="Varṇamālā matrix view of all seventy monosyllables"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="lp-run-meta">
                    <strong>Mātṛkā matrix</strong>
                    <span>70 cells</span>
                  </div>
                </div>
              </div>

              <p
                className="lp-body-muted"
                data-lp-reveal
                style={{ "--stagger": 4 } as CSSProperties}
              >
                Drawn from Śrī Madhvācārya’s Tantrasārasaṅgraha (1.10), Amarasiṃha’s
                Nānārthavarga, and Pāṇini’s nipāta sūtras, where divine names and
                grammatical particles share the same syllable.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 : List: Statement, Table Pushed Right */}
        <section
          id="registers"
          className="lp-section lp-shell"
          aria-labelledby="lp-registers-heading"
        >
          <div className="lp-grid">
            <div className="lp-list-intro">
              <h2
                id="lp-registers-heading"
                className="lp-h2"
                data-lp-reveal
                style={{ "--stagger": 0 } as CSSProperties}
              >
                Four canonical registers
              </h2>
              <p
                className="lp-statement"
                data-lp-reveal
                style={{ "--stagger": 1 } as CSSProperties}
              >
                Every entry cites its classical grantha, splits compounds by padaccheda, and
                orders headwords from अ to क्ष rather than Latin A to Z.
              </p>
            </div>

            <div
              className="lp-list-photo"
              data-lp-reveal
              style={{ "--stagger": 1 } as CSSProperties}
            >
              <div className="lp-plate-frame">
                <img
                  src="landing/hoysala-sarasvati.jpg"
                  width={1500}
                  height={1876}
                  alt="Twelfth-century Hoysala chlorite sculpture of four-armed Sarasvatī seated in padmāsana"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="lp-plate-caption">
                <span>Sarasvatī · Hoysala period, 12th c.</span>
                <span>Art Institute of Chicago</span>
              </p>
            </div>

            <div className="lp-list-label" aria-hidden="true">
              Index
            </div>

            <div className="lp-register-rows" role="list" aria-label="Lexicon registers and vargas">
              {corpusRows.map((row, idx) => (
                <button
                  key={`${row.focus}-${idx}`}
                  type="button"
                  role="listitem"
                  className={`lp-reg-row ${row.groupStart ? "is-group-start" : ""}`}
                  data-lp-reveal
                  style={{ "--stagger": Math.min(6, idx % 5) } as CSSProperties}
                  onClick={() => onOpenLexicon(row.target)}
                >
                  <span className="lp-reg-kind">{row.kind}</span>
                  <span className="lp-reg-focus">{row.focus}</span>
                  <span className="lp-reg-count">{row.count} entries</span>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 : How It Works: Uneven Gallery of Six Editorial Moments */}
        <section
          id="method"
          className="lp-section-toned"
          aria-labelledby="lp-method-heading"
        >
          <div className="lp-shell">
            <div className="lp-moments-head">
              <h2
                id="lp-method-heading"
                className="lp-h2"
                data-lp-reveal
                style={{ "--stagger": 0 } as CSSProperties}
              >
                From palm leaf to speech
              </h2>
            </div>

            <div
              className="lp-moments-track"
              aria-label="Editorial stages of a Tattvakośa entry"
            >
              {MOMENTS.map((item, idx) => (
                <article
                  key={item.title}
                  className="lp-moment-col"
                  data-lp-reveal
                  style={
                    {
                      "--stagger": Math.min(5, idx),
                      "--moment-space": `${item.space}px`
                    } as CSSProperties
                  }
                >
                  <p className="lp-moment-title">{item.title}</p>
                  <p className="lp-moment-desc">{item.desc}</p>
                  <div className="lp-moment-spacer" />
                  <div className="lp-moment-pic">
                    <img
                      src={item.img}
                      width={item.w}
                      height={item.h}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 : Stats: Quiet Figure Lines */}
        <section
          id="corpus"
          className="lp-stats-section lp-shell"
          aria-labelledby="lp-stats-heading"
        >
          <div className="lp-grid">
            <div className="lp-stats-left">
              <div className="lp-stats-heading-offset">
                <h2
                  id="lp-stats-heading"
                  className="lp-h2"
                  data-lp-reveal
                  style={{ "--stagger": 0 } as CSSProperties}
                >
                  Measured in citations
                </h2>
              </div>

              <dl className="lp-stats-dl">
                <div
                  className="lp-stat-row"
                  data-lp-reveal
                  style={{ "--stagger": 1 } as CSSProperties}
                >
                  <dt className="lp-stat-num">688</dt>
                  <dd className="lp-stat-text">
                    Classical headwords verified with Devanāgarī, IAST transliteration,
                    grammatical gender, and English glosses.
                  </dd>
                </div>

                <div
                  className="lp-stat-row"
                  data-lp-reveal
                  style={{ "--stagger": 2 } as CSSProperties}
                >
                  <dt className="lp-stat-num">296</dt>
                  <dd className="lp-stat-text">
                    Distinct śāstric source locators across Amarakośa, Pāṇini’s
                    Aṣṭādhyāyī, Yāska’s Nirukta, and the Sarvamūla corpus.
                  </dd>
                </div>

                <div
                  className="lp-stat-row"
                  data-lp-reveal
                  style={{ "--stagger": 3 } as CSSProperties}
                >
                  <dt className="lp-stat-num">70</dt>
                  <dd className="lp-stat-text">
                    Monosyllabic Ekākṣara entries pairing Viṣṇu-nāma exegesis, Vedic
                    devatā hierarchy, Amarakośa polysemy, and particle grammar.
                  </dd>
                </div>

                <div
                  className="lp-stat-row"
                  data-lp-reveal
                  style={{ "--stagger": 4 } as CSSProperties}
                >
                  <dt className="lp-stat-num">17</dt>
                  <dd className="lp-stat-text">
                    Thematic vargas arranged from Tattva, Pramāṇa, and Loka to verbal
                    dhātus, numerals, and indeclinables.
                  </dd>
                </div>

                <div
                  className="lp-stat-row"
                  data-lp-reveal
                  style={{ "--stagger": 5 } as CSSProperties}
                >
                  <dt className="lp-stat-num">24&nbsp;kHz</dt>
                  <dd className="lp-stat-text">
                    In-browser ONNX Sanskrit recitation via Ninada v5.1 in a studio male
                    voice, with no server calls.
                  </dd>
                </div>
              </dl>
            </div>

            <div
              className="lp-stats-right"
              data-lp-reveal
              style={{ "--stagger": 2 } as CSSProperties}
            >
              <div className="lp-plate-frame">
                <img
                  src="landing/pothi-box.jpg"
                  width={2200}
                  height={1152}
                  alt="Lacquered wood palm-leaf manuscript storage chest inlaid with mother-of-pearl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <p className="lp-plate-caption">
                <span>Palm-leaf pothi chest · early 19th c.</span>
                <span>The Met</span>
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 : CTA: Last Photograph, Text Beside */}
        <section className="lp-cta-band" aria-labelledby="lp-cta-heading">
          <div className="lp-cta-photo">
            <img
              src="landing/keshava-balligrama.jpg"
              width={1076}
              height={2000}
              alt="Twelfth-century Karnataka stone stele of standing Viṣṇu as Keśava by Dasoja of Balligrama"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="lp-cta-content">
            <h2
              id="lp-cta-heading"
              className="lp-h2"
              data-lp-reveal
              style={{ "--stagger": 0 } as CSSProperties}
            >
              Read by pramāṇa
            </h2>
            <p
              className="lp-cta-copy"
              data-lp-reveal
              style={{ "--stagger": 1 } as CSSProperties}
            >
              Search in Devanāgarī, IAST, or English, inspect every padaccheda split, and
              hear any classical sūtra read aloud in your browser.
            </p>
            <button
              type="button"
              className="lp-btn-paper"
              data-lp-reveal
              style={{ "--stagger": 2 } as CSSProperties}
              onClick={() => onOpenLexicon()}
            >
              Open the lexicon
            </button>
          </div>
        </section>
      </main>

      {/* Section 6 : Footer: Columns Above, Full-Width Monumental Wordmark Below */}
      <footer className="lp-footer">
        <div className="lp-footer-cols">
          <div className="lp-foot-col">
            <p className="lp-foot-head">Views</p>
            <button
              type="button"
              className="lp-foot-btn"
              onClick={() => onOpenLexicon({ viewMode: "reader" })}
            >
              Lexicon reader
            </button>
            <button
              type="button"
              className="lp-foot-btn"
              onClick={() => onOpenLexicon({ viewMode: "directory" })}
            >
              Card directory
            </button>
            <button
              type="button"
              className="lp-foot-btn"
              onClick={() =>
                onOpenLexicon({ pillar: "ekakshara", viewMode: "matrika" })
              }
            >
              Varṇamālā matrix
            </button>
            <button
              type="button"
              className="lp-foot-btn"
              onClick={() => onOpenLexicon({ contemplate: true })}
            >
              Svādhyāya contemplation
            </button>
          </div>

          <div className="lp-foot-col">
            <p className="lp-foot-head">Registers</p>
            <button
              type="button"
              className="lp-foot-btn"
              onClick={() => onOpenLexicon({ pillar: "kosha" })}
            >
              Amarakośa · Kośa (404)
            </button>
            <button
              type="button"
              className="lp-foot-btn"
              onClick={() => onOpenLexicon({ pillar: "lakshana" })}
            >
              Śāstra · Lakṣaṇa (154)
            </button>
            <button
              type="button"
              className="lp-foot-btn"
              onClick={() => onOpenLexicon({ pillar: "ekakshara" })}
            >
              Monosyllabic · Ekākṣara (70)
            </button>
            <button
              type="button"
              className="lp-foot-btn"
              onClick={() => onOpenLexicon({ pillar: "nirukti" })}
            >
              Etymology · Nirukti (60)
            </button>
          </div>

          <div className="lp-foot-col">
            <p className="lp-foot-head">Authorities</p>
            <span className="lp-foot-link">Amarasiṃha · Nāmaliṅgānuśāsana</span>
            <span className="lp-foot-link">Śrī Madhvācārya · Sarvamūla</span>
            <span className="lp-foot-link">Pāṇini · Aṣṭādhyāyī & Dhātupāṭha</span>
            <span className="lp-foot-link">Yāska · Nirukta</span>
          </div>

          <div className="lp-foot-col">
            <p className="lp-foot-head">Corpus & Audio</p>
            <a
              className="lp-foot-link"
              href="https://huggingface.co/datasets/gnumanth/tattvakosha"
              target="_blank"
              rel="noreferrer"
            >
              Hugging Face · gnumanth/tattvakosha
            </a>
            <button
              type="button"
              className="lp-foot-btn"
              onClick={() => onOpenLexicon({ entryId: "jiva" })}
            >
              Ninada v5.1 · 24 kHz Sanskrit TTS
            </button>
            <span className="lp-foot-link">688 headwords · 296 grantha citations</span>
          </div>
        </div>

        <div aria-hidden="true" />

        <div className="lp-footer-bottom">
          <svg
            className="lp-monument-svg"
            viewBox="0 0 1200 148"
            role="img"
            aria-label="Tattvakośa तत्त्वकोशः"
          >
            <text
              x="0"
              y="118"
              fill="currentColor"
              fontFamily="Geist, system-ui, sans-serif"
              fontSize="124"
              fontWeight="600"
              letterSpacing="-4"
            >
              Tattvakośa
            </text>
            <text
              x="1200"
              y="116"
              textAnchor="end"
              fill="#b5b5b0"
              fontFamily="Tiro Devanagari Sanskrit, serif"
              fontSize="106"
              fontWeight="400"
            >
              तत्त्वकोशः
            </text>
          </svg>

          <p className="lp-credits">
            Pictures:{" "}
            <a href="https://www.artic.edu/artworks/148364">
              “Four-Armed Sarasvati, Goddess of Learning, Seated in Lotus Position (Padmasana)”
            </a>{" "}
            by India, Hoysala period, 12th century,{" "}
            <a href="https://creativecommons.org/publicdomain/zero/1.0/">public domain (CC0)</a>,
            via Art Institute of Chicago;{" "}
            <a href="https://www.metmuseum.org/art/collection/search/38517">
              “Standing Vishnu as Keshava”
            </a>{" "}
            by Dasoja of Balligrama, first quarter of the 12th century,{" "}
            <a href="https://creativecommons.org/publicdomain/zero/1.0/">public domain (CC0)</a>,
            via The Metropolitan Museum of Art;{" "}
            <a href="https://commons.wikimedia.org/w/index.php?curid=36267683">
              “Sanskrit Manuscript”
            </a>
            , <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>, via Wikimedia
            Commons;{" "}
            <a href="https://commons.wikimedia.org/w/index.php?curid=36267444">
              “Sanskrit Manuscript”
            </a>
            , <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>, via Wikimedia
            Commons;{" "}
            <a href="https://commons.wikimedia.org/w/index.php?curid=36111247">
              “Sanskrit manuscript 1219”
            </a>
            , <a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>, via Wikimedia
            Commons;{" "}
            <a href="https://www.metmuseum.org/art/collection/search/73333">
              “Palm-leaf Manuscript Storage Box”
            </a>{" "}
            by Thailand maker, early 19th century,{" "}
            <a href="https://creativecommons.org/publicdomain/zero/1.0/">public domain (CC0)</a>,
            via The Metropolitan Museum of Art;{" "}
            <a href="https://www.metmuseum.org/art/collection/search/74912">
              “Folio from an Ashtasahasrika Prajnaparamita Manuscript”
            </a>{" "}
            by Mahavihara Master, early 12th century,{" "}
            <a href="https://creativecommons.org/publicdomain/zero/1.0/">public domain (CC0)</a>,
            via The Metropolitan Museum of Art.
          </p>
        </div>
      </footer>
    </div>
  );
}
