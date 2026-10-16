'use client';

import { MakerFace } from '@/components/maker/MakerFace';
import { useEffect, useRef, useState } from 'react';
import { Icon } from '@/components/ui/Icon';
import { MAKERS } from '@/lib/catalog';
import { today } from '@/lib/format';
import type { Piece } from '@/data/types';
import { useDemo } from '@/store/demo-store';

/**
 * An owner writes to the maker. Prototype: the note is stored in this browser, marked "read at the workshop"
 * after a few seconds, and a simulated reply follows. In production the field team translates and reads it.
 */
export function NoteForm({ piece: p }: { piece: Piece }) {
  const m = MAKERS[p.maker];
  const { buyer, notes, addNote, updateNote, showToast } = useDemo();
  const [text, setText] = useState(
    `Thank you, ${m.first}. ${p.title} has a place waiting for it in our home. I watched the film of its making, and I’ll think of your workshop every time I see it.`,
  );
  const [isPublic, setPublic] = useState(true);
  const [sent, setSent] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const id = `note-${p.id.toLowerCase()}`;
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    const index = notes.length;
    addNote({ piece: p.id, maker: p.maker, from: buyer.first, city: buyer.city, date: today(), public: isPublic, text: text.trim(), status: 'waiting' });
    setSent(true);
    showToast(`Sent. ${m.first} will hear it at the workshop.`);
    timers.current.push(setTimeout(() => updateNote(index, { status: 'read', readDate: today() }), 3200));
    timers.current.push(
      setTimeout(() => {
        updateNote(index, {
          reply: { ne: 'तपाईंको सन्देशका लागि धन्यवाद। यो कलाकृति तपाईंको घरमा राम्रोसँग रहोस्।', en: 'Thank you for your note. May this piece settle well in your home.' },
          simulated: true,
        });
        showToast(`${m.first} replied.`);
      }, 6800),
    );
  };

  if (sent)
    return (
      <div className="sp-note">
        <div className="sent">
          <Icon name="seal" />
          <div>
            <b>Sent to {m.first}.</b>
            <p>In the live service, Sīpa’s field team translates your note and reads it to {m.first} at the workshop. For this demo, watch the thread.</p>
          </div>
        </div>
      </div>
    );

  return (
    <form className="sp-note" onSubmit={submit}>
      <div className="sp-note__to">
        <div className="sp-byline__halo sp-note__halo">
          <div className="sp-byline__face" aria-hidden="true">
            <MakerFace slug={p.maker} initial={m.name.charAt(0)} size={80} />
          </div>
        </div>
        <div>
          <p className="sp-label" style={{ margin: 0 }}>
            Write to the maker
          </p>
          <h3>
            {m.name}, {m.area}
          </h3>
          <p className="sp-note__hint">We translate your note into Nepali and read it to {m.first} at the workshop. Say where the piece lives now, or what it means to you.</p>
        </div>
      </div>
      <label className="sp-label" htmlFor={id}>
        Your note
      </label>
      <textarea id={id} rows={4} maxLength={600} required value={text} onChange={(e) => setText(e.target.value)} />
      <div className="sp-note__row">
        <label className="sp-note__check">
          <input type="checkbox" checked={isPublic} onChange={(e) => setPublic(e.target.checked)} /> Show my first name and city with this note on {m.first}’s page
        </label>
        <span className="sp-reg-s sp-note__count">{text.length} / 600</span>
      </div>
      <div className="sp-row">
        <button className="sp-btn" type="submit">
          Send to {m.first}
        </button>
      </div>
    </form>
  );
}
