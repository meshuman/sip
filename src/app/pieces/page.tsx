import type { Metadata } from 'next';
import Link from 'next/link';
import { PieceGrid } from '@/components/piece/PieceCard';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { Crumbs } from '@/components/ui/Crumbs';
import { paths, PIECES, ROOM_ORDER } from '@/lib/catalog';
import { plural } from '@/lib/format';
import { getCrafts, getRooms } from '@/lib/content';

export const metadata: Metadata = {
  title: 'All pieces',
  description: 'Every piece in the Sīpa collection: single, made by a named maker in Nepal and recorded for life.',
  alternates: { canonical: '/pieces' },
};

// Filters live in the query string (/pieces?craft=thangka-painting) and are not indexed.
export default async function PiecesPage({ searchParams }: { searchParams: Promise<{ craft?: string; room?: string }> }) {
  const { craft, room } = await searchParams;
  const crafts = getCrafts();
  const rooms = getRooms();
  const list = PIECES.filter((p) => (!craft || p.craft === craft) && (!room || p.rooms.includes(room)));
  return (
    <>
      <Crumbs items={[['Home', '/'], ['All pieces']]} />
      <section className="sec-top wrap">
        <ChapterHeader
          as="h1"
          label="The collection"
          heading="All pieces"
          accent="All pieces"
          lead="Every piece in the collection, each single, made by a named maker and recorded for life."
        />
        <div className="chips" role="group" aria-label="Filter by room">
          <Link className={`chip${!room ? ' is-on' : ''}`} href={paths.pieces({ craft })}>
            All rooms
          </Link>
          {ROOM_ORDER.map((slug) => (
            <Link key={slug} className={`chip${room === slug ? ' is-on' : ''}`} href={paths.pieces({ room: slug, craft })}>
              {rooms[slug].line}
            </Link>
          ))}
        </div>
        <div className="chips" role="group" aria-label="Filter by craft">
          <Link className={`chip${!craft ? ' is-on' : ''}`} href={paths.pieces({ room })}>
            All crafts
          </Link>
          {Object.values(crafts).map((c) => (
            <Link key={c.slug} className={`chip${craft === c.slug ? ' is-on' : ''}`} href={paths.pieces({ room, craft: c.slug })}>
              {c.name}
            </Link>
          ))}
        </div>
        <p className="muted more-ask">
          Cannot find what you want?{' '}
          <Link className="sp-link" href="/commission">
            Request a piece
          </Link>
        </p>
        <p className="sp-reg-s muted count">{plural(list.length, 'piece')}</p>
        <PieceGrid pieces={list} />
      </section>
    </>
  );
}
