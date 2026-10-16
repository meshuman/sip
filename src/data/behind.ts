// "Behind the scenes": the stories, incidents, initiatives and teamwork behind the documentation of the work.
// Sample copy for the prototype, like src/data/catalog.ts. The people are described by role, and the events are written to
// show how the section works. Replace them with Sīpa's own stories before launch.
export type BehindCategory = 'Documentation' | 'Community' | 'Initiatives' | 'Teamwork' | 'Incidents' | 'Stories';

export const BEHIND_CATEGORIES: { name: BehindCategory; blurb: string }[] = [
  { name: 'Documentation', blurb: 'How a piece is filmed, measured and recorded.' },
  { name: 'Community', blurb: 'Discussions with makers, neighbours and teachers.' },
  { name: 'Initiatives', blurb: 'Projects we run alongside the work.' },
  { name: 'Teamwork', blurb: 'Who is in the room, and what each person does.' },
  { name: 'Incidents', blurb: 'What went wrong, and what we changed.' },
  { name: 'Stories', blurb: 'Why we do things the way we do.' },
];

export interface BehindStory {
  id: string;
  category: BehindCategory;
  title: string;
  /** ISO date */
  date: string;
  /** Who tells it */
  by: string;
  summary: string;
  body: string[];
  /** A photograph from /public/photos, shown on the card */
  photo: string;
}

