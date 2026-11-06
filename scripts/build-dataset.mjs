import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { tattvaOntologyEntries } from "./sources/tattva-ontology.mjs";
import { pramanaNyayaEntries } from "./sources/pramana-nyaya.mjs";
import { padarthaSadhanaEntries } from "./sources/padartha-sadhana.mjs";
import { shastraNiruktiExpansionEntries } from "./sources/shastra-nirukti-expansion.mjs";
import { koshaPrakritiShariraEntries } from "./sources/kosha-prakriti-sharira.mjs";
import { koshaVidyaSamajaEntries } from "./sources/kosha-vidya-samaja.mjs";
import { koshaDhatuKriyaEntries } from "./sources/kosha-dhatu-kriya.mjs";
import { koshaVisheshanaAvyayaEntries } from "./sources/kosha-visheshana-avyaya.mjs";
import { vaidikaNiruktiEntries } from "./sources/vaidika-nirukti.mjs";
import { ekaksharaMatrikaEntries } from "./sources/ekakshara-matrika.mjs";
import { EKAKSHARA_SENSE_ENRICHMENTS } from "./sources/ekakshara-nanartha.mjs";
import { amarakoshaEkaksharaPadaEntries } from "./sources/ekakshara-amarakosha-padas.mjs";
import { LEGACY_GLOSSES } from "./sources/legacy-glosses.mjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const enrichedMatrikaEntries = ekaksharaMatrikaEntries.map((entry) => {
  const enrich = EKAKSHARA_SENSE_ENRICHMENTS[entry.id];
  if (!enrich) {
    throw new Error(`Missing EKAKSHARA_SENSE_ENRICHMENTS for '${entry.id}'`);
  }
  return {
    ...entry,
    englishGlosses: enrich.englishGlosses,
    phoneticAliases: [
      ...(entry.phoneticAliases || []),
      ...(enrich.extraAliases || [])
    ],
    meaningShort: enrich.summaryNote
      ? `${entry.meaningShort} ${enrich.summaryNote}`
      : entry.meaningShort,
    ekaksharaSenses: enrich.ekaksharaSenses
  };
});

const rawEntries = [
  ...tattvaOntologyEntries,
  ...pramanaNyayaEntries,
  ...padarthaSadhanaEntries,
  ...shastraNiruktiExpansionEntries,
  ...koshaPrakritiShariraEntries,
  ...koshaVidyaSamajaEntries,
  ...koshaDhatuKriyaEntries,
  ...koshaVisheshanaAvyayaEntries,
  ...vaidikaNiruktiEntries,
  ...enrichedMatrikaEntries,
  ...amarakoshaEkaksharaPadaEntries
];

const NEUTER_STEMS = new Set([
  "brahman",
  "karman",
  "manas",
  "tamas",
  "rajas",
  "tejas",
  "tapas",
  "vacas",
  "jagat",
  "sat",
  "cit",
  "asvatantra-tattva",
  "svatantra-tattva"
]);

const FEMININE_STEMS = new Set([
  "lakṣmī",
  "prakṛti",
  "māyā",
  "avidyā",
  "īśecchā",
  "śakti",
  "vyāpti",
  "anumiti",
  "upamiti",
  "smṛti",
  "śruti",
  "bhakti",
  "mukti",
  "śaraṇāgati",
  "vairāgya",
  "vāsanā",
  "pravṛtti",
  "nivṛtti",
  "vyāvahārikī",
  "kathā",
  "jalpa",
  "vitaṇḍā",
  "jāti",
  "upaniṣad",
  "ṛc",
  "gāyatrī",
  "sarasvatī",
  "bhāratī",
  "śrī"
]);

function inferPos(entry) {
  if (entry.pos && typeof entry.pos === "string" && entry.pos.trim()) {
    return entry.pos.trim();
  }
  if (entry.pillar === "ekakshara") {
    return "ekākṣara-varṇaḥ (syllable)";
  }
  if (entry.id === "om-pranava") {
    return "praṇava-avyayam (sacred syllable)";
  }
  const stem = entry.stem.toLowerCase();
  const iast = entry.iast.toLowerCase().trim();

  if (NEUTER_STEMS.has(stem) || iast.endsWith("am") || iast.endsWith("aṃ")) {
    return "napuṃsakaliṅga (n.)";
  }
  if (
    FEMININE_STEMS.has(stem) ||
    (iast.endsWith("ā") && !stem.endsWith("an") && !stem.endsWith("ṛ")) ||
    (iast.endsWith("ī") && !stem.endsWith("in")) ||
    iast.endsWith("tiḥ") ||
    iast.endsWith("niḥ") ||
    iast.endsWith("ddhiḥ") ||
    iast.endsWith("ṣṭiḥ") ||
    iast.endsWith("kṣā")
  ) {
    return "strīliṅga (f.)";
  }
  if (iast.endsWith("ḥ") || stem.endsWith("in") || stem.endsWith("an") || stem.endsWith("ṛ")) {
    return "puṃliṅga (m.)";
  }
  return "nāmapadam (nominal)";
}

