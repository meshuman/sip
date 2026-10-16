'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { Plate } from '@/components/ui/Plate';
import { Title } from '@/components/ui/Title';
import { BY_ID, CARE_KITS, MAKERS, paths, pieceFromRegistryId, PIECES } from '@/lib/catalog';
import { REFILL_PRICE } from '@/data/refills';
import type { Piece } from '@/data/types';
import { useDemo } from '@/store/demo-store';

function RefillList({ piece: p }: { piece: Piece }) {
  const { money } = useDemo();
  const k = CARE_KITS[p.care];
  return (
    <div className="refill">
      <div className="refill__head">
        <div className="plate">
          <Plate piece={p} />
        </div>
        <div>
          <span className="sp-reg-s gilt">SĪPA · {p.id}</span>
          <h3>
            <Title text={p.title} />
          </h3>
          <p className="muted small">
            Care kit for {k.label}, as {MAKERS[p.maker].first} uses it
          </p>
        </div>
      </div>
      <ul className="refill__items">
        {k.items.map((it) => (
          <li key={it.name}>
            <Icon name={it.icon} />
            <div>
              <b>{it.name}</b>
              <span className="sp-reg-s">{it.size}</span>
            </div>
            <span className="sp-reg">{REFILL_PRICE[it.name] ? money(REFILL_PRICE[it.name]) : 'Free with any refill'}</span>
            {REFILL_PRICE[it.name] ? (
              <button className="sp-btn sp-btn--quiet" type="button" disabled>
                Reorder
              </button>
            ) : (
              <span />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Refills matched to a piece by its registry number (phase 2). */
export function RefillsView({ initial }: { initial?: string }) {
  const router = useRouter();
  const { owned } = useDemo();
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);
  const chosen = initial ? pieceFromRegistryId(initial) : undefined;
  const mine = PIECES.filter((p) => owned[p.id]);
  const shown = chosen ? [chosen] : mine.length ? mine : [BY_ID['BKT-WD-26-0018']];
  const note = chosen
    ? 'Showing the refills for this number.'
    : mine.length
      ? 'Showing refills for the pieces recorded to you.'
      : 'Showing an example: the wooden Ganesh by Bishnu Silpakar.';
  return (
    <section className="wrap sec-tight split">
      <div>
        <form
          className="reg-form"
          onSubmit={(e) => {
            e.preventDefault();
            const p = pieceFromRegistryId(value);
            if (!p) return setError('We can’t find that number. It looks like BKT-WD-26-0018 and is printed on the piece’s card.');
            setError(null);
            router.push(paths.refills(p));
          }}
        >
          <label className="sp-label" htmlFor="rf-input">
            Registry number
          </label>
          <div className="reg-row">
            <input
              id="rf-input"
              className="field sp-reg"
              placeholder="BKT-WD-26-0018"
              autoComplete="off"
              spellCheck={false}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button className="sp-btn" type="submit">
              Find refills
            </button>
          </div>
          {error && (
            <p className="reg-err" role="alert">
              {error}
            </p>
          )}
        </form>
        <p className="muted small">{note}</p>
      </div>
      <div className="stack">
        {shown.map((p) => (
          <RefillList key={p.id} piece={p} />
        ))}
      </div>
    </section>
  );
}
