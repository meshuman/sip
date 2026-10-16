# Sīpa sitemap

Sīpa sells one-of-a-kind statues, thangkas, Mithila paintings, and stone, wood and metal work from across Nepal. Every piece carries its maker's story and a registry number for life. The site is laid out as a gallery, not a shop. A visitor walks through **rooms**, stops at a **piece**, meets its **maker**, and leaves with a **record** worth sharing.

This file explains every page. Its twin, `sitemap.routes.json`, lists the same routes in a form code can read. Keep the two in sync.

*Sīpa is a working name. Every route below survives a rename.*

---

## Using this with Claude Code

1. Put `SITEMAP.md` and `sitemap.routes.json` in `docs/` at the root of the repo.
2. Export the Sīpa design system into `design-system/`: `tokens.json`, `components/bundle.css`, `fonts/`, and each component's `README.md` and `preview.html`. The design system lives at https://claude.ai/artifact/KpC2uDSXtBdRQAqayuRHVb.
3. Add this to the repo's `CLAUDE.md`:

```md
## Sīpa
- Routes, page purposes and section order: docs/SITEMAP.md and docs/sitemap.routes.json. Do not add, rename or remove a route without updating both files.
- UI: build only from design-system/ tokens and components. The component names in the sitemap (ExhibitionHero, ObjectLabel, CareKit…) are the design system's components; read each one's README before using it.
- Build in phase order: mvp first. Ignore phase-2 and phase-3 routes until asked.
- Every page answers its question in the first sentence of each block (see "Search, answer and generative engines").
- Registry ids: uppercase on screen (PTN-MT-26-0142), lowercase in URLs (ptn-mt-26-0142).
```

4. Ask Claude Code to scaffold the routes from `sitemap.routes.json`, then build page by page in the section order given below.

---

## Conventions

- **URLs** are lowercase and hyphenated, with no trailing slash.
- **Registry ids** look like `PTN-MT-26-0142`. The parts are region, craft, year finished, and a serial that is never reused. In URLs they are lowercase: `ptn-mt-26-0142`.
- **Piece URLs** combine the registry id and a slug: `/pieces/ptn-mt-26-0142-shakyamuni-earth-touching`. The first 15 characters are always the registry id. If the slug changes, the old URL redirects.
- **A piece URL never dies.** When a piece sells, its page stays live as provenance, and the buy button becomes "Recorded to its owner".
- **Short links:** `/p/[registryId]` is for sharing, and `/r/[registryId]` is printed as the QR code on the catalogue card. Both redirect (see Redirects).
- **Filters** live in query parameters (`/pieces?room=buddha&craft=thangka-painting`). Filtered pages are noindex and canonicalise to the unfiltered page.
- **Language:** English at the root and Nepali under `/ne` (phase 2), with the same paths. Every indexable page declares hreflang for both.
- **Currency** is a setting, not part of the URL. It shows NPR, USD or EUR, and checkout charges in the currency shown.
- **Access levels:**
  - **public:** anyone.
  - **signed-in:** any signed-in person.
  - **owner:** the recorded owner of that piece.
  - **order-owner:** the person who placed the order.
  - **staff:** Sīpa staff, in the roles curator, field, fulfilment and admin.

---

## Site tree

Untagged routes are MVP. `[P2]` means phase 2 and `[P3]` means phase 3. `(noindex)` pages are not in search. Access is shown where it is not public.

