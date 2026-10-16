'use client';

import { pieceState } from '@/lib/catalog';
import type { Piece } from '@/data/types';
import { useDemo } from '@/store/demo-store';

/** A rupee amount in the visitor's chosen currency. */
export function Price({ rupees }: { rupees: number }) {
  return <>{useDemo().money(rupees)}</>;
}

/** The piece's price, or "Recorded" once it belongs to someone. */
export function PiecePrice({ piece }: { piece: Piece }) {
  const { owned, money } = useDemo();
  return <>{pieceState(piece, owned) === 'available' ? money(piece.price) : 'Recorded'}</>;
}
