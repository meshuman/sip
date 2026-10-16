'use client';

import Image from 'next/image';
import { useId } from 'react';
import { art } from '@/lib/art/illustrations';
import { PIECE_PHOTOS } from '@/data/photos';
import type { Piece } from '@/data/types';

interface Props {
  piece: Piece;
  /** Making stage to show; omit for the finished piece */
  stage?: number;
  /** Figure only, without the studio backdrop */
  bare?: boolean;
  /** Display width hint for the photograph, as an HTML sizes value */
  sizes?: string;
}

/**
 * The image of a piece, filling its positioned parent (.plate, .sp-card__img, .sp-hero__plate…).
 * Pieces with a photograph in src/data/photos.ts show it. Making stages and the turning viewer
 * still use the drawn illustration (src/lib/art).
 */
export function Plate({ piece, stage, bare, sizes = '(max-width: 600px) 80vw, (max-width: 1100px) 45vw, 480px' }: Props) {
  const uid = useId();
  const photo = PIECE_PHOTOS[piece.id];
  // The finished piece is shown as a photograph. Making stages and the turning viewer stay drawn.
  if (photo && stage === undefined && !bare) {
    return (
      <div className="art">
        <Image className="art__photo" src={photo} alt="" fill sizes={sizes} />
      </div>
    );
  }
  const svg = art(piece, { stage, bare, uid: `${uid}${stage ?? 'f'}${bare ? 'b' : ''}` });
  // The markup comes from our own illustration engine, never from user input.
  return <div className="art" aria-hidden="true" dangerouslySetInnerHTML={{ __html: svg }} />;
}
