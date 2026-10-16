import { Title } from '@/components/ui/Title';
import { CARE_KITS, MAKERS } from '@/lib/catalog';
import { placeName } from '@/data/places';
import type { Piece } from '@/data/types';

/** Placeholder pattern for the code printed on the card. Generate a real QR code for /r/[registryId]. */
export function QrCode() {
  const rects: [number, number, number, number, boolean?][] = [
    [0, 0, 7, 7],
    [1, 1, 5, 5, true],
    [2, 2, 3, 3],
    [14, 0, 7, 7],
    [15, 1, 5, 5, true],
    [16, 2, 3, 3],
    [0, 14, 7, 7],
    [1, 15, 5, 5, true],
    [2, 16, 3, 3],
    [9, 1, 2, 2],
    [8, 4, 1, 3],
    [11, 6, 2, 1],
    [9, 9, 3, 2],
    [14, 9, 2, 3],
    [18, 10, 2, 1],
    [1, 9, 3, 1],
    [5, 11, 2, 2],
    [9, 14, 2, 3],
    [12, 13, 1, 2],
    [15, 15, 3, 2],
    [19, 17, 2, 3],
    [13, 18, 3, 2],
    [9, 19, 2, 2],
  ];
  return (
    <svg viewBox="0 0 21 21" role="img" aria-label="Code that opens the record">
      {rects.map(([x, y, w, h, hole], i) => (
        <rect key={i} x={x} y={y} width={w} height={h} style={hole ? { fill: 'var(--paper)' } : undefined} />
      ))}
    </svg>
  );
}

/** The printed catalogue card on lokta paper: front and back. */
export function CatalogueCard({ piece: p }: { piece: Piece }) {
  const m = MAKERS[p.maker];
  return (
    <div className="sp-cat">
      <article className="sp-cat__face sp-cat__front" aria-label="Front of the card">
        <span className="sp-label">Sīpa</span>
        <div className="sp-seal__ring sp-cat__seal" aria-hidden="true">
          <span>S</span>
        </div>
        <h3>
          <Title text={p.title} />
        </h3>
        <div className="sp-cat__rule" aria-hidden="true" />
        <p className="muted">
          {m.name}
          <br />
          {m.area}, {placeName(p.place)} · 2026
        </p>
        <p>
          {p.material.split(',')[0]}.
          <br />
          {p.days} days in the hand.
        </p>
        <p className="sp-reg-s muted">{p.size}</p>
        <span className="sp-reg">SĪPA · {p.id}</span>
      </article>
      <article className="sp-cat__face sp-cat__back" aria-label="Back of the card">
        <p className="sp-label">What it means</p>
        <p>{p.meaning.split('. ')[0]}.</p>
        <p className="sp-label">Where to place it</p>
        <p>
          {p.placement.facing}. {p.placement.height}.
        </p>
        <p className="sp-label">How to care for it</p>
        <p>{CARE_KITS[p.care].steps[0][1]}</p>
        <div className="sp-cat__qr">
          <QrCode />
          <p className="muted">Scan to open the record, the making film and the care steps.</p>
        </div>
        <p className="muted" style={{ fontSize: 12, lineHeight: '18px' }}>
          {p.origin ? 'From the land of the Buddha’s birth. ' : ''}Made by hand in Nepal. Recorded for life.
        </p>
      </article>
    </div>
  );
}
