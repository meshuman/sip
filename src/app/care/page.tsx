import type { Metadata } from 'next';
import Link from 'next/link';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { Crumbs } from '@/components/ui/Crumbs';
import { paths } from '@/lib/catalog';
import { getCareGuides } from '@/lib/content';

export const metadata: Metadata = { title: 'Care', description: 'How to look after carved wood, cast metal, stone, thangkas and paintings on paper.' };

export default function CareIndexPage() {
  const guides = Object.values(getCareGuides());
  return (
    <>
      <Crumbs items={[['Home', '/'], ['Learn', '/crafts'], ['Care']]} />
      <section className="sec-top wrap">
        <ChapterHeader
          as="h1"
          label="Care"
          heading="How to look after your piece"
          accent="look after your piece"
          lead="Every piece ships with the tools its material needs. These guides give the steps, and what never to use."
        />
      </section>
      <section className="wrap sec-tight">
        <div className="help-grid">
          {guides.map((g) => (
            <Link key={g.slug} className="help-card" href={paths.care(g.slug)}>
              <b>Caring for {g.material}</b>
              <span>{g.summary}</span>
            </Link>
          ))}
          <Link className="help-card" href={paths.refills()}>
            <b>Care refills</b>
            <span>Reorder the oil, brushes and covers your piece came with, matched by its registry number.</span>
          </Link>
        </div>
      </section>
    </>
  );
}
