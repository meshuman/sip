---
id: places
route: /places
status: ready
title: Places
seo:
  title: Places · Sīpa
  description: Where Sīpa's pieces are made, from the metal workshops of Patan to the painters of Janakpur. Each place, its crafts and its makers.
share: default
schema: [CollectionPage, ItemList]
sections:
  - component: ChapterHeader
    variant: place
    label: Places
    ne: ठाउँ
    heading: Where each piece is made
    lead: Nepal's crafts grew up in particular towns and neighbourhoods, often in the same families for generations. These are the places Sīpa's makers work today.
  - component: List
    variant: places
    source: places(all)
    perPlace:
      line: "{place.region} · {place.crafts} · {place.makerCount} makers"
      link: "Visit {place.name}"
  - component: Prose
    variant: aside
    text: New places are added as makers join. Every registry number begins with the place a piece was made, such as PTN for Patan or JNK for Janakpur.
---
