import type { Metadata } from 'next';
import Link from 'next/link';
import { ContentPage, contentMetadata } from '@/components/ui/ContentPage';
import { getPage } from '@/lib/content';

export const metadata: Metadata = contentMetadata('help');

export default function HelpPage() {
  const topics = getPage('help').lists[0]?.items ?? [];
  return (
    <ContentPage name="help" trail={[['Home', '/'], ['Help']]}>
      <section className="wrap sec-tight">
        <div className="help-grid">
          {topics.map((t) => (
            <Link key={t.href} className="help-card" href={t.href}>
              <b>{t.title}</b>
              <span>{t.line}</span>
            </Link>
          ))}
        </div>
        <p className="more">
          Still stuck?{' '}
          <Link className="sp-link" href="/contact">
            Write to us
          </Link>
        </p>
      </section>
    </ContentPage>
  );
}
