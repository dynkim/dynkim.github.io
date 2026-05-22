# dynkim.github.io — Project Guide

A bilingual (EN/KO) portfolio site for a 3D environment artist, served via GitHub Pages. Static HTML/CSS/JS — no build step (yet — see [NOTION_CMS_PLAN.md](NOTION_CMS_PLAN.md) for the planned Notion CMS integration).

---

## Repository structure

```
dynkim.github.io/
├── index.html              ← root portfolio (default variant)
├── LBE/index.html          ← /LBE variant (uses <base href="/">)
├── game/index.html         ← /game variant (uses <base href="/">)
├── data.js                 ← all project content (text, image filenames, variants)
├── i18n.js                 ← language toggle + t() helper
├── rendering.js            ← home grid + project detail rendering
├── navigation.js           ← view switching, back button, routing helpers
├── routing.js              ← hash-based deep linking
├── scroll.js               ← scroll-driven UI behaviour
├── main.js                 ← boot sequence
├── index.css               ← all styling
├── images/                 ← all images & video poster frames
├── videos/                 ← all .mp4 files
├── PDF/                    ← resume PDFs
├── GUIDE.md                ← this file (EN)
├── GUIDE.ko.md             ← Korean version of this guide
├── NOTION_CMS_PLAN.md      ← roadmap for Notion CMS integration
└── README.md
```

---

## Core systems

### 1. Bilingual content (i18n)

Every user-facing string is stored as a `{ en, ko }` object. The `t()` helper in `i18n.js` resolves the current language with English fallback. Plain strings pass through unchanged.

```js
name: { en: "Vintage Telephone", ko: "빈티지 전화기" }
```

The language toggle in the top nav writes `currentLang` and re-renders. `html[lang]` is set to `en`/`ko` so CSS can branch on language (Korean uses Pretendard, English uses Instrument Serif).

### 2. Variant system

Defined in `data.js` via the `VARIANTS` constant. Four variants exist:

| Variant | URL trigger | Purpose |
|---|---|---|
| `default` | `dynkim.github.io` | All projects, balanced ordering |
| `vfx` | hostname/path/hash contains `vfx` | VFX & animation focus |
| `lbe` | hostname/path/hash contains `lbe` | Location-based experience focus |
| `game` | hostname/path/hash contains `game` | Game environment art focus |

Each variant specifies:
- `row1` / `row2` — **explicit ordered lists of project slugs** (not tag-based filtering)
- `label1` / `label2` — bilingual section labels for each row

Detection (`detectVariant()` in `data.js`) checks hostname, path, hash, then `sessionStorage` fallback. Once detected, the variant persists across navigation in the same session.

### 3. Project data

Two arrays in `data.js`:

- `PROJECTS` — primary work (own projects)
- `PROJECTS_SECONDARY` — studio/agency work (Magnopus, etc.)

`ALL_PROJECTS` merges both for lookup by slug. Splitting into two arrays prevents URL hash collisions and lets the home page render two distinct rows.

Each project has:

```js
{
  id: "wizard-of-oz-sphere",          // unique slug, used in URL hash
  name: { en: "...", ko: "..." },
  tag: { en: "...", ko: "..." },
  wip: false,
  description: { en: "...", ko: "..." },
  year: "2025",
  client: "Sphere Entertainment",     // optional
  externalPartner: "Google, Warner Bros.",
  status: { en: "Released", ko: "출시됨" },
  software: "Unreal 5 · OKO · Maya",
  role: { en: "...", ko: "..." },
  tags: { en: [...], ko: [...] },
  thumb: "spwz-01.jpg",               // home card image
  thumbVideo: "spwz-thumb.mp4",       // optional, replaces thumb
  images: [ /* gallery items, see below */ ]
}
```

### 4. Gallery item types

Inside `images: [...]` each entry is one of six shapes. The renderer in `rendering.js:67` switches on the keys present.

