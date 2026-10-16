'use client';

import Link from 'next/link';
import { Plate } from '@/components/ui/Plate';
import { Title } from '@/components/ui/Title';
import { MAKERS, paths, pieceState } from '@/lib/catalog';
import { placeName } from '@/data/places';
import type { Piece } from '@/data/types';
import { useDemo } from '@/store/demo-store';

/** Design-system PieceCard. `href` overrides the link (e.g. to the owner's record). */
export function PieceCard({ piece: p, href }: { piece: Piece; href?: string }) {
  const { owned, money } = useDemo();
  const m = MAKERS[p.maker];
  const st = pieceState(p, owned);
  const flag = st === 'yours' ? 'Recorded to you' : st === 'recorded' ? 'Recorded' : '';
  return (
    <Link className="sp-card" href={href ?? paths.piece(p)}>
      <div className="sp-card__img">
        <Plate piece={p} />
        {flag && <span className="sp-card__flag sp-label flag-rec">{flag}</span>}
      </div>
      <h3 className="sp-card__title">
        <Title text={p.title} />
      </h3>
      <p className="sp-card__meta">
        {m.name} · {placeName(p.place)} · {p.days} days
      </p>
      <div className="sp-card__foot">
        <span className="sp-reg-s">{p.id}</span>
        <span className="sp-reg">{st === 'available' ? money(p.price) : 'Recorded'}</span>
      </div>
    </Link>
  );
}

export function PieceGrid({ pieces, cols = 3 }: { pieces: Piece[]; cols?: 3 | 4 }) {
  return (
    <div className={`sp-gallery g${cols}-cards`}>
      {pieces.map((p) => (
        <PieceCard key={p.id} piece={p} />
      ))}
    </div>
  );
}
