import type { Metadata } from 'next';
import Link from 'next/link';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { Crumbs } from '@/components/ui/Crumbs';
import { paths } from '@/lib/catalog';
import { getTopics } from '@/lib/content';

export const metadata: Metadata = { title: 'Meaning', description: 'What the figures, gestures and motifs in Nepali art signify, in plain words.' };

export default function MeaningIndexPage() {
  const topics = Object.values(getTopics());
  const groups = [...new Set(topics.map((t) => t.groupName))];
  return (
    <>
      <Crumbs items={[['Home', '/'], ['Learn', '/crafts'], ['Meaning']]} />
      <section className="sec-top wrap">
        <ChapterHeader
          as="h1"
          label="Meaning"
          heading="What each figure and motif means"
          accent="figure and motif"
          lead="The gods, gestures and symbols you will meet in the collection, explained in plain words."
        />
      </section>
      <section className="wrap learn-cols">
        {groups.map((g) => (
          <div key={g}>
            <h2 className="group-h">{g}</h2>
            {topics
              .filter((t) => t.groupName === g)
              .map((t) => (
                <Link key={t.slug} className="learn-item" href={paths.meaning(t.slug)}>
                  <b>{t.name}</b>
                  <span>{t.definition}</span>
                </Link>
              ))}
          </div>
        ))}
      </section>
    </>
  );
}
