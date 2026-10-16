import type { Piece } from '@/data/types';

export interface ArtOptions {
  /** Making stage to draw (0 = first stage). Omit for the finished piece. */
  stage?: number;
  /** Draw the figure alone, without the studio backdrop (used by the turnable stage). */
  bare?: boolean;
  /** Unique id prefix for SVG gradients and filters on this page (use React's useId). */
  uid?: string;
}

/** Returns SVG markup for a piece's illustrated plate. */
export function art(p: Pick<Piece, 'art'>, o?: ArtOptions): string;
export const PROC: Record<string, string[]>;
