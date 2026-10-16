'use client';

import Link from 'next/link';
import { PieceCard } from '@/components/piece/PieceCard';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { paths, PIECES } from '@/lib/catalog';
import { useDemo } from '@/store/demo-store';

export function CollectionView() {
  const { owned, ready } = useDemo();
  if (!ready) return <section className="sec-top wrap" aria-busy="true" />;
  const mine = PIECES.filter((p) => owned[p.id]);
  return (
    <section className="sec-top wrap">
      <ChapterHeader
        as="h1"
        label="Your account"
        heading="Your collection"
        lead={
          mine.length
            ? 'Every piece recorded to you, with its record, its care and its maker.'
            : 'You don’t own a recorded piece yet. When you buy one, it is recorded to you here.'
        }
      />
      {mine.length ? (
        <div className="sp-gallery g3-cards">
          {mine.map((p) => (
            <PieceCard key={p.id} piece={p} href={paths.owned(p)} />
          ))}
        </div>
      ) : (
        <Link className="sp-btn" href="/rooms">
          Enter the rooms
        </Link>
      )}
    </section>
  );
}
