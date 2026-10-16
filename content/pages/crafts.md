---
id: crafts
route: /crafts
status: ready
title: Crafts
seo:
  title: Crafts · How Nepali statues and paintings are made · Sīpa
  description: How lost-wax casting, thangka and Mithila painting, Newar woodcarving and stone carving are done, and how to recognise good work in each.
share: default
schema: [CollectionPage, ItemList]
sections:
  - component: ChapterHeader
    label: Crafts
    ne: सीप
    heading: How each piece is made
    lead: Five crafts make up the Sīpa collection. Each page explains how the work is done, step by step, and what to look for in a good piece.
  - component: List
    variant: crafts
    source: crafts(all)
    perCraft:
      line: "{craft.definition}"
      link: Read about {craft.name}
---
