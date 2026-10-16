---
# The fixed copy for the remaining data-built routes. Entries live in rooms/, places/, crafts/, meaning/, care/, journal/.
ids: [room, place, craft, topic, careMaterial, journalPost, record]
status: ready

room:
  route: /rooms/[roomSlug]
  seo: { title: "{room.name} · {room.line} · Sīpa", description: "{room.seo.description}" }
  share: room
  schema: [CollectionPage, ItemList, BreadcrumbList]
  sections:
    - component: CollectionRoom
      roomLine: "Room {room.number} · {room.line} · {room.pieceCount} pieces"
      heading: "{room.name}"
      wallText: "{room.wallText}"
      source: "pieces(in room)"
      empty: site.ui.empty.room
    - component: ShareBar
      heading: Share this room
    - component: List
      variant: room-links
      heading: Other rooms
      source: "rooms(others, 3)"

place:
  route: /places/[placeSlug]
  seo: { title: "{place.name} · {place.crafts} · Sīpa", description: "{place.seo.description}" }
  share: default
  schema: [Place, CollectionPage, BreadcrumbList]
  sections:
    - component: ChapterHeader
      variant: place
      label: "Places · {place.region}"
      ne: "{place.nameNe}"
      heading: "{place.name}"
      lead: "{place.summary}"
    - { component: Prose, body: true }
    - { component: ArtisanByline, variant: row, heading: "Makers in {place.name}", source: "makers(here)" }
    - { component: CollectionRoom, variant: rooms-row, heading: "Rooms with work from {place.name}", source: "rooms(here)" }
    - { component: PieceCard, heading: "Made in {place.name}", source: "pieces(here, available, 6)", link: { label: See all, href: "/pieces?place={place.slug}" } }

craft:
  route: /crafts/[craftSlug]
  seo: { title: "{craft.name} · How it's made · Sīpa", description: "{craft.seo.description}" }
  share: default
  schema: [Article, DefinedTerm, VideoObject, BreadcrumbList]
  sections:
    - component: ChapterHeader
      label: Crafts
      ne: "{craft.nameNe}"
      heading: "{craft.name}"
      lead: "{craft.definition}"
    - { component: Prose, body: true, note: "Sections in every craft entry: Where and since when · How it is made · How to recognise good work · Caring for it" }
    - { component: MakingTimeline, variant: craft, label: "How it is made, stage by stage", source: craft.stages }
    - { component: FilmFrame, heading: "{craft.name}, on film", source: "craft.film" }
    - { component: ArtisanByline, variant: row, heading: "Makers of {craft.nameLower}", source: "makers(this craft)" }
    - { component: PieceCard, heading: "{craft.name} in the collection", source: "pieces(this craft, available, 6)" }

topic:
  route: /meaning/[topicSlug]
  seo: { title: "{topic.name} · What it means · Sīpa", description: "{topic.seo.description}" }
  share: default
  schema: [Article, DefinedTerm, BreadcrumbList]
  sections:
    - component: ChapterHeader
      label: "Meaning · {topic.groupName}"
      ne: "{topic.nameNe}"
      heading: "{topic.name}"
      lead: "{topic.definition}"
    - { component: Prose, body: true, note: "Sections in every topic entry: What it shows · How to recognise it · Where it is placed (when relevant) · In the collection" }
    - { component: PlacementCompass, showIf: topic.placement, label: Where it is customarily placed, source: topic.placement }
    - { component: PieceCard, heading: "Pieces that show {topic.nameLower}", source: "pieces(depicting topic, 6)" }

careMaterial:
  route: /care/[material]
  seo: { title: "Caring for {guide.material} · Sīpa", description: "{guide.seo.description}" }
  share: default
  schema: [HowTo, VideoObject, BreadcrumbList]
  sections:
    - component: ChapterHeader
      label: Care
      ne: हेरचाह
      heading: "Caring for {guide.material}"
      lead: "{guide.summary}"
    - { component: CareKit, variant: guide, label: "In the box · {guide.material}", source: guide.kit }
    - { component: Prose, body: true }
    - { component: FilmFrame, heading: The care film, source: guide.film }
    - { component: Button, label: Reorder refills, href: /care/refills, phase: phase-2 }

journalPost:
  route: /journal/[postSlug]
  seo: { title: "{story.title} · Sīpa", description: "{story.dek}" }
  share: default
  schema: [Article, VideoObject, BreadcrumbList]
  sections:
    - component: ChapterHeader
      label: "Journal · {story.date}"
      heading: "{story.title}"
      lead: "{story.dek}"
    - { component: Prose, body: true }
    - { component: ArtisanByline, variant: row, heading: In this story, source: "makers(mentioned)", showIf: story.makers }
    - { component: PieceCard, heading: Pieces in this story, source: "pieces(mentioned)", showIf: story.pieces }
    - { component: ShareBar, heading: Share this story }

record:
  route: /record/[registryId]
  seo: { title: "SĪPA · {registryId} · Record · Sīpa", description: "The provenance record of {piece.title} by {maker.name}.", robots: noindex }
  share: record
  schema: [VisualArtwork]
  sections:
    - component: RegistrySeal
      variant: record
      label: Registry record
      heading: "SĪPA · {registryId}"
      line: "{piece.title} · made by {maker.name} in {place.name} · finished {piece.year}"
    - component: ObjectLabel
      variant: summary
      link: { label: See the piece, href: "/p/{registryId}" }
    - component: List
      variant: provenance
      heading: History
      events:
        registered: "Registered by Sīpa · {date}"
        recorded: "Recorded to {owner.publicLabel} · {date}"
        transferred: "Passed on to {owner.publicLabel} · {date}"
        returned: "Returned to Sīpa · {date}"
      privateLabel: a private owner
    - { component: MakerNote, variant: thread, heading: Notes about this piece, source: "notes(public, this piece)", showIf: notes }
    - component: Prose
      variant: owner-banner
      showIf: viewer.isOwner
      text: "This piece is recorded to you. [Open your owner's record](/account/collection/{registryId}) for care, documents and notes to {maker.firstName}."
    - component: Prose
      variant: aside
      text: "Does this record describe the piece in front of you? If not, [write to us](/contact) with a photo of the piece and its mark."
---
