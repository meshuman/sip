import Link from 'next/link';
import { Fragment } from 'react';
import { breadcrumbLd } from '@/lib/seo';
import { JsonLd } from './JsonLd';

/** Breadcrumb trail. The last item is the current page. */
export function Crumbs({ items }: { items: [string, string?][] }) {
  return (
    <>
      <JsonLd data={breadcrumbLd(items)} />
      <nav className="crumbs wrap" aria-label="Breadcrumb">
        {items.map(([label, href], i) =>
          i < items.length - 1 && href ? (
            <Fragment key={i}>
              <Link href={href}>{label}</Link>
              <span aria-hidden="true">›</span>
            </Fragment>
          ) : (
            <span aria-current="page" key={i}>
              {label}
            </span>
          ),
        )}
      </nav>
    </>
  );
}
