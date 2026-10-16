---
id: cart
route: /cart
status: ready
title: Your bag
seo:
  title: Your bag · Sīpa
  description: The pieces you've chosen.
  robots: noindex
share: none
schema: []
sections:
  - component: ChapterHeader
    label: Bag
    heading: Your bag
  - component: ObjectLabel
    variant: bag-line
    source: cart.items
    perItem:
      meta: "{maker.name} · {place.name} · SĪPA · {registryId}"
      includes: Ships with its catalogue card and care kit
      remove: Remove
  - component: List
    variant: summary
    rows:
      - { label: Pieces, value: "{cart.subtotal}" }
      - { label: Shipping, value: Shown at the next step }
      - { label: Export clearance, value: Included }
    total: { label: Total so far, value: "{cart.subtotal}" }
    currencyNote: site.currency.note
  - component: Button
    label: Continue to details
    href: /checkout
  - component: Prose
    variant: aside
    text: Pieces in your bag aren't held until you reach checkout. Each piece is single, so if someone else completes a purchase first, it will be removed from your bag.
  - component: Prose
    variant: empty
    heading: Your bag is empty
    text: "[Walk through the rooms](/rooms) or [see every piece](/pieces)."
---
