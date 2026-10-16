import type { Metadata } from 'next';
import Link from 'next/link';
import { ArtisanByline } from '@/components/maker/ArtisanByline';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { Crumbs } from '@/components/ui/Crumbs';
import { MAKERS, paths } from '@/lib/catalog';
import { getPlaces } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Makers: the people behind the art',
  description: 'Meet the makers behind Sīpa: metal casters, painters, woodcarvers and a stone carver, each working in their own workshop in Nepal.',
  alternates: { canonical: '/makers' },
};

export default function MakersPage() {
  const places = getPlaces();
  const groups: Record<string, string[]> = {};
  Object.entries(MAKERS).forEach(([slug, m]) => (groups[m.place] ??= []).push(slug));
  return (
    <>
      <Crumbs items={[['Home', '/'], ['Makers']]} />
      <section className="sec-top wrap">
        <ChapterHeader
          as="h1"
          label="The makers"
          heading="Every piece is signed by a person"
          accent="signed by a person"
          lead="These are the people who make Sīpa’s pieces, in their own workshops across Nepal. Each one is filmed at work and paid a fair share of every sale, enough to sustain their livelihood."
        />
      </section>
      {Object.entries(groups).map(([place, slugs]) => (
        <section className="wrap maker-group" key={place}>
          <h2 className="group-h">
            <Link className="plain" href={paths.place(place)}>
              {places[place].name}
            </Link>
          </h2>
          <div className="makers-row">
            {slugs.map((s) => (
              <div key={s}>
                <ArtisanByline slug={s} quote={false} label={MAKERS[s].craftLabel} />
                <p className="more">
                  <Link className="sp-link" href={paths.maker(s)}>
                    Meet {MAKERS[s].first}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </>
  );
}
