import Image from 'next/image';
import { MAKER_PHOTOS } from '@/data/photos';

/** A maker's photograph inside the halo, or their Devanagari initial when there is none. */
export function MakerFace({ slug, initial, size = 80 }: { slug: string; initial: string; size?: number }) {
  const src = MAKER_PHOTOS[slug];
  if (!src) return <>{initial}</>;
  return <Image src={src} alt="" width={size * 2} height={size * 2} sizes={`${size}px`} />;
}
