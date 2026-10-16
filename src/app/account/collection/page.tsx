import type { Metadata } from 'next';
import { Crumbs } from '@/components/ui/Crumbs';
import { CollectionView } from '@/components/views/CollectionView';

export const metadata: Metadata = { title: 'Your collection', robots: { index: false } };

export default function CollectionPage() {
  return (
    <>
      <Crumbs items={[['Home', '/'], ['Your collection']]} />
      <CollectionView />
    </>
  );
}
