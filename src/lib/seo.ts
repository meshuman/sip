// Search, answer-engine and generative-engine helpers: absolute URLs, schema.org builders, description trimming.
// Everything here is plain data. Render it with <JsonLd data={...} />.

export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/$/, '');
export const SITE_NAME = 'Sīpa';
export const abs = (path: string) => (path.startsWith('http') ? path : `${SITE_URL}${path}`);

/** Sīpa's social profiles. These are placeholders (each network's home page) until real accounts exist. */
export const SOCIAL_URLS = {
  instagram: 'https://www.instagram.com/',
  facebook: 'https://www.facebook.com/',
  youtube: 'https://www.youtube.com/',
  whatsapp: 'https://www.whatsapp.com/',
  x: 'https://x.com/',
} as const;

/** Trims text to a search-snippet length at a sentence or word boundary. */
export function trimDesc(text: string, max = 155): string {
  const t = text.replace(/\s+/g, ' ').trim();
  if (t.length <= max) return t;
  const cut = t.slice(0, max);
  const stop = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('? '));
  if (stop > max * 0.55) return cut.slice(0, stop + 1);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:–-]$/, '') + '…';
}

const CTX = 'https://schema.org';

export const organizationLd = () => ({
  '@context': CTX,
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: SITE_URL,
  logo: abs('/brand/sipa-seal-gilt.svg'),
  description:
    'Sīpa sells one-of-a-kind statues, thangkas, Mithila paintings and carvings made by named makers across Nepal. Each piece has a registry number, a catalogue card and a care kit.',
  foundingLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: 'Lalitpur', addressCountry: 'NP' } },
  areaServed: 'Worldwide',
  sameAs: Object.values(SOCIAL_URLS),
});

export const websiteLd = () => ({
  '@context': CTX,
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: 'en',
  publisher: { '@id': `${SITE_URL}/#organization` },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/search?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
});

export const breadcrumbLd = (items: [string, string?][]) => ({
  '@context': CTX,
  '@type': 'BreadcrumbList',
  itemListElement: items.map(([name, href], i) => ({ '@type': 'ListItem', position: i + 1, name, ...(href ? { item: abs(href) } : {}) })),
});

export const articleLd = (o: {
  headline: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
  about?: { name: string; description: string; setPath?: string };
}) => ({
  '@context': CTX,
  '@type': 'Article',
  headline: o.headline,
  description: o.description,
  mainEntityOfPage: abs(o.path),
  inLanguage: 'en',
  ...(o.image ? { image: abs(o.image) } : {}),
  ...(o.datePublished ? { datePublished: o.datePublished } : {}),
  author: { '@id': `${SITE_URL}/#organization` },
  publisher: { '@id': `${SITE_URL}/#organization` },
  ...(o.about ? { about: { '@type': 'DefinedTerm', name: o.about.name, description: o.about.description, inDefinedTermSet: abs(o.about.setPath ?? '/crafts') } } : {}),
});

export const faqLd = (qas: { q: string; a: string }[]) => ({
  '@context': CTX,
  '@type': 'FAQPage',
  mainEntity: qas.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
});

export const itemListLd = (name: string, path: string, items: { name: string; path: string }[]) => ({
  '@context': CTX,
  '@type': 'CollectionPage',
  name,
  url: abs(path),
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: items.length,
    itemListElement: items.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x.name, url: abs(x.path) })),
  },
});

export const personLd = (o: { name: string; path: string; description: string; place: string; jobTitle: string; image?: string }) => ({
  '@context': CTX,
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    name: o.name,
    url: abs(o.path),
    description: o.description,
    jobTitle: o.jobTitle,
    homeLocation: { '@type': 'Place', address: { '@type': 'PostalAddress', addressLocality: o.place, addressCountry: 'NP' } },
    ...(o.image ? { image: abs(o.image) } : {}),
  },
});

export const placeLd = (o: { name: string; path: string; description: string }) => ({
  '@context': CTX,
  '@type': 'Place',
  name: o.name,
  url: abs(o.path),
  description: o.description,
  address: { '@type': 'PostalAddress', addressLocality: o.name, addressCountry: 'NP' },
});

const text = (html: string) =>
  html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&rsquo;/g, '’')
    .replace(/\s+/g, ' ')
    .trim();

/** Reads question and answer pairs from rendered Markdown: each <h2> is a question, what follows it is the answer. */
export function faqFromHtml(html: string): { q: string; a: string }[] {
  const parts = html.split(/<h2[^>]*>/).slice(1);
  return parts
    .map((p) => {
      const [q, ...rest] = p.split('</h2>');
      return { q: text(q), a: text(rest.join('')) };
    })
    .filter((x) => x.q && x.a);
}
