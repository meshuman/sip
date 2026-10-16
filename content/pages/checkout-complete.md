---
id: checkoutComplete
route: /checkout/complete/[orderId]
status: ready
title: Recorded to you
seo:
  title: Recorded to you · Sīpa
  description: Your piece is recorded to you.
  robots: noindex
share: record
schema: []
sections:
  - component: RegistrySeal
    variant: drawing
    heading: Recorded to you
    line: "{piece.title} is yours. Its record now shows you as its owner, from {recordedDate}."
    registry: "SĪPA · {registryId}"
  - component: CatalogueCard
    label: In the box
    heading: The card that will arrive with it
    lead: Printed on lokta paper. Its code opens your piece's record.
  - component: CareKit
    variant: compact
    heading: And its care kit
    source: piece.careKit
  - component: MakerNote
    variant: form
    heading: "Write to {maker.firstName}"
    lead: "Tell {maker.name} where the piece will live, or what it means to you. We read your note to {maker.firstName} at the workshop. You can also write later, once it arrives."
  - component: ShareCard
    variant: record
    heading: Share your piece
    lead: Your card shows the piece, its maker and its registry number. It never shows the price.
  - component: ShareBar
    variant: record
  - component: MakingTimeline
    variant: order
    heading: What happens next
    stages:
      - { name: Export clearance, line: "We take your piece for inspection so it can leave Nepal legally." }
      - { name: Packing, line: "It is packed with its card and care kit." }
      - { name: Shipping, line: "You'll get a tracking link the day it leaves." }
      - { name: Delivery, line: "Then the box is opened at your door." }
    note: "We'll message you at each step at {customer.email}."
  - component: Button
    label: Open your owner's record
    href: /account/collection/{registryId}
---
