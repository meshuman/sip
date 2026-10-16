'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import type { HeroVideo as HeroVideoData } from '@/data/hero-video';

const REDUCED = '(prefers-reduced-motion: reduce)';

const subscribe = (onChange: () => void) => {
  const mq = window.matchMedia(REDUCED);
  mq.addEventListener('change', onChange);
  return () => mq.removeEventListener('change', onChange);
};

/** True when the visitor has neither asked for reduced motion nor turned on data saver. */
const filmWelcome = () => {
  const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
  return !window.matchMedia(REDUCED).matches && !saveData;
};

/**
 * Hero background film. The poster frame is always there, so nothing jumps. The film itself loads only when it is welcome:
 * not with reduced motion, not with data saver. It pauses when scrolled out of view, and can be paused by the visitor (WCAG 2.2.2).
 */
export function HeroVideo({ video }: { video: HeroVideoData }) {
  const box = useRef<HTMLDivElement>(null);
  const el = useRef<HTMLVideoElement>(null);
  const heldByVisitor = useRef(false);
  const live = useSyncExternalStore(subscribe, filmWelcome, () => false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!live || !box.current) return;
    const io = new IntersectionObserver(([e]) => {
      const v = el.current;
      if (!v) return;
      if (e.isIntersecting) {
        if (!heldByVisitor.current) void v.play().catch(() => {});
      } else v.pause();
    });
    io.observe(box.current);
    return () => io.disconnect();
  }, [live]);

  const toggle = () => {
    const v = el.current;
    if (!v) return;
    if (v.paused) {
      heldByVisitor.current = false;
      void v.play().catch(() => {});
    } else {
      heldByVisitor.current = true;
      v.pause();
    }
  };

  return (
    <>
      <div ref={box} className="hero2__video" style={{ backgroundImage: `url(${video.poster})` }}>
        {live && (
          <video
            ref={el}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={video.poster}
            aria-hidden="true"
            tabIndex={-1}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          >
            {video.srcWebm && <source src={video.srcWebm} type="video/webm" />}
            <source src={video.src} type="video/mp4" />
          </video>
        )}
      </div>
      <div className="hero2__ctl">
        {live && (
          <button type="button" className="hero2__pause" onClick={toggle} aria-pressed={!playing}>
            {playing ? 'Pause film' : 'Play film'}
          </button>
        )}
        <a className="hero2__credit" href={video.sourceUrl} target="_blank" rel="noopener noreferrer">
          Film: {video.credit} · {video.licence}
        </a>
      </div>
    </>
  );
}
