#!/usr/bin/env python3
"""
Build & publish the `gnumanth/tattvakosha` dataset to Hugging Face Hub:
- `dataset/data/train-00000-of-00001.parquet` (zstd-compressed PyArrow Parquet)
- `dataset/tattvakosha.jsonl` (flat HF-friendly JSONL)
- `dataset/tattvakosha.csv`
- `dataset/README.md` (Hugging Face Dataset Card)

Usage:
  python3 scripts/publish-hf.py --build-only
  python3 scripts/publish-hf.py
"""
from __future__ import annotations

import argparse
import json
import os
import sys
from datetime import datetime, timezone
from pathlib import Path

import pyarrow as pa
import pyarrow.parquet as pq

ROOT_DIR = Path(__file__).resolve().parent.parent
SRC_JSON = ROOT_DIR / "src" / "data" / "tattvakosha.json"
DATASET_DIR = ROOT_DIR / "dataset"
PARQUET_PATH = DATASET_DIR / "data" / "train-00000-of-00001.parquet"
JSONL_PATH = DATASET_DIR / "tattvakosha.jsonl"
CSV_PATH = DATASET_DIR / "tattvakosha.csv"
CARD_PATH = DATASET_DIR / "README.md"
REPO_ID = os.environ.get("HF_DATASET_REPO", "gnumanth/tattvakosha")


def get_hf_token() -> str | None:
    for key in ("HF_TOKEN", "HUGGING_FACE_HUB_TOKEN", "HUGGINGFACE_TOKEN"):
        tok = os.environ.get(key, "").strip()
        if tok:
            return tok
    try:
        from huggingface_hub import get_token

        tok = get_token()
        if tok:
            return tok.strip()
    except Exception:
        pass
    tok_file = Path.home() / ".cache" / "huggingface" / "token"
    if tok_file.exists():
        val = tok_file.read_text(encoding="utf-8").strip()
        if val:
            return val
    return None


def size_category(n_rows: int) -> str:
    if n_rows < 1000:
        return "n<1K"
    if n_rows < 10000:
        return "1K<n<10K"
    return "10K<n<100K"


def flatten_entry(e: dict) -> dict:
    sec = e.get("secondaryLakshana") or {}
    src = e.get("source") or {}
    return {
        "index": int(e["index"]),
        "id": str(e["id"]),
        "deva": str(e["deva"]),
        "iast": str(e["iast"]),
        "stem": str(e["stem"]),
        "pos": str(e.get("pos") or ""),
        "pillar": str(e["pillar"]),
        "domain": str(e["domain"]),
        "english_glosses": [str(g) for g in (e.get("englishGlosses") or [])],
        "phonetic_aliases": [str(a) for a in (e.get("phoneticAliases") or [])],
        "lakshana_deva": str(e["lakshanaDeva"]),
        "lakshana_iast": str(e["lakshanaIast"]),
        "meaning_short": str(e["meaningShort"]),
        "meaning_deep": str(e["meaningDeep"]),
        "ekakshara_senses": [
            {
                "register": str(s.get("register", "")),
                "form_deva": str(s.get("formDeva", "")),
                "form_iast": str(s.get("formIast", "")),
                "gloss": str(s.get("gloss", "")),
                "samanvaya": str(s.get("samanvaya", "")),
            }
            for s in (e.get("ekaksharaSenses") or [])
        ],
        "padaccheda": [
            {
                "deva": str(p.get("deva", "")),
                "iast": str(p.get("iast", "")),
                "gloss": str(p.get("gloss", "")),
            }
            for p in (e.get("padaccheda") or [])
        ],
        "secondary_lakshana_deva": str(sec.get("deva") or ""),
        "secondary_lakshana_iast": str(sec.get("iast") or ""),
        "secondary_lakshana_translation": str(sec.get("translation") or ""),
        "secondary_lakshana_source": str(sec.get("source") or ""),
        "source_grantha": str(src.get("grantha") or ""),
        "source_grantha_deva": str(src.get("granthaDeva") or ""),
        "source_author": str(src.get("author") or ""),
        "source_locator": str(src.get("locator") or ""),
        "related_ids": [str(r) for r in (e.get("related") or [])],
    }


