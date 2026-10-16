// The Sīpa lockup (seal + wordmark), coloured by theme tokens. The Devanagari glyphs in the source file are removed.
// Source: design-system/assets/Logos/sipa-lockup-ink.svg
import fs from 'node:fs';
import path from 'node:path';

let cached: string | null = null;
function lockupSvg(): string {
  if (cached) return cached;
  let svg = fs.readFileSync(path.join(process.cwd(), 'public/brand/sipa-lockup-ink.svg'), 'utf8');
  svg = svg
    .replace(/\s(width|height)="[^"]*"/g, '')
    .replace('viewBox="0 0 332.1 141.1"', 'viewBox="0 0 332.1 104"')
    .replace(/stroke="#987431"/g, 'style="stroke:var(--gilt)"')
    .replace(/fill="#6e521c"/g, 'style="fill:var(--gilt-ink)"')
    .replace(/fill="#1c1c19"/g, 'style="fill:var(--ink)"')
    .replace(
      /<g transform="translate\(37\.11 64\.23\)">.*?<\/g>/,
      '<text x="52" y="68" text-anchor="middle" font-size="46" style="fill:var(--gilt-ink);font-family:var(--font-display);font-weight:500">S</text>',
    )
    .replace(/<g transform="translate\(132\.68 135\.00\)">.*?<\/g>/, '')
    .replace(/aria-label="[^"]*"/, 'aria-label="Sīpa"')
    .replace('role="img"', 'role="img" focusable="false"');
  cached = svg;
  return svg;
}

/** Server component: inlines the lockup with the page tokens. */
export function Lockup() {
  return <span className="lockup" dangerouslySetInnerHTML={{ __html: lockupSvg() }} />;
}
