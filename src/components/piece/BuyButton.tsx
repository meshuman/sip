'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Icon } from '@/components/ui/Icon';
import { paths, pieceState } from '@/lib/catalog';
import type { Piece } from '@/data/types';
import { useDemo } from '@/store/demo-store';

/** The piece's main action: buy, continue to the bag, open the owner's record, or show it is recorded. */
export function BuyButton({ piece: p, compact }: { piece: Piece; compact?: boolean }) {
  const { owned, bag, money, addToBag } = useDemo();
  const router = useRouter();
  const st = pieceState(p, owned);
  if (st === 'yours')
    return (
      <Link className="sp-btn" href={paths.owned(p)}>
        <Icon name="seal" className="sp-btn__icon" /> Open your owner’s record
      </Link>
    );
  if (st === 'recorded')
    return (
      <button className="sp-btn" type="button" disabled>
        <Icon name="seal" className="sp-btn__icon" /> Recorded to its owner
      </button>
    );
  if (bag.includes(p.id))
    return (
      <Link className="sp-btn" href={paths.cart()}>
        In your bag · Continue
      </Link>
    );
  return (
    <button
      className="sp-btn"
      type="button"
      onClick={() => {
        addToBag(p.id);
        router.push(paths.cart());
      }}
    >
      Make it yours {!compact && <span className="sp-btn__price">{money(p.price)}</span>}
    </button>
  );
}
