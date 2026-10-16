import type { Metadata } from 'next';
import Link from 'next/link';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { Crumbs } from '@/components/ui/Crumbs';
import { paths } from '@/lib/catalog';
import { getCareGuides, getCrafts, getTopics } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Learn: crafts, meaning and care of Nepali art',
  description: 'How each piece is made, what it signifies and how to look after it: lost-wax casting, Mithila painting, thangka, woodcarving and stone.',
};

export default function CraftsPage() {
  const crafts = getCrafts();
  const topics = getTopics();
  const care = getCareGuides();
  return (
    <>
      <Crumbs items={[['Home', '/'], ['Learn']]} />
      <section className="sec-top wrap">
        <ChapterHeader
          as="h1"
          label="Learn"
          heading="Know what you are looking at"
          accent="what you are looking at"
          lead="Plain answers on how each art form is made, where it comes from, what its symbols mean, and how to look after it. Each craft page lists its sources."
        />
      </section>
      <section className="wrap learn-cols">
        <div>
          <h2 className="group-h">Crafts</h2>
          {Object.values(crafts).map((c) => (
            <Link key={c.slug} className="learn-item" href={paths.craft(c.slug)}>
              <b>{c.name}</b>
              <span>{c.definition}</span>
            </Link>
          ))}
        </div>
        <div>
          <h2 className="group-h">
            <Link className="plain" href={paths.meaning()}>
              Meaning
            </Link>
          </h2>
          {Object.values(topics).map((t) => (
            <Link key={t.slug} className="learn-item" href={paths.meaning(t.slug)}>
              <b>{t.name}</b>
              <span>{t.definition}</span>
            </Link>
          ))}
        </div>
        <div>
          <h2 className="group-h">
            <Link className="plain" href={paths.care()}>
              Care
            </Link>
          </h2>
          {Object.values(care).map((c) => (
            <Link key={c.slug} className="learn-item" href={paths.care(c.slug)}>
              <b>Caring for {c.material}</b>
              <span>{c.summary}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
