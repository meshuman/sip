---
id: meaning
route: /meaning
status: ready
title: Meaning
seo:
  title: Meaning · Figures, gestures and motifs explained · Sīpa
  description: What the Buddha's hand gestures mean, who Green Tara and Ganesh are, and what the fish and peacock signify in Mithila painting. Plain answers.
share: default
schema: [CollectionPage, ItemList]
sections:
  - component: ChapterHeader
    label: Meaning
    ne: अर्थ
    heading: What the figures, gestures and motifs signify
    lead: Every Sīpa piece carries meaning that its makers learned with the craft. These pages explain it plainly, so you know what you are looking at before you bring it home.
  - component: List
    variant: topics
    groups:
      - heading: Buddhist figures
        source: topics(group=buddhist)
      - heading: Hindu figures
        source: topics(group=hindu)
      - heading: Mithila painting
        source: topics(group=mithila)
    perTopic:
      line: "{topic.definition}"
---
