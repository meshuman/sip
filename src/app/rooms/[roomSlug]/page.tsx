import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { RoomCard } from '@/components/home/RoomCard';
import { PieceCard } from '@/components/piece/PieceCard';
import { Crumbs } from '@/components/ui/Crumbs';
import { BY_ID, piecesIn, ROOM_LEAD, ROOM_ORDER } from '@/lib/catalog';
import { plural } from '@/lib/format';
import { getRooms } from '@/lib/content';

type Params = { params: Promise<{ roomSlug: string }> };

export const generateStaticParams = () => ROOM_ORDER.map((roomSlug) => ({ roomSlug }));

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const r = getRooms()[(await params).roomSlug];
  return r ? { title: r.name, description: r.description ?? r.wallText } : {};
}

export default async function RoomPage({ params }: Params) {
  const { roomSlug } = await params;
  const rooms = getRooms();
  const r = rooms[roomSlug];
  if (!r) notFound();
  const list = piecesIn(roomSlug);
  const lead = BY_ID[ROOM_LEAD[roomSlug]];
  const ordered = [lead, ...list.filter((p) => p !== lead)];
  return (
    <>
      <Crumbs items={[['Home', '/'], ['Rooms', '/rooms'], [r.name]]} />
      <section className="sec-top wrap">
        <section className="sp-room">
          <header className="sp-room__head">
            <div>
              <span className="sp-label">
                Room {r.number} · {r.line} · {plural(list.length, 'piece')}
              </span>
              <h1>{r.name}</h1>
            </div>
            <p>{r.wallText}</p>
          </header>
          <div className="sp-room__wall">
            {ordered.map((p) => (
              <PieceCard key={p.id} piece={p} />
            ))}
          </div>
        </section>
      </section>
      <section className="sec">
        <div className="wrap">
          <p className="sp-label">Other rooms</p>
          <div className="rooms-grid rooms-grid--small">
            {ROOM_ORDER.filter((s) => s !== roomSlug)
              .slice(0, 3)
              .map((s) => (
                <RoomCard key={s} room={rooms[s]} />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
