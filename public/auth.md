# Authentication & Access Policy

Tattvakośa (`https://h3manth.com/fun/tattvakosha/`) is a public, open-access scholarly Sanskrit lexicon and API.

- **Authentication**: None required (`NoAuth`). No API keys, OAuth bearer tokens, or cookies are needed.
- **CORS**: All read endpoints and static JSON/JSONL datasets emit `Access-Control-Allow-Origin: *`.
- **Content Signals**: `ai-train=yes, search=yes, ai-input=yes`.
- **Rate Guidance**: Please keep automated `/api/search` and `/api/entry` requests to `<= 10` requests/second per client; for bulk corpus ingestion, download `/fun/tattvakosha/data/tattvakosha.json` or pull `gnumanth/tattvakosha` from Hugging Face Hub.
