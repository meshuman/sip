import { MakerFace } from '@/components/maker/MakerFace';
import type { Metadata } from 'next';
import Link from 'next/link';
import { DemoForm, Field } from '@/components/forms/DemoForm';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { Crumbs } from '@/components/ui/Crumbs';
import { MAKERS, paths } from '@/lib/catalog';
import { placeName } from '@/data/places';
import { getPage } from '@/lib/content';

export function generateMetadata(): Metadata {
  const pg = getPage('visit');
  return { title: pg.title, description: pg.seo.description };
}

export default async function VisitPage({ searchParams }: { searchParams: Promise<{ workshop?: string }> }) {
  const { workshop } = await searchParams;
  const pg = getPage('visit');
  const form = pg.forms.find((f) => f.variant === 'visit-request') ?? pg.forms[0];
  const makers = Object.entries(MAKERS);
  return (
    <>
      <Crumbs items={[['Home', '/'], ['Visit a workshop']]} />
      <section className="sec-top wrap">
        <ChapterHeader as="h1" label={pg.head.label} heading={pg.head.heading} lead={pg.head.lead} />
        <p className="more">
          <span className="badge">After launch</span>
        </p>
      </section>
      <section className="wrap sec-tight">
        <div className="visit-grid">
          {makers.map(([slug, m]) => (
            <article className="visit-card" key={slug}>
              <div className="sp-byline__halo sp-note__halo">
                <div className="sp-byline__face" aria-hidden="true">
                  <MakerFace slug={slug} initial={m.name.charAt(0)} size={80} />
                </div>
              </div>
              <div>
                <span className="sp-label">{m.craftLabel}</span>
                <h3>
                  <Link className="plain" href={paths.maker(slug)}>
                    {m.name}
                  </Link>
                </h3>
                <p>
                  <b className="place">
                    {m.area}, {placeName(m.place)}
                  </b>
                  <br />
                  Visits: {m.visits}
                </p>
                <Link className="sp-link" href={paths.visit(slug)} scroll={false}>
                  Ask to visit
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="sec" id="ask">
        <div className="wrap split">
          <div>
            <DemoForm heading={form?.heading} lead={form?.lead} button={form?.button ?? 'Ask to visit'} success={form?.success ?? 'Thank you.'} key={workshop ?? 'none'}>
              <Field id="vi-name" label="Your name">
                <input className="field" id="vi-name" required />
              </Field>
              <Field id="vi-email" label="Email">
                <input className="field" id="vi-email" type="email" required />
              </Field>
              <Field id="vi-work" label="Workshop">
                <select className="field" id="vi-work" defaultValue={workshop && MAKERS[workshop] ? workshop : undefined}>
                  {makers.map(([slug, m]) => (
                    <option key={slug} value={slug}>
                      {m.name} · {m.area}, {placeName(m.place)}
                    </option>
                  ))}
                </select>
              </Field>
              <Field id="vi-dates" label="Dates you’re in Nepal">
                <input className="field" id="vi-dates" placeholder="12 to 20 March" />
              </Field>
              <Field id="vi-n" label="How many people">
                <input className="field" id="vi-n" type="number" min={1} max={8} defaultValue={2} />
              </Field>
              <Field id="vi-msg" label="Anything we should know" wide>
                <textarea className="field" id="vi-msg" rows={3} />
              </Field>
            </DemoForm>
          </div>
          <div className="prose" dangerouslySetInnerHTML={{ __html: pg.html }} />
        </div>
      </section>
    </>
  );
}
