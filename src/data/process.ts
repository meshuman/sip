// Copy for the home page's "How every piece is made" section. It describes how Sīpa works with makers on any piece.
export interface ProcessStep {
  heading: string;
  text: string;
}

export const PROCESS: ProcessStep[] = [
  {
    heading: 'We start with the maker',
    text: 'We visit the workshop, meet the family and agree what to make together. Makers choose the work. We never send a design to copy.',
  },
  {
    heading: 'We learn what the work means',
    text: 'A gesture, a colour or a motif carries meaning. We ask the maker and the community first, and write it down so every owner can read it.',
  },
  {
    heading: 'The maker sets the pace',
    text: 'Each piece takes as long as it takes. Makers set their own price, and are paid a fair share of every sale before the piece leaves the workshop.',
  },
  {
    heading: 'Made by hand, on film',
    text: 'The piece is made start to finish by the named maker, with their own tools and materials. We film it at work, and the film stays with the piece.',
  },
  {
    heading: 'Recorded and explained',
    text: 'The piece gets a registry number, a catalogue card on lokta paper, and a care kit for its material. Nothing arrives without its story.',
  },
  {
    heading: 'Packed and sent with care',
    text: 'Makers help pack their own work. Each piece is wrapped for the journey, cleared for export, and sent with tracking. When you choose it, the registry records it to you for life.',
  },
];

// The three promises under the hero, one line each.
export interface Promise3 {
  icon: 'hand' | 'card' | 'seal';
  heading: string;
  text: string;
}

export const PROMISES: Promise3[] = [
  { icon: 'hand', heading: 'Made by a named maker', text: 'Every piece is signed by the person who made it, in their own workshop.' },
  { icon: 'card', heading: 'Paid a fair share', text: 'Artisans are paid a fair share of every sale, enough to sustain their livelihood.' },
  { icon: 'seal', heading: 'Recorded for life', text: 'A registry number follows the piece, and each owner after, for life.' },
];
