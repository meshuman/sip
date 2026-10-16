import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '@/styles/tokens.css';
import '@/styles/components.css';
import '@/styles/site.css';
import { DemoChrome } from '@/components/layout/DemoChrome';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { Lockup } from '@/components/ui/Lockup';
import { DemoStoreProvider } from '@/store/demo-store';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: { default: 'Sīpa · Made by hand in Nepal. Recorded for life.', template: '%s · Sīpa' },
  description:
    'One-of-a-kind statues, thangkas, Mithila paintings and carvings from named makers across Nepal, each with its maker’s story, a care kit and a registry number for life.',
  openGraph: { siteName: 'Sīpa', type: 'website', locale: 'en' },
  icons: { icon: '/brand/sipa-seal-gilt.svg' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#fbfbf9',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="sp">
        <DemoStoreProvider>
          <SiteHeader brand={<Lockup />} />
          <main id="app">{children}</main>
          <SiteFooter />
          <DemoChrome />
        </DemoStoreProvider>
      </body>
    </html>
  );
}
