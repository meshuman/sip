import type { MetadataRoute } from 'next';
import { MAKERS, paths, PIECES, ROOM_ORDER } from '@/lib/catalog';
import { getCareGuides, getCrafts, getPlaces, getPosts, getTopics } from '@/lib/content';

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export default function sitemap(): MetadataRoute.Sitemap {
  const urls = [
    '/',
    '/rooms',
    '/pieces',
    '/makers',
    '/places',
    '/crafts',
    '/meaning',
    '/care',
    '/behind-the-scenes',
    '/journal',
    '/registry',
    '/about',
    '/about/how-we-work',
    '/commission',
    '/contact',
    '/help',
    '/help/shipping',
    '/help/returns',
    '/help/export-and-customs',
    '/help/payments',
    '/help/faq',
    '/legal/terms',
    '/legal/privacy',
    '/legal/cookies',
    ...ROOM_ORDER.map(paths.room),
    ...PIECES.map(paths.piece),
    ...PIECES.map(paths.record),
    ...Object.keys(MAKERS).map(paths.maker),
    ...Object.keys(getPlaces()).map(paths.place),
    ...Object.keys(getCrafts()).map(paths.craft),
    ...Object.keys(getTopics()).map((t) => paths.meaning(t)),
    ...Object.keys(getCareGuides()).map((c) => paths.care(c)),
    ...getPosts().map((p) => paths.journal(p.slug)),
  ];
  const lastModified = new Date();
  return urls.map((u) => ({ url: `${BASE}${u}`, lastModified, priority: u === '/' ? 1 : u.split('/').length <= 2 ? 0.8 : 0.6 }));
}
