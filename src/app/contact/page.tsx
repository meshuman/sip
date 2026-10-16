import type { Metadata } from 'next';
import Link from 'next/link';
import { DemoForm, Field } from '@/components/forms/DemoForm';
import { ContentPage, contentMetadata } from '@/components/ui/ContentPage';
import { getPage } from '@/lib/content';

export const metadata: Metadata = contentMetadata('contact');

export default function ContactPage() {
  const pg = getPage('contact');
  const form = pg.forms[0];
  return (
    <ContentPage name="contact" trail={[['Home', '/'], ['Contact']]}>
      <section className="wrap split sec-tight">
        <div>
          <DemoForm button={form.button ?? 'Send'} success={form.success ?? 'Thank you.'}>
            <Field id="ct-name" label="Your name">
              <input className="field" id="ct-name" required />
            </Field>
            <Field id="ct-email" label="Email">
              <input className="field" id="ct-email" type="email" required />
            </Field>
            <Field id="ct-topic" label="About">
              <select className="field" id="ct-topic">
                {(form.topics ?? []).map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </Field>
            <Field id="ct-reg" label="Registry number (if you have one)">
              <input className="field sp-reg" id="ct-reg" placeholder="PTN-MT-26-0142" />
            </Field>
            <Field id="ct-msg" label="Message" wide>
              <textarea className="field" id="ct-msg" rows={5} required />
            </Field>
          </DemoForm>
        </div>
        <div>
          <dl className="details">
            {(pg.lists[0]?.items ?? []).map((it) => (
              <div key={it.label}>
                <dt className="sp-label">{it.label}</dt>
                <dd>{it.label === 'Email' || it.label === 'WhatsApp' ? <span className="sp-reg sel">{it.value}</span> : it.value}</dd>
              </div>
            ))}
          </dl>
          <p className="muted small">Sample details for the prototype.</p>
          <p className="more">
            <Link className="sp-link" href="/help">
              Find an answer in Help
            </Link>
          </p>
        </div>
      </section>
    </ContentPage>
  );
}