def build_dataset_card(meta: dict, rows: list[dict]) -> str:
    n_rows = len(rows)
    pillars = meta.get("pillarCounts", {})
    domains = meta.get("domainCounts", {})
    gen_date = datetime.now(timezone.utc).strftime("%Y-%m-%d")

    domain_lines = "\n".join(
        f"| `{dom}` | {cnt} |"
        for dom, cnt in sorted(domains.items(), key=lambda kv: (-kv[1], kv[0]))
    )

    return f"""---
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
  - {size_category(n_rows)}
configs:
  - config_name: default
    data_files:
      - split: train
        path: data/train-00000-of-00001.parquet
---

# Tattvakośa — तत्त्वकोशः

**{n_rows:,}** curated Sanskrit lexical entries combining a **complete classical Sanskrit mini-dictionary (*Śabdakośa*)** with **canonical philosophical definitions (*Lakṣaṇas*)**, **verbal roots (*Dhātupāṭha*)**, **Vedic etymologies (*Niruktis*)**, and the **51-syllable *Ekākṣara Mātṛkā* matrix** (`अ` to `क्ष`).

Every headword carries Devanagari, IAST transliteration, nominal stem or verbal root (`stem`), grammatical category (`pos`), bilingual English lookup glosses (`english_glosses`), phonetic search aliases (`phonetic_aliases`), a verbatim Sanskrit *lakṣaṇa* or *kośa/sūtra* citation (`lakshana_deva` + `lakshana_iast`), word-by-word constituent breakdown (`padaccheda`), scholarly exposition, and primary textual provenance (`source_*`).

## Four Lexicon Pillars

| Pillar | Entries | Scope |
| :--- | ---: | :--- |
| `kosha` (*Śabdakośa*) | {pillars.get("kosha", 0)} | Foundational Sanskrit mini-dictionary across cosmos, nature, body, living beings, mind, speech, family, society, ethics, 70 essential *Pāṇinīya* verbal roots (*dhātus*), pronouns, numerals (`1–1000`), adjectives, and indeclinables (*avyayas*) |
| `lakshana` (*Tattva & Śāstra Lakṣaṇa*) | {pillars.get("lakshana", 0)} | Exact definitions of reality, epistemology (*pramāṇa*), categories (*padārtha*), *Vedāṅgas*, *Purāṇa/Itihāsa*, and *sādhana* from Śrī Madhvācārya's *Sarvamūla Granthāḥ*, Śrī Jayatīrtha, and Śrī Padmanābha Sūri |
| `nirukti` (*Vaidika & Nāma Nirukti*) | {pillars.get("nirukti", 0)} | Root-by-root Vedic and theological etymologies (*vyutpatti*) of *Praṇava*, *Vyāhṛtis*, Vedic deities, *Daśāvatāras*, and Supreme Names from Yāska's *Nirukta* and *Sarvamūla* commentaries |
| `ekakshara` (*Ekākṣara Mātṛkā & Amarakośa Nānārtha*) | {pillars.get("ekakshara", 0)} | Complete 51-syllable Sanskrit alphabet (`अ`–`क्ष`) + 19 canonical *Amarakośa Nānārtha* monosyllables (`गौः`, `भूः`, `मा`, `श्रीः`, `धीः`, `गीः`, `वाक्`, `सत्`, `चित्`, `खम्`…), each stratified across 4 semantic registers (*Parama-mukhya Viṣṇu*, *Tāratamya Devas*, *Amarakośa Nominal*, *Vyākaraṇa/Avyaya*) |

## Quick Start

```python
from datasets import load_dataset

ds = load_dataset("{REPO_ID}", split="train")
for row in ds.select(range(5)):
    print(row["deva"], row["iast"], "->", row["english_glosses"], "|", row["lakshana_iast"])
```

Query directly with DuckDB:

```sql
SELECT deva, iast, pos, english_glosses, lakshana_deva, source_grantha
FROM 'hf://datasets/{REPO_ID}/data/train-00000-of-00001.parquet'
WHERE pillar = 'kosha'
LIMIT 20;
```

## Domain Distribution ({len(domains)} Domains, Updated {gen_date})

| Domain | Entries |
| :--- | ---: |
{domain_lines}

## Schema

| Column | Type | Description |
| :--- | :--- | :--- |
| `index` | `int32` | Sequential lexicon index (`1..{n_rows}`) |
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
"""