```
/                                         Home
├── /rooms                                Rooms
│   └── /rooms/[roomSlug]                 Room
├── /commission                           Request a piece made to order
├── /pieces                               All pieces (filters noindex)
│   └── /pieces/[pieceKey]                Piece  ← the heart of the site
├── /makers                               Makers
│   └── /makers/[makerSlug]               Maker
├── /places                               Places
│   └── /places/[placeSlug]               Place
├── /crafts                               Crafts
│   └── /crafts/[craftSlug]               Craft
├── /meaning                              Meaning
│   └── /meaning/[topicSlug]              Meaning topic
├── /care                                 Care guides
│   ├── /care/[material]                  Care guide (wood, metal, stone, painted-cloth, paper)
│   └── /care/refills                     Care refills [P2]
├── /behind-the-scenes                    Behind the scenes
├── /journal                              Journal
│   └── /journal/[postSlug]               Journal story
├── /registry                             Registry (check a number)
│   └── /record/[registryId]              Provenance record (noindex; owner sees owner tools)
├── /about                                Our promise
│   └── /about/how-we-work                How we work
├── /visit                                Visit a workshop [P2]
├── /trade                                For designers and hotels [P3]
├── /contact                              Contact
├── /help                                 Help
│   ├── /help/shipping
│   ├── /help/returns
│   ├── /help/export-and-customs
│   ├── /help/payments
│   └── /help/faq
├── /search                               Search (noindex)
├── /legal/terms · /legal/privacy · /legal/cookies
│
├── /cart                                 Bag (noindex)
├── /checkout                             Checkout (noindex)
│   └── /checkout/complete/[orderId]      Recorded to you (order-owner, noindex)
│
├── /account/sign-in                      Sign in (noindex)
├── /account                              Your account (signed-in, noindex)
│   ├── /account/collection               Your collection
│   │   └── /account/collection/[registryId]            Owner's record (owner)
│   │       └── /account/collection/[registryId]/transfer   Pass it on [P2]
│   ├── /account/orders                   Orders
│   │   └── /account/orders/[orderId]     Order (order-owner)
│   ├── /account/notes                    Your notes to makers
│   └── /account/settings                 Settings
│
└── /studio                               Studio (staff, noindex, internal)
    ├── /studio/pieces                    Pieces
    │   ├── /studio/pieces/new            New piece (issues the registry number)
    │   └── /studio/pieces/[registryId]   Edit piece
    ├── /studio/makers                    Makers
    │   └── /studio/makers/[makerSlug]    Edit maker
    ├── /studio/rooms                     Rooms
    ├── /studio/media                     Media (plates, films, 3D)
    ├── /studio/notes                     Notes (moderate, translate, deliver, record reply)
    ├── /studio/orders                    Orders
    │   └── /studio/orders/[orderId]      Fulfil order
    ├── /studio/print/[registryId]        Print cards
    └── /studio/content                   Content (crafts, meaning, places, care, journal, FAQs)

Short links:  /p/[registryId] → piece   ·   /r/[registryId] → record
System:       /sitemap.xml · /robots.txt · /llms.txt · /og/[kind]/[id].png · /feed.xml · /404 · /500
```

---

## Navigation

**Header (every public page)**
- Left: the Sīpa lockup, linking to `/`.
- Primary links: Rooms · Makers · Places · Learn · Behind the scenes · Journal. "Crafts & meaning" opens a panel with three columns: Crafts (`/crafts`), Meaning (`/meaning`) and Care (`/care`).
- Right: Search · Registry (the seal icon, linking to `/registry`) · Account · Bag (with a count) · language switch (EN / ने, from phase 2).
- The header is sticky and quiet: lokta ground with a hairline below.

**Footer**
- Our promise (`/about`), How we work (`/about/how-we-work`), Visit a workshop (`/visit`, phase 2), For designers and hotels (`/trade`, phase 3).
- Help: Shipping, Returns, Export and customs, Payments, Questions, Contact.
- Care guides (`/care`), Check a registry number (`/registry`).
- Legal links, the currency setting, and the language setting.
- The tagline: "Made by hand in Nepal. Recorded for life."

**Breadcrumbs** appear on every page below the top level, for example Home › Rooms › The lost-wax room › Shakyamuni, earth-touching. They are marked up as BreadcrumbList.

**Phones:** the primary links collapse into a full-screen menu. Search and Bag stay visible.

---

## Page specs

Each spec gives the page's job, then its sections in order, named by design system component. The content order on the piece page also follows `content-model.md` in the design system.

### The gallery

#### Home: `/`
The home page is the gallery's entrance. It shows what Sīpa is in one screen, then invites the visitor into a room.

1. **Opening statement** (ChapterHeader, large): "Made by hand in Nepal. Recorded for life.", followed by the three promises (the piece, the maker, the record) in one line each.
2. **Now hanging** (ExhibitionHero): the featured piece, with a "Enter the room" link.
3. **Rooms** (CollectionRoom, lead piece only): three or four current rooms. One of them is the Buddha room, "From the land of the Buddha's birth".
4. **Meet the makers** (ArtisanByline row): three makers, each with their place.
5. **How every piece is made** (a generic six-step process: working with makers, respecting the culture, delivering with care), then **how a piece reaches you:** the piece, the catalogue card (CatalogueCard), the care kit (CareKit, in its compact form), and the record (RegistrySeal).
   - **Learn** (home, after the process): evergreen answers. The five art forms as cards linking to `/crafts/[craftSlug]`, then links to Meaning, Care and the Journal. In the main navigation this area is called Learn (`/crafts` is its landing page).
