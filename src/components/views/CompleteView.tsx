'use client';

import Link from 'next/link';
import { NoteForm } from '@/components/maker/NoteForm';
import { NotesThread } from '@/components/maker/NotesThread';
import { CareKit } from '@/components/piece/CareKit';
import { CatalogueCard } from '@/components/piece/CatalogueCard';
import { ShareBar } from '@/components/piece/ShareBar';
import { ShareCard } from '@/components/piece/ShareCard';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { Icon } from '@/components/ui/Icon';
import { BY_ID, MAKERS, paths } from '@/lib/catalog';
import { formatDate, today } from '@/lib/format';
import { placeName } from '@/data/places';
import { useDemo } from '@/store/demo-store';

export function CompleteView({ orderId }: { orderId: string }) {
  const { orders, notes, ready } = useDemo();
  if (!ready) return <section className="sec-top wrap" aria-busy="true" />;
  const o = orders.find((x) => x.id === orderId);
  if (!o)
    return (
      <section className="sec-top wrap nf">
        <ChapterHeader as="h1" label="Order" heading="We can’t find that order" lead="Orders in this prototype are kept in the browser that placed them." />
        <Link className="sp-btn" href={paths.collection()}>
          Your collection
        </Link>
      </section>
    );
  const pieces = o.pieces.map((id) => BY_ID[id]);
  const p = pieces[0];
  const m = MAKERS[p.maker];
  const many = pieces.length > 1;
  return (
    <>
      <section className="sec-top wrap complete">
        <div className="sp-seal sp-seal--owned sp-seal--drawing seal-hero">
          <div className="sp-seal__ring" aria-hidden="true">
            <span>S</span>
          </div>
        </div>
        <p className="sp-label">Order {o.id}</p>
        <h1 className="rec-h">Recorded to you</h1>
        <p className="t-lead">
          {pieces.map((x) => x.title).join(' and ')} {many ? 'are' : 'is'} yours. {many ? 'Their records' : 'Its record'} now {many ? 'show' : 'shows'} you as the owner, from{' '}
          {formatDate(today())}.
        </p>
        <p className="sp-reg">{pieces.map((x) => `SĪPA · ${x.id}`).join('  ·  ')}</p>
      </section>
      <section className="sec">
        <div className="wrap split">
          <div>
            <ChapterHeader label="In the box" heading="The card that will arrive with it" lead="Printed on lokta paper. Its code opens your piece’s record." />
            <CareKit piece={p} compact />
          </div>
          <div>
            <CatalogueCard piece={p} />
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap split">
          <div>
            <ChapterHeader
              label="Write to the maker"
              heading={`Write to ${m.first}`}
              lead={`Tell ${m.name} where the piece will live. We read your note to ${m.first} at the workshop. You can also write later, once it arrives.`}
            />
            <NotesThread notes={notes.filter((n) => n.piece === p.id)} empty={null} />
          </div>
          <div>
            <NoteForm piece={p} />
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap split">
          <div>
            <ChapterHeader label="Share your piece" heading="A card made to be shared" lead="It shows the piece, its maker and its registry number. It never shows the price." />
            <ShareBar piece={p} label="Share" />
          </div>
          <div>
            <ShareCard piece={p} owned />
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <ChapterHeader label="What happens next" heading={`From ${placeName(p.place)} to your door`} lead={`We’ll message you at each step at ${o.email}.`} />
          <ol className="steps7 steps4">
            <li>
              <b>Export clearance</b>
              <span>We take your piece for inspection so it can leave Nepal legally.</span>
            </li>
            <li>
              <b>Packing</b>
              <span>It is packed with its card and care kit.</span>
            </li>
            <li>
              <b>Shipping</b>
              <span>You’ll get a tracking link the day it leaves.</span>
            </li>
            <li>
              <b>Delivery</b>
              <span>And an invitation to write to {m.first}.</span>
            </li>
          </ol>
          <div className="sp-row">
            <Link className="sp-btn" href={paths.owned(p)}>
              <Icon name="seal" className="sp-btn__icon" /> Open your owner’s record
            </Link>
            <Link className="sp-btn sp-btn--quiet" href={paths.collection()}>
              Your collection
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
