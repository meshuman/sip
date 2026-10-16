---
id: home
route: /
status: ready
title: Made by hand in Nepal. Recorded for life.
seo:
  title: Sīpa · Art made by hand in Nepal, recorded for life
  description: Statues, thangkas and Mithila paintings from named makers across Nepal. Each piece comes with its maker's story, a care kit and a registry number.
share: default
schema:
  Organization:
    name: Sīpa
    alternateName: सीप
    description: Art made by hand across Nepal, each piece recorded to its maker and owner.
    address: Lalitpur, Nepal
  WebSite:
    potentialAction: SearchAction /search?q={query}
sections:
  - component: ChapterHeader
    variant: opening
    label: सीप · Skill
    heading: Made by hand in Nepal. Recorded for life.
    lead: Sīpa brings one-of-a-kind statues, thangkas, Mithila paintings, and wood, stone and metal work from named makers across Nepal. Every piece carries three things.
    promises:
      - title: The piece
        line: What it is, what it means, where it belongs and how to care for it.
      - title: The maker
        line: A named person in a named place, filmed at work and paid a fair share.
      - title: The record
        line: A registry number, a printed card in the box, and an owner's record for life.

  - component: ExhibitionHero
    label: Now hanging
    source: pieces(featured, 1)
    linkLabel: Enter the room
    linkTo: "{piece.room.url}"

  - component: CollectionRoom
    variant: rooms-row
    label: The rooms
    heading: Walk through the rooms
    lead: Each room gathers work by craft, by place or by a story, and opens on one piece hung large.
    source: rooms(featured, 4)
    linkLabel: All rooms
    linkTo: /rooms

  - component: ChapterHeader
    variant: feature
    label: Room · From the land of the Buddha's birth
    ne: लुम्बिनी
    heading: Buddha figures from the country where he was born
    lead: Siddhartha Gautama was born in Lumbini, in southern Nepal. This room holds Buddha figures cast, carved and painted by makers across the country.
    source: rooms(slug=buddha)
    linkLabel: Enter the room
    linkTo: /rooms/buddha

  - component: ArtisanByline
    variant: row
    label: The makers
    heading: Meet the people behind each piece
    lead: Every piece is signed by a person, not a brand. Here are three of them.
    source: makers(featured, 3)
    linkLabel: All makers
    linkTo: /makers

  - component: List
    variant: in-the-box
    label: What arrives
    heading: How a piece reaches you
    lead: Every piece leaves Nepal cleared for export and arrives with everything it needs.
    items:
      - component: RegistrySeal
        title: Recorded to you
        line: The moment you buy, the registry records the piece to you, and the record follows it for life.
      - component: CatalogueCard
        title: Its catalogue card
        line: A card printed on lokta paper with the piece's maker, meaning, placement and care, and a code that opens its record.
      - component: CareKit
        title: Its care kit
        line: The tools its material needs. A wooden piece comes with a flask of wood oil and a soft brush, with steps from its maker.
      - component: FilmFrame
        title: Its making, on film
        line: The film of the piece being made, or of its maker at the same work, waiting in your record.


  - component: MakerNote
    variant: thread-excerpt
    label: Notes from owners
    heading: What owners write to makers
    lead: Owners can write to the person who made their piece. We read each note to the maker at the workshop, and some makers reply.
    source: notes(public, latest, 2)
    empty: The first notes arrive once the first pieces reach their owners.

  - component: PieceCard
    variant: journal
    label: Journal
    heading: From the workshops
    source: journal(latest, 2)
    linkLabel: All stories
    linkTo: /journal

  - component: Form
    variant: registry-check
    label: Registry
    heading: Check a registry number
    lead: Every Sīpa piece has a number on its base or back, and on its card. Enter it to see the piece's record.
    field: { label: Registry number, placeholder: PTN-MT-26-0142 }
    button: Check a number
    action: /record/{registryId}
---
