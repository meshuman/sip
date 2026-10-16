'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ArtisanByline } from '@/components/maker/ArtisanByline';
import { PieceGrid } from '@/components/piece/PieceCard';
import { MAKERS, PIECES } from '@/lib/catalog';
import { plural } from '@/lib/format';
import { placeName } from '@/data/places';

interface Entry {
  href: string;
  name: string;
  text: string;
  ne?: string;
  aka?: string;
}
export interface SearchIndex {
  crafts: Entry[];
  topics: Entry[];
  places: Entry[];
  rooms: Record<string, string>;
  topicNames: Record<string, string>;
  craftNames: Record<string, string>;
}

const SUGGESTIONS = ['Buddha', 'thangka', 'fish', 'Patan', 'wood'];

export function SearchView({ index, initial }: { index: SearchIndex; initial: string }) {
  const [q, setQ] = useState(initial);
  const router = useRouter();
  const t = q.trim().toLowerCase();
  const has = (...xs: (string | undefined)[]) => xs.filter(Boolean).join(' ').toLowerCase().includes(t);

  const pieces = t
    ? PIECES.filter((p) =>
        has(
          p.title,
          MAKERS[p.maker].name,
          placeName(p.place),
          index.craftNames[p.craft],
          p.material,
          p.lead,
          p.id,
          p.rooms.map((r) => index.rooms[r]).join(' '),
          p.topics.map((x) => index.topicNames[x]).join(' '),
        ),
      )
    : [];
  const makers = t ? Object.entries(MAKERS).filter(([, m]) => has(m.name, m.area, placeName(m.place), m.craftLabel, m.ne)) : [];
  const learn = t ? [...index.crafts, ...index.topics].filter((e) => has(e.name, e.text)) : [];
  const places = t ? index.places.filter((e) => has(e.name, e.ne, e.text, e.aka)) : [];
  const total = pieces.length + makers.length + learn.length + places.length;

  const update = (v: string) => {
    setQ(v);
    router.replace(v ? `/search?q=${encodeURIComponent(v)}` : '/search', { scroll: false });
  };

  return (
    <section className="sec-top wrap">
      <h1 className="rec-h search-h">Search</h1>
      <form className="reg-form search-form" role="search" onSubmit={(e) => e.preventDefault()}>
        <label className="sp-label" htmlFor="q">
          Search pieces, makers, crafts and places
        </label>
        <input
          id="q"
          className="field"
          type="search"
          placeholder="Try a maker, a place, Buddha, thangka or fish"
          value={q}
          onChange={(e) => update(e.target.value)}
          autoComplete="off"
        />
      </form>
      <div aria-live="polite">
        {!t && (
          <p className="muted">
            Try{' '}
            {SUGGESTIONS.map((s, i) => (
              <span key={s}>
                <button type="button" className="link-btn" onClick={() => update(s)}>
                  {s}
                </button>
                {i < SUGGESTIONS.length - 2 ? ', ' : i === SUGGESTIONS.length - 2 ? ' or ' : '.'}
              </span>
            ))}
          </p>
        )}
        {t && !total && (
          <>
            <p className="count-line">No results for “{q}”.</p>
            <p className="muted">
              Check the spelling, or try a maker, a place or a craft.{' '}
              <Link className="sp-link" href="/rooms">
                Enter the rooms
              </Link>
            </p>
          </>
        )}
        {t && total > 0 && (
          <>
            <p className="count-line">
              {plural(total, 'result')} for “{q}”
            </p>
            {pieces.length > 0 && (
              <>
                <h2 className="group-h">Pieces</h2>
                <PieceGrid pieces={pieces} cols={4} />
              </>
            )}
            {makers.length > 0 && (
              <>
                <h2 className="group-h">Makers</h2>
                <div className="makers-row">
                  {makers.map(([slug, m]) => (
                    <ArtisanByline key={slug} slug={slug} quote={false} label={m.craftLabel} />
                  ))}
                </div>
              </>
            )}
            {learn.length > 0 && (
              <>
                <h2 className="group-h">Crafts and meaning</h2>
                <div className="learn-col">
                  {learn.map((e) => (
                    <Link key={e.href} className="learn-item" href={e.href}>
                      <b>{e.name}</b>
                      <span>{e.text}</span>
                    </Link>
                  ))}
                </div>
              </>
            )}
            {places.length > 0 && (
              <>
                <h2 className="group-h">Places</h2>
                <div className="learn-col">
                  {places.map((e) => (
                    <Link key={e.href} className="learn-item" href={e.href}>
                      <b>
                        {e.name} <span className="ne">{e.ne}</span>
                      </b>
                      <span>{e.text}</span>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
}
