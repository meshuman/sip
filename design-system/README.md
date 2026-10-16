# Sīpa

**Made by hand in Nepal. Recorded for life.**

Sīpa (सीप) is the Nepali word for skill: the kind that lives in the hands and passes from parent to child. Sīpa sells one-of-a-kind statues, thangkas, Mithila paintings, and stone, wood and metal work from across Nepal. Every piece carries its maker's name, the place it was made, the days it took, and a registry number that stays with it for life.

*Sīpa is a working name. Every rule here survives a rename.*

The brand has three promises, and every page should keep all three visible:

1. **The piece.** What it is, what it means, how to place it, how to care for it.
2. **The maker.** A named person in a named place, filmed at work, paid a stated share.
3. **The record.** A registry number, a printed catalogue card, and an owner's record that follows the piece if it is gifted or resold.

**What ships with every piece:** the piece, its printed catalogue card, and a care kit matched to the material. A wooden piece, for example, comes with a flask of wood oil, a soft brush and a care card with usage instructions. Owners should never have to go looking for how to look after what they bought.

---

## Where this system comes from

We studied how a few institutions make objects feel worth keeping, and took one habit from each. Nothing is copied. Every element was redrawn for Nepali craft.

| Source | What they do well | What Sīpa takes |
|---|---|---|
| Craft prize exhibitions run by luxury houses | Each object gets a full page with film, stills and a written response from someone outside the brand | The piece page as a small exhibition, with one written response per piece |
| Apothecary and fragrance houses | Short, precise, literary copy; product detail written like a recipe | The voice: specific nouns, no adjectives doing the work of facts |
| Auction houses | Lot numbers, provenance chains, condition notes, measured dimensions | The registry number and the provenance record |
| Museum object labels | Maker, place, date, material, dimensions, credit line, in a fixed order | The object label component and its field order |
| Thangka iconometry | Painters lay a proportion grid before drawing a deity | The hairline grid on covers and the halo rule |

The palette and type come from the materials themselves: lokta paper, malachite and lapis pigment, fire-gilding, Patan basalt, sal wood.

---

## Content fundamentals

### Voice

Sīpa speaks like a knowledgeable friend who grew up near the workshops. It is calm, exact and warm. It never sounds like a luxury brand trying to sound expensive.

- **Facts carry the feeling.** Write "Thirty-eight days in the hand," not "painstakingly handcrafted."
- **Name people and places.** Write "Sunita Jha, Janakpur," not "a local artisan."
- **Give numbers.** Days, centimetres, kilograms, generations, the artisan's share in rupees.
- **Explain the meaning plainly.** Iconography is taught, not mystified. "The right hand touches the earth. It is the moment the Buddha calls the earth to witness his awakening."
- **Present tradition as tradition.** Placement guidance says what is customary. It never promises luck, wealth or healing.
- **Use short sentences and the active voice.**

### Words we avoid

exquisite, stunning, timeless, curated, authentic (show the record instead), exotic, mystical, handcrafted with love, ethically sourced (state the share instead), unlock, elevate, journey (as a metaphor).

### Words we use

made by, in the hand, recorded, registry, one of one, lost-wax, fire-gilded, mineral pigment, lokta, workshop, the maker's share.

### Examples

| Instead of | Write |
|---|---|
| Exquisite handcrafted Buddha statue | Shakyamuni, earth-touching. Copper, fire-gilded. Patan, 2026. |
| Supports local artisans | ₹38,400 of this price goes to Raju Shakya's workshop. |
| Brings peace and positive energy | Traditionally placed facing east, at or above eye level, in a clean, quiet room. |
| Easy care | Dust weekly with a soft dry brush. Keep away from water and polish. |
| Authentic Mithila art | Painted by Sunita Jha in Janakpur with rice-paste and natural pigments on handmade paper. |

### Bilingual

Nepali (Devanagari) appears as a second voice, not a translation of every line. Use it for the brand name, chapter names and the maker's own words. Both the display and text families cover Devanagari, so there is no fallback mismatch.

### Origin lines

Place lines must be literally true for the piece in front of the reader. Write "From the land of the Buddha's birth" for pieces made anywhere in Nepal. Write "Made in Lumbini" only when the maker works in Lumbini.

---

## Visual foundations

### Colour

The ground is **lokta**: the cool, fibrous grey of handmade lokta paper. It is deliberately not cream. **Ink** and **stone** carry text. Three pigment colours each have one job:

