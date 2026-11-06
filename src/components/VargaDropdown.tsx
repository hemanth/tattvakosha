import { useEffect, useMemo, useRef, useState } from "react";

interface VargaDropdownProps {
  value: string;
  onChange: (domain: string) => void;
  domainCounts: Record<string, number>;
  totalEntries: number;
}

interface VargaGroup {
  kanda: string;
  sanskrit: string;
  domains: string[];
}

const KANDA_GROUPS: VargaGroup[] = [
  {
    kanda: "I. Śāstra & Nirukti",
    sanskrit: "शास्त्र-निरुक्तकाण्डः",
    domains: [
      "Tattva & Ontology",
      "Padārtha & Metaphysics",
      "Pramāṇa & Logic",
      "Sādhana & Mukti",
      "Vaidika Nirukti",
      "Bhagavan-Nāma Nirukti"
    ]
  },
  {
    kanda: "II. Amarakośa Vargas",
    sanskrit: "नामलिङ्गानुशासनम्",
    domains: [
      "Prakṛti & Loka (Nature & Cosmos)",
      "Śarīra & Jīva-Jāti (Body & Beings)",
      "Vidyā, Vāk & Kalā (Knowledge & Speech)",
      "Kuṭumba, Samāja & Nīti (Life, Society & Ethics)"
    ]
  },
  {
    kanda: "III. Vyākaraṇa & Dhātu",
    sanskrit: "व्याकरण-धातुकाण्डः",
    domains: [
      "Dhātupāṭha & Kriyā (Verbal Roots)",
      "Sarvanāma & Saṅkhyā (Pronouns & Numerals)",
      "Viśeṣaṇa (Qualities & Adjectives)",
      "Avyaya & Nipāta (Indeclinables & Particles)"
    ]
  },
  {
    kanda: "IV. Ekākṣara-Kośa",
    sanskrit: "एकाक्षर-नानार्थवर्गः",
    domains: [
      "Svara Ekākṣara (अ–अः)",
      "Vyañjana Ekākṣara (क–क्ष)",
      "Amarakośa Ekākṣara-Nānārtha"
    ]
  }
];

function splitDomainLabel(raw: string): { primary: string; sub: string | null } {
  const match = /^([^(]+)\(([^)]+)\)$/.exec(raw.trim());
  if (!match) return { primary: raw, sub: null };
  return { primary: match[1].trim(), sub: match[2].trim() };
}

