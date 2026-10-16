'use client';

import { useEffect, useRef, useState } from 'react';
import { Plate } from '@/components/ui/Plate';
import { Title } from '@/components/ui/Title';
import { MAKERS } from '@/lib/catalog';
import { placeName } from '@/data/places';
import type { Piece } from '@/data/types';
import { useDemo } from '@/store/demo-store';

/** The 1200×630 share card (Open Graph image), scaled to fit its container. Never shows the price. */
export function ShareCard({ piece: p, owned }: { piece: Piece; owned?: boolean }) {
  const { buyer } = useDemo();
  const box = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.5);
  useEffect(() => {
    const el = box.current;
    if (!el) return;
    const fit = () => setScale(Math.min(1, el.clientWidth / 1200));
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const m = MAKERS[p.maker];
  return (
    <div className="sc-fit" ref={box} style={{ height: 630 * scale }}>
      <article className="sp-sharecard sc" aria-label="Share card" style={{ transform: `scale(${scale})` }}>
        <div className="sp-sharecard__plate">
          <Plate piece={p} />
        </div>
        <div className="sp-sharecard__text">
          <div className="sp-sharecard__brand">
            <b>Sīpa</b>
            <span className="sp-label">Made by hand in Nepal</span>
          </div>
          <h2>
            <Title text={p.title} />
          </h2>
          <p>{owned ? `Made by ${m.name} in ${placeName(p.place)}. Now kept in ${buyer.city}.` : `Made by ${m.name} in ${placeName(p.place)} over ${p.days} days.`}</p>
          <div className="sp-sharecard__foot">
            <div className={`sp-seal__ring${owned ? ' filled' : ''}`} aria-hidden="true">
              <span>S</span>
            </div>
            <span className="sp-reg">SĪPA · {p.id}</span>
          </div>
        </div>
      </article>
    </div>
  );
}
