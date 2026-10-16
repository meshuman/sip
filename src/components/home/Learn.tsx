import Link from 'next/link';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { Plate } from '@/components/ui/Plate';
import { paths, PIECES } from '@/lib/catalog';
import { getCrafts } from '@/lib/content';

const MORE: { href: string; title: string; text: string }[] = [
  { href: paths.meaning(), title: 'What the symbols mean', text: 'Gestures, deities and motifs, explained in plain words.' },
  { href: paths.care(), title: 'How to look after a piece', text: 'Care for metal, cloth, paper, wood and stone.' },
  { href: paths.journal(), title: 'Stories from the workshop', text: 'Notes on making, travelling and taking art home.' },
];

/** Home page "Learn": answers that stay true. The art forms first, then meaning, care and the journal. */
export function Learn() {
  const crafts = Object.values(getCrafts());
  return (
    <section className="sec sec--deep" id="learn" aria-labelledby="learn-h">
      <div className="wrap">
        <div className="sec-head">
          <ChapterHeader
            label="Learn"
            heading={
              <span id="learn-h">
                Know <em>what you are looking at</em>
              </span>
            }
            lead="Plain answers that stay true: what each art form is, how it is made, what it means and how to look after it."
          />
          <Link className="sp-link" href="/crafts">
            All of Learn
          </Link>
        </div>
        <ul className="learn-grid">
          {crafts.map((c, i) => {
            const piece = PIECES.find((p) => p.craft === c.slug);
            return (
              <li key={c.slug} className={`learn-card${i < 2 ? ' learn-card--lead' : ''}`}>
                <Link href={paths.craft(c.slug)}>
                  <div className="learn-card__img">{piece && <Plate piece={piece} sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 520px" />}</div>
                  <span className="sp-label">Art form</span>
                  <h3>{c.name}</h3>
                  <p>{c.definition}</p>
                  <span className="learn-card__go">How it is made</span>
                </Link>
              </li>
            );
          })}
        </ul>
        <ul className="learn-more">
          {MORE.map((m) => (
            <li key={m.href}>
              <Link href={m.href}>
                <b>{m.title}</b>
                <span>{m.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
