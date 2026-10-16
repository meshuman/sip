'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { paths, pieceState, registeredOn } from '@/lib/catalog';
import { formatDate } from '@/lib/format';
import type { Piece } from '@/data/types';
import { useDemo } from '@/store/demo-store';

/** The provenance list: registration, then each owner (named only with consent). */
export function RecordHistory({ piece: p }: { piece: Piece }) {
  const { owned, buyer } = useDemo();
  const st = pieceState(p, owned);
  const events: [string, string][] = [[formatDate(registeredOn(p)), 'Registered by Sīpa']];
  if (st === 'recorded' && p.recorded) events.push([formatDate(p.recorded.date), `Recorded to ${p.recorded.to}, ${p.recorded.city}`]);
  if (st === 'yours') {
    const o = owned[p.id];
    events.push([formatDate(o.date), o.public ? `Recorded to ${buyer.first}, ${buyer.city} (you)` : 'Recorded to a private owner (you)']);
  }
  return (
    <ol className="prov">
      {events.map(([d, t]) => (
        <li key={d + t}>
          <span className="sp-reg-s">{d}</span>
          <span>{t}</span>
        </li>
      ))}
    </ol>
  );
}

export function RecordOwnerBanner({ piece: p }: { piece: Piece }) {
  const { owned } = useDemo();
  if (!owned[p.id]) return null;
  return (
    <p className="owner-banner">
      <Icon name="seal" /> This piece is recorded to you.{' '}
      <Link className="sp-link" href={paths.owned(p)}>
        Open your owner’s record
      </Link>
    </p>
  );
}
