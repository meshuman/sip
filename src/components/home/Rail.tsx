'use client';

import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from 'react';

const Chevron = ({ back }: { back?: boolean }) => (
  <svg className={`rail-btn__ic${back ? ' rail-btn__ic--back' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
    <path d="M9 5l7 7-7 7" />
  </svg>
);

/** A row of cards that moves with previous and next buttons instead of a scrollbar. Still scrolls by touch, trackpad and keyboard. */
export function Rail({ label, wide, children }: { label: string; wide?: boolean; children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const measure = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    setEdge({ start: el.scrollLeft <= 2, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 2 });
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  const go = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    const item = el.querySelector<HTMLElement>('.rail__item');
    const step = (item?.offsetWidth ?? 300) + 24;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({ left: dir * step * (wide ? 1 : 2), behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <div className="rail-wrap">
      <div className="wrap rail-ctl">
        <button type="button" className="rail-btn" onClick={() => go(-1)} disabled={edge.start} aria-label={`Previous: ${label}`}>
          <Chevron back />
        </button>
        <button type="button" className="rail-btn" onClick={() => go(1)} disabled={edge.end} aria-label={`Next: ${label}`}>
          <Chevron />
        </button>
      </div>
      <div className={`rail${wide ? ' rail--wide' : ''}`} ref={ref} onScroll={measure} role="region" aria-label={label} tabIndex={0}>
        {Children.map(children, (c) => (
          <div className="rail__item">{c}</div>
        ))}
      </div>
    </div>
  );
}
