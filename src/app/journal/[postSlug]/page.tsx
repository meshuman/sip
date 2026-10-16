import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { Crumbs } from '@/components/ui/Crumbs';
import { formatDate } from '@/lib/format';
import { getPosts } from '@/lib/content';

type Params = { params: Promise<{ postSlug: string }> };

export const generateStaticParams = () => getPosts().map((p) => ({ postSlug: p.slug }));

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { postSlug } = await params;
  const j = getPosts().find((p) => p.slug === postSlug);
  return j ? { title: j.title, description: j.description ?? j.dek } : {};
}

export default async function PostPage({ params }: Params) {
  const { postSlug } = await params;
  const j = getPosts().find((p) => p.slug === postSlug);
  if (!j) notFound();
  return (
    <>
      <Crumbs items={[['Home', '/'], ['Journal', '/journal'], [j.title]]} />
      <section className="sec-top wrap">
        <ChapterHeader as="h1" label={`Journal · ${formatDate(j.date)}`} heading={j.title} lead={j.dek} />
      </section>
      <section className="sec">
        <div className="wrap prose" dangerouslySetInnerHTML={{ __html: j.html }} />
      </section>
    </>
  );
}
