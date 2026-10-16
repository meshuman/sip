import { MakerFace } from '@/components/maker/MakerFace';
import Link from 'next/link';
import { MAKERS, paths } from '@/lib/catalog';
import { placeName } from '@/data/places';

interface Props {
  slug: string;
  /** Small label above the name. Defaults to "Made by". */
  label?: string;
  link?: boolean;
  quote?: boolean;
  as?: 'h1' | 'h2' | 'h3';
}

/** Design-system ArtisanByline: portrait halo, name, place and lineage, and the maker's own words. */
export function ArtisanByline({ slug, label = 'Made by', link = true, quote = true, as: H = 'h3' }: Props) {
  const m = MAKERS[slug];
  return (
    <div className="sp-byline">
      <div className="sp-byline__halo">
        <div className="sp-byline__face" aria-hidden="true">
          <MakerFace slug={slug} initial={m.name.charAt(0)} size={80} />
        </div>
      </div>
      <div>
        <p className="sp-label" style={{ margin: 0 }}>
          {label}
        </p>
        <H className="sp-byline__name">
          {link ? (
            <Link className="plain" href={paths.maker(slug)}>
              {m.name}
            </Link>
          ) : (
            m.name
          )}
        </H>
        <p className="sp-byline__meta">
          <b>
            {m.area}, {placeName(m.place)}
          </b>{' '}
          · {m.lineage} · {m.years} years at the bench
        </p>
      </div>
      {quote && (
        <blockquote className="sp-byline__quote">
          <div>
            <span>
              “{m.quote.en}” {m.quote.context}
            </span>
          </div>
        </blockquote>
      )}
    </div>
  );
}
