'use client';

import Image from 'next/image';
import { useState } from 'react';
import { BEHIND, BEHIND_CATEGORIES, type BehindCategory } from '@/data/behind';
import { formatDate } from '@/lib/format';

/** Filterable list of behind-the-scenes stories. Each opens in place. */
export function BehindList() {
  const [cat, setCat] = useState<BehindCategory | 'All'>('All');
  const list = cat === 'All' ? BEHIND : BEHIND.filter((s) => s.category === cat);
  const blurb = BEHIND_CATEGORIES.find((c) => c.name === cat)?.blurb;

  return (
    <div className="behind">
      <div className="chips" role="group" aria-label="Filter by topic">
        {(['All', ...BEHIND_CATEGORIES.map((c) => c.name)] as const).map((c) => (
          <button key={c} type="button" className={`chip${cat === c ? ' is-on' : ''}`} aria-pressed={cat === c} onClick={() => setCat(c)}>
            {c}
          </button>
        ))}
      </div>
      <p className="muted behind__blurb" aria-live="polite">
        {blurb ?? 'All stories, newest first.'}{' '}
        <span className="sp-reg-s">
          {list.length} of {BEHIND.length}
        </span>
      </p>
      <ul className="behind__grid">
        {list.map((s, i) => (
          <li key={s.id} id={s.id} className={`behind-card${i === 0 && cat === 'All' ? ' behind-card--lead' : ''}`}>
            <div className="behind-card__img">
              <Image src={s.photo} alt="" fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 600px" />
            </div>
            <div className="behind-card__body">
              <p className="sp-label">
                {s.category} · {formatDate(s.date)}
              </p>
              <h3>{s.title}</h3>
              <p className="behind-card__sum">{s.summary}</p>
              <details>
                <summary>Read the story</summary>
                <div className="behind-card__more">
                  {s.body.map((t, k) => (
                    <p key={k}>{t}</p>
                  ))}
                  <p className="muted small">By {s.by}.</p>
                </div>
              </details>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
