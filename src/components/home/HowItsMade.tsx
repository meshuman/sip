import Link from 'next/link';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { PROCESS } from '@/data/process';

/** Home page: how every piece is made. A pinned heading beside a ruled list of six steps. */
export function HowItsMade() {
  return (
    <section className="process" id="how-its-made">
      <div className="wrap process__grid">
        <div className="process__head">
          <ChapterHeader
            heading="How every piece is made"
            accent="every piece is made"
            lead="We work with makers in their own workshops, respect the culture behind each craft, and deliver every piece with the same care it was made with."
          />
          <p className="more">
            <Link className="sp-link" href="/about/how-we-work">
              How we work
            </Link>
          </p>
        </div>
        <ol className="process__steps">
          {PROCESS.map((s, i) => (
            <li key={s.heading} className="process__step">
              <span className="process__n" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3>{s.heading}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
