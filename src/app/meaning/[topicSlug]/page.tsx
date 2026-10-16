import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PieceGrid } from '@/components/piece/PieceCard';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { Crumbs } from '@/components/ui/Crumbs';
import { PIECES } from '@/lib/catalog';
import { getTopics } from '@/lib/content';

type Params = { params: Promise<{ topicSlug: string }> };

export const generateStaticParams = () => Object.keys(getTopics()).map((topicSlug) => ({ topicSlug }));

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const t = getTopics()[(await params).topicSlug];
  return t ? { title: t.name, description: t.description ?? t.definition } : {};
}

export default async function TopicPage({ params }: Params) {
  const { topicSlug } = await params;
  const t = getTopics()[topicSlug];
  if (!t) notFound();
  const pieces = PIECES.filter((p) => p.topics.includes(topicSlug));
  return (
    <>
      <Crumbs items={[['Home', '/'], ['Learn', '/crafts'], ['Meaning', '/meaning'], [t.name]]} />
      <section className="sec-top wrap">
        <ChapterHeader as="h1" label={`Meaning · ${t.groupName}`} heading={t.name} lead={t.definition} />
      </section>
      <section className="sec">
        <div className="wrap prose" dangerouslySetInnerHTML={{ __html: t.html }} />
      </section>
      {pieces.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <p className="sp-label">Pieces that show {t.name.toLowerCase()}</p>
            <PieceGrid pieces={pieces} />
          </div>
        </section>
      )}
    </>
  );
}
