---
id: trade
route: /trade
status: needs-input
phase: phase-3
title: For designers and hotels
seo:
  title: For designers and hotels · Sīpa
  description: Statement pieces from named Nepali makers for interiors, hotels and retreats, with provenance records, commissions and trade terms.
share: default
schema: [WebPage]
sections:
  - component: ChapterHeader
    label: Trade
    heading: For designers, hotels and retreats
    lead: Sīpa supplies single statement pieces and small commissions for interiors, hotels and retreat centres. Every piece comes with its maker, its film and its record, which you can pass to your client or guests.
  - component: List
    variant: offers
    items:
      - { title: Pieces from the collection, line: "Any listed piece, reserved for your project while your client decides." }
      - { title: Commissions, line: "Work made to a size, figure or palette, with the making filmed for your client." }
      - { title: Provenance for guests, line: "A QR code by each piece opens its maker and story for anyone who scans it." }
  - component: Form
    variant: trade-enquiry
    heading: Start a trade enquiry
    fields: [name, company, email, phone, projectType, timeline, message]
    labels: { company: Studio or company, projectType: Project, timeline: When you need the pieces }
    button: Send enquiry
    success: Thank you. We'll reply within two working days.
  - component: Prose
    text: "{{TODO: trade terms, e.g. trade discount, lead times for commissions, deposit}}"
---
