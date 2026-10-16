import type { Metadata } from 'next';
import Link from 'next/link';
import { ResetDemoButton } from '@/components/layout/ResetDemoButton';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { Crumbs } from '@/components/ui/Crumbs';
import { Icon } from '@/components/ui/Icon';
import { PHOTO_CREDITS } from '@/data/photos';
import { BY_ID, MAKERS } from '@/lib/catalog';
import { getPage } from '@/lib/content';

export function generateMetadata(): Metadata {
  const pg = getPage('about');
  return { title: pg.title, description: pg.seo.description };
}

const STEPS: [string, string][] = [
  ['Meeting the maker', 'We visit the workshop and agree a fair price with the maker.'],
  ['Filming the making', 'Where we can, from the first step to the last.'],
  ['Registering', 'Its number, measurements and photographs.'],
  ['Writing it up', 'Meaning, placement and care, with the maker and a reviewer.'],
  ['Recording to you', 'When you buy, the registry records it to you.'],
  ['Export clearance', 'Inspected and cleared to leave Nepal.'],
  ['Packing and shipping', 'With its catalogue card and care kit.'],
];

export default function AboutPage() {
  return (
    <>
      <Crumbs items={[['Home', '/'], ['Our promise']]} />
      <section className="sec-top wrap">
        <ChapterHeader
          as="h1"
          label="Our promise"
          heading="Three promises behind every piece"
          accent="Three promises"
          lead="Sīpa exists so that a statue or painting made in Nepal arrives in its new home with its whole story: what it is, who made it, and where it came from."
        />
      </section>
      <section className="wrap promises">
        <div>
          <Icon name="compass" />
          <h3>The piece</h3>
          <p>Every piece is explained before it is sold: what it depicts, what it means, who it suits, where it is customarily placed and how to care for it.</p>
        </div>
        <div>
          <Icon name="hand" />
          <h3>The maker</h3>
          <p>Every piece is made by a named person in a named place. We film them at work, pay them a fair share, and read owners’ notes to them at the workshop.</p>
        </div>
        <div>
          <Icon name="seal" />
          <h3>The record</h3>
          <p>Every piece gets a registry number for life, marked on the piece, printed on its card, and kept in a record that lists each owner.</p>
        </div>
      </section>
      <section className="sec">
        <div className="wrap fair">
          <ChapterHeader
            label="Fair pay"
            heading="Makers are paid a fair share, enough to live on"
            accent="a fair share"
            lead="Artisans are paid a fair share of every sale, enough to sustain their livelihood. The share is agreed with the maker before a piece is listed, and the maker is paid first."
          />
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <ChapterHeader
            label="How we work"
            heading="From the workshop to your home"
            accent="your home"
            lead="A Sīpa piece passes through seven steps between the maker’s bench and your door."
          />
          <ol className="steps7">
            {STEPS.map(([a, b]) => (
              <li key={a}>
                <b>{a}</b>
                <span>{b}</span>
              </li>
            ))}
          </ol>
          <p className="more">
            <Link className="sp-link" href="/about/how-we-work">
              More on how we work
            </Link>
          </p>
        </div>
      </section>
      <section className="sec" id="prototype">
        <div className="wrap split">
          <div>
            <ChapterHeader
              label="About this prototype"
              heading="What is real here, and what is sample"
              accent="what is real"
              lead="This is a working prototype of the Sīpa site, built on the Sīpa design system and its written content."
            />
          </div>
          <div className="proto-facts">
            <p>
              <b>Illustrative:</b> the six makers, thirteen pieces, prices, splits, notes and replies are invented to show the experience. Photographs show works of the same kind
              from elsewhere, and the maker photographs show craftspeople at work, not the makers named here. Sīpa’s own photographs, 3D scans and films replace them at launch.
            </p>
            <p>
              <b>As designed for launch:</b> rooms, piece stories, the registry and records, notes to makers, care kits, checkout, the owner’s record, and the crafts and meaning
              pages.
            </p>
            <p>
              <b>After launch:</b> workshop visits, passing a piece on, care reminders and refills, and Nepali pages.
            </p>
            <ResetDemoButton className="sp-btn sp-btn--quiet" />
          </div>
        </div>
      </section>
      <section className="sec" id="photo-credits">
        <div className="wrap">
          <ChapterHeader
            label="Photo credits"
            heading="Photographs from Wikimedia Commons"
            accent="Wikimedia Commons"
            lead="Each photograph is used under the open licence shown. Follow a link for the original and its licence terms."
          />
          <ul className="credits">
            {PHOTO_CREDITS.map((c) => (
              <li key={c.for}>
                <b>{BY_ID[c.for]?.title ?? MAKERS[c.for]?.name}</b>
                <span>
                  <a className="sp-link" href={c.url} target="_blank" rel="noopener noreferrer">
                    {c.title}
                  </a>
                  {c.artist ? `, ${c.artist}` : ''} · {c.licence}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
