// Lookups and URL builders for the catalogue. URLs follow docs/sitemap.routes.json.
import { CARE_KITS, MAKERS, PIECES, ROOM_LEAD, ROOM_ORDER, SAMPLE_NOTES } from '@/data/catalog';
import type { Maker, Note, Piece } from '@/data/types';
import { addDays } from './format';

export { CARE_KITS, MAKERS, PIECES, ROOM_LEAD, ROOM_ORDER, SAMPLE_NOTES };

export const BY_ID: Record<string, Piece> = Object.fromEntries(PIECES.map((p) => [p.id, p]));

/** Registry ids are uppercase on screen and lowercase in URLs. */
export const regKey = (p: Pick<Piece, 'id'>) => p.id.toLowerCase();

/** Piece URL key: registry id + slug, e.g. ptn-mt-26-0142-shakyamuni-earth-touching */
export const pieceKey = (p: Piece) => `${regKey(p)}-${p.slug}`;

/** The first 14 characters of a piece key are always the registry id. */
export function pieceFromKey(key: string): Piece | undefined {
  return BY_ID[key.slice(0, 14).toUpperCase()];
}

export function pieceFromRegistryId(id: string): Piece | undefined {
  return BY_ID[
    id
      .toUpperCase()
      .replace(/^S[IĪ]PA\s*·?\s*/, '')
      .trim()
  ];
}

export const paths = {
  home: () => '/',
  rooms: () => '/rooms',
  room: (slug: string) => `/rooms/${slug}`,
  pieces: (filter: { craft?: string; room?: string } = {}) => {
    const q = new URLSearchParams();
    if (filter.room) q.set('room', filter.room);
    if (filter.craft) q.set('craft', filter.craft);
    const s = q.toString();
    return s ? `/pieces?${s}` : '/pieces';
  },
  piece: (p: Piece) => `/pieces/${pieceKey(p)}`,
  makers: () => '/makers',
  maker: (slug: string) => `/makers/${slug}`,
  places: () => '/places',
  place: (slug: string) => `/places/${slug}`,
  crafts: () => '/crafts',
  craft: (slug: string) => `/crafts/${slug}`,
  meaning: (slug?: string) => (slug ? `/meaning/${slug}` : '/meaning'),
  care: (material?: string) => (material ? `/care/${material}` : '/care'),
  refills: (p?: Piece) => (p ? `/care/refills?piece=${regKey(p)}` : '/care/refills'),
  journal: (slug?: string) => (slug ? `/journal/${slug}` : '/journal'),
  registry: () => '/registry',
  record: (p: Pick<Piece, 'id'>) => `/record/${regKey(p)}`,
  cart: () => '/cart',
  checkout: () => '/checkout',
  complete: (orderId: string) => `/checkout/complete/${orderId}`,
  collection: () => '/account/collection',
  owned: (p: Pick<Piece, 'id'>) => `/account/collection/${regKey(p)}`,
  visit: (maker?: string) => (maker ? `/visit?workshop=${maker}#ask` : '/visit'),
  share: (p: Pick<Piece, 'id'>) => `/p/${regKey(p)}`,
};

export const piecesIn = (room: string) => PIECES.filter((p) => p.rooms.includes(room));
export const makerPieces = (slug: string) => PIECES.filter((p) => p.maker === slug);
export const makerOf = (p: Piece): Maker => MAKERS[p.maker];

/** When the sample registry entry was made. */
export const registeredOn = (p: Piece) => (p.recorded ? addDays(p.recorded.date, -24) : '2026-10-01');

export type PieceState = 'available' | 'recorded' | 'yours';

export function pieceState(p: Piece, owned: Record<string, unknown>): PieceState {
  if (owned[p.id]) return 'yours';
  if (p.recorded) return 'recorded';
  return 'available';
}

export function allNotes(userNotes: Note[]): Note[] {
  return SAMPLE_NOTES.concat(userNotes);
}

export const isStatue = (p: Piece) => ['buddha', 'tara', 'ganesh', 'bell', 'bowl'].includes(p.art.kind);
