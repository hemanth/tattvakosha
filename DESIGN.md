# Design System: Tattvakośa (तत्त्वकोशः)

Synthesized via `design-taste-frontend` (`achromatic-ledger`, seed `1445695982`), `ui-ux-pro-max` (*Swiss Modernism 2.0*, WCAG AA Accessibility & Touch Guidelines), and `stitch-design-taste`.

## 1. Visual Theme & Atmosphere
An open-plane, Swiss-ledger scholarly workbench designed for sustained philological reading and 24,000 Hz Sanskrit voice recitation (`Density: 5 · Variance: 6 · Motion: 4`). Chrome recedes completely into low-chroma stone and crisp white sheets separated by 1px structural hairlines, reserving the single chromatic hue exclusively for the live acoustic & Pāṇinian prosody signal.

## 2. Color Palette & Roles
- **Palm-Stone Ground** (`#F4F3F1` light / `#0A0A0A` dark) — Primary canvas and open-plane left navigation rail (`< 8%` saturation; zero yellow-cream)
- **Pure Sheet Surface** (`#FFFFFF` light / `#141414` dark) — Primary lexicon sheet, headword queue, and scholarly pramāṇa panels
- **Tonal Active Pill** (`#E4E3DF` light / `#262626` dark) — Active navigation row and selected headword state
- **Structural Hairline** (`#E2E1DE` light / `#262626` dark) — 1px card and panel boundaries (zero resting drop shadows)
- **Oxidized Carbon Ink** (`#0A0A0A` light / `#F5F5F5` dark) — Primary text and near-black primary CTA (`19.2:1` contrast)
- **Graphite Secondary** (`#4F4F4F` light / `#B8B8B8` dark) — Gloss notes, IAST metadata, and labels (`7.8:1` contrast)
- **Manuscript Sindūra** (`#9A3412` light / `#E0724F` dark) — Restrained rubrication hue (`< 1%` screen share) dedicated solely to live prosody mātrā bars and active playback indicators; all primary and pronunciation buttons use solid **Oxidized Carbon Ink** (`#141413` / `#0A0A0A`)

## 3. Typography Rules
- **UI, IAST & Tabular Numerals:** `Geist` (`400, 500, 600, 700`) — Native Latin-Extended coverage for all Sanskrit IAST diacritics (`ā ī ū ṛ ś ṣ ṇ ṅ ñ ṃ ḥ`) and `font-variant-numeric: tabular-nums` on every count and index
- **Classical Devanagari:** `Tiro Devanagari Sanskrit` (`400`) — Set for Devanagari headwords (`34–36px`) and canonical śāstric citations
- **Strict Ceiling:** 2 typefaces total; sentence-case headings throughout (`24px` workspace `h1`, `16px` section `h2`); `66ch` maximum reading measure

## 4. Component Stylings
- **Signature Element (Acoustic Prosody Strip):** Computes real Pāṇinian *akṣara* segmentation and Pingala *Chandaḥśāstra* *laghu* (`1 mātrā`) / *guru* (`2 mātrās`) weights in `#9A3412` sindūra bars alongside carbon-ink 24 kHz Ninada neural speech controls
- **Buttons:** Flat fills, bimodal tight radii (`8px` panels / `6px` controls / `4px` tags), tactile `1px` active press, zero outer glows or resting shadows
- **Navigation Shell:** `240px` open-plane sidebar on desktop folding cleanly into a `48px` sticky top bar and slide-over navigation sheet below `960px`

## 5. Layout Principles
- **Closed 1440px Grid Arithmetic:** `240px (Rail) + 24px + 272px (Headwords) + 16px + 516px (Lexicon Sheet) + 16px + 332px (Pramāṇa Rail) + 24px = 1440px` — zero dead right-hand canvas strip
- **Mobile Collapse:** Single-column layout with `16px` outer gutters, `16px` search inputs (no iOS auto-zoom), collapsible headword switcher, and `44px` audio tap targets

## 6. Anti-Patterns (Banned)
- No yellow-cream + terracotta/rust AI-assistant palette
- No violet/indigo/neon gradients or glassmorphism
- No tiny uppercase tracked micro-labels or eyebrows above headings
- No resting `box-shadow` on cards or buttons
- No emojis as UI icons; all icons use uniform outline SVGs