| Type | Required keys | Notes |
|---|---|---|
| Image | `src` | Optional `caption: { en, ko }`, `narrow: true` |
| Video | `video`, `src` (poster) | Autoplays muted/looped. Optional `caption`, `narrow` |
| Pair | `pair: [item, item]` | Two side-by-side images/videos |
| Text (plain) | `text: { en: "...", ko: "..." }` | Paragraph(s). Strings or arrays of strings. |
| Text (labeled block) | `text: { en: "...", ko: { title, items, bulleted } }` | Section label + line-broken items. See §5 |
| Summary | `summary: true` + `text` | Pull-quote variant with serif quotation marks |
| Link | `link`, `label: { en, ko }` | Optional `poster`, `aspect` for video-card style |

### 5. Labeled blocks (new)

Used to break long Korean project narratives into clearly delimited sections (프로젝트 배경 / Task / Action / Result, etc.).

```js
{
  text: {
    en: "In August 2025, Sphere Entertainment presented...",
    ko: {
      title: "프로젝트 배경",
      items: [
        "Sphere Entertainment, Google, Warner Bros., Magnopus는...",
        "공연의 시뮬레이션·리허설·비주얼 테스트를..."
      ],
      bulleted: false     // true only for summary-style blocks
    }
  }
}
```

Renders as a centred accent-coloured title above a list of line-broken items with no bullets. When `summary: true` + `bulleted: true` are combined, the block gets the large serif quotation marks frame and accent bullet markers.

**Currently used by**: `wizard-of-oz-sphere` only. Other secondary-row projects still use plain `text.ko` strings with inline `라벨:` prefixes — they will be migrated incrementally.

CSS classes: `.gallery-text.labeled-block`, `.labeled-title`, `.labeled-items`, `.labeled-items.bulleted` ([index.css:1050+](index.css)).

---

## Variant pages (`/LBE`, `/game`)

GitHub Pages serves `LBE/index.html` at `/LBE` and `game/index.html` at `/game`. Each is **a copy of the root `index.html`** with one extra line in `<head>`:

```html
<base href="/">
```

This makes every relative asset path resolve from the domain root, so images and scripts load correctly even though the HTML sits in a subfolder.

`detectVariant()` reads `window.location.pathname`, finds `lbe` or `game`, and picks the matching `VARIANTS` entry.

### Keeping variant pages in sync

When you change `index.html`, you usually need to **mirror the same change into `LBE/index.html` and `game/index.html`**. The only intentional difference is the `<base>` tag. If this becomes painful, the long-term fix is rendering all three from a single source (e.g., the Notion build pipeline).

---

## Adding a new project

1. **Add image/video files** to `images/` and `videos/`. Use a consistent slug prefix (e.g., `myproj-01.jpg`).
2. **Append a project object** to `PROJECTS` (or `PROJECTS_SECONDARY`) in `data.js`. Copy the closest existing project as a template.
3. **Add the slug** to the appropriate `row1`/`row2` arrays in `VARIANTS` for every variant where you want it to appear.
4. **For secondary (studio) projects**, write the gallery as text + image blocks. Korean text can use labeled block format from day one.

---

## Converting a project to labeled-block format

For Korean text blocks currently written as `"프로젝트 배경: 문장1. 문장2."`:

1. Split the string at the first `:` to get the label + body.
2. Split the body by `. ` (period + space) into separate sentences.
3. Replace `text.ko` with an object:

```js
text: {
  en: "...existing English paragraph...",
  ko: {
    title: "프로젝트 배경",
    items: [
      "문장1.",
      "문장2."
    ]
  }
}
```

The English side stays as a plain string. The renderer detects the object shape automatically and switches to labeled-block rendering.

---

## Local development

No build tool. Open `index.html` directly in a browser, or run any static server:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

To test variants locally: `http://localhost:8000/#lbe`, `#game`, `#vfx`. The hash-based detection picks them up without subfolder copies.

---

## Deployment

Push to `main`. GitHub Pages rebuilds in ~1 minute.

```bash
git add -A
git commit -m "..."
git push
```

---

## Roadmap

- **Notion CMS integration** — see [NOTION_CMS_PLAN.md](NOTION_CMS_PLAN.md). Will replace hand-edited `data.js` with a Notion-backed source synced via GitHub Actions.
- **Progressive labeled-block migration** — currently only `wizard-of-oz-sphere` uses labeled blocks. Other secondary projects will be converted one at a time.
