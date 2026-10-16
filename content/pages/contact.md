---
id: contact
route: /contact
status: needs-input
title: Contact
seo:
  title: Contact · Sīpa
  description: Write to Sīpa about a piece, an order, a registry number or working with us as a maker. We reply within two working days.
share: default
schema: [ContactPage]
sections:
  - component: ChapterHeader
    label: Contact
    ne: सम्पर्क
    heading: Write to us
    lead: We reply within two working days. If your message is about a piece, include its registry number and we'll have its record open when we answer.
  - component: Form
    variant: contact
    fields: [name, email, topic, registryId, message]
    labels: { topic: About, registryId: Registry number (if you have one) }
    topics: [A piece or an order, Export and shipping, A registry number, Care, Becoming a Sīpa maker, Press, Something else]
    button: Send
    success: Thank you. We'll reply within two working days.
  - component: List
    variant: contact-details
    items:
      - { label: Email, value: "{{TODO: email}}" }
      - { label: WhatsApp, value: "{{TODO: number}}" }
      - { label: Studio, value: "{{TODO: street address}}, Lalitpur, Nepal" }
      - { label: Hours, value: "{{TODO: hours}}, Nepal time (UTC+5:45)" }
---
