'use client';

import { pieceState, registeredOn } from '@/lib/catalog';
import { formatDate } from '@/lib/format';
import type { Piece } from '@/data/types';
import { useDemo } from '@/store/demo-store';

/** The registry seal: the only circle in the system. Gilt and filled means recorded to an owner. */
export function RegistrySeal({ piece: p, big }: { piece: Piece; big?: boolean }) {
  const { owned } = useDemo();
  const st = pieceState(p, owned);
  const line =
    st === 'yours'
      ? `Recorded to you · ${formatDate(owned[p.id].date)}`
      : st === 'recorded' && p.recorded
        ? `Recorded to ${p.recorded.to}, ${p.recorded.city} · ${formatDate(p.recorded.date)}`
        : `Registered ${formatDate(registeredOn(p))} · awaiting its first owner`;
  return (
    <div className={`sp-seal${st !== 'available' ? ' sp-seal--owned' : ''}${big ? ' seal-big' : ''}`}>
      <div className="sp-seal__ring" aria-hidden="true">
        <span>S</span>
      </div>
      <div className="sp-seal__text">
        <span className="sp-reg">SĪPA · {p.id}</span>
        <small>{line}</small>
      </div>
    </div>
  );
}

/** A seal ring on its own (no text). */
export function SealRing({ owned, className = '' }: { owned?: boolean; className?: string }) {
  return (
    <div className={`sp-seal${owned ? ' sp-seal--owned' : ''} ${className}`}>
      <div className="sp-seal__ring" aria-hidden="true">
        <span>S</span>
      </div>
    </div>
  );
}
