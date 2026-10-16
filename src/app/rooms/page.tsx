import type { Metadata } from 'next';
import Link from 'next/link';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { Crumbs } from '@/components/ui/Crumbs';
import { Plate } from '@/components/ui/Plate';
import { BY_ID, paths, piecesIn, ROOM_LEAD, ROOM_ORDER } from '@/lib/catalog';
import { plural } from '@/lib/format';
import { getRooms } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Rooms: art from Nepal by craft and place',
  description: 'Walk through the Sīpa collection room by room: Buddha figures, metalwork, Mithila paintings, thangkas, woodcarving and stone, each by a named maker.',
  alternates: { canonical: '/rooms' },
};

export default function RoomsPage() {
  const rooms = getRooms();
  return (
    <>
      <Crumbs items={[['Home', '/'], ['Rooms']]} />
      <section className="sec-top wrap">
        <ChapterHeader
          as="h1"
          label="The rooms"
          heading="The collection, hung room by room"
          accent="hung room by room"
          lead="Each room gathers pieces that belong together, by the craft that made them, the place they come from, or the story they tell."
        />
      </section>
      <section className="wrap rooms-list">
        {ROOM_ORDER.map((slug, i) => {
          const r = rooms[slug];
          return (
            <article key={slug} className={`room-row${i % 2 ? ' room-row--flip' : ''}`}>
              <Link className="plate" href={paths.room(slug)}>
                <Plate piece={BY_ID[ROOM_LEAD[slug]]} />
              </Link>
              <div>
                <span className="sp-label">
                  Room {r.number} · {r.line} · {plural(piecesIn(slug).length, 'piece')}
                </span>
                <h2>
                  <Link className="plain" href={paths.room(slug)}>
                    {r.name}
                  </Link>
                </h2>
                <p>{r.wallText}</p>
                <Link className="sp-btn sp-btn--quiet" href={paths.room(slug)}>
                  Enter the room
                </Link>
              </div>
            </article>
          );
        })}
      </section>
      <p className="wrap more">
        Looking for something specific?{' '}
        <Link className="sp-link" href="/pieces">
          See every piece
        </Link>
      </p>
    </>
  );
}
