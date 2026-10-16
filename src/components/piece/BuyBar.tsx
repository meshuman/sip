'use client';

import { useEffect, useState } from 'react';
import { Plate } from '@/components/ui/Plate';
import { Title } from '@/components/ui/Title';
import { MAKERS, pieceState } from '@/lib/catalog';
import { placeName } from '@/data/places';
import type { Piece } from '@/data/types';
import { useDemo } from '@/store/demo-store';
import { BuyButton } from './BuyButton';

/** Bar fixed to the bottom of the screen once the main buy button has scrolled out of view. */
export function BuyBar({ piece: p, watch }: { piece: Piece; watch: string }) {
  const { owned, bag, money } = useDemo();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const target = document.querySelector(watch);
    if (!target) return;
    const io = new IntersectionObserver(([e]) => setShow(!e.isIntersecting && e.boundingClientRect.top < 0));
    io.observe(target);
    return () => io.disconnect();
  }, [watch]);
  const active = show && pieceState(p, owned) === 'available' && !bag.includes(p.id);
  useEffect(() => {
    document.body.classList.toggle('has-buybar', active);
    return () => document.body.classList.remove('has-buybar');
  }, [active]);
  if (!active) return null;
  const m = MAKERS[p.maker];
  return (
    <div className="buybar">
      <div className="wrap buybar__in">
        <div className="buybar__thumb plate">
          <Plate piece={p} />
        </div>
        <div className="buybar__t">
          <b>
            <Title text={p.title} />
          </b>
          <span className="buybar__m">
            {m.name}, {placeName(p.place)}
          </span>
          <span className="buybar__pm sp-reg">{money(p.price)}</span>
        </div>
        <span className="sp-reg buybar__price">{money(p.price)}</span>
        <BuyButton piece={p} compact />
      </div>
    </div>
  );
}
