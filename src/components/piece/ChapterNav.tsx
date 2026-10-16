'use client';

import { useEffect, useRef, useState } from 'react';

/** Sticky "on this page" bar for a piece. Highlights the chapter being read. */
export function ChapterNav({ chapters }: { chapters: [id: string, label: string][] }) {
  const [active, setActive] = useState<string | null>(null);
  const box = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-35% 0px -60% 0px' });
    chapters.forEach(([id]) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, [chapters]);
  useEffect(() => {
    const btn = box.current?.querySelector<HTMLButtonElement>('.is-on');
    if (btn && box.current) box.current.scrollTo({ left: btn.offsetLeft - 16, behavior: 'smooth' });
  }, [active]);
  const go = (id: string) => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? 'instant' : 'smooth', block: 'start' });
  };
  return (
    <nav className="chapnav" aria-label="On this page">
      <div className="wrap chapnav__in" ref={box}>
        {chapters.map(([id, label]) => (
          <button key={id} type="button" className={active === id ? 'is-on' : ''} aria-current={active === id || undefined} onClick={() => go(id)}>
            {label}
          </button>
        ))}
      </div>
    </nav>
  );
}
