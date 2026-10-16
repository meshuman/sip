import Link from 'next/link';
import { getPage } from '@/lib/content';

/** The other help topics, shown at the foot of each help page. */
export function HelpMore({ current }: { current: string }) {
  const topics = (getPage('help').lists[0]?.items ?? []).filter((t) => t.href !== current);
  return (
    <section className="sec">
      <div className="wrap">
        <p className="sp-label">More help</p>
        <div className="help-grid help-grid--small">
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
      </div>
    </section>
  );
}