def main() -> int:
    parser = argparse.ArgumentParser(description="Build and publish Tattvakosha HF dataset")
    parser.add_argument(
        "--build-only",
        action="store_true",
        help="Generate Parquet, JSONL, and HF Dataset Card locally without uploading",
    )
    parser.add_argument(
        "--repo-id",
        default=REPO_ID,
        help=f"Target Hugging Face dataset repository (default: {REPO_ID})",
    )
    args = parser.parse_args()

    if not SRC_JSON.exists():
        print(f"Error: {SRC_JSON} not found. Run `npm run build:data` first.", file=sys.stderr)
        return 1

    payload = json.loads(SRC_JSON.read_text(encoding="utf-8"))
    meta = payload["meta"]
    entries = payload["entries"]
    flat_rows = [flatten_entry(e) for e in entries]

    PARQUET_PATH.parent.mkdir(parents=True, exist_ok=True)

    schema = pa.schema(
        [
            ("index", pa.int32()),
            ("id", pa.string()),
            ("deva", pa.string()),
            ("iast", pa.string()),
            ("stem", pa.string()),
            ("pos", pa.string()),
            ("pillar", pa.string()),
            ("domain", pa.string()),
            ("english_glosses", pa.list_(pa.string())),
            ("phonetic_aliases", pa.list_(pa.string())),
            ("lakshana_deva", pa.string()),
            ("lakshana_iast", pa.string()),
            ("meaning_short", pa.string()),
            ("meaning_deep", pa.string()),
            (
                "ekakshara_senses",
                pa.list_(
                    pa.struct(
                        [
                            ("register", pa.string()),
                            ("form_deva", pa.string()),
                            ("form_iast", pa.string()),
                            ("gloss", pa.string()),
                            ("samanvaya", pa.string()),
                        ]
                    )
                ),
            ),
            (
                "padaccheda",
                pa.list_(
                    pa.struct(
                        [
                            ("deva", pa.string()),
                            ("iast", pa.string()),
                            ("gloss", pa.string()),
                        ]
                    )
                ),
            ),
            ("secondary_lakshana_deva", pa.string()),
            ("secondary_lakshana_iast", pa.string()),
            ("secondary_lakshana_translation", pa.string()),
            ("secondary_lakshana_source", pa.string()),
            ("source_grantha", pa.string()),
            ("source_grantha_deva", pa.string()),
            ("source_author", pa.string()),
            ("source_locator", pa.string()),
            ("related_ids", pa.list_(pa.string())),
        ]
    )

    table = pa.Table.from_pylist(flat_rows, schema=schema)
    pq.write_table(table, PARQUET_PATH, compression="zstd")

    # Verify round-trip read
    rt = pq.read_table(PARQUET_PATH)
    assert rt.num_rows == len(flat_rows), "Parquet row count mismatch!"

    # Write flat HF-schema JSONL as well
    JSONL_PATH.write_text(
        "\n".join(json.dumps(r, ensure_ascii=False) for r in flat_rows) + "\n",
        encoding="utf-8",
    )

    card_md = build_dataset_card(meta, flat_rows)
    CARD_PATH.write_text(card_md, encoding="utf-8")

    pq_kb = PARQUET_PATH.stat().st_size / 1024
    jsonl_kb = JSONL_PATH.stat().st_size / 1024
    csv_kb = CSV_PATH.stat().st_size / 1024 if CSV_PATH.exists() else 0.0

    print(
        f"Built HF dataset bundle in {DATASET_DIR}:\n"
        f"  - {PARQUET_PATH.relative_to(ROOT_DIR)} ({rt.num_rows} rows, {pq_kb:.1f} KB, zstd)\n"
        f"  - {JSONL_PATH.relative_to(ROOT_DIR)} ({jsonl_kb:.1f} KB)\n"
        f"  - {CSV_PATH.relative_to(ROOT_DIR)} ({csv_kb:.1f} KB)\n"
        f"  - {CARD_PATH.relative_to(ROOT_DIR)}"
    )

    if args.build_only:
        return 0

    token = get_hf_token()
    if not token:
        print(
            "\nHugging Face authentication required to push to Hub:\n"
            "  Run `hf auth login` (or set `HF_TOKEN=hf_...`) and re-run:\n"
            f"  python3 scripts/publish-hf.py --repo-id {args.repo_id}",
            file=sys.stderr,
        )
        return 2

    from huggingface_hub import CommitOperationAdd, HfApi

    api = HfApi(token=token)
    print(f"[1/2] Ensuring dataset repo {args.repo_id} exists on Hugging Face Hub...")
    api.create_repo(repo_id=args.repo_id, repo_type="dataset", private=False, exist_ok=True)

    ops = [
        CommitOperationAdd(path_in_repo="README.md", path_or_fileobj=CARD_PATH.read_bytes()),
        CommitOperationAdd(
            path_in_repo="data/train-00000-of-00001.parquet",
            path_or_fileobj=PARQUET_PATH.read_bytes(),
        ),
        CommitOperationAdd(
            path_in_repo="tattvakosha.jsonl",
            path_or_fileobj=JSONL_PATH.read_bytes(),
        ),
        CommitOperationAdd(
            path_in_repo="tattvakosha.json",
            path_or_fileobj=SRC_JSON.read_bytes(),
        ),
    ]
    if CSV_PATH.exists():
        ops.append(
            CommitOperationAdd(
                path_in_repo="tattvakosha.csv",
                path_or_fileobj=CSV_PATH.read_bytes(),
            )
        )

    print(f"[2/2] Uploading {len(flat_rows)} entries (Parquet + JSONL + CSV + JSON + Card)...")
    api.create_commit(
        repo_id=args.repo_id,
        repo_type="dataset",
        commit_message=f"Publish Tattvakośa v{meta.get('version', '2.0.0')} ({len(flat_rows)} Sanskrit entries)",
        operations=ops,
    )

    print(f"Published dataset -> https://huggingface.co/datasets/{args.repo_id}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