function inferEnglishGlosses(entry) {
  if (Array.isArray(entry.englishGlosses) && entry.englishGlosses.length > 0) {
    return Array.from(
      new Set(entry.englishGlosses.map((g) => String(g).trim()).filter(Boolean))
    );
  }
  if (LEGACY_GLOSSES[entry.id]) {
    return LEGACY_GLOSSES[entry.id];
  }

  const cleaned = entry.meaningShort
    .replace(/\([^)]*\)/g, "")
    .replace(/^[^—:]+(?:—|:)\s*/, "")
    .replace(/^['"“”‘’]+|['"“”‘’.;]+$/g, "")
    .trim();

  const clauses = cleaned
    .split(/[;—]|,\s+(?=(?:the|a|an|divine|supreme|eternal|valid|direct|verbal|logical|pure|spiritual)\b)/i)
    .map((s) => s.trim().replace(/\.$/, ""))
    .filter((s) => s.length >= 3 && s.length <= 78);

  const glosses = clauses.slice(0, 3);
  if (glosses.length === 0 && cleaned) {
    glosses.push(cleaned.slice(0, 75).replace(/\s+\S*$/, "").trim() || cleaned.slice(0, 75));
  }
  return Array.from(new Set(glosses));
}

function csvEscape(val) {
  const str = val === null || val === undefined ? "" : String(val);
  if (/[",\n\r]/.test(str)) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return str;
}

const seenIds = new Set();
const VALID_PILLARS = new Set(["lakshana", "kosha", "ekakshara", "nirukti"]);

for (const entry of rawEntries) {
  if (!entry.id || typeof entry.id !== "string") {
    throw new Error(`Missing or invalid id on entry: ${JSON.stringify(entry)}`);
  }
  if (seenIds.has(entry.id)) {
    throw new Error(`Duplicate entry id: ${entry.id}`);
  }
  seenIds.add(entry.id);

  for (const field of [
    "deva",
    "iast",
    "stem",
    "pillar",
    "domain",
    "lakshanaDeva",
    "lakshanaIast",
    "meaningShort",
    "meaningDeep"
  ]) {
    if (!entry[field] || typeof entry[field] !== "string") {
      throw new Error(`Entry '${entry.id}' missing string field '${field}'`);
    }
  }

  if (!VALID_PILLARS.has(entry.pillar)) {
    throw new Error(`Entry '${entry.id}' has invalid pillar '${entry.pillar}'`);
  }

  if (!Array.isArray(entry.padaccheda) || entry.padaccheda.length === 0) {
    throw new Error(`Entry '${entry.id}' must have non-empty padaccheda`);
  }

  if (!entry.source || !entry.source.grantha || !entry.source.author || !entry.source.locator) {
    throw new Error(`Entry '${entry.id}' has incomplete source citation`);
  }

  if (entry.pillar === "ekakshara") {
    if (!Array.isArray(entry.ekaksharaSenses) || entry.ekaksharaSenses.length < 3) {
      throw new Error(`Ekakshara entry '${entry.id}' must have ekaksharaSenses`);
    }
  }
}

let prunedRelatedCount = 0;
const entries = rawEntries.map((entry, index) => {
  const validRelated = (entry.related || []).filter((relId) => {
    const ok = relId !== entry.id && seenIds.has(relId);
    if (!ok) prunedRelatedCount += 1;
    return ok;
  });

  const pos = inferPos(entry);
  const englishGlosses = inferEnglishGlosses(entry);

  return {
    index: index + 1,
    id: entry.id,
    deva: entry.deva,
    iast: entry.iast,
    stem: entry.stem,
    pos,
    englishGlosses,
    phoneticAliases: Array.from(new Set(entry.phoneticAliases || [])),
    pillar: entry.pillar,
    domain: entry.domain,
    lakshanaDeva: entry.lakshanaDeva,
    lakshanaIast: entry.lakshanaIast,
    ...(entry.secondaryLakshana ? { secondaryLakshana: entry.secondaryLakshana } : {}),
    ...(entry.ekaksharaSenses ? { ekaksharaSenses: entry.ekaksharaSenses } : {}),
    meaningShort: entry.meaningShort,
    meaningDeep: entry.meaningDeep,
    padaccheda: entry.padaccheda,
    source: entry.source,
    related: Array.from(new Set(validRelated))
  };
});

const byPillar = {
  lakshana: 0,
  kosha: 0,
  ekakshara: 0,
  nirukti: 0
};
const byDomain = {};
const granthas = new Set();

for (const e of entries) {
  byPillar[e.pillar] = (byPillar[e.pillar] || 0) + 1;
  byDomain[e.domain] = (byDomain[e.domain] || 0) + 1;
  granthas.add(e.source.grantha);
}

const dataset = {
  meta: {
    title: "Tattvakośa — तत्त्वकोशः",
    subtitle:
      "Scholarly Sanskrit Lexicon & Classical Mini-Dictionary Backed by Śrī Madhvācārya's Lakṣaṇas, Amarakośa, Pāṇinīya Dhātupāṭha, Ekākṣara Mātṛkā-Mūrtis & Vaidika Niruktis",
    version: "2.0.0",
    totalEntries: entries.length,
    pillarCounts: byPillar,
    domainCounts: byDomain,
    distinctSourceTraditions: granthas.size,
    primarySources: [
      "Sarvamūla Granthāḥ of Śrī Madhvācārya (Viṣṇutattvavinirṇayaḥ, Tattvasaṅkhyānam, Tattvavivekaḥ, Tattvodyotaḥ, Pramāṇalakṣaṇam, Kathālakṣaṇam, Tantrasārasaṅgrahaḥ, Brahmasūtrabhāṣyam, Aṇubhāṣyam, Anuvyākhyānam, Daśopaniṣad-bhāṣyāṇi, Ṛgbhāṣyam, Bhagavadgītābhāṣyam, Mahābhāratatātparyanirṇayaḥ)",
      "Śrī Jayatīrtha's Pramāṇapaddhatiḥ, Nyāyasudhā & Tattvasaṅkhyāna-ṭīkā",
      "Śrī Padmanābha Sūri's Padārthasaṅgrahaḥ",
      "Amarasiṃha's Nāmaliṅgānuśāsanam (Amarakośa)",
      "Pāṇini's Aṣṭādhyāyī & Pāṇinīya Dhātupāṭha",
      "Yāska's Nirukta"
    ]
  },
  entries
};

const srcDataDir = path.join(rootDir, "src", "data");
const publicDataDir = path.join(rootDir, "public", "data");
const hfDatasetDir = path.join(rootDir, "dataset");

fs.mkdirSync(srcDataDir, { recursive: true });
fs.mkdirSync(publicDataDir, { recursive: true });
fs.mkdirSync(hfDatasetDir, { recursive: true });

const jsonPretty = JSON.stringify(dataset, null, 2);
fs.writeFileSync(path.join(srcDataDir, "tattvakosha.json"), jsonPretty, "utf8");
fs.writeFileSync(path.join(publicDataDir, "tattvakosha.json"), jsonPretty, "utf8");
fs.writeFileSync(path.join(hfDatasetDir, "tattvakosha.json"), jsonPretty, "utf8");

const jsonl = entries.map((e) => JSON.stringify(e)).join("\n") + "\n";
fs.writeFileSync(path.join(publicDataDir, "tattvakosha.jsonl"), jsonl, "utf8");
fs.writeFileSync(path.join(hfDatasetDir, "tattvakosha.jsonl"), jsonl, "utf8");

const csvHeaders = [
  "index",
  "id",
  "deva",
  "iast",
  "stem",
  "pos",
  "pillar",
  "domain",
  "english_glosses",
  "phonetic_aliases",
  "lakshana_deva",
  "lakshana_iast",
  "meaning_short",
  "meaning_deep",
  "ekakshara_senses_json",
  "padaccheda_json",
  "source_grantha",
  "source_grantha_deva",
  "source_author",
  "source_locator",
  "related_ids"
];

const csvRows = [csvHeaders.join(",")];
for (const e of entries) {
  csvRows.push(
    [
      e.index,
      e.id,
      e.deva,
      e.iast,
      e.stem,
      e.pos,
      e.pillar,
      e.domain,
      e.englishGlosses.join("; "),
      e.phoneticAliases.join("; "),
      e.lakshanaDeva,
      e.lakshanaIast,
      e.meaningShort,
      e.meaningDeep,
      e.ekaksharaSenses ? JSON.stringify(e.ekaksharaSenses) : "",
      JSON.stringify(e.padaccheda),
      e.source.grantha,
      e.source.granthaDeva,
      e.source.author,
      e.source.locator,
      e.related.join("; ")
    ]
      .map(csvEscape)
      .join(",")
  );
}
fs.writeFileSync(path.join(hfDatasetDir, "tattvakosha.csv"), csvRows.join("\n") + "\n", "utf8");

console.log(
  `Built Tattvakosha v2.0.0 dataset: ${entries.length} entries (${JSON.stringify(byPillar)}), ${Object.keys(byDomain).length} domains, ${granthas.size} distinct grantha citations, pruned ${prunedRelatedCount} dangling related refs.`
);
