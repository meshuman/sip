---
id: makers
route: /makers
status: ready
title: The makers
seo:
  title: The makers · Sīpa
  description: Meet the metal casters, thangka painters, Mithila artists and carvers behind each Sīpa piece, with their workshops, films and work.
share: default
schema: [CollectionPage, ItemList]
sections:
  - component: ChapterHeader
    label: The makers
    ne: कलाकार
    heading: Every piece is signed by a person
    lead: These are the people who make Sīpa's pieces, in their own workshops across Nepal. Each one is filmed at work and paid a fair share of every sale, enough to sustain their livelihood.
  - component: Form
    variant: filters
    groups:
      place: source places(with makers)
      craft: [Lost-wax casting, Thangka painting, Mithila painting, Newar woodcarving, Stone carving]
  - component: ArtisanByline
    variant: grid
    source: makers(all, grouped by place)
    groupHeading: "{place.name}"
    perMaker:
      line: "{maker.craft} · {maker.yearsAtBench} years at the bench"
      link: "Meet {maker.firstName}"
  - component: Prose
    variant: aside
    text: Are you a maker who would like to join? [Write to us](/contact). We visit every workshop before we work together.
---
