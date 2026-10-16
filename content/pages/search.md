---
id: search
route: /search
status: ready
title: Search
seo:
  title: Search · Sīpa
  description: Search Sīpa's pieces, makers, crafts and places.
  robots: noindex
share: none
schema: []
sections:
  - component: Form
    variant: search
    field: { label: Search, placeholder: "Try a maker, a place, Buddha, thangka or fish" }
    button: Search
  - component: List
    variant: results
    groups:
      - { heading: Pieces, source: "pieces(q)", component: PieceCard }
      - { heading: Makers, source: "makers(q)", component: ArtisanByline }
      - { heading: Crafts and meaning, source: "crafts(q) + topics(q)" }
      - { heading: Places, source: "places(q)" }
    countLine: "{count} results for “{q}”"
    empty: site.ui.empty.search
---
