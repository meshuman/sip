---
# Internal studio screens. Plain, instructive copy for staff. One block per route.
ids: [studio, studioPieces, studioPieceNew, studioPiece, studioMakers, studioMaker, studioRooms, studioMedia, studioNotes, studioOrders, studioOrder, studioPrint, studioContent]
status: ready
seo:
  robots: noindex

studio:
  route: /studio
  title: Today
  queues:
    - { id: media, label: Pieces waiting for photographs, film or 3D }
    - { id: review, label: Pieces waiting for meaning review }
    - { id: notes, label: Notes to read at workshops }
    - { id: clearance, label: Orders waiting for export clearance }
    - { id: packing, label: Orders to pack }
  empty: Nothing waiting. Good day.

studioPieces:
  route: /studio/pieces
  title: Pieces
  filters: [Draft, Ready for review, Available, Reserved, Recorded, Withdrawn]
  button: New piece

studioPieceNew:
  route: /studio/pieces/new
  title: New piece
  lead: Choose where and how it was made. The registry issues the next number, and it can never be reused.
  fields:
    place: { label: Place made, hint: The place code starts the number. }
    craft: { label: Craft }
    year: { label: Year finished }
    maker: { label: Maker }
  preview: "Next number: SĪPA · {preview}"
  button: Issue registry number
  confirm: "Issue {preview}? A number is permanent once issued."

studioPiece:
  route: /studio/pieces/[registryId]
  title: "Edit {registryId}"
  groups:
    - id: facts
      heading: Facts
      fields:
        title: { label: Name, hint: "What it is, then the variant: 'Shakyamuni, earth-touching'. No adjectives." }
        material: { label: Material, hint: "Material, method, finish: 'Copper, lost-wax cast, fire-gilded'." }
        size: { label: "Size (cm) and weight (kg)", hint: Measure the piece itself, at its widest. }
        daysInHand: { label: Days in the hand, hint: Days of work from first step to last. Record it as it happens. }
        edition: { label: Edition }
        price: { label: "Price (NPR)" }
    - id: story
      heading: Story
      fields:
        lead: { label: Lead, hint: "Two sentences: how it was made, and the one thing to notice." }
        meaning: { label: What it means, hint: "First sentence answers 'what does it show?'. Then 2 to 5 sentences. Link the meaning topic." }
        suits: { label: Who it suits, hint: "2 to 4 sentences: the room, the person, the occasion. No promises of luck." }
        placement: { label: Placement, hint: "Facing, height and room. Say it is custom." }
        topics: { label: Meaning topics }
        room: { label: Rooms }
    - id: making
      heading: Making
      fields:
        stages: { label: Making stages, hint: "Name, first day and last day, and the film time where filmed." }
        filmNote: { label: "The film shows", options: [This piece from start to finish, "The same maker, the same work, another piece"] }
        hotspots: { label: 3D labels, hint: "3 to 7. Name the part, then one line about it." }
    - id: care
      heading: Care kit
      fields:
        kit: { label: In the box, hint: "Each item, its size, what it is for." }
        steps: { label: Steps, hint: "Weekly, then less often, then Never. Agreed with the maker." }
    - id: share
      heading: Share split
      fields: { maker: Maker's workshop, materials: Materials and specialists, fund: Community fund, sipa: Sīpa }
      check: The four parts must add up to the price.
  actions: { preview: Preview, sendForReview: Send for review, publish: Publish, withdraw: Withdraw }

studioMakers:
  route: /studio/makers
  title: Makers
  button: Add a maker

studioMaker:
  route: /studio/makers/[makerSlug]
  title: "{maker.name}"
  fields:
    name: Full name
    nameNe: Name in Nepali
    place: Place and workshop
    craft: Craft
    lineage: { label: Lineage, hint: "One line, in their words: 'fifth generation in wax'." }
    yearsAtBench: Years at the bench
    quoteNe: Quote in their language
    quoteEn: Quote in English
    portrait: Portrait (in the workshop)
  consents:
    heading: Consents (signed copies on file)
    items: [Photographs and film may be published, Owners' notes may appear on their public page, Share agreement signed]
  payouts: Payouts

studioRooms:
  route: /studio/rooms
  title: Rooms
  fields: { number: Room number, name: Name, line: Line, wallText: "Wall text (2 sentences)", leadPiece: Lead piece, order: Order of pieces }

studioMedia:
  route: /studio/media
  title: Media
  types:
    plates: { label: Photographs, hint: "Daylight from one side, on lokta or raw stone. One frame with a scale reference." }
    films: { label: Films, hint: "Cut to 20 s, about 2 min and the full record. Add chapter marks that match the making stages. Captions in English and Nepali." }
    models: { label: 3D models }

studioNotes:
  route: /studio/notes
  title: Notes to makers
  stages:
    moderate: { label: Check, hint: Remove anything unkind or personal (addresses, phone numbers). }
    translate: { label: Translate, hint: "Into the maker's language. Keep the owner's words; don't polish them." }
    deliver: { label: Read at the workshop, hint: Read it aloud or hand it over printed. Record the date. }
    reply: { label: Record the reply, hint: "In the maker's words, then an English line. A reply is never required." }

studioOrders:
  route: /studio/orders
  title: Orders
  filters: [Paid, In clearance, Packed, Shipped, Delivered, Problem]

studioOrder:
  route: /studio/orders/[orderId]
  title: "Order {orderId}"
  steps:
    - { id: clearance, label: Export clearance, upload: Clearance document }
    - { id: print, label: Print the cards, link: "/studio/print/{registryId}" }
    - { id: pack, label: Pack, checklist: [The piece, Its catalogue card, Its care kit, Its care card, Invoice] }
    - { id: ship, label: Ship, fields: [Carrier, Tracking number] }
    - { id: delivered, label: Delivered }

studioPrint:
  route: /studio/print/[registryId]
  title: "Print cards for {registryId}"
  lead: "The catalogue card and the care card, at 125 × 175 mm. Print on lokta of 120 gsm or more, with gilt as foil."
  buttons: { catalogue: Catalogue card (PDF), care: Care card (PDF) }

studioContent:
  route: /studio/content
  title: Content
  types: [Crafts, Meaning topics, Places, Care guides, Journal, Questions]
  hint: "First sentence of every block answers its heading. Facts, not adjectives."
---