6. **Fair pay:** one statement that artisans are paid a fair share of every sale, enough to sustain their livelihood, linking to How we work.
7. **Notes from owners** (MakerNote thread): the latest two public notes, with the makers' replies.
8. **From the journal:** the latest two stories.
9. **Check a registry number:** an inline field that goes to `/record/[registryId]`.

Schema: Organization and WebSite (with a SearchAction). Share card: the default (`og-default.png`).

#### Rooms: `/rooms`
Every room, as a list of room headers, each with its lead piece. Rooms are curated, not filters. Examples:
- "From the land of the Buddha's birth": Buddha figures from across Nepal.
- "The lost-wax room": metal from Patan.
- "Painted in Janakpur": Mithila painting.
- "Thangka".
- "Carved in Bhaktapur": wood.
- "Stone".

#### Room: `/rooms/[roomSlug]`
CollectionRoom, with the room line, a two-sentence wall text and the wall of pieces, then the ShareBar. The wall text is the room's answer-engine summary. An empty room shows "This room is being hung" on the iconometric grid.

#### Behind the scenes: `/behind-the-scenes`
The work behind the work. A filterable list of stories in six topics: Documentation (how a piece is filmed, measured and recorded), Community (discussions with makers, neighbours and teachers), Initiatives (projects run alongside the work), Teamwork (who is in the room), Incidents (what went wrong and what changed) and Stories (why we work the way we do). The first story is shown large. Each story opens in place and names who tells it. The page closes with an invitation to write to us. In the main navigation it sits between Learn and Journal. In the prototype the stories are samples (`src/data/behind.ts`).

#### All pieces: `/pieces`
A plain PieceCard grid (`.sp-gallery`), filtered by room, craft, place, maker, material, price and availability, and sorted by newest or price. Filtered URLs are noindex. This page is for buyers who know what they want. The rooms are for everyone else.

