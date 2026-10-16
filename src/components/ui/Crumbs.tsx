import Link from 'next/link';
import { Fragment } from 'react';

/** Breadcrumb trail. The last item is the current page. */
export function Crumbs({ items }: { items: [string, string?][] }) {
  return (
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
  );
}
