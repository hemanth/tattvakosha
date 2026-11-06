---
license: mit
task_categories:
  - translation
  - text-retrieval
  - question-answering
  - feature-extraction
language:
  - sa
  - en
tags:
  - sanskrit
  - dictionary
  - lexicon
  - vedanta
  - dvaita
  - madhvacarya
  - amarakosha
  - panini
  - dhatupatha
  - nirukta
  - philology
  - indic
pretty_name: Tattvakośa (तत्त्वकोशः) — Scholarly Sanskrit Lexicon & Classical Mini-Dictionary
size_categories:
  - n<1K
configs:
  - config_name: default
    data_files:
      - split: train
        path: data/train-00000-of-00001.parquet
---

# Tattvakośa — तत्त्वकोशः

**688** curated Sanskrit lexical entries combining a **complete classical Sanskrit mini-dictionary (*Śabdakośa*)** with **canonical philosophical definitions (*Lakṣaṇas*)**, **verbal roots (*Dhātupāṭha*)**, **Vedic etymologies (*Niruktis*)**, and the **51-syllable *Ekākṣara Mātṛkā* matrix** (`अ` to `क्ष`).

Every headword carries Devanagari, IAST transliteration, nominal stem or verbal root (`stem`), grammatical category (`pos`), bilingual English lookup glosses (`english_glosses`), phonetic search aliases (`phonetic_aliases`), a verbatim Sanskrit *lakṣaṇa* or *kośa/sūtra* citation (`lakshana_deva` + `lakshana_iast`), word-by-word constituent breakdown (`padaccheda`), scholarly exposition, and primary textual provenance (`source_*`).

## Four Lexicon Pillars

| Pillar | Entries | Scope |
| :--- | ---: | :--- |
| `kosha` (*Śabdakośa*) | 404 | Foundational Sanskrit mini-dictionary across cosmos, nature, body, living beings, mind, speech, family, society, ethics, 70 essential *Pāṇinīya* verbal roots (*dhātus*), pronouns, numerals (`1–1000`), adjectives, and indeclinables (*avyayas*) |
| `lakshana` (*Tattva & Śāstra Lakṣaṇa*) | 154 | Exact definitions of reality, epistemology (*pramāṇa*), categories (*padārtha*), *Vedāṅgas*, *Purāṇa/Itihāsa*, and *sādhana* from Śrī Madhvācārya's *Sarvamūla Granthāḥ*, Śrī Jayatīrtha, and Śrī Padmanābha Sūri |
| `nirukti` (*Vaidika & Nāma Nirukti*) | 60 | Root-by-root Vedic and theological etymologies (*vyutpatti*) of *Praṇava*, *Vyāhṛtis*, Vedic deities, *Daśāvatāras*, and Supreme Names from Yāska's *Nirukta* and *Sarvamūla* commentaries |
| `ekakshara` (*Ekākṣara Mātṛkā & Amarakośa Nānārtha*) | 70 | Complete 51-syllable Sanskrit alphabet (`अ`–`क्ष`) + 19 canonical *Amarakośa Nānārtha* monosyllables (`गौः`, `भूः`, `मा`, `श्रीः`, `धीः`, `गीः`, `वाक्`, `सत्`, `चित्`, `खम्`…), each stratified across 4 semantic registers (*Parama-mukhya Viṣṇu*, *Tāratamya Devas*, *Amarakośa Nominal*, *Vyākaraṇa/Avyaya*) |

## Quick Start

```python
from datasets import load_dataset

ds = load_dataset("gnumanth/tattvakosha", split="train")
for row in ds.select(range(5)):
    print(row["deva"], row["iast"], "->", row["english_glosses"], "|", row["lakshana_iast"])
```

Query directly with DuckDB:

```sql
SELECT deva, iast, pos, english_glosses, lakshana_deva, source_grantha
FROM 'hf://datasets/gnumanth/tattvakosha/data/train-00000-of-00001.parquet'
WHERE pillar = 'kosha'
LIMIT 20;
```

## Domain Distribution (17 Domains, Updated 2026-11-06)

