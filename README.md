# tattvakosha

Classical Sanskrit lexicon with 688 cited headwords from Amarakośa, Ekākṣara Mātṛkā, and Śrī Madhvācārya's Sarvamūla sūtras, recited in-browser at 24 kHz.

```bash
npm install
npm run dev
```

## Quick start

```ts
import dataset from "./public/data/tattvakosha.json" with { type: "json" };
import { buildSearchIndex, searchKosha } from "./src/lib/sanskritSearch";
import { scanSanskritProsody } from "./src/lib/sanskritProsody";

const index = buildSearchIndex(dataset.entries);
const [hit] = searchKosha(index, "jiva");

console.log(hit.deva, hit.source.grantha, hit.source.locator); // जीवः Viṣṇutattvavinirṇayaḥ VTN 1.81
console.log(scanSanskritProsody(hit.deva)); // 2 akṣaras · 4 mātrās
```

`searchKosha()` matches Devanāgarī, IAST, phonetic ASCII, and English glosses. `scanSanskritProsody()` weighs every akṣara as *laghu* or *guru* per Pingala's *Chandaḥśāstra*.

## 24 kHz Sanskrit audio

```ts
import { speakSanskritWithNinada } from "./src/lib/ninadaTts";

await speakSanskritWithNinada("प्रज्ञापूर्वकव्यापारवत्त्वं जीवत्वम् ।", "jiva");
```

Runs `gnumanth/ninada` v5.1 ONNX directly in a Web Worker + AudioWorklet with the 24 kHz Puruṣa (`पुं`) male voice.

## Agent-ready API

```bash
curl -s -H "Accept: text/markdown" https://h3manth.com/fun/tattvakosha/
curl -s "https://h3manth.com/fun/tattvakosha/api/search?q=pramana&limit=5"
curl -s "https://h3manth.com/fun/tattvakosha/api/entry?id=ekakshara-a"
```

Ships RFC 9727 `/.well-known/api-catalog`, OpenAPI 3.1, A2A `agent-card.json`, MCP `server-card.json`, Agent Skills v0.2.0, `llms.txt`, and browser WebMCP tools.

## Build

```bash
npm run build
```

Recompiles all 688 entries from `scripts/sources/*.mjs` into JSON/JSONL/CSV and bundles the static app into `dist/`.

## Related

- [Live app](https://h3manth.com/fun/tattvakosha/)
- [Dataset (`gnumanth/tattvakosha`)](https://huggingface.co/datasets/gnumanth/tattvakosha)
- [Voice model (`gnumanth/ninada`)](https://huggingface.co/gnumanth/ninada)

## License

MIT © [Hemanth.HM](https://h3manth.com)
