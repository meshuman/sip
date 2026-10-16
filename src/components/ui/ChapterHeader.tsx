import type { ReactNode } from 'react';

interface Props {
  label?: ReactNode;
  heading: ReactNode;
  /** A word or phrase inside a string heading to set in the accent colour */
  accent?: string;
  lead?: ReactNode;
  /** Lapis "place" styling */
  place?: boolean;
  as?: 'h1' | 'h2';
  id?: string;
}

/** Wraps `accent` in <em> when the heading is plain text. */
function highlight(heading: ReactNode, accent?: string): ReactNode {
  if (typeof heading !== 'string' || !accent) return heading;
  const i = heading.indexOf(accent);
  if (i < 0) return heading;
  return (
    <>
      {heading.slice(0, i)}
      <em>{accent}</em>
      {heading.slice(i + accent.length)}
    </>
  );
}

/** Design-system ChapterHeader: label, Nepali marker, heading and lead. */
export function ChapterHeader({ label, heading, accent, lead, place, as: H = 'h2', id }: Props) {
  return (
    <header className={`sp-chapter${place ? ' sp-chapter--place' : ''}`} id={id}>
      <div className="sp-chapter__eyebrow">{label && <span className="sp-label">{label}</span>}</div>
      <H>{highlight(heading, accent)}</H>
      {lead && <p>{lead}</p>}
    </header>
  );
}
