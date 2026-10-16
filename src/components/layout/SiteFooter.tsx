import Link from 'next/link';
import { Lockup } from '@/components/ui/Lockup';
import { ResetDemoButton } from './ResetDemoButton';

const COLS: [string, [string, string][]][] = [
  [
    'Explore',
    [
      ['/rooms', 'Rooms'],
      ['/pieces', 'All pieces'],
      ['/makers', 'Makers'],
      ['/places', 'Places'],
      ['/crafts', 'Learn'],
      ['/behind-the-scenes', 'Behind the scenes'],
      ['/journal', 'Journal'],
      ['/search', 'Search'],
    ],
  ],
  [
    'Help',
    [
      ['/help', 'Help'],
      ['/help/shipping', 'Shipping'],
      ['/help/export-and-customs', 'Export and customs'],
      ['/help/returns', 'Returns'],
      ['/help/faq', 'Questions'],
      ['/contact', 'Contact'],
    ],
  ],
  [
    'Sīpa',
    [
      ['/about', 'Our promise'],
      ['/registry', 'The registry'],
      ['/commission', 'Request a piece'],
      ['/visit', 'Visit a workshop'],
      ['/trade', 'For designers and hotels'],
      ['/care/refills', 'Care refills'],
      ['/account/collection', 'Your collection'],
    ],
  ],
];

export function SiteFooter() {
  return (
    <footer className="site-foot">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <Lockup />
            <p>One-of-a-kind art made by hand across Nepal, told through its maker and recorded for life.</p>
          </div>
          {COLS.map(([title, links]) => (
            <div key={title}>
              <h4>{title}</h4>
              <ul>
                {links.map(([href, label]) => (
                  <li key={href}>
                    <Link href={href}>{label}</Link>
                  </li>
                ))}
                {title === 'Sīpa' && (
                  <li>
                    <ResetDemoButton />
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>
        <div className="foot-base">
          <span>Sīpa is a working name. Prototype, October 2026.</span>
          <span>
            <Link href="/legal/terms">Terms</Link> · <Link href="/legal/privacy">Privacy</Link> · <Link href="/legal/cookies">Cookies</Link> · Lalitpur, Nepal
          </span>
        </div>
      </div>
    </footer>
  );
}