- **malachite** is action, a warm orange (#DA6D42): buttons, focus, the active chapter and the highlighted word in a heading. It is the only colour that means "you can press this". Small text and links use **malachite-ink** (#B4502B) so they stay readable.
- **gilt** is provenance: the registry seal, the halo rule, the ownership mark. Use gilt-ink when gilt has to be read as text.
- **lapis** is place: maps, region names, the "where it was made" chapter.

**Sindur** is a signal only, for "one of one", "last piece" and errors. It is never a block.

Dark theme is **sal wood**. It is not a separate brand, just the same pigments on oiled wood. Every token is defined in both themes.

### Type

- **One typeface: Hanken Grotesk.** Headings, body, labels and registry numbers all use it, so the site reads as one voice. Headings are weight 500 with slightly tight spacing; body is 400; leads 400. Mukta supplies Devanagari. Registry numbers, prices and dates use tabular figures so digits line up.

Running text stays near 64 characters a line. Labels are capitals at 0.12em tracking. All three families ship with this system as font files and cover both Latin and Devanagari, so nothing depends on a font host.

Compound piece names never break at the hyphen. Wrap them in `.sp-nb`: "Shakyamuni, <span class="sp-nb">earth-touching</span>".

### Layout

- Pages read as **acts**, separated by space-7 (120px): *The piece → The maker → The place → The record.* Chapters inside an act are separated by space-6.
- **Square corners by default** (radius-0), like a gallery label. The only circle is the halo (radius-halo), and it always means *recorded*: the registry seal and the artisan portrait.
- **Hairlines, not shadows.** The one shadow (shadow-lift) belongs to the catalogue card when it is shown as a physical object.
- Images are full-bleed or set in a single column with generous lokta around them. There are no rounded image cards and no image grids of more than three across.

### Imagery

- **Pieces** are shot on lokta or raw stone, in daylight from one side, with a scale reference in one frame per set.
- **Makers** are shot in their own workshop, hands first and face second. There are no staged smiles at the camera.
- **Film** for hero pieces covers the whole making, start to finish, cut to three lengths: 20 seconds for the hero, 2 minutes for the piece page, and the full record on the maker page. For other pieces, use one film per technique and maker plus a 10-second clip of that piece.
- **3D** models are photogrammetry scans on a lokta-deep stage. Hotspot labels use the registry-s style.

### Iconography

Line icons, 1.5px stroke, square caps, drawn on a 24px grid. Icons come from the subject itself: a compass for placement, a brush for care, a hand for the maker, a seal for the record, and a butter lamp for the altar. There is no emoji anywhere. The full set of fourteen is in the Icons asset group, and icons always sit beside a text label.

### Logo

The primary mark is the lockup: the registry seal, the wordmark "Sīpa" and सीप beneath it in gilt. All marks are outlined, in the Logos asset group. The seal alone means *recorded* and appears only beside a registry number, or as the favicon.

### Motion

Motion is slow and rare. The one orchestrated moment is the registry seal drawing its circle when a piece is recorded to its owner (600ms). Everything else is a 150ms fade. All motion respects reduced-motion settings.

---

## The registry number

Every piece carries one, on the piece, on the catalogue card and in the owner's record.

`SĪPA · PTN-MT-26-0142`

| Part | Meaning | Values |
|---|---|---|
| PTN | Region of making | PTN Patan · BKT Bhaktapur · KTM Kathmandu · JNK Janakpur · LMB Lumbini · PKR Pokhara · others added as makers join |
| MT | Craft | MT metal · ST stone · WD wood · TK thangka · MH Mithila · PP paper and other |
| 26 | Year finished | Two digits |
| 0142 | Serial | Four digits, never reused |

Set it in the registry style, in gilt-ink, with the seal beside it. Do not shorten or restyle it.

---

## A gallery made to be shared

Sīpa is laid out like a gallery, not a shop. A buyer walks through rooms, stops at a piece, meets its maker, and leaves with something worth showing someone else.

- **Rooms, not categories.** Collections are curated rooms (CollectionRoom), each with a number, a name and a short wall text. One lead piece hangs large in each room.
- **Every piece page opens like a wall.** The ExhibitionHero puts the plate on the left and the wall text on the right. The story follows in acts: the MakingTimeline and FilmFrame show the making, then the maker, the place and the record.
- **Every page is a share card.** Pieces, makers and owner's records each render their own 1200 × 630 ShareCard, and the ShareBar sits under the hero.
- **Short links.** Every piece's share link is its registry number (`/p/ptn-mt-26-0142`). The printed card's QR code uses the same number to open the piece's record (`/r/ptn-mt-26-0142`).
- **Owners can thank the maker.** From their record, an owner can write a note to the artisan. It is read to the maker in Nepali at the workshop, and the maker can reply. With the owner's consent, notes and replies appear on the maker's page as part of the piece's provenance.
- **Owners share too.** After purchase, the owner's record gets its own page and card with the filled seal. That is the moment people most want to share, so the record is designed to look good when they do.

---

## Components

Everything below is in this system with live previews.

- **The piece:** ObjectLabel, PlacementCompass, CareNote, CareKit.
- **Story:** ExhibitionHero, ChapterHeader, MakingTimeline, FilmFrame, Hotspot.
- **The maker:** ArtisanByline, MakersShare, MakerNote.
- **The record:** RegistrySeal, CatalogueCard.
- **Gallery:** CollectionRoom, PieceCard.
- **Sharing:** ShareCard, ShareBar.
- **Actions:** Button.

Each component's guidelines say what content it needs.

## Assets

- **Logos:** the lockup, wordmark, सीप, and the seal in outline and owned forms.
- **Icons:** fourteen line icons.
- **Patterns:** the iconometric grid and lokta fibre.
- **Plates:** placeholder images until photography exists.
- **Share:** the default 1200 × 630 link preview.
- **Print:** a PDF template for the catalogue card.

Each group has a README with its rules. Makers, places, prices and shares in the previews are examples written to show the voice, not real records.
