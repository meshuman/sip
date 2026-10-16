import type { Metadata } from 'next';
import { ContentPage, contentMetadata } from '@/components/ui/ContentPage';

export const metadata: Metadata = contentMetadata('legal-terms');

export default function Page() {
  return <ContentPage name="legal-terms" trail={[['Home', '/'], ['Terms of sale']]} />;
}
