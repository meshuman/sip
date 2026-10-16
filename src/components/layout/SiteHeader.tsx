'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useSyncExternalStore, type ReactNode } from 'react';
import { Icon } from '@/components/ui/Icon';
import type { Currency } from '@/lib/format';
import { useDemo } from '@/store/demo-store';

const NAV: [string, string, string[]][] = [
  ['/rooms', 'Rooms', ['/rooms', '/pieces']],
  ['/makers', 'Makers', ['/makers']],
  ['/places', 'Places', ['/places']],
  ['/crafts', 'Learn', ['/crafts', '/meaning', '/care']],
  ['/behind-the-scenes', 'Behind the scenes', ['/behind-the-scenes']],
  ['/journal', 'Journal', ['/journal']],
  ['/about', 'Our promise', ['/about']],
];

const onScroll = (cb: () => void) => {
  window.addEventListener('scroll', cb, { passive: true });
  return () => window.removeEventListener('scroll', cb);
};
const scrolledNow = () => window.scrollY > 24;

/** Site header. The lockup is rendered on the server and passed in as `brand`. */
export function SiteHeader({ brand }: { brand: ReactNode }) {
  const pathname = usePathname();
  const { bag, owned, cur, setCurrency } = useDemo();
  const [menuOpen, setMenuOpen] = useState(false);
  // eslint-disable-next-line react-hooks/set-state-in-effect -- close the mobile menu on navigation
  useEffect(() => setMenuOpen(false), [pathname]);
  const hasOwned = Object.keys(owned).length > 0;
  const scrolled = useSyncExternalStore(onScroll, scrolledNow, () => false);
  // On the home page the header floats over the hero, clear until the visitor scrolls.
  const overHero = pathname === '/';
  const cls = ['site-head', menuOpen ? 'menu-open' : '', overHero ? 'site-head--over' : '', overHero && !scrolled ? 'is-clear' : ''].filter(Boolean).join(' ');
  return (
    <header className={cls}>
      <div className="wrap">
        <Link className="brand" href="/" aria-label="Sīpa, home">
          {brand}
        </Link>
        <nav className="nav" aria-label="Main">
          {NAV.map(([href, label, match]) => (
            <Link key={href} href={href} className={match.some((m) => pathname.startsWith(m)) ? 'is-on' : ''}>
              {label}
            </Link>
          ))}
        </nav>
        <div className="util">
          <Link className="search-link" href="/search" aria-label="Search">
            <Icon name="search" />
          </Link>
          <Link className="reg-link" href="/registry">
            Registry
          </Link>
          <select aria-label="Currency" value={cur} onChange={(e) => setCurrency(e.target.value as Currency)}>
            <option value="USD">USD</option>
            <option value="NPR">NPR</option>
            <option value="EUR">EUR</option>
          </select>
          {hasOwned && (
            <Link href="/account/collection" className="mine">
              <Icon name="seal" />
              <span>Yours</span>
            </Link>
          )}
          <Link href="/cart" className="bag-link">
            Bag {bag.length > 0 && <span className="sp-reg-s">({bag.length})</span>}
          </Link>
          <button id="menu-btn" type="button" aria-expanded={menuOpen} aria-label="Menu" onClick={() => setMenuOpen((o) => !o)}>
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}
