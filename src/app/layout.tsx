import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '@/styles/tokens.css';
import '@/styles/components.css';
import '@/styles/site.css';
import { JsonLd } from '@/components/ui/JsonLd';
import { organizationLd, websiteLd } from '@/lib/seo';
import { DemoChrome } from '@/components/layout/DemoChrome';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { Lockup } from '@/components/ui/Lockup';
import { DemoStoreProvider } from '@/store/demo-store';

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: { default: 'Sīpa · Made by hand in Nepal. Recorded for life.', template: '%s · Sīpa' },
  description: 'One-of-a-kind statues, thangkas, Mithila paintings and carvings from named makers across Nepal, with a maker’s story, a care kit and a registry number.',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1, 'max-video-preview': -1 } },
  // Every page canonicalises to itself unless it sets its own.
  alternates: { canonical: './' },
  openGraph: {
    siteName: 'Sīpa',
    type: 'website',
    locale: 'en_US',
    images: [{ url: '/video/hero-poster.jpg', width: 1280, height: 720, alt: 'An artisan hand-finishing a Nepalese deity sculpture' }],
  },
  twitter: { card: 'summary_large_image', images: ['/video/hero-poster.jpg'] },
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
      <head>
        <link rel="preload" href="/fonts/HankenGrotesk-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="sp">
        <JsonLd data={[organizationLd(), websiteLd()]} />
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
