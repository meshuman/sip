'use client';

import { useLayoutEffect } from 'react';

/** Blocks on the home page that fade up as they scroll into view. */
const TARGETS = [
  '.home .sp-chapter',
  '.home .promise',
  '.home .cta > *',
  '.home .makers-row > *',
  '.home .feature > *',
  '.home .sec-head',
  '.home .feature__pair > *',
  '.home .process__step',
  '.home .pullquote > *',
  '.home .box-card',
  '.home .learn-card',
  '.home .learn-more li',
  '.home .split > *',
  '.home .more',
].join(',');

/**
 * Slow fade-up as home page blocks enter the viewport, staggered across siblings. Renders nothing.
 * Without JS, or with reduced motion, every block stays visible and still.
 */
export function HomeMotion() {
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(TARGETS));
    const seen = new Map<Element, number>();
    els.forEach((el) => {
      const i = seen.get(el.parentElement!) ?? 0;
      seen.set(el.parentElement!, i + 1);
      el.style.setProperty('--reveal-delay', `${Math.min(i, 5) * 110}ms`);
      el.classList.add('reveal');
    });
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add('reveal--in');
          io.unobserve(e.target);
        }),
      { rootMargin: '0px 0px -12% 0px' },
    );
    els.forEach((el) => io.observe(el));
    return () => {
      io.disconnect();
      els.forEach((el) => el.classList.remove('reveal', 'reveal--in'));
    };
  }, []);
  return null;
}
