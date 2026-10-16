import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { Crumbs } from '@/components/ui/Crumbs';
import { getPage } from '@/lib/content';
import type { ReactNode } from 'react';

/** A page whose heading and body come from content/pages/<name>.md. */
export function ContentPage({
  name,
  trail,
  children,
  faq,
  after,
  accent,
}: {
  name: string;
  trail: [string, string?][];
  children?: ReactNode;
  faq?: boolean;
  after?: ReactNode;
  accent?: string;
}) {
  const pg = getPage(name);
  return (
    <>
      <Crumbs items={trail} />
      <section className="sec-top wrap">
        <ChapterHeader as="h1" label={pg.head.label} heading={pg.head.heading} accent={accent} lead={pg.head.lead} />
        {pg.phase && (
          <p className="more">
            <span className="badge">After launch</span>
          </p>
        )}
      </section>
      {children}
      {pg.html && (
        <section className="sec-tight">
          <div className={`wrap prose${faq ? ' faq' : ''}`} dangerouslySetInnerHTML={{ __html: pg.html }} />
        </section>
      )}
      {after}
    </>
  );
}

export function contentMetadata(name: string) {
  const pg = getPage(name);
  return { title: pg.title, description: pg.seo.description };
}
