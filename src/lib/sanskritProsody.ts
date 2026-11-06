/**
 * Classical Sanskrit Akṣara & Chandas Prosodic Scanner (Laghu ⏑ / Guru –)
 *
 * Segments a Devanagari headword into Pāṇinian syllables (akṣaras) and computes
 * prosodic weight (1 mātrā = laghu, 2 mātrās = guru) according to Pingala's
 * Chandaḥśāstra ("sānusvāraś ca dīrghaś ca visargī ca भवेद् गुरुः, varṇaḥ saṃyogapūrvaś ca").
 */

export interface AksaraUnit {
  text: string;
  weight: "laghu" | "guru";
  matras: 1 | 2;
}

export interface ProsodyScan {
  primaryWord: string;
  syllables: AksaraUnit[];
  totalMatras: number;
  pattern: string;
}

const INDEPENDENT_VOWELS = new Set([
  "अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ॠ", "ऌ", "ॡ", "ए", "ऐ", "ओ", "औ"
]);

const LONG_INDEPENDENT_VOWELS = new Set([
  "आ", "ई", "ऊ", "ॠ", "ॡ", "ए", "ऐ", "ओ", "औ"
]);

const MATRAS = new Set([
  "ा", "ि", "ी", "ु", "ू", "ृ", "ॄ", "ॢ", "ॣ", "े", "ै", "ो", "ौ"
]);

const LONG_MATRAS = new Set([
  "ा", "ी", "ू", "ॄ", "ॣ", "े", "ै", "ो", "ौ"
]);

const YOGAVAHA = new Set(["ं", "ः", "ँ"]);
const VIRAMA = "्";

function isDevaConsonant(ch: string): boolean {
  const code = ch.charCodeAt(0);
  return code >= 0x0915 && code <= 0x0939;
}

export function scanSanskritProsody(rawDeva: string): ProsodyScan {
  // Extract primary headword before parenthetical gloss or slash
  const cleaned = rawDeva
    .replace(/√/g, "")
    .split(/[\s(/·,]/)[0]
    .replace(/[^ \u0900-\u097F]/g, "")
    .trim();

  if (!cleaned) {
    return { primaryWord: rawDeva, syllables: [], totalMatras: 0, pattern: "" };
  }

  const chars = Array.from(cleaned);
  const rawSyllables: Array<{
    text: string;
    hasLongVowel: boolean;
    hasYogavaha: boolean;
    onsetClusterCount: number;
    endsInHalanta: boolean;
  }> = [];

  let i = 0;
  while (i < chars.length) {
    let onsetCount = 0;
    let buf = "";

    // Collect consonant onset cluster (C + ् + C ...)
    while (i < chars.length && isDevaConsonant(chars[i])) {
      buf += chars[i];
      onsetCount += 1;
      i += 1;
      if (i < chars.length && chars[i] === VIRAMA) {
        buf += VIRAMA;
        i += 1;
        // If word-final halanta (e.g. भगवत्, जगत्, वाक्), attach to previous syllable if one exists
        if (i >= chars.length) {
          if (rawSyllables.length > 0) {
            const prev = rawSyllables[rawSyllables.length - 1];
            prev.text += buf;
            prev.endsInHalanta = true;
            buf = "";
          } else {
            rawSyllables.push({
              text: buf,
              hasLongVowel: false,
              hasYogavaha: false,
              onsetClusterCount: onsetCount,
              endsInHalanta: true
            });
            buf = "";
          }
          break;
        }
      } else {
        // Inherent 'a' or dependent mātrā follows
        break;
      }
    }

    if (!buf && i < chars.length && INDEPENDENT_VOWELS.has(chars[i])) {
      const v = chars[i];
      buf += v;
      i += 1;
      let hasYoga = false;
      while (i < chars.length && YOGAVAHA.has(chars[i])) {
        buf += chars[i];
        hasYoga = true;
        i += 1;
      }
      rawSyllables.push({
        text: buf,
        hasLongVowel: LONG_INDEPENDENT_VOWELS.has(v),
        hasYogavaha: hasYoga,
        onsetClusterCount: 0,
        endsInHalanta: false
      });
      continue;
    }

    if (buf) {
      let hasLong = false;
      let hasYoga = false;
      if (i < chars.length && MATRAS.has(chars[i])) {
        if (LONG_MATRAS.has(chars[i])) hasLong = true;
        buf += chars[i];
        i += 1;
      }
      while (i < chars.length && YOGAVAHA.has(chars[i])) {
        buf += chars[i];
        hasYoga = true;
        i += 1;
      }
      rawSyllables.push({
        text: buf,
        hasLongVowel: hasLong,
        hasYogavaha: hasYoga,
        onsetClusterCount: onsetCount,
        endsInHalanta: false
      });
      continue;
    }

    // Skip any stray non-phonemic character safely
    i += 1;
  }

  // Apply Chandaḥśāstra Guru/Laghu rules, including saṃyogapūrva (before a consonant cluster)
  const syllables: AksaraUnit[] = rawSyllables.map((syl, idx) => {
    const next = rawSyllables[idx + 1];
    const beforeConjunct = next ? next.onsetClusterCount >= 2 : false;
    const isGuru =
      syl.hasLongVowel || syl.hasYogavaha || beforeConjunct || syl.endsInHalanta;
    return {
      text: syl.text,
      weight: isGuru ? "guru" : "laghu",
      matras: isGuru ? 2 : 1
    };
  });

  const totalMatras = syllables.reduce((acc, s) => acc + s.matras, 0);
  const pattern = syllables.map((s) => (s.weight === "guru" ? "–" : "⏑")).join(" ");

  return {
    primaryWord: cleaned,
    syllables,
    totalMatras,
    pattern
  };
}
