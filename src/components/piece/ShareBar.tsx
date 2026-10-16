'use client';

import { useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { paths, regKey } from '@/lib/catalog';
import type { Piece } from '@/data/types';
import { useDemo } from '@/store/demo-store';

/** Copy the piece's short link, or preview the card people see when it is shared. */
export function ShareBar({ piece: p, label = 'Share this piece' }: { piece: Piece; label?: string }) {
  const { openShareCard } = useDemo();
  const [copyLabel, setCopyLabel] = useState('Copy link');
  const copy = async () => {
    const url = `${window.location.origin}${paths.share(p)}`;
    const say = (t: string) => {
      setCopyLabel(t);
      setTimeout(() => setCopyLabel('Copy link'), 1800);
    };
    try {
      await navigator.clipboard.writeText(url);
      say('Link copied');
    } catch {
      say('Copy blocked here');
    }
  };
  return (
    <div>
      <p className="sp-label" style={{ margin: '0 0 10px' }}>
        {label}
      </p>
      <div className="sp-sharebar">
        <button className="sp-sharebar__btn" type="button" onClick={copy}>
          <Icon name="share" />
          <span>{copyLabel}</span>
        </button>
        <button className="sp-sharebar__btn" type="button" onClick={() => openShareCard(p.id)}>
          See the share card
        </button>
        <span className="sp-sharebar__url">sipa.example/p/{regKey(p)}</span>
      </div>
    </div>
  );
}
