// Shapes of Sīpa's catalogue data. The sample collection in catalog.ts follows these;
// a real backend (CMS or database) should return the same shapes.

export type PlaceSlug = 'patan' | 'bhaktapur' | 'kathmandu' | 'janakpur' | 'lumbini';
export type CareKind = 'metal' | 'wood' | 'stone' | 'cloth' | 'paper';
export type IconName =
  | 'compass'
  | 'hand'
  | 'seal'
  | 'cube'
  | 'film'
  | 'brush'
  | 'flask'
  | 'card'
  | 'cover'
  | 'folder'
  | 'share'
  | 'pin'
  | 'lamp'
  | 'days'
  | 'wall'
  | 'play'
  | 'pause'
  | 'turnL'
  | 'turnR'
  | 'search';

export interface Maker {
  name: string;
  first: string;
  /** Name in Devanagari */
  ne: string;
  /** Devanagari initial shown in the portrait halo until a photograph exists */
  initial: string;
  place: PlaceSlug;
  area: string;
  craft: string;
  craftLabel: string;
  lineage: string;
  years: number;
  quote: { ne: string; en: string; context: string };
  bio: string[];
  workshop: string;
  visits: string;
  /** Rupees paid to the workshop through Sīpa so far (sample figure) */
  paid: number;
  paidPieces: number;
  since: string;
}

export interface Hotspot {
  x: number;
  y: number;
  name: string;
  line: string;
}
export interface Stage {
  name: string;
  from: number;
  to: number;
  line: string;
  t: string;
}

/** Parameters for the placeholder illustration engine (src/lib/art). Replace with photographs. */
export interface ArtSpec {
  kind: string;
  g?: string;
  mat?: string;
  figure?: string;
  proc: string;
}

export interface Piece {
  /** Registry number, e.g. PTN-MT-26-0142: place, craft, year finished, serial */
  id: string;
  slug: string;
  title: string;
  maker: string;
  place: PlaceSlug;
  craft: string;
  rooms: string[];
  topics: string[];
  /** Carries the line "From the land of the Buddha's birth" */
  origin?: boolean;
  art: ArtSpec;
  material: string;
  size: string;
  weight?: string;
  days: number;
  /** Price in Nepali rupees */
  price: number;
  split: { maker: number; materials: number; fund: number; sipa: number };
  care: CareKind;
  filled?: string;
  lead: string;
  meaningHeading: string;
  meaning: string;
  suits: string;
  placement: { compass: 'N' | 'E' | 'S' | 'W' | null; facing: string; height: string; room: string };
  hotspots: Hotspot[];
  stages: Stage[];
  film: { dur: string; shows: 'this' | 'same' };
  /** Present when the piece already belongs to an owner */
  recorded?: { to: string; city: string; date: string };
}

export interface NoteReply {
  ne: string;
  en: string;
}
export interface Note {
  piece: string;
  maker: string;
  from: string;
  city?: string;
  date: string;
  public: boolean;
  text: string;
  reply?: NoteReply;
  status?: 'waiting' | 'read';
  readDate?: string;
  simulated?: boolean;
}

export interface CareKit {
  label: string;
  guide: string;
  items: { icon: IconName; name: string; size: string; line: string }[];
  steps: [string, string][];
}
