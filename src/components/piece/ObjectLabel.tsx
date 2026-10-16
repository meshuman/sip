'use client';

import { Title } from '@/components/ui/Title';
import { MAKERS, pieceState } from '@/lib/catalog';
import { placeName } from '@/data/places';
import type { Piece } from '@/data/types';
import { useDemo } from '@/store/demo-store';

/** Museum-style object label: title, maker, material, size, time in the hand, edition, number, price. */
export function ObjectLabel({ piece: p }: { piece: Piece }) {
  const { owned, money } = useDemo();
  const m = MAKERS[p.maker];
  const first = p.stages[0].name.toLowerCase();
  const last = p.stages[p.stages.length - 1].name.toLowerCase();
  return (
    <article className="sp-objlabel">
      <header className="sp-objlabel__head">
        <h3 className="sp-objlabel__title">
          <Title text={p.title} />
        </h3>
        <p className="sp-objlabel__maker">
          {m.name} · {m.area}, {placeName(p.place)} · 2026
        </p>
      </header>
      <dl>
        <div className="sp-objlabel__row">
          <dt className="sp-label">Material</dt>
          <dd>{p.material}</dd>
        </div>
        <div className="sp-objlabel__row">
          <dt className="sp-label">Size</dt>
          <dd className="sp-reg-s">
            {p.size}
            {p.weight && (
              <>
                {' · '}
                <span className="sp-nb">{p.weight}</span>
              </>
            )}
          </dd>
        </div>
        <div className="sp-objlabel__row">
          <dt className="sp-label">In the hand</dt>
          <dd>
            {p.days} days, {first} to {last}
          </dd>
        </div>
        <div className="sp-objlabel__row">
          <dt className="sp-label">Edition</dt>
          <dd>One of one</dd>
        </div>
      </dl>
      <footer className="sp-objlabel__foot">
        <span className="sp-reg">SĪPA · {p.id}</span>
        <span className="sp-reg">{pieceState(p, owned) === 'available' ? money(p.price) : 'Recorded'}</span>
      </footer>
    </article>
  );
}
