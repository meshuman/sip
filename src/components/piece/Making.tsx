'use client';

import { useEffect, useRef, useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { Plate } from '@/components/ui/Plate';
import { MAKERS } from '@/lib/catalog';
import { dayRange } from '@/lib/format';
import type { Piece } from '@/data/types';

const TICK_MS = 100;
const TICKS_PER_STAGE = 22;

/**
 * The making film and its timeline, sharing one playhead.
 * Prototype: the film plays the stage illustrations as stills. Replace the frame with a <video> per piece
 * and seek it from the chapter list and the timeline's "Watch" links.
 */
export function Making({ piece: p, full, timeline = true }: { piece: Piece; full?: boolean; timeline?: boolean }) {
  const m = MAKERS[p.maker];
  const n = p.stages.length;
  const end = n * TICKS_PER_STAGE;
  const [tick, setTick] = useState(0);
  const [playing, setPlaying] = useState(false);
  const frame = useRef<HTMLDivElement>(null);
  const done = tick >= end;
  const running = playing && !done;
  const stage = Math.min(n - 1, Math.floor(tick / TICKS_PER_STAGE));

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setTick((x) => Math.min(x + 1, end)), TICK_MS);
    return () => clearInterval(t);
  }, [running, end]);

  const toggle = () => {
    if (running) return setPlaying(false);
    if (done) setTick(0);
    setPlaying(true);
  };
  const jump = (i: number, play = false) => {
    setTick(i * TICKS_PER_STAGE);
    if (play) {
      frame.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setPlaying(true);
    }
  };

  const s = p.stages[stage];
  const credit = full
    ? `The full, uncut record of ${m.first}’s work, filmed in ${m.area}. In the live product this is the full-length film; here, the stages play as stills.`
    : p.film.shows === 'this'
      ? `Filmed in ${m.area} over ${p.days} days. The full, uncut record is on ${m.first}’s page.`
      : `This film shows ${m.first} at the same work on another piece; ${p.title} was finished before we began filming.`;

  return (
    <div className="making-grid">
      <section className="sp-film film">
        <div className="sp-film__frame film-frame" ref={frame}>
          <div className="film-amb" aria-hidden="true">
            <Plate piece={p} stage={stage} />
          </div>
          <div className="film-art fade" key={stage}>
            <Plate piece={p} stage={stage} />
          </div>
          <span className="film-chip">
            <span className="sp-reg-s">{dayRange(s.from, s.to)}</span>
            <b>{s.name}</b>
          </span>
          <button className="sp-film__play" type="button" onClick={toggle}>
            <Icon name={running ? 'pause' : 'play'} /> <span>{running ? 'Pause' : 'Watch the making'}</span> <span className="sp-reg-s">{full ? '41:00' : p.film.dur}</span>
          </button>
          <div className="film-prog">
            <i style={{ width: `${((tick / end) * 100).toFixed(1)}%` }} />
          </div>
        </div>
        <ol className="sp-film__chapters">
          {p.stages.map((st, i) => (
            <li
              key={st.name}
              className={i === stage ? 'is-now' : ''}
              tabIndex={0}
              role="button"
              onClick={() => jump(i)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  jump(i);
                }
              }}
            >
              <b>{st.name}</b>
              <span className="sp-reg-s">{st.t}</span>
            </li>
          ))}
        </ol>
        <p className="sp-film__credit">{credit}</p>
      </section>

      {timeline && (
        <section className="sp-making">
          <p className="sp-label" style={{ margin: 0 }}>
            How it was made · {p.days} days in the hand
          </p>
          <div className="sp-making__scale" aria-hidden="true">
            {p.stages.map((st, i) => (
              <div
                key={st.name}
                className={`sp-making__stage${i === stage ? ' is-now' : ''}${/gild/i.test(st.name) ? ' is-gilt' : ''}`}
                style={{ width: `${(((st.to - st.from + 1) / p.days) * 100).toFixed(2)}%` }}
              >
                <i />
              </div>
            ))}
          </div>
          <div className="sp-making__days sp-reg-s">
            <span>Day 1</span>
            <span>Day {Math.round(p.days / 2)}</span>
            <span>Day {p.days}</span>
          </div>
          <ol>
            {p.stages.map((st, i) => (
              <li key={st.name} className={i === stage ? 'is-now' : ''}>
                <span className="sp-reg-s">{dayRange(st.from, st.to)}</span>
                <b>{st.name}</b>
                <span>{st.line}</span>
                <button type="button" className="link-btn" onClick={() => jump(i, true)}>
                  Watch · {st.t}
                </button>
              </li>
            ))}
          </ol>
        </section>
      )}
    </div>
  );
}
