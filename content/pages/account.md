---
# One file for the signed-in owner area. Each block below is one route.
ids: [signIn, account, collection, ownedPiece, transfer, orders, order, notes, settings]
status: ready
seo:
  robots: noindex
share: none

signIn:
  route: /account/sign-in
  title: Sign in
  seo: { title: "Sign in · Sīpa" }
  heading: Sign in
  lead: We'll send you a code. There's no password to remember.
  field: { label: Email or phone, placeholder: name@example.com or +977… }
  button: Send me a code
  codeStep:
    heading: Enter your code
    lead: "We sent a 6-digit code to {destination}. It works for 10 minutes."
    field: { label: Code }
    button: Sign in
    resend: Send a new code
    change: Use a different email or phone
  note: Signing in for the first time creates your account. You'll see your collection once a piece is recorded to you.

account:
  route: /account
  title: Your account
  seo: { title: "Your account · Sīpa" }
  greeting: "Namaste, {customer.firstName}"
  sections:
    - { component: PieceCard, heading: Your collection, source: "pieces(owned, latest 3)", link: { label: See all, href: /account/collection }, empty: site.ui.empty.collection }
    - { component: List, heading: Orders in progress, source: "orders(open)", line: "{order.pieceTitle} · {order.stage}", empty: Nothing on its way right now. }
    - { component: MakerNote, heading: Replies from makers, source: "notes(replies, unread)", empty: No new replies. }
  links: [{ label: Your notes to makers, href: /account/notes }, { label: Settings, href: /account/settings }, { label: Sign out }]

collection:
  route: /account/collection
  title: Your collection
  seo: { title: "Your collection · Sīpa" }
  heading: Your collection
  lead: Every piece recorded to you, with its record, its care and its maker.
  source: pieces(owned)
  perPiece: { line: "{maker.name} · recorded to you {recordedDate}", link: Open the record }
  empty: site.ui.empty.collection

ownedPiece:
  route: /account/collection/[registryId]
  title: "{piece.title}"
  seo: { title: "{piece.title} · Your record · Sīpa" }
  sections:
    - component: RegistrySeal
      variant: owned
      line: "Recorded to you · {recordedDate}"
      publicLine: "On the public record you appear as: {owner.publicLabel}"
      publicLink: { label: Change, href: /account/settings#privacy }
    - { component: CatalogueCard, heading: Its catalogue card, lead: "The card in your box. Its code opens this record." }
    - component: CareKit
      anchor: care
      heading: Care
      lead: "The steps {maker.firstName} uses, and the tools that came in your box."
      film: { label: Watch the care film }
      refill: { label: Reorder for this piece, href: "/care/refills?piece={registryId}", phase: phase-2 }
      reminder: { label: "Remind me when it's time", phase: phase-2 }
    - component: MakerNote
      anchor: note
      heading: "Write to {maker.firstName}"
      lead: "Tell {maker.name} where the piece lives now, or what it means to you. We translate your note into Nepali and read it to {maker.firstName} at the workshop. Some makers reply."
      field: { label: Your note, max: 600 }
      publicToggle: "Show my first name and city with this note on {maker.firstName}'s page"
      button: "Send to {maker.firstName}"
      sent: "Sent. {maker.firstName} will hear it at the workshop this week."
      thread: { heading: Your notes and replies, replyLabel: "{maker.firstName} replied" }
    - { component: ShareCard, variant: record, heading: Share your piece }
    - { component: ShareBar, variant: record }
    - component: List
      heading: Documents
      items:
        - { label: Invoice, file: invoice.pdf }
        - { label: Certificate of authenticity, file: certificate.pdf }
        - { label: Export clearance, file: export-clearance.pdf }
    - { component: Button, label: Pass it on, href: "/account/collection/{registryId}/transfer", phase: phase-2, line: "Giving or selling this piece? Pass its record to the next owner." }

transfer:
  route: /account/collection/[registryId]/transfer
  phase: phase-2
  title: Pass it on
  seo: { title: "Pass it on · Sīpa" }
  heading: "Pass {piece.title} to its next owner"
  lead: The record keeps its full history. The next owner accepts by email, and from then on the piece is recorded to them.
  fields: { name: Their name, email: Their email, message: A note to them (optional), reason: "Is it a gift, a sale or an inheritance?" }
  reasons: [A gift, A sale, An inheritance]
  button: Send the offer
  sent: "We've sent the offer to {email}. It stays open for 14 days. The piece stays recorded to you until they accept."
  note: Your name stays off the public record unless you allowed it. The new owner chooses for themselves.

orders:
  route: /account/orders
  title: Orders
  seo: { title: "Orders · Sīpa" }
  heading: Orders
  source: orders(all, newest first)
  perOrder: { line: "{order.date} · {order.pieceTitle} · {order.total}", stage: "{order.stage}" }
  empty: site.ui.empty.orders

order:
  route: /account/orders/[orderId]
  title: "Order {orderId}"
  seo: { title: "Order {orderId} · Sīpa" }
  stages:
    - { id: paid, name: Paid and recorded to you }
    - { id: clearance, name: Export clearance }
    - { id: packed, name: "Packed with its card and care kit" }
    - { id: shipped, name: Shipped, line: "{carrier} · {trackingLink}" }
    - { id: delivered, name: Delivered }
  help: "Something wrong? [Write to us](/contact) with order {orderId}."

notes:
  route: /account/notes
  title: Your notes to makers
  seo: { title: "Your notes to makers · Sīpa" }
  heading: Your notes to makers
  lead: Every note you've sent, when it was read at the workshop, and any reply.
  perNote: { delivered: "Read to {maker.firstName} on {deliveredDate}", waiting: Waiting to be read at the workshop, reply: "{maker.firstName} replied" }
  empty: site.ui.empty.sentNotes

settings:
  route: /account/settings
  title: Settings
  seo: { title: "Settings · Sīpa" }
  groups:
    - id: profile
      heading: You
      fields: [name, email, phone, whatsapp, country]
    - id: privacy
      heading: What others see
      toggle: Show my first name and city on the public records of pieces I own
      fields: { publicName: First name to show, city: City to show }
      note: Without this, your pieces' records say "a private owner". Notes you send are shown on a maker's page only when you tick the box on that note.
    - id: display
      heading: Currency and language
      fields: [currency, language]
    - id: reminders
      phase: phase-2
      heading: Care reminders
      toggle: Remind me when a piece needs care
      channel: { label: Send reminders by, options: [Email, WhatsApp] }
  button: Save
  saved: Saved
---
