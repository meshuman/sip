# Using the Sīpa design system

Open `index.html` in a browser to see everything: colours, type, every component in light and dark, and every asset. It works offline.

## What is in this folder

| Path | What |
|---|---|
| `README.md` | The brand book: voice, colour, type, layout, imagery, the registry number |
| `content-model.md` | What every piece page says, in what order, and how it is marked up for search and answer engines |
| `tokens.json` | The source of truth for colour (light and dark), type, spacing, radius and shadow |
| `tokens.css` | The same tokens as CSS variables, with `@font-face` rules and `.t-<style>` type classes. Generated from `tokens.json` |
| `tailwind.preset.cjs` | A Tailwind v3 preset pointing at the CSS variables |
| `tailwind.theme.css` | The same for Tailwind v4 (`@theme`) |
| `components/bundle.css` | The styles for every component, using the `sp-` class prefix |
| `components/<Name>/README.md` | A component's guidelines: what it is for and what content it needs |
| `components/<Name>/preview.html` | A working example of the component's markup. Add `?theme=dark` to the URL to see dark |
| `fonts/` | Hanken Grotesk and Mukta as woff2, with their Open Font Licences |
| `assets/` | Logos, icons, patterns, placeholder plates, the default share image and the catalogue card print template. Each group has a README |

## Setting up a page

```html
<link rel="stylesheet" href="/design-system/tokens.css">
<link rel="stylesheet" href="/design-system/components/bundle.css">
<body class="sp"> ... </body>
```

- `class="sp"` on the body (or any wrapper) sets the ground, ink and text face.
- **Theme:** dark follows the visitor's system setting. To force a theme, set `data-theme="light"` or `data-theme="dark"` on `<html>`.
- **Markup:** copy each component's markup from its `preview.html`, then replace the example content.
- **Frameworks:** the components are plain HTML and CSS, so they port directly to React, Vue or Svelte. Keep the class names and the element order.

## Components

- **Story:** ChapterHeader, ExhibitionHero, FilmFrame, Hotspot, MakingTimeline
- **Gallery:** CollectionRoom, PieceCard
- **The piece:** CareKit, CareNote, ObjectLabel, PlacementCompass
- **The maker:** ArtisanByline, MakerNote, MakersShare
- **The record:** CatalogueCard, RegistrySeal
- **Sharing:** ShareBar, ShareCard
- **Actions:** Button

## Rules worth repeating

- **Colour jobs:** malachite is the only action colour. Gilt only ever means *recorded* (the seal, provenance). Lapis means place. Sindur is a small signal, never a block.
- **Corners:** square everywhere (radius-0). The only circle is the halo of the seal and the maker portrait.
- **Separation:** hairlines and ground changes, not shadows. The one shadow belongs to the catalogue card.
- **Text faces:** registry numbers, prices, dimensions and dates use the registry face. Running text never does.
- **Compound names:** wrap them in `.sp-nb` so they never break at the hyphen.
- **Example content:** makers, prices, shares and notes in the previews are examples, not real records.

Generated from the Sīpa design system: https://claude.ai/artifact/KpC2uDSXtBdRQAqayuRHVb
