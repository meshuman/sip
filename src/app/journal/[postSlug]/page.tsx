import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { JsonLd } from '@/components/ui/JsonLd';
import { articleLd, trimDesc } from '@/lib/seo';
import { Crumbs } from '@/components/ui/Crumbs';
import { formatDate } from '@/lib/format';
import { getPosts } from '@/lib/content';

type Params = { params: Promise<{ postSlug: string }> };

export const generateStaticParams = () => getPosts().map((p) => ({ postSlug: p.slug }));

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { postSlug } = await params;
  const j = getPosts().find((p) => p.slug === postSlug);
  return j
    ? {
        title: j.title,
        description: trimDesc(j.description ?? j.dek),
        alternates: { canonical: `/journal/${j.slug}` },
        openGraph: {
          type: 'article',
          publishedTime: j.date,
          images: [{ url: '/video/hero-poster.jpg', width: 1280, height: 720, alt: 'An artisan hand-finishing a Nepalese deity sculpture' }],
        },
      }
    : {};
}

export default async function PostPage({ params }: Params) {
  const { postSlug } = await params;
  const j = getPosts().find((p) => p.slug === postSlug);
  if (!j) notFound();
  return (
    <>
      <JsonLd data={articleLd({ headline: j.title, description: j.dek, path: `/journal/${j.slug}`, datePublished: j.date })} />
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
