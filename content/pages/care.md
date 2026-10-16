---
id: care
route: /care
status: ready
title: Care guides
seo:
  title: Care guides · Wood, metal, stone, cloth, paper · Sīpa
  description: How to look after a statue or painting from Nepal, by material. What to do weekly and yearly, how to move it, and what never to use.
share: default
schema: [CollectionPage]
sections:
  - component: ChapterHeader
    label: Care
    ne: हेरचाह
    heading: How to look after what you bring home
    lead: Handmade pieces need little care, but the right care. Every Sīpa piece ships with a care kit for its material and a card with these steps. Choose the material below.
  - component: List
    variant: materials
    source: careGuides(all)
    perGuide:
      line: "{guide.summary}"
      link: "Care for {guide.material}"
  - component: CareNote
    variant: general
    heading: Four rules for every material
    rows:
      - { when: Always, step: Keep it out of direct sun and away from heaters, fireplaces and damp walls. }
      - { when: Always, step: Dust with a soft, dry brush rather than a cloth, which catches on carving. }
      - { when: Moving, step: Lift from the base with both hands, never by a raised hand, head or frame. }
      - { when: Never, step: "No water, polish, oils or sprays unless your care card names them." }
  - component: Prose
    variant: aside
    text: Not sure which guide fits your piece? The material is on its catalogue card and in its record. Or [write to us](/contact) with its registry number.
---
