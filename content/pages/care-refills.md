---
id: careRefills
route: /care/refills
status: needs-input
phase: phase-2
title: Care refills
seo:
  title: Care refills · Wood oil and brushes · Sīpa
  description: Reorder the wood oil, brushes and care cards that came with your Sīpa piece, matched to it by its registry number.
share: default
schema: [Product, Offer]
sections:
  - component: ChapterHeader
    label: Care refills
    heading: The same oil and tools your piece came with
    lead: Refills are matched to your piece by its registry number, so you get what its maker uses. Signed in, we show your pieces. Otherwise, enter the number from the card.
  - component: PieceCard
    variant: owned
    source: pieces(owned, if signed in)
    perPiece:
      line: "{piece.careKit.summary}"
      button: Reorder for this piece
  - component: Form
    variant: registry-check
    field: { label: Registry number, placeholder: BKT-WD-26-0018 }
    button: Find refills
  - component: CareKit
    variant: products
    source: refillProducts
    items:
      - { name: Wood oil, size: "Glass flask · 30 ml", price: "{{TODO}}", line: "Enough for about {{TODO}} oilings of a piece 40 cm tall." }
      - { name: Soft brush, size: "Goat hair · 20 mm", price: "{{TODO}}", line: Replaces the brush in your kit. }
---
