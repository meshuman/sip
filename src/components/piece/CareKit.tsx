import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import { CARE_KITS, paths } from '@/lib/catalog';
import type { Piece } from '@/data/types';

/** What ships in the box for this piece's material, and the care steps its maker uses. */
export function CareKit({ piece: p, compact }: { piece: Piece; compact?: boolean }) {
  const k = CARE_KITS[p.care];
  return (
    <section className="sp-kit">
      <header className="sp-kit__head">
        <p className="sp-label">In the box · {k.label}</p>
        <h3>Everything it needs for its first years</h3>
      </header>
      <ul className="sp-kit__items">
        {k.items.map((it) => (
          <li key={it.name}>
            <Icon name={it.icon} className="kit-ic" />
            <div>
              <b>{it.name}</b>
              <span className="sp-reg-s">{it.size}</span>
              <span>{it.line}</span>
            </div>
          </li>
        ))}
      </ul>
      {!compact && (
        <ol className="sp-kit__steps">
          {k.steps.map(([when, step]) => (
            <li key={when}>
              <span className={`sp-label${when === 'Never' ? ' sp-care__never' : ''}`}>{when}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      )}
      <div className="sp-kit__foot">
        <Link className="sp-link" href={paths.care(k.guide)}>
          The full care guide
        </Link>
        <Link className="sp-kit__refill" href={paths.refills(p)}>
          Refills for this piece: <span className="sp-reg-s">{p.id}</span>
        </Link>
      </div>
    </section>
  );
}
