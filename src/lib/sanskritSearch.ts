import type { KoshaEntry } from "../types";

const DEVA_MAP: Record<string, string> = {
  अ: "a",
  आ: "a",
  इ: "i",
  ई: "i",
  उ: "u",
  ऊ: "u",
  ऋ: "ri",
  ॠ: "ri",
  ऌ: "li",
  ॡ: "li",
  ए: "e",
  ऐ: "ai",
  ओ: "o",
  औ: "au",
  "ा": "a",
  "ि": "i",
  "ी": "i",
  "ु": "u",
  "ू": "u",
  "ृ": "ri",
  "ॄ": "ri",
  "ॢ": "li",
  "ॣ": "li",
  "े": "e",
  "ै": "ai",
  "ो": "o",
  "ौ": "au",
  "ं": "m",
  "ँ": "m",
  "ः": "h",
  "ऽ": "",
  क: "ka",
  ख: "kha",
  ग: "ga",
  घ: "gha",
  ङ: "nga",
  च: "ca",
  छ: "cha",
  ज: "ja",
  झ: "jha",
  ञ: "nya",
  ट: "ta",
  ठ: "tha",
  ड: "da",
  ढ: "dha",
  ण: "na",
  त: "ta",
  थ: "tha",
  द: "da",
  ध: "dha",
  न: "na",
  प: "pa",
  फ: "pha",
  ब: "ba",
  भ: "bha",
  म: "ma",
  य: "ya",
  र: "ra",
  ल: "la",
  ळ: "la",
  व: "va",
  श: "sa",
  ष: "sa",
  स: "sa",
  ह: "ha"
};

const CONSONANTS = new Set([
  "क", "ख", "ग", "घ", "ङ",
  "च", "छ", "ज", "झ", "ञ",
  "ट", "ठ", "ड", "ढ", "ण",
  "त", "थ", "द", "ध", "न",
  "प", "फ", "ब", "भ", "म",
  "य", "र", "ल", "ळ", "व",
  "श", "ष", "स", "ह"
]);

const MATRAS_OR_VIRAMA = new Set([
  "ा", "ि", "ी", "ु", "ू", "ृ", "ॄ", "ॢ", "ॣ", "े", "ै", "ो", "ौ", "्"
]);

export function devaToRoman(input: string): string {
  let out = "";
  const chars = Array.from(input);
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    if (ch === "्") continue;
    if (CONSONANTS.has(ch)) {
      const base = DEVA_MAP[ch] || "";
      const next = chars[i + 1];
      if (next && MATRAS_OR_VIRAMA.has(next)) {
        out += base.slice(0, -1);
      } else {
        out += base;
      }
    } else if (ch in DEVA_MAP) {
      out += DEVA_MAP[ch];
    } else {
      out += ch;
    }
  }
  return out;
}

/**
 * Converts IAST, Devanagari, or casual English phonetic Sanskrit
 * (e.g. "jeeva", "pranja", "poorvaka", "vyapaaravatvam", "vishesha")
 * into a unified canonical phonetic skeleton.
 */
