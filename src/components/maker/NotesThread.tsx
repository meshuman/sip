'use client';

import { Icon } from '@/components/ui/Icon';
import { BY_ID, MAKERS } from '@/lib/catalog';
import { formatDate, today } from '@/lib/format';
import type { Note } from '@/data/types';

/** Notes from owners to a maker, with the maker's replies. */
export function NotesThread({ notes, empty }: { notes: Note[]; empty?: string | null }) {
  if (!notes.length) {
    const text = empty === undefined ? 'No notes yet. Owners can write to the maker once their piece arrives.' : empty;
    return text ? <p className="muted">{text}</p> : null;
  }
  return (
    <div className="sp-thread">
      {notes.map((n, i) => {
        const p = BY_ID[n.piece];
        const m = MAKERS[n.maker];
        return (
          <article className="sp-thread__note" key={`${n.piece}-${n.date}-${i}`}>
            <p>“{n.text}”</p>
            <footer>
              <b>
                {n.from}
                {n.city ? `, ${n.city}` : ''}
              </b>{' '}
              · owner of <span className="sp-reg-s">{p.id}</span> · {formatDate(n.date)}
            </footer>
            {n.status === 'waiting' && (
              <div className="note-status">
                <Icon name="seal" /> Waiting to be read at the workshop
              </div>
            )}
            {n.status === 'read' && (
              <div className="note-status">
                <Icon name="seal" /> Read to {m.first} at the workshop · {formatDate(n.readDate ?? today())}
              </div>
            )}
            {n.reply && (
              <div className="sp-thread__reply">
                <span className="sp-label">
                  {m.first} replied{n.simulated ? ' · simulated for this demo' : ''}
                </span>
                <p>“{n.reply.en}”</p>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