#### Request a piece: `/commission`
For visitors who cannot find what they want. One form: craft, what it should show, size, budget (in the visitor's currency), a needed-by date, where to ship, an optional reference link, name and email. On submit the visitor gets a request number (REQ-26-0001) and a three-step "what happens next": the makers are asked, a maker replies with a sketch, price and time, and the visitor decides. In the prototype requests stay in the browser. Linked from the home page closing band, the footer and All pieces.

#### Piece: `/pieces/[pieceKey]`
The piece page is the digital catalogue. After the object label it tells the story of the piece in three short paragraphs (why it was made, how, and one detail to know), kept in `src/data/stories.ts`. It answers, in order: what it is, what it looks like all round, what it means, who it suits, where to place it, how to care for it, who made it, where the money goes, and whether it is real.

1. **ExhibitionHero:** the plate, the room line, the name, the maker and the days, a two-sentence lead, the RegistrySeal, "Make it yours" with the price, and "Watch the making".
2. **ShareBar:** with the short link `/p/[registryId]`.
3. **ObjectLabel:** material, size, days in the hand, and edition.
4. **3D and stills** (Hotspot): the stage with three to seven labels, the readable list beneath it, then a strip of photographs.
5. **The making** (FilmFrame and MakingTimeline): the two-minute film with chapters, and the days drawn to scale.
6. **What it means** (ChapterHeader and body): links to its `/meaning` topics.
7. **Who it suits:** two to four sentences, such as a meditation space, a new home, or a gift for a teacher.
8. **Where to place it** (PlacementCompass).
9. **In the box and care** (CareKit): the kit for this material and the steps, linking to `/care/[material]`.
10. **The maker** (ArtisanByline): linking to `/makers/[makerSlug]`.
11. **Fair pay:** a short note that the maker is paid a fair share of the sale.
12. **Notes to this maker** (MakerNote thread): up to two public notes, linking to the maker page.
13. **Where it was made** (ChapterHeader, place variant): linking to `/places/[placeSlug]`.
14. **The record** (RegistrySeal and CatalogueCard): explains the card and the registry, linking to `/registry`.
15. **In the same room:** three PieceCards.

States:
- **available:** can be bought.
- **reserved:** held while someone is at checkout, shown as "Being collected", with a short timer.
- **recorded:** sold. The hero shows the filled seal and "Recorded to its owner, [date]", buying is off, and similar available pieces are shown instead.
- **withdrawn:** taken back by the maker. The page stays with a short note.

Schema: Product with Offer (availability follows the state), VisualArtwork (artform, artMedium, artworkSurface, height, width, depth, creator), `identifier` set to the registry number, VideoObject for each film, and BreadcrumbList. Share card: the piece variant, which never shows the price.

### People and places

#### Makers: `/makers`
A grid of ArtisanBylines, grouped by place, with craft filters.

#### Maker: `/makers/[makerSlug]`
1. ArtisanByline, large, with the quote.
2. The full, uncut making film (FilmFrame).
3. The workshop: place, lineage, years at the bench, and "Visit the workshop" (phase 2).
4. Pieces available now (PieceCard).
5. Pieces already recorded, with the owner's city where they consented.
6. A fair-pay note for this maker.
7. Notes from owners, with replies (MakerNote thread, public notes only).
8. ShareBar.

Schema: ProfilePage with Person (name, homeLocation, knowsAbout) and VideoObject. Share card: the maker variant.

#### Places: `/places` and Place: `/places/[placeSlug]`
Each place gets its story in two or three paragraphs, the crafts made there, its makers, its rooms and its pieces. Examples: patan, bhaktapur, kathmandu, janakpur, lumbini, pokhara. More are added as makers join. Schema: Place.

### Learn: crafts, meaning, care, journal

These are the evergreen pages that answer the questions people ask search and AI engines. Each one follows the same pattern: a one-sentence definition, a short history, how to recognise good work, and the pieces and makers connected to it.

| Route | Examples | Schema |
|---|---|---|
| `/crafts/[craftSlug]` | lost-wax-casting, thangka-painting, mithila-painting, newar-woodcarving, stone-carving | Article and DefinedTerm |
| `/meaning/[topicSlug]` | mudras, earth-touching-mudra, five-buddha-families, green-tara, ganesh, mithila-motifs | Article and DefinedTerm |
| `/care/[material]` | wood, metal, stone, painted-cloth, paper | HowTo |
| `/journal/[postSlug]` | field visits, festivals, a year in a workshop | Article |

A craft page includes a generic MakingTimeline for that craft. A meaning page includes "Where to place it" guidance (PlacementCompass) and the pieces that depict the topic. A care page shows the material's CareKit, its steps and the care film.

**Care refills: `/care/refills` [P2].** Owners reorder oil and brushes. If they are signed in, the refills are matched to the pieces they own. Otherwise they enter a registry number.

### The record

#### Registry: `/registry`
Explains the registry number part by part, then offers a single field: "Check a number". A valid number opens `/record/[registryId]`. An unknown number says so plainly and offers contact.

#### Provenance record: `/record/[registryId]`
This is the page the catalogue card's QR code opens (through `/r/[registryId]`). It is noindex, to protect owners.
- **Everyone sees:** the RegistrySeal, an ObjectLabel summary, the maker, the date registered, and the ownership events. Each event shows the owner's first name and city where they consented, and "a private owner" otherwise. Everyone also sees public notes about this piece.
- **The signed-in owner** also sees a banner linking to their owner's record, `/account/collection/[registryId]`.

Share card: the record variant, with the filled seal.

### About, visiting and help

- **`/about`, Our promise:** the three promises, who is behind Sīpa, and how makers are chosen.
- **`/about/makers-share`** is retired and redirects to `/about`. Prices are not split on the site.
- **`/about/how-we-work`:** sourcing, filming, the registry, the catalogue card, the care kit, and export clearance.
- **`/visit` [P2]:** workshops open to travellers, by place, with an "Ask to visit" request. Workshop displays carry a QR code to the maker page.
- **`/trade` [P3]:** an enquiry form for interior designers and hotels.
- **`/help/*`:** shipping, returns, export and customs, payments, and FAQ (FAQPage).
  - **Export and customs** explains that statues usually need a Department of Archaeology clearance before they leave Nepal. Sīpa arranges this, and the page should state the current rules once confirmed.
- **`/search`:** searches pieces, makers, crafts, meaning topics and places. It is noindex.

### Buying

#### Bag: `/cart`
Each piece appears as a compact ObjectLabel with its plate, maker and price, plus a note that it ships with its catalogue card and care kit.

#### Checkout: `/checkout`
One route with five steps:
1. **Details:** email, phone (with WhatsApp as an option), and shipping address.
2. **Gift:** whether it is a gift, the recipient, a message, and whether to hide the price on the packing slip.
3. **Delivery:** the shipping method and the export clearance notice, with the expected timeline.
4. **Payment.**
5. **Review:** each piece with its kit, then "Pay and record it to me".

A piece is reserved while its buyer is in checkout.

#### Recorded to you: `/checkout/complete/[orderId]`
Ownership is recorded at payment. This page plays the seal's one animation: the RegistrySeal draws, with "Recorded to you".

Then it shows:
1. The CatalogueCard that will arrive in the box.
2. The CareKit that ships with it.
3. "Write to [maker]" (MakerNote form).
4. The owner's ShareCard with a ShareBar.
5. What happens next: clearance, packing, shipping and delivery.

### Owners (account)

Sign-in is passwordless, using a one-time code by email, or by phone and WhatsApp.

| Route | What it is |
|---|---|
| `/account` | Overview: your collection, orders in progress, and replies from makers |
| `/account/collection` | Every piece you own, as PieceCards with the filled seal |
| `/account/collection/[registryId]` | **Owner's record** (below) |
| `/account/collection/[registryId]/transfer` [P2] | Pass a piece on as a gift or resale. The new owner accepts by email, and the record adds an event |
| `/account/orders`, `/account/orders/[orderId]` | Order tracking: paid, export clearance, packed (piece, card and kit), shipped, delivered |
| `/account/notes` | Notes you have sent and the makers' replies |
| `/account/settings` | Profile, the public-name-and-city consent, currency, language, and care reminders (P2) |

**Owner's record: `/account/collection/[registryId]`**
1. The RegistrySeal (filled) and the CatalogueCard.
2. **Care:** the CareKit, the care film, and the refill reorder (P2).
3. **Write to the maker** (MakerNote form), with the thread of past notes and replies on this piece.
4. **Share:** the owner ShareCard and the ShareBar.
5. **Documents:** invoice, certificate of authenticity (PDF), and export clearance.
6. **Pass it on** (P2).

The thank-you email sent after delivery links to the note section of this page.

### Studio (internal)

The studio is staff-only, noindex, and disallowed in robots. It can be custom pages or a headless CMS plus a few custom screens. The routes describe the jobs either way.

| Route | Role | Job |
|---|---|---|
| `/studio` | staff | Today's tasks: pieces awaiting media, notes to deliver, orders to clear |
| `/studio/pieces/new` | curator | Issue the next registry number, from the region, craft and year, and pick the maker |
| `/studio/pieces/[registryId]` | curator | All piece fields, meaning, who it suits, placement, care kit, making stages, hotspots, media, price and share split, then preview and publish |
| `/studio/makers/[makerSlug]` | curator | Profile, quote in both languages, portrait and films, consent to show public notes, payouts |
| `/studio/rooms` | curator | Curate rooms: name, wall text, lead piece, order |
| `/studio/media` | curator | Plates, films with chapter marks, 3D models |
| `/studio/notes` | field | Moderate, translate to the maker's language, mark delivered, record the reply |
| `/studio/orders/[orderId]` | fulfilment | Export clearance, print the cards, pack the piece with its card and kit, ship, confirm delivery |
| `/studio/print/[registryId]` | staff | Print-ready catalogue card and care card |
| `/studio/content` | curator | Crafts, meaning topics, places, care guides, journal, FAQs |

---

## Redirects and short links

| From | To | Status | Used for |
|---|---|---|---|
| `/p/[registryId]` | `/pieces/[pieceKey]` | 301 | Share links and printed material |
| `/r/[registryId]` | `/record/[registryId]` | 301 | The QR code on the catalogue card |
| `/pieces/[registryId]` | `/pieces/[pieceKey]` | 301 | A registry id without a slug |
| `/pieces/[registryId]-[oldSlug]` | `/pieces/[pieceKey]` | 301 | A renamed piece |
| Uppercase registry ids | Lowercase | 301 | Ids typed or pasted from the card |

---

## Search, answer and generative engines

- **Sitemaps:** `/sitemap.xml` is an index of `pages.xml`, `pieces.xml` (including recorded pieces), `makers.xml`, `topics.xml` (crafts, meaning, places, care) and `journal.xml`. Each entry carries hreflang for `en` and `ne` once Nepali launches.
- **robots.txt:** allows the gallery. It disallows `/account`, `/checkout`, `/cart`, `/studio`, `/search`, `/record`, and filter parameters.
- **llms.txt:** a short plain-language guide for AI engines. It covers what Sīpa is, how the registry works, how makers are paid, how to verify a piece, and links to `/crafts`, `/meaning`, `/care`, `/makers` and `/registry`.
- **First sentences:** every block on every page opens with one sentence that answers its heading's question outright. That sentence is what engines quote.
- **Facts in fields:** material, size, weight, days, place and registry number always come from structured fields, rendered identically in the ObjectLabel, the structured data, the catalogue card and the share card.
- **Structured data by page:**

| Page | Schema.org |
|---|---|
| Home | Organization, WebSite (SearchAction) |
| Room, Rooms, All pieces | CollectionPage, ItemList, BreadcrumbList |
| Piece | Product, Offer, VisualArtwork, VideoObject, BreadcrumbList |
| Maker | ProfilePage, Person, VideoObject |
| Place | Place |
| Craft, Meaning topic | Article, DefinedTerm |
| Care guide | HowTo, VideoObject |
| Journal story | Article |
| FAQ | FAQPage |

- **Share images:** `/og/[kind]/[id].png` renders the ShareCard component at 1200 × 630 for pieces, makers, rooms and records. Everything else uses `og-default.png`.

---

## Key journeys

1. **From a shared link to an owner:** `/p/[id]` → piece → `/cart` → `/checkout` → `/checkout/complete/[orderId]` (the seal draws, then write to the maker and share).
2. **A traveller at a workshop:** a QR code on the workshop display opens `/makers/[makerSlug]` → a piece → checkout, and it ships home.
3. **An owner with the card in hand:** the card's QR code opens `/r/[id]` → `/record/[id]`. Signed in, they reach the owner's record: the care film, refills and a note to the maker.
4. **A question asked of an AI engine:** "what does the earth-touching gesture mean" → `/meaning/earth-touching-mudra` → the pieces that depict it → a piece.
5. **A gift:** checkout with gift options. The recipient gets the card and kit. Later, the giver passes the record on with `/account/collection/[id]/transfer` (P2).

---

## Phases

- **MVP:**
  - the gallery, people and places, learn (crafts, meaning, care, journal), the registry and record, about, help and legal
  - buying, and the owner account with notes to makers
  - studio core (pieces, makers, rooms, media, notes, orders, print, content)
  - short links, sitemaps, robots, llms.txt and share images
  - English only
- **Phase 2:** Nepali under `/ne`, care refills, passing a piece on, workshop visits, and care reminder emails.
- **Phase 3:** trade.

---

## Entities the pages need

A starting list for the data model. Field names are suggestions.

- **Piece:**
  - registryId, slug, title, status, room(s)
  - maker, place, craft, topics
  - material, dimensions (h, w, d in cm), weightKg, daysInHand, edition
  - price, currency, shareSplit (maker, materials, fund, Sīpa)
  - meaning, suitsWho, placement (facing, height, room, note)
  - careKit (items, steps), makingStages (name, fromDay, toDay, filmTime)
  - media (plates, model3d, hotspots, films with chapters)
- **Maker:** slug, name, nameNe, place, workshop, craft, lineage, yearsAtBench, quote (ne, en), portrait, films, consentPublicNotes, payouts.
- **Room:** slug, number, name, wallText, leadPiece, pieces, order.
- **Place, Craft, MeaningTopic, CareGuide, JournalPost:** slug, title, definition sentence, body, media, links.
- **Owner:** contact, publicName, city, consentShowName, currency, language.
- **ProvenanceEvent:** registryId, type (registered, recorded, transferred), date, owner (by consent).
- **Order:** items, gift, shipping, payment, exportClearance, fulfilmentEvents.
- **Note:** registryId, owner, maker, text, translation, public, moderation, deliveredAt, reply (ne, en).
- **RefillProduct** (P2): material, item, size, price.
