---
id: rooms
route: /rooms
status: ready
title: The rooms
seo:
  title: The rooms · Sīpa
  description: Sīpa's collection, hung room by room by craft, place and story. Lost-wax metal from Patan, Mithila painting, thangka, wood, stone and Buddha figures.
share: default
schema: [CollectionPage, ItemList, BreadcrumbList]
sections:
  - component: ChapterHeader
    label: The rooms
    ne: कोठाहरू
    heading: The collection, hung room by room
    lead: Each room gathers pieces that belong together, by the craft that made them, the place they come from, or the story they tell. Every room opens on one piece hung large.
  - component: CollectionRoom
    variant: index
    source: rooms(all, by number)
    perRoom:
      line: "Room {room.number} · {room.line} · {room.pieceCount} pieces"
      link: Enter the room
  - component: Prose
    variant: aside
    text: Looking for something specific? [See every piece](/pieces) and filter by craft, place, maker or price.
---
