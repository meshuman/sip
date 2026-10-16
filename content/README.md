# Sīpa content

This folder holds the words for every page in `docs/SITEMAP.md`, ready for the build. There is one file per route, and every file maps its sections to the Sīpa design system components.

*Sīpa is a working name. To rename, replace `Sīpa` and `सीप` across this folder and in `site/site.yml`.*

## Folder map

| Path | What it holds |
|---|---|
| `site/site.yml` | Brand name, navigation, footer, and every reusable UI string (buttons, labels, states, errors) |
| `site/emails.yml` | Transactional emails: order, recorded, shipped, delivered, note delivered, maker replied |
| `pages/` | One file per fixed route (home, indexes, about, help, legal, buying, account, studio) |
| `templates/` | The fixed copy for routes built from data: piece, maker, room, place, craft, meaning topic, care guide, journal story, record |
| `rooms/`, `crafts/`, `meaning/`, `places/`, `care/`, `journal/` | Launch entries for those collections, written in full |
| `_samples/` | One complete piece and one complete maker, to show every field filled. **Not for publishing.** |
| `system/` | `llms.txt` and `robots.txt`, ready to serve |

## File format

Every file is Markdown with YAML frontmatter.

```yaml
---
id: home                 # the route id in docs/sitemap.routes.json
route: /                 # the URL
status: ready            # ready · needs-input (has TODOs) · sample (never publish)
title: …                 # the page's visible name or H1
seo:
  title: …               # <title>, at most 60 characters
  description: …         # meta description, at most 155 characters
share: default           # which ShareCard variant: default · piece · maker · room · record · none
schema: [Organization]   # schema.org types to render as JSON-LD
sections:                # the page, top to bottom
  - component: ChapterHeader      # a design system component, or Prose / Form / List
    label: …                      # props, named as in the component's README
    source: rooms(featured)       # data the section reads, when it reads any
---
Markdown body: long prose. A section with `component: Prose` and `body: true` is where the body renders.
```

**Reading the fields:**
- **Components:** names are the design system's: ExhibitionHero, ObjectLabel, RegistrySeal, ArtisanByline, ChapterHeader, PlacementCompass, CareKit, CareNote, MakingTimeline, FilmFrame, Hotspot, MakersShare, MakerNote, CatalogueCard, CollectionRoom, PieceCard, ShareCard, ShareBar and Button. `Prose`, `Form` and `List` are plain page elements.
- **`source:`** names the data a section reads, in the same words as the sitemap's `data` field. The copy around it (headings, empty states) is written here.
- **`{curly}` words** are filled from data at render time, for example `{maker.name}` or `{piece.daysInHand}`.
- **`{{TODO: …}}`** marks a fact only Sīpa can supply, such as a policy, a figure or a contact detail. A file with any TODO has `status: needs-input`. Search for `{{TODO` before launch.

## Writing rules (from the brand book)

- **First sentence:** the first sentence of every block answers its heading outright. That is the line search and answer engines quote.
- **Facts, not adjectives:** use days, centimetres, names and places.
- **Words we never use:** exquisite, stunning, timeless, curated, authentic, exotic, mystical, "handcrafted with love", "ethically sourced", unlock, elevate, journey.
- **Tradition stays tradition:** placement guidance says what is customary. It never promises luck, wealth or health.
- **Registry ids:** uppercase on screen (`PTN-MT-26-0142`), lowercase in URLs.
- **Origin lines:** "From the land of the Buddha's birth" may go on any piece made in Nepal. "Made in Lumbini" goes only on pieces made in Lumbini.
- **Example content:** the makers, pieces, prices and notes in `_samples/` are invented to show the format. Replace them with real records.

## Language

English is written here. Nepali (`/ne`) comes in phase 2. When it does, add a `ne:` block beside each English string, or mirror this folder as `content-ne/`. Maker quotes are already kept in both languages.
