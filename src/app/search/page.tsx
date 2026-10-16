import type { Metadata } from 'next';
import { SearchView, type SearchIndex } from '@/components/views/SearchView';
import { Crumbs } from '@/components/ui/Crumbs';
import { getCrafts, getPlaces, getRooms, getTopics } from '@/lib/content';

export const metadata: Metadata = { title: 'Search', robots: { index: false } };

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;
  // A small index built at request time from the content files. Replace with a search service as the catalogue grows.
  const index: SearchIndex = {
    crafts: Object.values(getCrafts()).map((c) => ({ href: `/crafts/${c.slug}`, name: c.name, text: c.definition })),
    topics: Object.values(getTopics()).map((t) => ({ href: `/meaning/${t.slug}`, name: t.name, text: t.definition })),
    places: Object.values(getPlaces()).map((p) => ({ href: `/places/${p.slug}`, name: p.name, ne: p.nameNe, text: p.summary, aka: p.alsoKnownAs })),
    rooms: Object.fromEntries(Object.values(getRooms()).map((r) => [r.slug, r.name])),
    topicNames: Object.fromEntries(Object.values(getTopics()).map((t) => [t.slug, t.name])),
    craftNames: Object.fromEntries(Object.values(getCrafts()).map((c) => [c.slug, c.name])),
  };
  return (
    <>
      <Crumbs items={[['Home', '/'], ['Search']]} />
      <SearchView index={index} initial={q ?? ''} />
    </>
  );
}
