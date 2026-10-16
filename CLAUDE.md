# Sīpa — notes for Claude Code

Story-first shop for one-of-a-kind art made by hand in Nepal. Next.js 16 (App Router), React 19, TypeScript strict, plain CSS from the design system. See README.md for the full picture.

## Commands

- `npm run dev` — dev server
- `npm run check` — typecheck, lint, format check, build. Run before committing.
- `npm run test:e2e` — Playwright, against the production build (`npm run build` first)
- `npm run check:content` — validate `content/` and regenerate `content/TODO.md`

## Sīpa

- Routes, page purposes and section order: docs/SITEMAP.md and docs/sitemap.routes.json. Do not add, rename or remove a route without updating both files.
- UI: build only from design-system/ tokens and components. The component names in the sitemap (ExhibitionHero, ObjectLabel, CareKit…) are the design system's components; read each one's README in design-system/components/ before using it. Their React versions live in src/components/.
- Build in phase order: mvp first. Ignore phase-2 and phase-3 routes until asked.
- Every page answers its question in the first sentence of each block (see "Search, answer and generative engines" in docs/SITEMAP.md).
- Registry ids: uppercase on screen (PTN-MT-26-0142), lowercase in URLs (ptn-mt-26-0142). Piece URLs are `/pieces/<registry-id>-<slug>`; use `paths.*` in src/lib/catalog.ts, never hand-build URLs.

## Code conventions

- Server components by default. Add `'use client'` only for state, effects or browser APIs; keep client components small and leaf-level.
- Content comes from `content/*.md` via `src/lib/content.ts` (server only). Never hard-code page copy that belongs in content.
- Catalogue data shapes are in `src/data/types.ts`. The sample data in `src/data/catalog.ts` is invented; keep it clearly marked.
- Money: prices are stored in Nepali rupees and shown in US dollars by default (`$686`). Format with `formatMoney` / `useDemo().money`; rupees read "Rs 1,40,000". Never use ₹.
- Styling: use the `sp-*` classes and tokens (`var(--malachite)` etc.). No new colours or fonts outside tokens.css. Page layout CSS goes in src/styles/site.css.
- Images: `<Plate piece={...} />` is the single place a piece's picture is drawn. Swap illustrations for photographs there.
- Copy: plain, sentence case, active voice, no hype words (see the banned list in scripts/check_content.py).
- Accessibility: one h1 per page, labelled form fields, visible focus, respect prefers-reduced-motion.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
