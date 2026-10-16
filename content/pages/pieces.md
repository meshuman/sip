---
id: pieces
route: /pieces
status: ready
title: All pieces
seo:
  title: All pieces · Sīpa
  description: Every piece in the Sīpa collection, from statues to thangkas and Mithila paintings. Filter by craft, place, maker, material and price.
share: default
schema: [CollectionPage, ItemList]
notes: Filtered and sorted URLs are noindex and canonicalise to /pieces.
sections:
  - component: ChapterHeader
    label: The collection
    heading: All pieces
    lead: Every piece Sīpa holds, with the newest first. Each one is single, made by a named maker, and recorded for life.
  - component: Form
    variant: filters
    strings: site.ui.filters
    groups:
      craft: [Lost-wax casting, Thangka painting, Mithila painting, Newar woodcarving, Stone carving]
      material: [Copper, Bronze, Brass, Wood, Stone, Cotton and mineral pigment, Paper and natural pigment]
      price: ["Under ₹10,000", "₹10,000–50,000", "₹50,000–1,50,000", "Over ₹1,50,000"]
  - component: PieceCard
    variant: gallery
    source: pieces(filtered)
    countLine: "{count} pieces"
    empty: No pieces match these filters. Clear a filter, or walk through the rooms instead.
  - component: Prose
    variant: aside
    text: Prefer to browse by story? [Walk through the rooms](/rooms).
---
