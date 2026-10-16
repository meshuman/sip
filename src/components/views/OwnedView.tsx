'use client';

import Link from 'next/link';
import { NoteForm } from '@/components/maker/NoteForm';
import { NotesThread } from '@/components/maker/NotesThread';
import { CareKit } from '@/components/piece/CareKit';
import { CatalogueCard } from '@/components/piece/CatalogueCard';
import { RegistrySeal } from '@/components/piece/RegistrySeal';
import { ShareBar } from '@/components/piece/ShareBar';
import { ShareCard } from '@/components/piece/ShareCard';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { Crumbs } from '@/components/ui/Crumbs';
import { Icon } from '@/components/ui/Icon';
import { Title } from '@/components/ui/Title';
import { MAKERS, paths } from '@/lib/catalog';
import { formatDate } from '@/lib/format';
import type { Piece } from '@/data/types';
import { useDemo } from '@/store/demo-store';

/** The owner's private record of a piece: documents, care, notes to the maker, sharing. */
export function OwnedView({ piece: p }: { piece: Piece }) {
  const { owned, buyer, notes, ready } = useDemo();
  const crumbs: [string, string?][] = [['Home', '/'], ['Your collection', paths.collection()], [p.title]];
  if (!ready) return <section className="sec-top wrap" aria-busy="true" />;
  const o = owned[p.id];
  if (!o)
    return (
      <>
        <Crumbs items={crumbs} />
        <section className="sec-top wrap">
          <ChapterHeader
            as="h1"
            label="Owner’s record"
            heading="This piece isn’t recorded to you"
            lead="Owner’s records open for the person a piece is recorded to. You can still see its public record."
          />
          <Link className="sp-btn" href={paths.record(p)}>
            See the public record
          </Link>
        </section>
      </>
    );
  const m = MAKERS[p.maker];
  return (
    <>
      <Crumbs items={crumbs} />
      <section className="sec-top wrap split">
        <div>
          <RegistrySeal piece={p} big />
          <h1 className="rec-h">
            <Title text={p.title} />
          </h1>
          <p className="t-lead">
            Recorded to you on {formatDate(o.date)}. On the public record you appear as {o.public ? `${buyer.first}, ${buyer.city}` : 'a private owner'}.
          </p>
          <ul className="docs">
            <li>
              <Icon name="card" /> Invoice <span className="badge">PDF</span>
            </li>
            <li>
              <Icon name="seal" /> Certificate of authenticity <span className="badge">PDF</span>
            </li>
            <li>
              <Icon name="share" /> Export clearance <span className="badge">After clearance</span>
            </li>
          </ul>
        </div>
        <div>
          <CatalogueCard piece={p} />
        </div>
      </section>
      <section className="sec" id="care">
        <div className="wrap split">
          <div>
            <ChapterHeader label="Care" heading={`The steps ${m.first} uses`} lead="The tools that came in your box, and when to use them." />
            <label className="chk remind">
              <input type="checkbox" /> Remind me when it’s time <span className="badge">After launch</span>
            </label>
          </div>
          <div>
            <CareKit piece={p} />
          </div>
        </div>
      </section>
      <section className="sec" id="note">
        <div className="wrap split">
          <div>
            <ChapterHeader label="Write to the maker" heading={`Write to ${m.first}`} lead="Your note is translated into Nepali and read at the workshop. Some makers reply." />
            <NotesThread notes={notes.filter((n) => n.piece === p.id)} empty="You haven’t written yet." />
          </div>
          <div>
            <NoteForm piece={p} />
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap split">
          <div>
            <ChapterHeader label="Share" heading="Share your piece" />
            <ShareBar piece={p} label="Share" />
            <p className="more">
              <button className="sp-btn sp-btn--quiet" type="button" disabled>
                Pass it on
              </button>{' '}
              <span className="badge">After launch</span>
            </p>
          </div>
          <div>
            <ShareCard piece={p} owned />
          </div>
        </div>
      </section>
    </>
  );
}
