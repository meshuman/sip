---
id: piece
route: /pieces/[pieceKey]
status: ready
title: "{piece.title}"
seo:
  title: "{piece.title} by {maker.name} · Sīpa"   # trim the maker if over 60 characters
  description: "{piece.material}, made by {maker.name} in {place.name} over {piece.daysInHand} days. {piece.meaningFirstSentence}"   # cut at 155 at a word
share: piece
schema:
  Product: { name: "{piece.title}", sku: "{registryId}", brand: Sīpa, offers: { price: "{piece.price}", priceCurrency: NPR, availability: "{piece.state → InStock | SoldOut}" } }
  VisualArtwork: { artform: "{craft.name}", artMedium: "{piece.material}", height: "{piece.h} cm", width: "{piece.w} cm", depth: "{piece.d} cm", creator: "{maker.name}", dateCreated: "{piece.year}", identifier: "SĪPA {registryId}" }
  VideoObject: "{piece.films[*]}"
  BreadcrumbList: [Home, Rooms, "{room.name}", "{piece.title}"]
data: [piece, maker, place, craft, topics, careKit, media, makingStages, shareSplit, "notes(public, this maker)", "pieces(same room)"]
sections:
  - component: ExhibitionHero
    room: "Room {room.number} · {room.line}"
    position: "Piece {piece.positionInRoom} of {room.pieceCount}"
    title: "{piece.title}"
    maker: "Made by **{maker.name}** in {place.name}, over {piece.daysInHand} days."
    lead: "{piece.lead}"
    plateCaption: "{piece.heroPlate.caption}"
    seal: { awaiting: site.ui.registry.awaiting, recorded: site.ui.registry.recordedTo }
    actions: [site.ui.actions.makeItYours, site.ui.actions.watchTheMaking]
    states: site.ui.pieceStates
    originLine: "{piece.originLine}"   # "From the land of the Buddha's birth." on Buddha figures; "Made in Lumbini." only if made there

  - component: ShareBar
    heading: site.ui.share.heading
    url: "/p/{registryId}"

  - component: ObjectLabel
    rows: [material, size, inTheHand, edition]
    labels: site.ui.labels

  - component: Hotspot
    label: All round
    heading: "Turn it, and look closer"
    lead: "Drag to turn {piece.title}. The numbered labels mark the parts worth knowing."
    source: media.hotspots
    hint: Drag to turn · 360°
    noModel: "Photographs from every side, and one with a hand for scale."

  - component: FilmFrame
    label: The making
    ne: बनाउने
    heading: "{piece.daysInHand} days in the hand"
    source: media.films.short
    button: site.ui.actions.watchTheMaking
    credit:
      thisPiece: "Filmed in {workshop.area} over {piece.daysInHand} days. The full, uncut record is on {maker.firstName}'s page."
      sameWork: "This film shows {maker.firstName} at the same work on another piece; {piece.title} was finished before we began filming. The full record is on {maker.firstName}'s page."

  - component: MakingTimeline
    label: "How it was made · {piece.daysInHand} days in the hand"
    source: makingStages

  - component: ChapterHeader
    label: What it means
    ne: अर्थ
    heading: "{piece.meaningHeading}"
    lead: "{piece.meaning}"          # first sentence answers "what does it show?"
    links: "{topics[*] → /meaning/{topic.slug}}"

  - component: Prose
    label: Who it suits
    ne: कसका लागि
    heading: Who it suits
    body: "{piece.suits}"            # 2 to 4 sentences

  - component: PlacementCompass
    label: Where to place it
    facing: "{piece.placement.facing}"
    height: "{piece.placement.height}"
    room: "{piece.placement.room}"
    note: "{piece.placement.note | default: 'These are customary. Follow your own tradition where it differs.'}"

  - component: CareKit
    label: "In the box · {piece.material}"
    heading: Everything it needs for its first years
    source: careKit
    link: { label: "Care for {careKit.material}", href: "/care/{careKit.materialSlug}" }

  - component: ArtisanByline
    label: Made by
    source: maker
    link: site.ui.actions.meetMaker

  - component: Statement
    label: Fair pay
    lead: "{maker.first} is paid a fair share of every sale, enough to sustain their livelihood and their workshop."

  - component: MakerNote
    variant: thread-excerpt
    label: "Notes to {maker.firstName}"
    source: "notes(public, this maker, 2)"
    link: { label: "All notes on {maker.firstName}'s page", href: "/makers/{maker.slug}#notes" }
    empty: site.ui.empty.notes

  - component: ChapterHeader
    variant: place
    label: Where it was made
    ne: ठाउँ
    heading: "{place.name}, {place.epithet}"
    lead: "{place.summary}"
    link: { label: "More about {place.name}", href: "/places/{place.slug}" }

  - component: CatalogueCard
    label: The record
    ne: अभिलेख
    heading: A number for life
    lead: "This piece is registered as SĪPA · {registryId}. The number is marked on the piece and printed on the card in its box, and it opens the piece's record for as long as the piece exists."
    link: { label: About the registry, href: /registry }

  - component: PieceCard
    label: "In the same room"
    source: "pieces(same room, 3)"
    link: { label: "Enter {room.name}", href: "/rooms/{room.slug}" }
---
