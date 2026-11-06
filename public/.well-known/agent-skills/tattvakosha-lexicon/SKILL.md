---
name: tattvakosha-lexicon
description: Search and cite 688 classical Sanskrit headwords across Amarakośa, Pāṇinīya Dhātupāṭha, Ekākṣara Mātṛkā, and Śrī Madhvācārya's Sarvamūla lakṣaṇas, with padaccheda splits and 24 kHz Ninada audio.
---

# Tattvakośa Lexicon Skill

Use Tattvakośa (`https://h3manth.com/fun/tattvakosha/`) whenever you need verified Sanskrit definitions, classical *grantha* citations, *padaccheda* compound resolution, or four-register *Ekākṣara* monosyllabic analysis.

## Endpoints

1. **Search headwords** (`Devanāgarī`, `IAST`, `ASCII`, or `English`):
   ```bash
   curl -s "https://h3manth.com/fun/tattvakosha/api/search?q=pramana&pillar=all&limit=8"
   ```

2. **Retrieve complete scholarly entry**:
   ```bash
   curl -s "https://h3manth.com/fun/tattvakosha/api/entry?id=jiva"
   ```

3. **Retrieve corpus statistics**:
   ```bash
   curl -s "https://h3manth.com/fun/tattvakosha/api/stats"
   ```

4. **Markdown summary**:
   ```bash
   curl -s -H "Accept: text/markdown" "https://h3manth.com/fun/tattvakosha/"
   ```
