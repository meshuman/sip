import Link from 'next/link';
import { Plate } from '@/components/ui/Plate';
import { BY_ID, paths, piecesIn, ROOM_LEAD } from '@/lib/catalog';
import { plural } from '@/lib/format';
import type { Room } from '@/lib/content';

/** A room, shown by the piece it opens on. */
export function RoomCard({ room }: { room: Room }) {
  const lead = BY_ID[ROOM_LEAD[room.slug]];
  return (
    <Link className="room-card" href={paths.room(room.slug)}>
      <div className="plate">
        <Plate piece={lead} />
      </div>
      <span className="sp-label">
        Room {room.number} · {room.line}
      </span>
      <h3>{room.name}</h3>
      <span className="room-card__n sp-reg-s">{plural(piecesIn(room.slug).length, 'piece')}</span>
    </Link>
  );
}
