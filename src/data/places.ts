// Place names used by client components. Full place stories live in content/places/*.md.
import type { PlaceSlug } from './types';

export const PLACE_NAMES: Record<PlaceSlug, { name: string; nameNe: string }> = {
  patan: { name: 'Patan', nameNe: 'पाटन' },
  bhaktapur: { name: 'Bhaktapur', nameNe: 'भक्तपुर' },
  kathmandu: { name: 'Kathmandu', nameNe: 'काठमाडौं' },
  janakpur: { name: 'Janakpur', nameNe: 'जनकपुर' },
  lumbini: { name: 'Lumbini', nameNe: 'लुम्बिनी' },
};

export const placeName = (slug: PlaceSlug) => PLACE_NAMES[slug]?.name ?? slug;
