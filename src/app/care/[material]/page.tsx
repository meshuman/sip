import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { Crumbs } from '@/components/ui/Crumbs';
import { Icon } from '@/components/ui/Icon';
import { getCareGuides } from '@/lib/content';

type Params = { params: Promise<{ material: string }> };

export const generateStaticParams = () => Object.keys(getCareGuides()).map((material) => ({ material }));

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const c = getCareGuides()[(await params).material];
  return c ? { title: `Caring for ${c.material}`, description: c.description ?? c.summary } : {};
}

export default async function CareGuidePage({ params }: Params) {
  const { material } = await params;
  const c = getCareGuides()[material];
  if (!c) notFound();
  return (
    <>
      <Crumbs items={[['Home', '/'], ['Learn', '/crafts'], ['Care', '/care'], [`Caring for ${c.material}`]]} />
      <section className="sec-top wrap">
        <ChapterHeader as="h1" label="Care" heading={`Caring for ${c.material}`} lead={c.summary} />
      </section>
      <section className="wrap">
        <section className="sp-kit">
          <header className="sp-kit__head">
            <p className="sp-label">In the box · {c.material}</p>
            <h3>The kit and the steps</h3>
          </header>
          <ul className="sp-kit__items">
            {c.kit.map((it) => (
              <li key={it.name}>
                <Icon name={/oil/i.test(it.name) ? 'flask' : /brush/i.test(it.name) ? 'brush' : 'card'} className="kit-ic" />
                <div>
                  <b>{it.name}</b>
                  <span className="sp-reg-s">{it.size}</span>
                  <span>{it.line}</span>
                </div>
              </li>
            ))}
          </ul>
          <ol className="sp-kit__steps">
            {c.steps.map((s) => (
              <li key={s.when}>
                <span className={`sp-label${s.when === 'Never' ? ' sp-care__never' : ''}`}>{s.when}</span>
                <span>{s.step}</span>
              </li>
            ))}
          </ol>
        </section>
      </section>
      <section className="sec">
        <div className="wrap prose" dangerouslySetInnerHTML={{ __html: c.html }} />
      </section>
    </>
  );
}
