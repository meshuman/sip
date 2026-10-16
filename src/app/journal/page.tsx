import type { Metadata } from 'next';
import Link from 'next/link';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { Crumbs } from '@/components/ui/Crumbs';
import { Plate } from '@/components/ui/Plate';
import { paths, PIECES } from '@/lib/catalog';
import { formatDate } from '@/lib/format';
import { getPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Journal: stories from the workshops',
  description: 'Stories from the workshops behind Sīpa’s art, and plain guides to how pieces are made, shipped and looked after.',
  alternates: { canonical: '/journal' },
};

// Placeholder images for posts until each has its own photograph.
const COVERS: [number, number][] = [
  [0, 1],
  [9, 2],
  [4, 2],
];

export default function JournalPage() {
  const posts = getPosts();
  return (
    <>
      <Crumbs items={[['Home', '/'], ['Journal']]} />
      <section className="sec-top wrap">
        <ChapterHeader
          as="h1"
          label="Journal"
          heading="Stories from the workshops"
          accent="the workshops"
          lead="Visits to the people and places behind each piece, and plain guides to how Sīpa works."
        />
      </section>
      <section className="wrap story-list">
        {posts.map((j, i) => {
          const [pi, stage] = COVERS[i % COVERS.length];
          return (
            <Link key={j.slug} className="story-row" href={paths.journal(j.slug)}>
              <div className="plate">
                <Plate piece={PIECES[pi]} stage={stage} />
              </div>
              <div>
                <span className="sp-label">
                  {formatDate(j.date)} · {j.readingMinutes} min read
                </span>
                <h2>{j.title}</h2>
                <p>{j.dek}</p>
              </div>
            </Link>
          );
        })}
      </section>
    </>
  );
}
