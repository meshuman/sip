import type { Metadata } from 'next';
import { DemoForm, Field } from '@/components/forms/DemoForm';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { Crumbs } from '@/components/ui/Crumbs';
import { Icon } from '@/components/ui/Icon';
import type { IconName } from '@/data/types';
import { getPage } from '@/lib/content';

export function generateMetadata(): Metadata {
  const pg = getPage('trade');
  return { title: pg.title, description: pg.seo.description };
}

const ICONS: IconName[] = ['seal', 'hand', 'card'];

export default function TradePage() {
  const pg = getPage('trade');
  const form = pg.forms[0];
  return (
    <>
      <Crumbs items={[['Home', '/'], ['For designers and hotels']]} />
      <section className="sec-top wrap">
        <ChapterHeader as="h1" label={pg.head.label} heading={pg.head.heading} lead={pg.head.lead} />
        <p className="more">
          <span className="badge">After launch</span>
        </p>
      </section>
      <section className="wrap sec-tight">
        <div className="offer-grid">
          {(pg.lists[0]?.items ?? []).map((it, i) => (
            <div className="offer" key={it.title}>
              <Icon name={ICONS[i % ICONS.length]} />
              <h3>{it.title}</h3>
              <p>{it.line}</p>
            </div>
          ))}
        </div>
        {pg.aside && <div className="terms" dangerouslySetInnerHTML={{ __html: pg.aside }} />}
      </section>
      <section className="sec">
        <div className="wrap split">
          <div>
            <ChapterHeader
              label="Trade"
              heading="A room built around one piece"
              accent="one piece"
              lead="For a hotel lobby, a retreat’s meditation hall or a client’s entrance, we propose pieces from the collection or a commission, with the making filmed for the people who will live with it."
            />
          </div>
          <div>
            <DemoForm heading={form?.heading} button={form?.button ?? 'Send enquiry'} success={form?.success ?? 'Thank you.'}>
              <Field id="tr-name" label="Your name">
                <input className="field" id="tr-name" required />
              </Field>
              <Field id="tr-co" label="Studio or company">
                <input className="field" id="tr-co" />
              </Field>
              <Field id="tr-email" label="Email">
                <input className="field" id="tr-email" type="email" required />
              </Field>
              <Field id="tr-proj" label="Project">
                <select className="field" id="tr-proj">
                  <option>Hotel or resort</option>
                  <option>Retreat or meditation centre</option>
                  <option>Private residence</option>
                  <option>Office or public space</option>
                </select>
              </Field>
              <Field id="tr-when" label="When you need the pieces">
                <input className="field" id="tr-when" placeholder="Spring 2027" />
              </Field>
              <Field id="tr-msg" label="Tell us about the project" wide>
                <textarea className="field" id="tr-msg" rows={4} />
              </Field>
            </DemoForm>
          </div>
        </div>
      </section>
    </>
  );
}
