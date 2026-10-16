import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Content Markdown is read from /content at build time; include it in serverless bundles too.
  // The price-split page is retired; old links go to Our promise.
  redirects: async () => [{ source: '/about/makers-share', destination: '/about', permanent: true }],
  outputFileTracingIncludes: { '/**': ['./content/**/*', './public/brand/**/*'] },
};

export default nextConfig;
