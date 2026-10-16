---
id: registry
route: /registry
status: needs-input
title: The registry
seo:
  title: The registry · Check a Sīpa piece · Sīpa
  description: Every Sīpa piece has a registry number for life. Enter it to see who made the piece, where, when, and its record of owners.
share: default
schema: [WebPage]
sections:
  - component: ChapterHeader
    label: Registry
    ne: अभिलेख
    heading: Every piece has a number for life
    lead: The registry number tells you where a piece was made, by which craft, in which year, and which piece it is. Enter it below to open its record.
  - component: Form
    variant: registry-check
    field: { label: Registry number, placeholder: PTN-MT-26-0142, hint: "You'll find it on the piece's base or back, on its catalogue card, and in your order emails." }
    button: Check a number
    action: /record/{registryId}
    errors: [site.ui.errors.registryInvalid, site.ui.errors.registryUnknown]
  - component: RegistrySeal
    variant: anatomy
    heading: How to read a number
    example: SĪPA · PTN-MT-26-0142
    parts:
      - { part: PTN, name: Place, line: "Where it was made. PTN is Patan." }
      - { part: MT, name: Craft, line: "How it was made. MT is metal." }
      - { part: "26", name: Year, line: "The year it was finished. 26 is 2026." }
      - { part: "0142", name: Serial, line: "Which piece it is. A serial is never used twice." }
  - component: Prose
    body: true
---
## Place codes

| Code | Place |
|---|---|
| PTN | Patan (Lalitpur) |
| BKT | Bhaktapur |
| KTM | Kathmandu |
| JNK | Janakpur |
| LMB | Lumbini |
| PKR | Pokhara |

New codes are added as makers join from other places.

## Craft codes

| Code | Craft |
|---|---|
| MT | Metal: cast, gilded or hammered |
| ST | Stone |
| WD | Wood |
| TK | Thangka |
| MH | Mithila painting |
| PP | Paper and other work |

## What a record shows

A record shows the piece, the maker who made it, and the date it was registered. It also lists every change of owner since. An owner's first name and city appear only if that owner has agreed. Otherwise the record says "a private owner".

## Where the number appears

The number is marked on every piece, in a way that suits its material and doesn't mar it. {{TODO: confirm the marking method for metal, stone, wood and paintings}} It is printed on the piece's catalogue card, whose code opens the record directly. It also appears in every email about the piece.

## If a number doesn't match

If the number on a piece doesn't open a record, or the record describes a different piece, [write to us](/contact) with a photo of the piece and its mark. We keep the original registration photographs of every piece and will check.
