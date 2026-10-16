import { MakerFace } from '@/components/maker/MakerFace';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MakerImpact, MakerPieces } from '@/components/views/MakerSections';
import { MakerNotes, MakerNotesCount } from '@/components/maker/MakerNotes';
import { Making } from '@/components/piece/Making';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { Crumbs } from '@/components/ui/Crumbs';
import { MAKERS, makerPieces, paths } from '@/lib/catalog';
import { getPlaces } from '@/lib/content';

type Params = { params: Promise<{ makerSlug: string }> };

export const generateStaticParams = () => Object.keys(MAKERS).map((makerSlug) => ({ makerSlug }));

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const m = MAKERS[(await params).makerSlug];
  return m ? { title: `${m.name}, ${m.craftLabel.toLowerCase()}`, description: m.bio[0] } : {};
}

export default async function MakerPage({ params }: Params) {
  const { makerSlug: slug } = await params;
  const m = MAKERS[slug];
  if (!m) notFound();
  const pl = getPlaces()[m.place];
  const mine = makerPieces(slug);
  const filmPiece = mine.find((p) => p.film.shows === 'this') ?? mine[0];
  return (
    <>
      <Crumbs items={[['Home', '/'], ['Makers', '/makers'], [m.name]]} />
      <section className="wrap maker-hero">
        <div className="maker-hero__id">
          <div className="sp-byline__halo maker-halo">
            <div className="sp-byline__face" aria-hidden="true">
              <MakerFace slug={slug} initial={m.name.charAt(0)} size={136} />
            </div>
          </div>
          <div>
            <p className="sp-label">{m.craftLabel}</p>
            <h1>{m.name}</h1>
            <p className="maker-meta">
              <b>
                {m.area}, {pl.name}
              </b>
              . {m.lineage}. {m.years} years at the bench.
            </p>
          </div>
        </div>
        <blockquote className="maker-quote">
          <footer>
            “{m.quote.en}” {m.quote.context}
          </footer>
        </blockquote>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div className="bio">
            {m.bio.map((b) => (
              <p key={b.slice(0, 24)}>{b}</p>
            ))}
          </div>
          <div>
            <MakerImpact slug={slug} />
          </div>
        </div>
      </section>

      <section className="sec sec--deep">
        <div className="wrap">
          <ChapterHeader label="The full record" heading={`${m.first} at work`} lead={`Films of ${m.first}’s work, from the first step to the last.`} />
          <Making piece={filmPiece} full timeline={false} />
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <ChapterHeader label="The workshop" place heading={`${m.area}, ${pl.name}`} lead={m.workshop} />
          </div>
          <div className="visit-box">
            <p className="sp-label" style={{ margin: 0 }}>
              Visiting
            </p>
            <p>{m.visits}. Workshops are working places and family homes; visits last about an hour.</p>
            <div className="sp-row">
              <Link className="sp-link" href={paths.visit(slug)}>
                Ask to visit
              </Link>
              <span className="badge">After launch</span>
            </div>
          </div>
        </div>
      </section>

      <MakerPieces slug={slug} />

      <section className="sec" id="notes">
        <div className="wrap split">
          <div>
            <ChapterHeader
              label={
                <>
                  Notes from owners (<MakerNotesCount maker={slug} />)
                </>
              }
              heading={`What owners have written to ${m.first}`}
              lead="Each note was read aloud at the workshop."
            />
          </div>
          <div>
            <MakerNotes maker={slug} empty={`No notes to ${m.first} yet.`} />
          </div>
        </div>
      </section>
    </>
  );
}
