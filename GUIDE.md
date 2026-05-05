# Portfolio Variants on GitHub Pages
## `dynkim.github.io/LBE` · `dynkim.github.io/game`

---

## How it works

GitHub Pages serves `LBE/index.html` when someone visits `/LBE`, and `game/index.html` when someone visits `/game`. The trick is one line in each sub-page's `<head>`:

```html
<base href="/">
```

This makes every relative asset path (`profile.jpg`, `laoly-01.jpg`, etc.) resolve from the root of your domain — so all your images and videos load correctly even though the HTML file sits in a subfolder.

The JS in all three files is identical. It simply reads `window.location.pathname` to know which variant it's running as, then re-sorts the projects array to put the relevant work first.

---

## Folder structure to create

```
dynkim.github.io/          ← your existing repo root
├── index.html             ← modify this (Step 1)
├── LBE/
│   └── index.html         ← create this (Step 2)
├── game/
│   └── index.html         ← create this (Step 2)
├── profile.jpg
├── laoly-01.jpg
└── ... (all your existing assets stay here — do not move them)
```

---

## Step 1 — Modify your root `index.html`

Make these three additions to your existing `index.html`.

### A. Variant detection — paste at the very top of your `<script>` block

```js
/* ================================================
   PORTFOLIO VARIANT
   Reads the URL path so the same code serves
   /LBE, /game, and the default root portfolio.
   ================================================ */
const VARIANT = (function () {
  const p = window.location.pathname.replace(/\/$/, '').toLowerCase();
  if (p === '/lbe')  return 'lbe';
  if (p === '/game') return 'game';
  return 'default';
})();
```

### B. Tag your projects — add a `tags` field to every project in your data array

Each project gets one or more tags: `'lbe'`, `'game'`, or both.

```js
// Example — match these to your actual project objects:

// LBE projects (venue / location-based experience work)
{ id: 'laoly',    tags: ['lbe'],  ... }   // LA Olympics venues
{ id: 'stadium',  tags: ['lbe'],  ... }   // Inglewood / SoFi / LA Convention
{ id: 'deloitte', tags: ['lbe'],  ... }   // Deloitte onboarding
{ id: 'planet',   tags: ['lbe'],  ... }   // Planetarium WIP

// Game projects (video game environment art)
{ id: 'fallout',  tags: ['game'], ... }   // Fallout
{ id: 'oko',      tags: ['game'], ... }   // Oko / Magoko
{ id: 'sg',       tags: ['game'], ... }   // sg- series
{ id: 'vt',       tags: ['game'], ... }   // vt- series
{ id: 'spwz',     tags: ['game'], ... }   // spwz- series
{ id: 'jb',       tags: ['game'], ... }   // jb- series
{ id: 'cp',       tags: ['game'], ... }   // cp- series

// Projects that fit both  
{ id: 'sn',  tags: ['lbe', 'game'], ... }
{ id: 'em',  tags: ['lbe', 'game'], ... }
```

### C. Variant-aware sorting — paste this function right before your grid-rendering code

```js
/* Sort a projects array so the current variant's work comes first.
   Projects without a matching tag are moved to the end, not hidden. */
function variantSort(projects) {
  if (VARIANT === 'default') return projects;
  return [...projects].sort((a, b) => {
    const aMatch = (a.tags || []).includes(VARIANT);
    const bMatch = (b.tags || []).includes(VARIANT);
    if (aMatch && !bMatch) return -1;
    if (!aMatch && bMatch) return  1;
    return 0;
  });
}
```

Then wrap the array you pass to your grid renderer with `variantSort(...)`:

```js
// Before (example — your actual call may look slightly different):
renderGrid(document.getElementById('project-grid'), PROJECTS_PRIMARY);

// After:
renderGrid(document.getElementById('project-grid'), variantSort(PROJECTS_PRIMARY));
```

---

## Step 2 — Create the two sub-page files

Both files are **exact copies of your updated `index.html`** with one addition in `<head>`: the `<base>` tag. That single line is all that differs.

### `LBE/index.html`

Copy your entire updated `index.html`, then add this as the **first line inside `<head>`**:

```html
<base href="/">
```

So your `<head>` starts like:

```html
<head>
  <base href="/">          <!-- ADD THIS LINE — makes all assets load from root -->
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Studio — 3D Environment Art</title>
  ...
```

### `game/index.html`

Identical — same copy of `index.html`, same `<base href="/">` as the first line in `<head>`.

That's it. The variant detection JS reads `window.location.pathname`, which will be `/LBE` or `/game` in the sub-pages, and sorts automatically.

---

## Step 3 — Push to GitHub

```bash
git add LBE/index.html game/index.html index.html
git commit -m "Add LBE and game portfolio variants"
git push
```

GitHub Pages will pick it up within ~1 minute.

---

## Your three live URLs

| URL | What it shows |
|---|---|
| `dynkim.github.io` | Default order (all projects) |
| `dynkim.github.io/LBE` | LBE work first, then game work |
| `dynkim.github.io/game` | Game work first, then LBE work |

---

## Keeping them in sync

All three files share the same code — the only structural difference is `<base href="/">` in the sub-pages. When you add a new project:

1. Update the data array in root `index.html` (add the `tags` field)
2. Copy the updated `<script>` block into `LBE/index.html` and `game/index.html`

If this copy-paste becomes annoying, the next step would be extracting your projects data into a `projects.js` file and loading it with `<script src="/projects.js">` — but that's optional and not needed now.

---

## Optional: page title that changes per variant

In your `<script>`, after the `VARIANT` detection block:

```js
if (VARIANT === 'lbe') {
  document.title = 'Doyeon Kim — LBE & Venue Environments';
} else if (VARIANT === 'game') {
  document.title = 'Doyeon Kim — Game Environment Art';
}
```
