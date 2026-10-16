import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArtisanByline } from '@/components/maker/ArtisanByline';
import { PieceGrid } from '@/components/piece/PieceCard';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { JsonLd } from '@/components/ui/JsonLd';
import { placeLd, trimDesc } from '@/lib/seo';
import { Crumbs } from '@/components/ui/Crumbs';
import { MAKERS, paths, PIECES } from '@/lib/catalog';
import { getPlaces } from '@/lib/content';

type Params = { params: Promise<{ placeSlug: string }> };

export const generateStaticParams = () => Object.keys(getPlaces()).map((placeSlug) => ({ placeSlug }));

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const pl = getPlaces()[(await params).placeSlug];
  return pl ? { title: `${pl.name}, ${pl.epithet}`, description: trimDesc(pl.description ?? pl.summary), alternates: { canonical: `/places/${pl.slug}` } } : {};
}

export default async function PlacePage({ params }: Params) {
  const { placeSlug } = await params;
  const pl = getPlaces()[placeSlug];
  if (!pl) notFound();
  const makers = Object.entries(MAKERS).filter(([, m]) => m.place === placeSlug);
  const here = PIECES.filter((p) => p.place === placeSlug);
  return (
    <>
      <JsonLd data={placeLd({ name: pl.name, path: `/places/${pl.slug}`, description: pl.summary })} />
      <Crumbs items={[['Home', '/'], ['Places', '/places'], [pl.name]]} />
      <section className="sec-top wrap">
        <ChapterHeader as="h1" label={`Places · ${pl.region}`} place heading={pl.name} lead={pl.summary} />
      </section>
      <section className="wrap prose" dangerouslySetInnerHTML={{ __html: pl.html }} />
      {makers.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <p className="sp-label">Makers in {pl.name}</p>
            <div className="makers-row">
              {makers.map(([s, m]) => (
                <ArtisanByline key={s} slug={s} quote={false} label={m.craftLabel} />
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="sec">
        <div className="wrap">
          {here.length ? (
            <>
              <p className="sp-label">Made in {pl.name}</p>
              <PieceGrid pieces={here} />
            </>
          ) : (
            <Link className="sp-btn sp-btn--quiet" href={paths.room('buddha')}>
              Enter the Buddha room
            </Link>
          )}
        </div>
      </section>
    </>
  );
}
