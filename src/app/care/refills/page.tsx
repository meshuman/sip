import type { Metadata } from 'next';
import { RefillsView } from '@/components/views/RefillsView';
import { ContentPage, contentMetadata } from '@/components/ui/ContentPage';

export const metadata: Metadata = contentMetadata('care-refills');

export default async function RefillsPage({ searchParams }: { searchParams: Promise<{ piece?: string }> }) {
  const { piece } = await searchParams;
  return (
    <ContentPage name="care-refills" trail={[['Home', '/'], ['Care', '/care'], ['Care refills']]}>
      <RefillsView initial={piece} />
    </ContentPage>
  );
}
