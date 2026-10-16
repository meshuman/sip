// The short film behind the home hero: a real artisan at work on a Buddha statue.
// An openly licensed clip (Pexels licence, free to use with or without credit).
// Keep the clip short (10 to 20 seconds), muted, under 5 MB, and credit it. Host the file in public/video/.
export interface HeroVideo {
  /** MP4 (H.264) path or URL */
  src: string;
  /** Optional WebM alternative */
  srcWebm?: string;
  /** Still frame shown while it loads, and to visitors who prefer reduced motion */
  poster: string;
  /** Who filmed it, shown as a small credit */
  credit: string;
  /** Licence name, e.g. "CC BY 4.0" or "Pexels licence" */
  licence: string;
  /** Page the clip came from */
  sourceUrl: string;
}

export const HERO_VIDEO: HeroVideo = {
  src: '/video/hero.mp4',
  poster: '/video/hero-poster.jpg',
  credit: 'Dharmaraj Sunar',
  licence: 'Pexels licence',
  sourceUrl: 'https://www.pexels.com/video/artisan-crafting-traditional-nepalese-statue-35926986/',
};
