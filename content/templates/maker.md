---
id: maker
route: /makers/[makerSlug]
status: ready
title: "{maker.name}"
seo:
  title: "{maker.name}, {maker.craft} in {place.name} · Sīpa"
  description: "{maker.name} makes {maker.craftLower} in {workshop.area}, {place.name}. {maker.lineage}. Watch the making and see the work."
share: maker
schema:
  ProfilePage: {}
  Person: { name: "{maker.name}", alternateName: "{maker.nameNe}", homeLocation: "{place.name}, Nepal", knowsAbout: "{maker.craft}", jobTitle: "{maker.craft}" }
  VideoObject: "{maker.films.full}"
data: [maker, workshop, place, "pieces(available)", "pieces(recorded)", "notes(public)", "payouts(total to date)"]
sections:
  - component: ArtisanByline
    variant: hero
    label: Maker
    name: "{maker.name}"
    meta: "**{workshop.area}, {place.name}** · {maker.lineage} · {maker.yearsAtBench} years at the bench"
    quote: { ne: "{maker.quote.ne}", en: "{maker.quote.en}" }

  - component: Prose
    label: About
    body: "{maker.bio}"   # 3 short paragraphs: how they came to the craft, what they make now, what they want people to know. In their words where possible.

  - component: FilmFrame
    label: The full record
    heading: "{maker.firstName} at work"
    source: maker.films.full
    credit: "Filmed in {workshop.area}. {film.durationMinutes} minutes, uncut."

  - component: ChapterHeader
    variant: place
    label: The workshop
    heading: "{workshop.name}"
    lead: "{workshop.description}"
    visit: { label: Ask to visit, href: /visit, phase: phase-2, showIf: workshop.openToVisitors }

  - component: PieceCard
    label: Available now
    heading: "Pieces by {maker.firstName}"
    source: "pieces(available, this maker)"
    empty: site.ui.empty.makerPieces

  - component: PieceCard
    variant: recorded
    label: Already recorded
    heading: Where their work lives now
    source: "pieces(recorded, this maker)"
    perPiece: { line: "Recorded {recordedDate} · now in {owner.city | default: 'a private home'}" }

  - component: MakersShare
    variant: maker-total
    label: Paid to this workshop
    heading: "{payouts.total} paid to {maker.firstName}'s workshop so far"
    lead: "From {payouts.pieceCount} pieces, since {payouts.since}."

  - component: MakerNote
    anchor: notes
    label: "Notes from owners · {notes.count}"
    heading: "What owners have written to {maker.firstName}"
    source: "notes(public)"
    empty: site.ui.empty.notes

  - component: ShareBar
    heading: site.ui.share.headingMaker
---