| Domain | Entries |
| :--- | ---: |
| `Dhātupāṭha & Kriyā (Verbal Roots)` | 70 |
| `Kuṭumba, Samāja & Nīti (Life, Society & Ethics)` | 60 |
| `Prakṛti & Loka (Nature & Cosmos)` | 60 |
| `Pramāṇa & Logic` | 52 |
| `Vidyā, Vāk & Kalā (Knowledge & Speech)` | 48 |
| `Śarīra & Jīva-Jāti (Body & Beings)` | 48 |
| `Avyaya & Nipāta (Indeclinables & Particles)` | 46 |
| `Padārtha & Metaphysics` | 40 |
| `Viśeṣaṇa (Qualities & Adjectives)` | 40 |
| `Bhagavan-Nāma Nirukti` | 36 |
| `Tattva & Ontology` | 36 |
| `Vyañjana Ekākṣara (क–क्ष)` | 35 |
| `Sarvanāma & Saṅkhyā (Pronouns & Numerals)` | 32 |
| `Sādhana & Mukti` | 26 |
| `Vaidika Nirukti` | 24 |
| `Amarakośa Ekākṣara-Nānārtha` | 19 |
| `Svara Ekākṣara (अ–अः)` | 16 |

## Schema

| Column | Type | Description |
| :--- | :--- | :--- |
| `index` | `int32` | Sequential lexicon index (`1..688`) |
| `id` | `string` | Stable URL-safe entry slug (e.g. `jeeva`, `surya`, `bhu-dhatu`, `ekakshara-a`) |
| `deva` | `string` | Headword in Devanagari script |
| `iast` | `string` | Headword in ISO-15919 / IAST transliteration |
| `stem` | `string` | Nominal *prātipadika* stem, verbal *dhātu* root, or *avyaya* base |
| `pos` | `string` | Sanskrit & English grammatical category (e.g. `puṃliṅga (m.)`, `dhātuḥ · 1P (verb root)`, `avyayam (indeclinable)`) |
| `pillar` | `string` | `"lakshana"`, `"kosha"`, `"ekakshara"`, or `"nirukti"` |
| `domain` | `string` | Semantic or *śāstric* domain classification |
| `english_glosses` | `list<string>` | Concise English dictionary headword equivalents for bilingual lookup |
| `phonetic_aliases` | `list<string>` | Casual romanized & inflected search aliases |
| `lakshana_deva` | `string` | Verbatim Sanskrit *lakṣaṇa*, *Amarakośa* line, *Dhātupāṭha* entry, or *nirukti* in Devanagari |
| `lakshana_iast` | `string` | IAST transliteration of `lakshana_deva` |
| `meaning_short` | `string` | Concise scholarly definition |
| `meaning_deep` | `string` | Extended philosophical, grammatical, and usage exposition |
| `ekakshara_senses` | `list<struct<register, form_deva, form_iast, gloss, samanvaya>>` | Four-register *Amarakośa* & Mādhva *Sarvaśabdasamanvaya* multi-sense breakdown for *Ekākṣara* entries |
| `padaccheda` | `list<struct<deva, iast, gloss>>` | Word-by-word / morpheme-by-morpheme Sanskrit analysis |
| `secondary_lakshana_deva` | `string` | Optional corroborating *śāstra* quotation (Devanagari) |
| `secondary_lakshana_iast` | `string` | Optional corroborating *śāstra* quotation (IAST) |
| `secondary_lakshana_translation` | `string` | English translation of corroborating quotation |
| `secondary_lakshana_source` | `string` | Citation for corroborating quotation |
| `source_grantha` | `string` | Primary Sanskrit source text (IAST) |
| `source_grantha_deva` | `string` | Primary Sanskrit source text (Devanagari) |
| `source_author` | `string` | Traditional author (*ācārya* / lexicographer / grammarian) |
| `source_locator` | `string` | Adhyāya, sūtra, kāṇḍa, or verse locator |
| `related_ids` | `list<string>` | Cross-referenced `id`s within the lexicon |

## Primary Classical Sources

- **Śrī Madhvācārya** — *Sarvamūla Granthāḥ* (*Viṣṇutattvavinirṇayaḥ*, *Tattvasaṅkhyānam*, *Tattvavivekaḥ*, *Tattvodyotaḥ*, *Pramāṇalakṣaṇam*, *Kathālakṣaṇam*, *Tantrasārasaṅgrahaḥ*, *Brahmasūtrabhāṣyam*, *Anuvyākhyānam*, *Ṛgbhāṣyam*, *Bhagavadgītābhāṣyam*, *Mahābhāratatātparyanirṇayaḥ*)
- **Śrī Jayatīrtha** — *Pramāṇapaddhatiḥ*, *Nyāyasudhā*, *Tattvasaṅkhyāna-ṭīkā*
- **Śrī Padmanābha Sūri** — *Padārthasaṅgrahaḥ*
- **Amarasiṃha** — *Nāmaliṅgānuśāsanam* (*Amarakośa*)
- **Pāṇini** — *Aṣṭādhyāyī* & *Pāṇinīya Dhātupāṭha*
- **Yāska** — *Nirukta*

## License

MIT © [Hemanth HM](https://h3manth.com)
