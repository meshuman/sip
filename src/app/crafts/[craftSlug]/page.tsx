import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ArtisanByline } from '@/components/maker/ArtisanByline';
import { PieceGrid } from '@/components/piece/PieceCard';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { Crumbs } from '@/components/ui/Crumbs';
import { MAKERS, PIECES } from '@/lib/catalog';
import { getCrafts } from '@/lib/content';

type Params = { params: Promise<{ craftSlug: string }> };

export const generateStaticParams = () => Object.keys(getCrafts()).map((craftSlug) => ({ craftSlug }));

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const c = getCrafts()[(await params).craftSlug];
  return c ? { title: c.name, description: c.description ?? c.definition } : {};
}

export default async function CraftPage({ params }: Params) {
  const { craftSlug } = await params;
  const c = getCrafts()[craftSlug];
  if (!c) notFound();
  const pieces = PIECES.filter((p) => p.craft === craftSlug);
  const makers = Object.entries(MAKERS).filter(([, m]) => m.craft === craftSlug);
  const n = c.stages.length;
  return (
    <>
      <Crumbs items={[['Home', '/'], ['Learn', '/crafts'], [c.name]]} />
      <section className="sec-top wrap">
        <ChapterHeader as="h1" label="Crafts" heading={c.name} lead={c.definition} />
      </section>
      <section className="wrap">
        <section className="sp-making">
          <p className="sp-label" style={{ margin: 0 }}>
            How it is made, stage by stage
          </p>
          <div className="sp-making__scale" aria-hidden="true">
            {c.stages.map((s, i) => (
              <div key={s.name} className={`sp-making__stage${i === 0 ? ' is-now' : ''}`} style={{ width: `${(100 / n).toFixed(2)}%` }}>
                <i />
              </div>
            ))}
          </div>
          <ol>
            {c.stages.map((s, i) => (
              <li key={s.name} className={i === 0 ? 'is-now' : ''}>
                <span className="sp-reg-s">Stage {i + 1}</span>
                <b>{s.name}</b>
                <span>{s.line}</span>
              </li>
            ))}
          </ol>
        </section>
      </section>
      <section className="sec">
        <div className="wrap prose" dangerouslySetInnerHTML={{ __html: c.html }} />
      </section>
      {makers.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <p className="sp-label">Makers of {c.name.toLowerCase()}</p>
            <div className="makers-row">
              {makers.map(([s, m]) => (
                <ArtisanByline key={s} slug={s} quote={false} label={m.craftLabel} />
              ))}
            </div>
          </div>
        </section>
      )}
      {pieces.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <p className="sp-label">{c.name} in the collection</p>
            <PieceGrid pieces={pieces} />
          </div>
        </section>
      )}
    </>
  );
}
