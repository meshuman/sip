import type { ReactNode } from 'react';

// Social links for the prototype. The addresses point to each network's home page. Replace them with Sīpa's own accounts.
const SOCIAL: { name: string; href: string; path: ReactNode }[] = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/',
    path: (
      <>
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/',
    path: <path d="M14 8.5h2.5V5H14a3.5 3.5 0 0 0-3.5 3.5V11H8v3.5h2.5V21H14v-6.5h2.4l.6-3.5H14V8.9c0-.3.2-.4.5-.4Z" />,
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/',
    path: (
      <>
        <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
        <path d="m10 9.2 5 2.8-5 2.8Z" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    name: 'WhatsApp',
    href: 'https://www.whatsapp.com/',
    path: (
      <>
        <path d="M4 20l1.2-4.1A8 8 0 1 1 8.2 19Z" />
        <path d="M9.2 8.8c.3 2.6 2.4 4.8 5.2 5.6l1.2-1.3-1.9-1-.9.6c-.9-.4-1.6-1.1-2-2l.6-.9-1-1.9Z" fill="currentColor" stroke="none" />
      </>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/',
    path: <path d="M5 4.5 19 19.5M19 4.5 5 19.5" />,
  },
];

/** Round outline icons for the social networks. Opens in a new tab. */
export function SocialIcons({ label = 'Follow Sīpa' }: { label?: string }) {
  return (
    <ul className="social" aria-label={label}>
      {SOCIAL.map((s) => (
        <li key={s.name}>
          <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={`${s.name} (opens in a new tab)`} title={s.name}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
              {s.path}
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
