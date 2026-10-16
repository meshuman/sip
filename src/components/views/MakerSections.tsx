'use client';

import { PieceGrid } from '@/components/piece/PieceCard';
import { MAKERS, makerPieces, pieceState } from '@/lib/catalog';
import { useDemo } from '@/store/demo-store';

/** One sentence on how the maker is paid. */
export function MakerImpact({ slug }: { slug: string }) {
  const m = MAKERS[slug];
  return (
    <>
      <p className="impact">
        {m.first} is paid a fair share of every sale, enough to sustain their livelihood and their workshop in {m.area}.
      </p>
    </>
  );
}

/** The maker's pieces: available now, and already recorded to owners. */
export function MakerPieces({ slug }: { slug: string }) {
  const { owned } = useDemo();
  const m = MAKERS[slug];
  const mine = makerPieces(slug);
  const avail = mine.filter((p) => pieceState(p, owned) === 'available');
  const rec = mine.filter((p) => pieceState(p, owned) !== 'available');
  return (
    <>
      <section className="sec">
        <div className="wrap">
          <h2 className="group-h">Pieces by {m.first}</h2>
          {avail.length ? <PieceGrid pieces={avail} /> : <p className="muted">{m.first} has no pieces available right now.</p>}
        </div>
      </section>
      {rec.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <h2 className="group-h">Where {m.first}’s work lives now</h2>
            <PieceGrid pieces={rec} />
          </div>
        </section>
      )}
    </>
  );
}
