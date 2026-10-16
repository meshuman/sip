# Sīpa · सीप

A story-first shop for one-of-a-kind art made by hand in Nepal: statues, thangkas, Mithila paintings and carvings. Every piece is sold with its maker's story, what it means, where it belongs and how to care for it, and a registry number for life.

This repository is the web app (Next.js + React + TypeScript), with the design system, all page content in Markdown, and the sitemap it is built from.

> **Prototype data.** The six makers, thirteen pieces, prices, notes and replies in `src/data/catalog.ts` are invented. Illustrations stand in for photographs, 3D scans and films. Checkout takes no payment. See [What's sample, what's next](#whats-sample-whats-next).

---

## Quick start

You need **Node.js 22** (see `.nvmrc`) and npm.

```bash
npm ci                      # install exact versions from package-lock.json
cp .env.example .env.local  # local settings
npm run dev                 # http://localhost:3000
```

Open the folder in VS Code and accept the recommended extensions (ESLint, Prettier, Playwright). Files format on save.

## Scripts

| Command                           | What it does                                                                                                                         |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `npm run dev`                     | Development server with hot reload                                                                                                   |
| `npm run build`                   | Production build (pre-renders every piece, maker, room and content page)                                                             |
| `npm run start`                   | Serve the production build                                                                                                           |
| `npm run typecheck`               | TypeScript, no output                                                                                                                |
| `npm run lint`                    | ESLint (Next.js core web vitals + TypeScript rules)                                                                                  |
| `npm run format` / `format:check` | Prettier                                                                                                                             |
| `npm run check`                   | typecheck, lint, format check and build: run before you push                                                                         |
| `npm run test:e2e:install`        | Install the Chromium that the end-to-end tests use (once)                                                                            |
| `npm run test:e2e`                | Playwright tests against the production build (`npm run build` first)                                                                |
| `npm run check:content`           | Python check of `content/` against the sitemap and brand rules; rewrites `content/TODO.md` (needs Python 3 and `pip install pyyaml`) |

CI (`.github/workflows/ci.yml`) runs typecheck, lint, format check, build and the Playwright tests on every push to `main` and every pull request.

## Stack

| Layer                | Choice                                                                                 | Where                                       |
| -------------------- | -------------------------------------------------------------------------------------- | ------------------------------------------- |
| Framework            | Next.js 16 (App Router), React 19                                                      | `src/app/`                                  |
| Language             | TypeScript (strict)                                                                    | `tsconfig.json`                             |
| Styling              | Plain CSS from the Sīpa design system: tokens, component classes (`sp-*`), site layout | `src/styles/`                               |
| Fonts                | Hanken Grotesk and Mukta, self-hosted (Devanagari included)                            | `public/fonts/`                             |
| Content              | Markdown with YAML front matter, read at build time (gray-matter + marked)             | `content/`, `src/lib/content.ts`            |
| Catalogue data       | Typed sample data (to be replaced by a CMS or database)                                | `src/data/`                                 |
| State (prototype)    | React context saved to `localStorage`: currency, bag, owned pieces, notes              | `src/store/demo-store.tsx`                  |
| SEO / answer engines | Per-page metadata, canonical URLs, JSON-LD on pieces, `sitemap.xml`, `robots.txt`      | `src/app/**/page.tsx`, `src/app/sitemap.ts` |
| Quality              | ESLint, Prettier, Playwright, GitHub Actions                                           | config files at the root                    |
| Content tooling      | Python 3 content checker                                                               | `scripts/check_content.py`                  |

## Project structure

```
.
├── content/                 Page content in Markdown (rooms, crafts, meaning, places, care, journal, pages)
├── design-system/           The Sīpa design system: tokens, component previews, fonts, brand assets, Tailwind preset
├── docs/
│   ├── SITEMAP.md           Every route, its purpose and section order
│   ├── sitemap.routes.json  The same routes, machine-readable
│   └── prototype/           The single-file investor prototype (open in a browser)
├── e2e/                     Playwright tests
├── public/                  Fonts and brand files served as-is
├── scripts/                 Content checker
└── src/
    ├── app/                 Routes (one folder per URL, as in docs/sitemap.routes.json)
    ├── components/
    │   ├── ui/              Primitives: ChapterHeader, Crumbs, Icon, Plate, Title, ContentPage
    │   ├── layout/          Header, footer, prototype bar, demo path, toasts
    │   ├── piece/           PieceCard, ObjectLabel, RegistrySeal, CareKit, Placement,
    │   │                    CatalogueCard, Stage (look closer), Making (film + timeline), BuyBar, ShareCard
    │   ├── maker/           ArtisanByline, NotesThread, NoteForm
    │   ├── home/            Journey (the 38-day scroll story), RoomCard
    │   ├── forms/           RegistryForm, DemoForm
    │   └── views/           Client views for cart, checkout, owner's record, search, refills
    ├── data/                Types and the sample catalogue
    ├── lib/                 catalog (lookups, URLs), content (Markdown loader), format, art (placeholder illustrations)
    ├── store/               Demo store
    └── styles/              tokens.css, components.css (design system), site.css (layout)
```

## Routes

Routes follow `docs/sitemap.routes.json`. Built so far:

- **Gallery:** `/`, `/rooms`, `/rooms/[roomSlug]`, `/pieces` (`?craft=` filter), `/pieces/[pieceKey]`
- **People and places:** `/makers`, `/makers/[makerSlug]`, `/places`, `/places/[placeSlug]`, `/visit`
- **Learn:** `/crafts`, `/crafts/[craftSlug]`, `/meaning`, `/meaning/[topicSlug]`, `/care`, `/care/[material]`, `/care/refills`, `/journal`, `/journal/[postSlug]`
- **Registry:** `/registry`, `/record/[registryId]`, short links `/p/[registryId]` (share) and `/r/[registryId]` (QR on the card)
- **Buying (demo):** `/cart`, `/checkout`, `/checkout/complete/[orderId]`, `/account/collection`, `/account/collection/[registryId]`
- **Company and help:** `/about`, `/about/how-we-work`, `/trade`, `/contact`, `/help/*`, `/legal/*`, `/search`

Piece URLs combine the registry number and a slug: `/pieces/ptn-mt-26-0142-shakyamuni-earth-touching`. Any other slug after a valid number redirects to the right one.

Not built yet (see the sitemap): sign-in and account settings, orders and notes history, passing a piece on, the staff studio (`/studio/*`), Nepali pages under `/ne`.

## Content

Everything a visitor reads lives in `content/` as Markdown. Each file's front matter holds structured fields (names, definitions, stages, care steps, SEO descriptions); the body is the page text.

- Open questions for the team are marked `{{TODO: …}}`. In development they show on the page as highlighted **To confirm** notes; production builds hide them. `content/TODO.md` lists them all.
- For the investor demo, some TODOs are filled with sample answers from `src/lib/sample-fills.ts` (shipping times, contact details, trade terms). Set `SAMPLE_CONTENT=false` in `.env.local` to see the real gaps. Replace each sample in the Markdown file itself, then delete it from `sample-fills.ts`.

## Design system

`design-system/` is the source of the look: read `design-system/README.md` and `USAGE.md`, and each component's `README.md` and `preview.html` under `design-system/components/`. The app uses:

- `src/styles/tokens.css`: colours (light and dark), type, spacing (from `design-system/tokens.css`, with font paths pointing at `/fonts/`)
- `src/styles/components.css`: the component classes (copy of `design-system/components/bundle.css`)
- `src/styles/site.css`: the site's own layout, the dark "sal wood" band, the journey, chapter bar and buy bar

If you change a component's look, change it in the design system first, then copy `bundle.css` across.

## What's sample, what's next

| In the prototype                                   | Replace with                                                                                                                                               |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/data/catalog.ts` (invented makers and pieces) | A CMS or database (for example Sanity, Payload or Postgres) returning the same types as `src/data/types.ts`                                                |
| Drawn illustrations (`src/lib/art`, `<Plate />`)   | Photographs via `next/image` in `src/components/ui/Plate.tsx`; per-piece video for `<Making />`; a 3D model (for example `<model-viewer>`) for `<Stage />` |
| `localStorage` demo store                          | Cart, auth and registry services; record ownership only after payment succeeds                                                                             |
| Demo checkout                                      | Payment provider for cards, eSewa and Khalti, via a server route handler                                                                                   |
| Demo forms                                         | Server actions or route handlers that send email and store requests                                                                                        |
| Notes and simulated replies                        | A notes service with the field team's translation and reading workflow                                                                                     |
| Placeholder QR pattern                             | A real QR code for `/r/[registryId]` on the printed card                                                                                                   |
| Search over a small in-memory index                | A search service once the catalogue grows                                                                                                                  |

Prices are stored in Nepali rupees and shown in US dollars by default. Rupees are written "Rs" (never ₹). USD and EUR use illustrative rates in `src/lib/format.ts`.

## Deploy

Any host that runs Next.js works. On Vercel: import the repository, set `NEXT_PUBLIC_SITE_URL` to the production URL, and deploy. The build reads `content/` from the repository, so content changes go live with each deploy.

## Push to GitHub

```bash
git init -b main
git add -A
git commit -m "Sīpa web app"
git remote add origin https://github.com/<owner>/<repo>.git
git push -u origin main
```

## Search, answer and AI engines

- **Set `NEXT_PUBLIC_SITE_URL`** to the live address before deploying. Canonical links, the sitemap, `robots.txt`, `llms.txt`, social images and structured data all use it.
- **Every page** has its own title, a description under 155 characters, a self-referencing canonical, and a social image. Piece pages use the piece's photograph.
- **Structured data** (schema.org JSON-LD, helpers in `src/lib/seo.ts`): Organization and WebSite on every page; BreadcrumbList wherever a breadcrumb shows; Product and VisualArtwork on pieces; Article with a DefinedTerm on craft, meaning and care pages; FAQPage on `/help/faq`; CollectionPage lists on rooms, All pieces and Behind the scenes; ProfilePage on makers; Place on places.
- **Filtered lists** (`/pieces?craft=…`) are `noindex` and point their canonical at `/pieces`.
- **`/llms.txt`** is served from `content/system/llms.txt`, a plain-language guide for AI answer engines. Keep it in step with the site.
- **Answer-first writing:** each page opens with a one-sentence answer, and craft pages list their sources.
