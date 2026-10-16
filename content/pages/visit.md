---
id: visit
route: /visit
status: needs-input
phase: phase-2
title: Visit a workshop
seo:
  title: Visit a workshop in Nepal · Sīpa
  description: Meet the makers behind Sīpa in their own workshops in Patan, Bhaktapur and Janakpur. See the work in progress and ask to visit.
share: default
schema: [ItemList, TouristAttraction]
sections:
  - component: ChapterHeader
    label: Visit
    ne: भेटघाट
    heading: Meet a maker at the bench
    lead: Some of Sīpa's makers welcome visitors to their workshops. You can watch the work, ask questions, and see pieces long before they are finished.
  - component: ArtisanByline
    variant: workshops
    source: workshops(open to visitors, grouped by place)
    perWorkshop:
      line: "{workshop.craft} · {workshop.area} · visits {workshop.visitHours}"
      button: Ask to visit
  - component: Form
    variant: visit-request
    heading: Ask to visit
    lead: Tell us when you are in Nepal and which workshop you'd like to see. We'll confirm with the maker and reply within two working days.
    fields: [name, email, phone, workshop, dates, groupSize, message]
    labels: { workshop: Workshop, dates: Dates you're in Nepal, groupSize: How many people }
    button: Ask to visit
    success: Thank you. We'll confirm with the maker and reply within two working days.
  - component: Prose
    body: true
---
## Before you go

Workshops are working places and family homes. Visits last about an hour. Makers keep working while you watch, and photographs are welcome once you ask. {{TODO: whether visits are free, or a fee paid to the workshop}}

At most workshops you'll see a QR code by the door. Scan it to open the maker's page, with their film and the pieces you can buy and have shipped home.
