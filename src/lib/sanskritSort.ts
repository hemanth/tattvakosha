import type { KoshaEntry } from "../types";

export const SANSKRIT_ALPHABET_ORDER = [
  "अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ॠ", "ऌ", "ॡ", "ए", "ऐ", "ओ", "औ", "अं", "अः",
  "क", "ख", "ग", "घ", "ङ",
  "च", "छ", "ज", "झ", "ञ",
  "ट", "ठ", "ड", "ढ", "ण",
  "त", "थ", "द", "ध", "न",
  "प", "फ", "ब", "भ", "म",
  "य", "र", "ल", "व",
  "श", "ष", "स", "ह", "ळ", "क्ष"
] as const;

const ORDER_MAP = new Map<string, number>();
SANSKRIT_ALPHABET_ORDER.forEach((ch, idx) => {
  ORDER_MAP.set(ch, idx + 1);
});

const MATRA_TO_SVARA: Record<string, string> = {
  "ा": "आ",
  "ि": "इ",
  "ी": "ई",
  "ु": "उ",
  "ू": "ऊ",
  "ृ": "ऋ",
  "ॄ": "ॠ",
  "ॢ": "ऌ",
  "ॣ": "ॡ",
  "े": "ए",
  "ै": "ऐ",
  "ो": "ओ",
  "ौ": "औ"
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

function cleanHeadwordDeva(deva: string): string {
  return deva
    .split(/[\s(/·]/)[0]
    .replace(/^[√\-\u2013\u2014]+/, "")
    .trim();
}

/**
 * Returns the canonical Sanskrit thumb-index letter (अ..क्ष) for an entry.
 */
export function getInitialVarna(entry: KoshaEntry): string {
  const word = cleanHeadwordDeva(entry.deva);
  if (!word) return "अ";

  if (word.startsWith("क्ष")) return "क्ष";
  if (word.startsWith("अं") || word.startsWith("अँ")) return "अं";
  if (word.startsWith("अः")) return "अः";

  const first = Array.from(word)[0];
  if (ORDER_MAP.has(first)) return first;
  return "अ";
}

/**
 * Decomposes a Devanagari string into phonemic sort weights following
 * classical Sanskrit Akārādi (अकारादि) dictionary order.
 */
export function devaSortKey(raw: string): number[] {
  const word = cleanHeadwordDeva(raw);
  const chars = Array.from(word);
  const weights: number[] = [];

  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];

    // Treat initial अं / अः as 15th / 16th svaras (after औ, before क)
    if (i === 0 && ch === "अ" && (chars[i + 1] === "ं" || chars[i + 1] === "ँ")) {
      weights.push(ORDER_MAP.get("अं") ?? 15);
      i += 1;
      continue;
    }
    if (i === 0 && ch === "अ" && chars[i + 1] === "ः") {
      weights.push(ORDER_MAP.get("अः") ?? 16);
      i += 1;
      continue;
    }

    // Treat initial क्ष as dedicated 51st Meru-varna so क्ष-words group together at the end
    if (i === 0 && ch === "क" && chars[i + 1] === "्" && chars[i + 2] === "ष") {
      weights.push(ORDER_MAP.get("क्ष") ?? 51);
      i += 2;
      const afterKsha = chars[i + 1];
      if (afterKsha === "्") {
        i += 1;
      } else if (afterKsha && afterKsha in MATRA_TO_SVARA) {
        weights.push(ORDER_MAP.get(MATRA_TO_SVARA[afterKsha]) ?? 1);
        i += 1;
      } else {
        weights.push(ORDER_MAP.get("अ") ?? 1);
      }
      continue;
    }

    if (ch === "ं" || ch === "ँ") {
      weights.push(ORDER_MAP.get("अं") ?? 15);
      continue;
    }
    if (ch === "ः") {
      weights.push(ORDER_MAP.get("अः") ?? 16);
      continue;
    }
    if (ch === "ऽ" || ch === "्") {
      continue;
    }

    if (CONSONANTS.has(ch)) {
      weights.push(ORDER_MAP.get(ch) ?? 90);
      const next = chars[i + 1];
      if (next === "्") {
        i += 1;
      } else if (next && next in MATRA_TO_SVARA) {
        weights.push(ORDER_MAP.get(MATRA_TO_SVARA[next]) ?? 1);
        i += 1;
      } else {
        // Implicit short 'a'
        weights.push(ORDER_MAP.get("अ") ?? 1);
      }
    } else if (ORDER_MAP.has(ch)) {
      weights.push(ORDER_MAP.get(ch) ?? 1);
    }
  }

  return weights;
}

export function compareAkaraadi(a: KoshaEntry, b: KoshaEntry): number {
  const ka = devaSortKey(a.deva);
  const kb = devaSortKey(b.deva);
  const len = Math.min(ka.length, kb.length);
  for (let i = 0; i < len; i++) {
    if (ka[i] !== kb[i]) return ka[i] - kb[i];
  }
  if (ka.length !== kb.length) return ka.length - kb.length;
  return a.iast.localeCompare(b.iast);
}

/**
 * Converts internal grammatical pos strings to concise print-dictionary abbreviations
 * (like Apte / Monier-Williams: m., f., n., adj., ind., pron., num., √dhātu, ekākṣara).
 */
export function formatDictPos(entry: KoshaEntry): string {
  const p = (entry.pos || "").toLowerCase();
  if (entry.pillar === "ekakshara") {
    if (p.includes("puṃ-strī")) return "m.f. · ekākṣara";
    if (p.includes("strī")) return "f. · ekākṣara";
    if (p.includes("napuṃ")) return "n. · ekākṣara";
    if (p.includes("triṣu")) return "m.f.n. · ekākṣara";
    if (p.includes("avyaya")) return "ind. · ekākṣara";
    return "ekākṣara";
  }
  if (p.includes("dhātu") || p.includes("verb")) return "√dhātu";
  if (p.includes("avyaya") || p.includes("ind.")) return "ind.";
  if (p.includes("sarvanāma") || p.includes("pron.")) return "pron.";
  if (p.includes("saṅkhyā") || p.includes("num.")) return "num.";
  if (p.includes("viśeṣaṇa") || p.includes("adj.")) return "adj.";
  if (p.includes("puṃ-strī")) return "m.f.";
  if (p.includes("strī") || p.includes("(f.)")) return "f.";
  if (p.includes("napuṃ") || p.includes("(n.)")) return "n.";
  if (p.includes("puṃ") || p.includes("(m.)")) return "m.";
  return entry.pos || "nām.";
}