export const BEHIND: BehindStory[] = [
  {
    id: 'filming-a-making',
    category: 'Documentation',
    title: 'How we film a making, from the first day to the last',
    date: '2026-09-12',
    by: 'The film team',
    summary: 'One person, one small camera, and a rule that the maker decides what is filmed.',
    body: [
      'We film a piece from the first step to the last, but not in one visit. A filmmaker comes to the workshop on the days that matter: when the wax is finished, on the day of the pour, and when the gilding is done. In between, the maker keeps a phone on a stand and films the quiet days themselves.',
      'The maker decides what is filmed. Some steps, such as a family’s way of preparing its clay, are not for the camera, and we leave them out. Nothing is staged for us. If a morning goes badly, the film shows it.',
      'The film is cut into the same stages as the making timeline on the piece page, so that anyone watching can jump to the moment they are curious about.',
    ],
    photo: '/photos/pieces/ptn-mt-26-0142.jpg',
  },
  {
    id: 'numbering-a-piece',
    category: 'Documentation',
    title: 'Measuring, weighing and numbering a piece',
    date: '2026-08-20',
    by: 'The registry team',
    summary: 'The hour a piece spends on the table before it gets its number.',
    body: [
      'Before a piece is listed, it is measured, weighed and photographed from the same set of angles as every other. Two people do this together, and a third checks the numbers against the maker’s own notes.',
      'Only then does it get its registry number: the place, the craft, the year and a serial. The number is marked on the piece, printed on its card, and entered in the record that will list each owner from then on.',
      'It is slow work. We keep doing it by hand because the first record is the one every later record depends on.',
    ],
    photo: '/photos/pieces/ptn-mt-26-0127.jpg',
  },
  {
    id: 'what-a-gesture-means',
    category: 'Community',
    title: 'Asking the neighbourhood what a gesture means',
    date: '2026-07-30',
    by: 'The writing team',
    summary: 'Before we write what a piece means, we ask the people who live with it.',
    body: [
      'Our pages say what a piece shows and what that means. We do not write that from books alone. For each new subject, the writing team sits down with the maker, and often with neighbours, a priest or a teacher, and asks them to say it in their own words.',
      'Sometimes the answers differ from one street to the next. When they do, we say so on the page and name who we asked. A gesture can have more than one honest explanation.',
      'The maker and a reviewer read the final text before it is published. If either says it is wrong, it does not go out.',
    ],
    photo: '/photos/pieces/ktm-tk-26-0015.jpg',
  },
  {
    id: 'what-we-will-not-sell',
    category: 'Community',
    title: 'An evening on what we should never sell',
    date: '2026-06-18',
    by: 'The curators',
    summary: 'A discussion with makers and lamas that shaped how we treat sacred objects.',
    body: [
      'We held an open evening for makers, priests and neighbours to discuss what Sīpa should not sell. The answers were practical and clear.',
      'Statues made for worship are sold unfilled, so the owner’s own lama or priest can fill and consecrate them. We do not sell anything already consecrated. Where a piece is a copy of a famous object, we say that it is a copy.',
      'Those rules are now on every piece page, under the line that says whether it has been filled.',
    ],
    photo: '/photos/pieces/ptn-mt-26-0139.jpg',
  },
  {
    id: 'open-day',
    category: 'Initiatives',
    title: 'A workshop open day for local schoolchildren',
    date: '2026-05-14',
    by: 'The community team',
    summary: 'Once a term, a workshop in Patan opens its doors to a class.',
    body: [
      'Once a term, one of our partner workshops opens for a morning to a class from a nearby school. The children watch a pour from behind a rope, try carving soft wax, and ask the maker questions.',
      'The makers asked for this. Most said they had learned the craft from watching, and wanted children to see it before they decided it was not for them.',
      'We film the morning, with the school’s permission, and keep it for the makers’ own records.',
    ],
    photo: '/photos/makers/raju-shakya.jpg',
  },
  {
    id: 'care-kits',
    category: 'Initiatives',
    title: 'Packing care kits with the families who make the oil',
    date: '2026-04-09',
    by: 'The packing team',
    summary: 'Where the flask of wood oil in a carving’s box comes from.',
    body: [
      'Every wooden carving arrives with a flask of oil and a soft brush. We buy the oil from a family nearby who press and bottle it, and the brushes from a small workshop that makes them for painters.',
      'Kits are packed by hand, in the same room where the pieces are wrapped, so that the right kit goes in the right box. Each one is checked against the piece’s record before the lid goes on.',
    ],
    photo: '/photos/pieces/bkt-wd-26-0018.jpg',
  },
  {
    id: 'one-catalogue-card',
    category: 'Teamwork',
    title: 'Six people, one catalogue card',
    date: '2026-03-27',
    by: 'The editorial team',
    summary: 'Who writes, checks and prints the card that travels in the box.',
    body: [
      'The card in each box looks simple: maker, meaning, placement and care. It takes six people to make. The maker tells us the story, a writer drafts it, a second person checks the facts, and a reviewer from the craft reads it.',
      'A translator then makes sure it reads well in more than one language, and a printer sets it on lokta paper. The registry team adds the code that opens the piece’s record.',
      'If the maker finds a mistake after the piece has shipped, we reprint the card and send it to the owner.',
    ],
    photo: '/photos/pieces/jnk-mh-26-0034.jpg',
  },
  {
    id: 'a-cracked-mould',
    category: 'Incidents',
    title: 'The mould that cracked on pour day',
    date: '2026-02-11',
    by: 'The film team and the maker',
    summary: 'A failed casting, kept in the film, and what changed after it.',
    body: [
      'On the morning of a pour, a clay mould cracked as the hot metal went in, and the casting was lost. The maker made a new wax and began again. The piece took eleven days longer.',
      'We had the camera running, and we kept the footage. Early on we had edited failures out of films. After this, we agreed with the makers to leave them in, because a failed pour is part of how the craft works, and an honest film shows it.',
      'We also changed the schedule. A pour is now booked only after the mould has had a full extra day to dry.',
    ],
    photo: '/photos/pieces/ptn-mt-26-0118.jpg',
  },
  {
    id: 'held-at-customs',
    category: 'Incidents',
    title: 'The parcel that sat at customs for nine days',
    date: '2026-01-23',
    by: 'The shipping team',
    summary: 'A missing paper, a long wait, and the checklist that came out of it.',
    body: [
      'An early parcel waited nine days at customs because one export paper was missing. Nothing was damaged, but the owner waited far longer than we had told them.',
      'We now keep a checklist for every shipment, with the export clearance, the registry record, the packing list and the card, and a second person checks it before anything leaves. We also tell owners about the clearance step before they buy, not after.',
    ],
    photo: '/photos/pieces/ptn-st-26-0007.jpg',
  },
  {
    id: 'why-a-number',
    category: 'Stories',
    title: 'Why every piece has a number for life',
    date: '2025-12-05',
    by: 'The founders',
    summary: 'The conversation in a workshop that started the registry.',
    body: [
      'The registry began with a question a maker asked: what happens to my work after it leaves the workshop? Usually, nothing is known. A statue is sold, sold again, and its maker’s name is lost.',
      'We wanted a piece to carry its story with it. So each piece gets a number, and the number opens a record that names the maker, shows the making, and lists every owner in order.',
      'It is a simple idea, and keeping it up is most of the work.',
    ],
    photo: '/photos/makers/mira-bajracharya.jpg',
  },
];
