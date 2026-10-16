import type { Metadata } from 'next';
import Link from 'next/link';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { Crumbs } from '@/components/ui/Crumbs';
import { MAKERS, paths } from '@/lib/catalog';
import { getPlaces } from '@/lib/content';

export const metadata: Metadata = { title: 'Places', description: 'Where each Sīpa piece is made: the towns and neighbourhoods of Nepal’s crafts.' };

export default function PlacesPage() {
  const places = getPlaces();
  return (
    <>
      <Crumbs items={[['Home', '/'], ['Places']]} />
      <section className="sec-top wrap">
        <ChapterHeader
          as="h1"
          label="Places"
          place
          heading="Where each piece is made"
          accent="each piece is made"
          lead="Nepal’s crafts grew up in particular towns and neighbourhoods, often in the same families for generations."
        />
      </section>
      <section className="wrap place-list">
        {Object.values(places).map((pl) => {
          const n = Object.values(MAKERS).filter((m) => m.place === pl.slug).length;
          return (
            <Link key={pl.slug} className="place-row" href={paths.place(pl.slug)}>
              <span className="sp-reg-s">{pl.code}</span>
              <div>
                <h2>
                  {pl.name} <span className="ne">{pl.nameNe}</span>
                </h2>
                <p>{pl.summary}</p>
              </div>
              <span className="sp-label">{n ? `${n} maker${n > 1 ? 's' : ''}` : 'Its story'}</span>
            </Link>
          );
        })}
      </section>
    </>
  );
}
