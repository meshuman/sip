import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { RecordHistory, RecordOwnerBanner } from '@/components/views/RecordView';
import { MakerNotes } from '@/components/maker/MakerNotes';
import { ObjectLabel } from '@/components/piece/ObjectLabel';
import { RegistrySeal } from '@/components/piece/RegistrySeal';
import { trimDesc } from '@/lib/seo';
import { Crumbs } from '@/components/ui/Crumbs';
import { Title } from '@/components/ui/Title';
import { MAKERS, paths, pieceFromRegistryId, PIECES, regKey } from '@/lib/catalog';
import { placeName } from '@/data/places';

type Params = { params: Promise<{ registryId: string }> };

export const generateStaticParams = () => PIECES.map((p) => ({ registryId: regKey(p) }));

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = pieceFromRegistryId((await params).registryId);
  return p
    ? {
        title: `Record of ${p.title}, ${p.id}`,
        description: trimDesc(`The public registry record of ${p.title}, made by ${MAKERS[p.maker].name} in ${placeName(p.place)}. Registry number ${p.id}.`),
        alternates: { canonical: paths.record(p) },
      }
    : {};
}

export default async function RecordPage({ params }: Params) {
  const p = pieceFromRegistryId((await params).registryId);
  if (!p) notFound();
  const m = MAKERS[p.maker];
  return (
    <>
      <Crumbs items={[['Home', '/'], ['Registry', '/registry'], [`SĪPA · ${p.id}`]]} />
      <section className="sec-top wrap split">
        <div>
          <RegistrySeal piece={p} big />
          <h1 className="rec-h">
            <Title text={p.title} />
          </h1>
          <p className="t-lead">
            Made by {m.name} in {m.area}, {placeName(p.place)}, over {p.days} days. Finished in 2026.
          </p>
          <RecordOwnerBanner piece={p} />
          <p className="more">
            <Link className="sp-link" href={paths.piece(p)}>
              See the piece
            </Link>
          </p>
        </div>
        <div>
          <ObjectLabel piece={p} />
        </div>
      </section>
      <section className="sec">
        <div className="wrap split">
          <div>
            <h2 className="group-h">History</h2>
            <RecordHistory piece={p} />
            <p className="muted">An owner’s first name and city appear only with their consent. Otherwise the record says “a private owner”.</p>
          </div>
          <div>
            <h2 className="group-h">Notes about this piece</h2>
            <MakerNotes piece={p.id} empty="No notes about this piece yet." />
          </div>
        </div>
      </section>
    </>
  );
}
