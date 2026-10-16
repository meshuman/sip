# The piece page and its content

Every piece page answers the same questions in the same order. A person can skim it in a minute. A search or answer engine can lift any block as a clean, self-contained answer. The fixed order is what makes it work for both.

## The order of a piece page

| Act | Block | Answers | Component |
|---|---|---|---|
| The piece | Hero | What is it? | Chapter header, Object label, Registry seal |
| | 3D and film | What does it look like, all round? | 3D hotspot |
| | Meaning | What does it signify? | Chapter header + body |
| | Who it suits | Who is it best suited to? | Body, two to four sentences |
| | Placement | Where and which direction? | Placement compass |
| | Care | How do I maintain it, and what comes in the box? | Care kit (or Care note where nothing ships) |
| The maker | Byline and film | Who made it, and how? | Artisan byline |
| | Share | Where does my money go? | Maker's share |
| | Notes | What have owners said, and how did the maker reply? | Maker note (maker's page and owner's record) |
| The place | Region | Where was it made, and what is the craft's history there? | Chapter header (lapis) |
| The record | Registry | Is it real, and who owns it? | Registry seal, Catalogue card |

## Writing each block for people and engines

- **Open each block with one sentence that answers its question outright.** For example: "This statue shows Shakyamuni Buddha in the earth-touching gesture, the moment of his awakening." That first sentence is the one an engine will quote.
- **Then give two to five sentences of depth.** Stop there and link to the topic page for more.
- **Keep facts in fields, not prose.** Material, dimensions, weight, days, region and registry number live in the object label, so they are always in the same place and form.
- **Each block heading is the question in plain words:** "What the gesture means", "Where to place it", "How to care for it".

## Topic pages carry the depth

Piece pages stay short because the depth lives in a small set of evergreen pages that every piece links to:

- **Crafts:** Lost-wax casting in Patan, Mithila painting in Janakpur, Thangka painting, Stone carving, Newar woodcarving.
- **Iconography:** The mudras, The five Buddha families, Green and White Tara, Ganesh, Mithila motifs (fish, peacock, bamboo, sun).
- **Places:** Patan, Bhaktapur, Janakpur, Lumbini, and each region as makers join.
- **Care:** Metal, stone, wood, painted cloth, paper.

Each topic page follows one pattern: a one-sentence definition, a short history, how to recognise good work, and the pieces and makers connected to it.

## Structured data

Mark up every page so engines read the same facts the person sees:

- **Piece page:** `Product` with an `offers` block, plus `VisualArtwork` (artform, artMedium, artworkSurface, height, width, depth, creator) and an `identifier` holding the registry number.
- **Maker page:** `Person` (name, homeLocation, knowsAbout, worksFor workshop).
- **Topic page:** `Article` or `DefinedTerm`.
- **Question blocks:** `FAQPage` only where the block is truly a question and an answer.
- **Place:** `Place` with geo for the region.

## The box

Every piece ships with three things, all drawn from the same record as the page:

1. The piece itself.
2. The printed catalogue card.
3. A care kit matched to the material, with a printed care card of usage instructions in English and Nepali.

For wood, the kit is a flask of wood oil and a soft brush. The CareKit component's guidelines list the kit for each material.

Each kit item and refill is tied to the piece's registry number, so an owner can reorder the right oil from their record. The care card carries a QR code to a short care film showing the routine.

## The printed catalogue card

Every piece ships with a card printed on lokta, laid out like the Catalogue card component. It holds the piece name, maker, place, registry number, a short meaning, the placement and care lines, and a QR code that opens the owner's record. The card is the piece's paper certificate, and its content comes from the same fields as the web page, so the two never disagree.
