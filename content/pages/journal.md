---
id: journal
route: /journal
status: ready
title: Journal
seo:
  title: Journal · Stories from Nepal's workshops · Sīpa
  description: Stories from the workshops where Sīpa's pieces are made, and plain guides to the registry, the care kit and the crafts.
share: default
schema: [Blog]
sections:
  - component: ChapterHeader
    label: Journal
    ne: डायरी
    heading: Stories from the workshops
    lead: Visits to the people and places behind each piece, the festivals that shape the work, and plain guides to how Sīpa works.
  - component: PieceCard
    variant: journal
    source: journal(all, newest first)
    perStory:
      line: "{story.dek}"
      meta: "{story.date} · {story.readingMinutes} min read"
---
