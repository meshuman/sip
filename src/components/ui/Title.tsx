import { Fragment } from 'react';

/** Keeps hyphenated words (earth-touching, PTN-MT-26-0142) from breaking across lines. */
export function Title({ text }: { text: string }) {
  const parts = text.split(/(\S+-\S+)/g);
  return (
    <>
      {parts.map((part, i) =>
        /\S+-\S+/.test(part) ? (
          <span className="sp-nb" key={i}>
            {part}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  );
}
