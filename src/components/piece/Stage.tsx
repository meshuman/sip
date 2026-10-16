'use client';

import { useRef, useState, type PointerEvent } from 'react';
import { Icon } from '@/components/ui/Icon';
import { Plate } from '@/components/ui/Plate';
import { isStatue } from '@/lib/catalog';
import type { Piece } from '@/data/types';

/**
 * "Look closer": numbered hotspots on the piece. Statues can be dragged or turned.
 * Prototype: the turn squeezes a drawing. Replace with a photogrammetry model (e.g. <model-viewer>) per piece.
 */
export function Stage({ piece: p }: { piece: Piece }) {
  const flat = !isStatue(p);
  const [angle, setAngle] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const [animate, setAnimate] = useState(false);
  const [dragging, setDragging] = useState(false);
  const drag = useRef<number | null>(null);

  const c = Math.cos((angle * Math.PI) / 180);
  const sx = Math.abs(c) < 0.08 ? 0.08 * Math.sign(c || 1) : c;
  const turned = c < 0.35;

  const onDown = (e: PointerEvent<HTMLDivElement>) => {
    if (flat || (e.target as HTMLElement).closest('button')) return;
    drag.current = e.clientX;
    setDragging(true);
    setAnimate(false);
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (drag.current == null) return;
    const dx = e.clientX - drag.current;
    drag.current = e.clientX;
    setAngle((a) => a + dx * 0.7);
  };
  const onUp = () => {
    drag.current = null;
    setDragging(false);
  };
  const turn = (deg: number) => {
    setAnimate(true);
    setAngle((a) => a + deg);
  };

  return (
    <>
      <div
        className={`sp-stage stage${turned ? ' is-turned' : ''}${dragging ? ' is-dragging' : ''}`}
        data-flat={flat}
        onPointerDown={onDown}
        onPointerMove={onMove}
        onPointerUp={onUp}
        onPointerCancel={onUp}
      >
        <div className="stage-box">
          <div
            className="stage-fig"
            style={{
              transform: `scaleX(${sx})`,
              filter: `brightness(${(0.78 + 0.22 * Math.abs(c)).toFixed(3)})${c < 0 ? ' saturate(.85)' : ''}`,
              transition: animate ? 'transform .5s ease, filter .5s ease' : 'none',
            }}
          >
            <Plate piece={p} bare={!flat} />
          </div>
          {p.hotspots.map((h, i) => (
            <div
              key={h.name}
              className={`sp-hot${h.x > 58 ? ' sp-hot--left' : ''}${open === i ? ' sp-hot--open' : ''}`}
              style={{ left: `${(50 + (h.x - 50) * c).toFixed(2)}%`, top: `${h.y}%` }}
            >
              <button className="sp-hot__dot" type="button" aria-expanded={open === i} aria-label={`${i + 1}, ${h.name}`} onClick={() => setOpen(open === i ? null : i)}>
                {i + 1}
              </button>
              <div className="sp-hot__card">
                <b>{h.name}</b>
                <span>{h.line}</span>
              </div>
            </div>
          ))}
        </div>
        <span className="sp-stage__hint sp-reg-s">{flat ? 'Tap a number to look closer' : 'Drag to turn · 360°'}</span>
        {!flat && (
          <div className="stage-ctl">
            <button type="button" className="sp-sharebar__btn" aria-label="Turn left" onClick={() => turn(-45)}>
              <Icon name="turnL" />
            </button>
            <button type="button" className="sp-sharebar__btn" aria-label="Turn right" onClick={() => turn(45)}>
              <Icon name="turnR" />
            </button>
          </div>
        )}
      </div>
      <ol className="sp-hotlist">
        {p.hotspots.map((h) => (
          <li key={h.name}>
            <div>
              <b>{h.name}</b>
              <span>{h.line}</span>
            </div>
          </li>
        ))}
      </ol>
    </>
  );
}