export function phoneticNormalize(raw: string): string {
  const romanized = /[\u0900-\u097F]/.test(raw) ? devaToRoman(raw) : raw;

  return romanized
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    // Sanskrit vocalic r / l in IAST after NFD becomes r / l, unify "ru" / "ri" variants gently
    .replace(/jñ|jn|nj|gy|dny/g, "jn")
    .replace(/ksh|ks|x/g, "ks")
    .replace(/shh|sh|chh/g, (m) => (m === "chh" ? "c" : "s"))
    .replace(/ch/g, "c")
    .replace(/aa/g, "a")
    .replace(/ee|ii/g, "i")
    .replace(/oo|uu/g, "u")
    .replace(/w/g, "v")
    // Unify unaspirated/aspirated stops for forgiving English search ("vyapara", "bheda"/"beda", "tattva"/"tatva")
    .replace(/([kgcjtdpb])h/g, "$1")
    // Collapse geminate consonants ("tattva" == "tatva", "vyapaaravatvam" == "vyaparavatvam")
    .replace(/([bcdfgjklmnprstvz])\1+/g, "$1")
    // Normalize nasal + stop clusters (m/n before consonant -> n)
    .replace(/[mn]([kgcjtdpb])/g, "n$1")
    // Strip trailing visarga 'h' or 'm' variations inside words lightly kept, strip punctuation
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export interface SearchIndexRecord {
  entry: KoshaEntry;
  headDeva: string;
  headExact: string;
  headSkeleton: string;
  aliasSkeletons: string[];
  glossLower: string[];
  lakshanaSkeleton: string;
  padaSkeleton: string;
  englishLower: string;
}

export function buildSearchIndex(entries: KoshaEntry[]): SearchIndexRecord[] {
  return entries.map((entry) => {
    const headExact = entry.iast
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();

    const headSkeleton = phoneticNormalize(`${entry.deva} ${entry.iast} ${entry.stem}`);
    const aliasSkeletons = entry.phoneticAliases.map((a) => phoneticNormalize(a)).filter(Boolean);
    const glossLower = (entry.englishGlosses ?? [])
      .map((g) => g.toLowerCase().trim())
      .filter(Boolean);
    const lakshanaSkeleton = phoneticNormalize(
      `${entry.lakshanaDeva} ${entry.lakshanaIast} ${entry.secondaryLakshana?.deva ?? ""} ${entry.secondaryLakshana?.iast ?? ""}`
    );
    const nanarthaText = (entry.ekaksharaSenses ?? [])
      .map((s) => `${s.formDeva} ${s.formIast} ${s.gloss} ${s.samanvaya}`)
      .join(" ");
    const padaSkeleton = phoneticNormalize(
      `${entry.padaccheda.map((p) => `${p.deva} ${p.iast} ${p.gloss}`).join(" ")} ${nanarthaText}`
    );
    const englishLower = `${glossLower.join(" ")} ${entry.pos ?? ""} ${entry.meaningShort} ${entry.meaningDeep} ${nanarthaText} ${entry.domain} ${entry.source.grantha} ${entry.source.locator}`.toLowerCase();

    return {
      entry,
      headDeva: entry.deva,
      headExact,
      headSkeleton,
      aliasSkeletons,
      glossLower,
      lakshanaSkeleton,
      padaSkeleton,
      englishLower
    };
  });
}

export function searchKosha(index: SearchIndexRecord[], rawQuery: string): KoshaEntry[] {
  const trimmed = rawQuery.trim();
  if (!trimmed) {
    return index.map((r) => r.entry);
  }

  const lowerRaw = trimmed.toLowerCase();
  const normQuery = phoneticNormalize(trimmed);
  const queryTokens = normQuery ? normQuery.split(" ").filter(Boolean) : [];
  const rawTokens = lowerRaw.split(/\s+/).filter(Boolean);

  const scored: Array<{ entry: KoshaEntry; score: number }> = [];

  for (const rec of index) {
    let score = 0;

    // 1. Direct Devanagari match (vital for single-syllable Ekakshara queries like "अ", "क", "क्ष", "जीव")
    const bareSyllable = rec.entry.deva.split(" ")[0];
    if (bareSyllable === trimmed || rec.entry.deva === trimmed) {
      score += 1200;
    } else if (rec.entry.deva.startsWith(trimmed)) {
      score += 750;
    } else if (rec.entry.deva.includes(trimmed)) {
      score += 450;
    } else if (rec.entry.lakshanaDeva.includes(trimmed)) {
      score += 320;
    }

    // 2. Exact / prefix IAST or stem match
    const bareIast = rec.headExact.split(" ")[0];
    if (bareIast === lowerRaw || rec.entry.stem.toLowerCase() === lowerRaw || rec.entry.id === lowerRaw) {
      score += 1000;
    } else if (rec.headExact.startsWith(lowerRaw)) {
      score += 600;
    }

    // 3. Phonetic alias exact or prefix match
    if (normQuery) {
      if (rec.aliasSkeletons.includes(normQuery)) {
        score += 900;
      } else if (rec.aliasSkeletons.some((a) => a.startsWith(normQuery))) {
        score += 520;
      }

      const headWords = rec.headSkeleton.split(" ");
      if (headWords.includes(normQuery)) {
        score += 850;
      } else if (headWords.some((w) => w.startsWith(normQuery))) {
        score += 480;
      }
    }

    // 4. Multi-token phonetic AND matching across headword + lakshana + padaccheda + English
    if (queryTokens.length > 0) {
      const fullCorpus = `${rec.headSkeleton} ${rec.aliasSkeletons.join(" ")} ${rec.lakshanaSkeleton} ${rec.padaSkeleton} ${rec.englishLower}`;
      const allMatch = queryTokens.every(
        (tok, idx) =>
          fullCorpus.includes(tok) ||
          (rawTokens[idx] ? rec.englishLower.includes(rawTokens[idx]) : false)
      );

      if (allMatch) {
        score += 200;
        // Bonus if tokens hit the Sanskrit lakshana directly (e.g. "pranja poorvaka vyapaaravatvam")
        const lakshanaHits = queryTokens.filter((t) => rec.lakshanaSkeleton.includes(t)).length;
        score += lakshanaHits * 140;

        const headHits = queryTokens.filter(
          (t) => rec.headSkeleton.includes(t) || rec.aliasSkeletons.some((a) => a.includes(t))
        ).length;
        score += headHits * 160;
      }
    }

    // 5. Bilingual English headword gloss match (e.g. "water", "sun", "to know", "mother", "hundred")
    if (rec.glossLower.includes(lowerRaw) || rec.glossLower.includes(`to ${lowerRaw}`)) {
      score += 940;
    } else if (
      rec.glossLower.some(
        (g) =>
          g.startsWith(`${lowerRaw} `) ||
          g.endsWith(` ${lowerRaw}`) ||
          g.split(/[\s,;/()]+/).includes(lowerRaw)
      )
    ) {
      score += 620;
    } else if (lowerRaw.length >= 3 && rec.glossLower.some((g) => g.startsWith(lowerRaw))) {
      score += 460;
    }

    // 6. Direct English substring match
    if (rawTokens.every((rt) => rec.englishLower.includes(rt))) {
      score += 180;
    }

    if (score > 0) {
      scored.push({ entry: rec.entry, score });
    }
  }

  scored.sort((a, b) => b.score - a.score || a.entry.index - b.entry.index);
  return scored.map((s) => s.entry);
}
