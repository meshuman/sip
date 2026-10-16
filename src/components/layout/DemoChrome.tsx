'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { ShareCard } from '@/components/piece/ShareCard';
import { BY_ID, paths } from '@/lib/catalog';
import { useDemo } from '@/store/demo-store';

const TOUR: [href: string, title: string, sub: string, doneKey?: 'added' | 'bought'][] = [
  ['/', 'The promise', 'Home: the 38-day story'],
  ['/rooms/buddha', 'Room 1: the Buddha’s birthplace', 'The marketing story'],
  [paths.piece(BY_ID['PTN-MT-26-0142']), 'One piece, told fully', 'Turn it, watch it made, see the split'],
  [paths.piece(BY_ID['PTN-MT-26-0142']), 'Make it yours', 'Bag and demo checkout', 'added'],
  ['/account/collection', 'Write to Raju', 'The owner’s record and a reply', 'bought'],
  [paths.piece(BY_ID['BKT-WD-26-0018']), 'A wood care kit', 'Oil flask, brush and steps'],
  ['/makers/sunita-jha', 'Meet a maker', 'Sunita Jha, Janakpur'],
  ['/registry', 'Check a registry number', 'Try PTN-MT-26-0118'],
];

/** Prototype-only chrome: the demo path, toasts and the share-card dialog. */
export function DemoChrome() {
  const { tourOpen, setTourOpen, toast, shareCardFor, openShareCard, added, bought } = useDemo();
  const done = { added, bought };

  useEffect(() => {
    if (!shareCardFor) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && openShareCard(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [shareCardFor, openShareCard]);

  const piece = shareCardFor ? BY_ID[shareCardFor] : null;
  return (
    <>
      <aside className={`tour${tourOpen ? '' : ' is-min'}`} aria-label="Demo path">
        <button className="tour__head" type="button" aria-expanded={tourOpen} onClick={() => setTourOpen(!tourOpen)}>
          <b>Demo path</b>
          <span>{tourOpen ? 'Hide' : '8 steps · Show'}</span>
        </button>
        <ol>
          {TOUR.map(([href, title, sub, key], i) => (
            <li key={i}>
              <Link href={href} className={key && done[key] ? 'done' : ''}>
                {title}
                <small>{sub}</small>
              </Link>
            </li>
          ))}
        </ol>
      </aside>

      {piece && (
        <div className="modal" onClick={(e) => e.target === e.currentTarget && openShareCard(null)}>
          <div className="modal__in" role="dialog" aria-modal="true" aria-label="Share card">
            <div className="modal__top">
              <p>The card people see when this piece is shared. It never shows the price.</p>
              <button className="sp-sharebar__btn" type="button" autoFocus onClick={() => openShareCard(null)}>
                Close
              </button>
            </div>
            <div id="modal-body">
              <ShareCard piece={piece} />
            </div>
          </div>
        </div>
      )}

      <div className={`toast${toast ? ' show' : ''}`} role="status" hidden={!toast}>
        {toast}
      </div>
    </>
  );
}
