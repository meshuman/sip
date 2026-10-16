---
id: checkout
route: /checkout
status: needs-input
title: Checkout
seo:
  title: Checkout · Sīpa
  description: Complete your order.
  robots: noindex
share: none
schema: []
holdNote: "We're holding {piece.title} for you for {minutes} minutes."
steps:
  - id: details
    title: Your details
    lead: Where should we send your piece, and how should we reach you?
    fields: [email, name, phone, whatsapp, country, address1, address2, city, region, postcode]
    button: Continue
  - id: gift
    title: Is it a gift?
    lead: A gift arrives with your message on a card. The piece is recorded to you, and you can pass the record on later.
    options:
      - { value: "no", label: "No, it's for me" }
      - { value: "yes", label: "Yes, it's a gift" }
    giftFields:
      recipientName: Their name
      message: Message for the card
      messageHint: Up to 300 characters, printed on lokta paper.
      hidePrice: Leave the price off the packing slip
    button: Continue
  - id: delivery
    title: Delivery
    lead: Every piece is cleared for export before it ships. Clearance is included in the price.
    timeline:
      - { label: Export clearance, value: "about {{TODO}} working days" }
      - { label: Packing, value: 1 to 2 working days }
      - { label: Transit, value: "{shippingOption.transitDays}" }
    shippingOptionLine: "{shippingOption.carrier} · {shippingOption.transitDays} · {shippingOption.price}"
    duties: "{{TODO: duties line, e.g. Import duties in your country are paid on delivery.}}"
    link: { label: About export and customs, href: /help/export-and-customs }
    button: Continue to payment
  - id: payment
    title: Payment
    lead: You're charged now. The piece is recorded to you as soon as payment goes through.
    methods: "{{TODO: methods}}"
    secureNote: "Payments are handled by {{TODO: provider}}. We never see your card number."
    button: Review your order
  - id: review
    title: Review
    lead: Check everything once more.
    pieceLine: "{piece.title} · {maker.name} · SĪPA · {registryId}"
    includes: Ships with its catalogue card and care kit
    rows: [Pieces, Shipping, Export clearance, Total]
    consent:
      showName: Show my first name and city on this piece's public record
      showNameHint: You can change this later. Without it, the record says "a private owner".
      terms: "I agree to the [terms of sale](/legal/terms)."
    button: Pay and record it to me
errors:
  - site.ui.errors.pieceUnavailable
  - site.ui.errors.reservedElsewhere
  - "Your payment didn't go through. Nothing was charged. Try again, or choose another way to pay."
---