export function VargaDropdown({
  value,
  onChange,
  domainCounts,
  totalEntries
}: VargaDropdownProps) {
  const [open, setOpen] = useState(false);
  const [filterText, setFilterText] = useState("");
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const rootRef = useRef<HTMLDivElement>(null);
  const filterInputRef = useRef<HTMLInputElement>(null);

  const allDomainKeys = useMemo(() => Object.keys(domainCounts), [domainCounts]);

  const groupedSections = useMemo(() => {
    const q = filterText.trim().toLowerCase();
    const assigned = new Set<string>();
    const sections: Array<{ kanda: string; sanskrit: string; items: string[] }> = [];

    for (const grp of KANDA_GROUPS) {
      const items = grp.domains.filter((d) => {
        if (!(d in domainCounts)) return false;
        assigned.add(d);
        if (!q) return true;
        return d.toLowerCase().includes(q);
      });
      if (items.length > 0) {
        sections.push({ kanda: grp.kanda, sanskrit: grp.sanskrit, items });
      }
    }

    const leftovers = allDomainKeys.filter(
      (d) => !assigned.has(d) && (!q || d.toLowerCase().includes(q))
    );
    if (leftovers.length > 0) {
      sections.push({ kanda: "V. Additional Vargas", sanskrit: "अन्यवर्गाः", items: leftovers });
    }

    return sections;
  }, [allDomainKeys, domainCounts, filterText]);

  // Flat navigable list for keyboard Up/Down
  const flatOptions = useMemo(() => {
    const list: string[] = [];
    if (!filterText.trim()) {
      list.push("all");
    }
    for (const sec of groupedSections) {
      for (const item of sec.items) {
        list.push(item);
      }
    }
    return list;
  }, [groupedSections, filterText]);

  useEffect(() => {
    if (!open) return;
    setFilterText("");
    const idx = Math.max(0, flatOptions.indexOf(value));
    setActiveIndex(idx);
    requestAnimationFrame(() => {
      filterInputRef.current?.focus();
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // Close on outside click or Escape
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointerDown);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const commitSelection = (nextVal: string) => {
    onChange(nextVal);
    setOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setOpen(true);
      }
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((prev) => (flatOptions.length > 0 ? (prev + 1) % flatOptions.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((prev) =>
        flatOptions.length > 0 ? (prev - 1 + flatOptions.length) % flatOptions.length : 0
      );
    } else if (e.key === "Enter" && flatOptions[activeIndex]) {
      e.preventDefault();
      commitSelection(flatOptions[activeIndex]);
    }
  };

  const isFiltered = value !== "all";
  const selectedParts = isFiltered ? splitDomainLabel(value) : null;
  const activeCount = isFiltered ? domainCounts[value] ?? 0 : totalEntries;

  return (
    <div ref={rootRef} className={`varga-dropdown ${open ? "is-open" : ""}`} onKeyDown={handleKeyDown}>
      <div className={`varga-trigger-group ${isFiltered ? "is-filtered" : ""}`}>
        <button
          type="button"
          className="varga-trigger"
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="varga-trigger-prefix">Varga</span>
          <span className="varga-trigger-value">
            {selectedParts ? selectedParts.primary : `All 17 vargas`}
          </span>
          <span className="varga-trigger-count num">
            {isFiltered ? activeCount : totalEntries}
          </span>
          <svg
            className="varga-chevron"
            width="11"
            height="11"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {isFiltered && (
          <button
            type="button"
            className="varga-clear-btn"
            onClick={(e) => {
              e.stopPropagation();
              onChange("all");
            }}
            title="Reset Varga filter to All"
            aria-label="Reset Varga filter"
          >
            ×
          </button>
        )}
      </div>

      {open && (
        <div className="varga-popover" role="listbox" aria-label="Thematic Varga Index">
          {/* Editorial Bookplate Header */}
          <div className="varga-popover-head">
            <div className="varga-popover-title-row">
              <span className="varga-popover-title">Thematic Varga Index</span>
              <span className="varga-popover-deva" lang="sa">वर्ग-सूची</span>
            </div>
            <div className="varga-filter-box">
              <input
                ref={filterInputRef}
                type="text"
                className="varga-filter-input"
                value={filterText}
                onChange={(e) => {
                  setFilterText(e.target.value);
                  setActiveIndex(0);
                }}
                placeholder="Filter 17 classical vargas…"
                aria-label="Filter vargas"
              />
              {filterText && (
                <button
                  type="button"
                  className="varga-filter-clear"
                  onClick={() => setFilterText("")}
                  aria-label="Clear varga filter"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Scrollable Book-Index Contents with Dotted Leaders */}
          <div className="varga-popover-body">
            {!filterText.trim() && (
              <button
                type="button"
                role="option"
                aria-selected={value === "all"}
                className={`varga-option varga-option-all ${value === "all" ? "is-selected" : ""} ${
                  flatOptions[activeIndex] === "all" ? "is-focused" : ""
                }`}
                onMouseEnter={() => setActiveIndex(0)}
                onClick={() => commitSelection("all")}
              >
                <span className="varga-opt-main">
                  <strong>Complete Lexicon (All 17 Vargas)</strong>
                </span>
                <span className="varga-opt-dots" aria-hidden="true" />
                <span className="varga-opt-num num">{totalEntries}</span>
              </button>
            )}

            {groupedSections.length === 0 ? (
              <div className="varga-empty">No vargas matching “{filterText}”</div>
            ) : (
              groupedSections.map((section) => (
                <div key={section.kanda} className="varga-kanda-section">
                  <div className="varga-kanda-heading">
                    <span>{section.kanda}</span>
                    <span className="varga-kanda-deva" lang="sa">{section.sanskrit}</span>
                  </div>
                  {section.items.map((domainKey) => {
                    const { primary, sub } = splitDomainLabel(domainKey);
                    const isSelected = value === domainKey;
                    const optIdx = flatOptions.indexOf(domainKey);
                    const isFocused = optIdx === activeIndex;
                    return (
                      <button
                        key={domainKey}
                        type="button"
                        role="option"
                        aria-selected={isSelected}
                        className={`varga-option ${isSelected ? "is-selected" : ""} ${
                          isFocused ? "is-focused" : ""
                        }`}
                        onMouseEnter={() => {
                          if (optIdx >= 0) setActiveIndex(optIdx);
                        }}
                        onClick={() => commitSelection(domainKey)}
                      >
                        <span className="varga-opt-main">
                          <span className="varga-opt-primary">{primary}</span>
                          {sub && <em className="varga-opt-sub"> · {sub}</em>}
                        </span>
                        <span className="varga-opt-dots" aria-hidden="true" />
                        <span className="varga-opt-num num">{domainCounts[domainKey]}</span>
                      </button>
                    );
                  })}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
