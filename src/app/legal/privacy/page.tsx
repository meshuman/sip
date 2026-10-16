import type { Metadata } from 'next';
import { ContentPage, contentMetadata } from '@/components/ui/ContentPage';

export const metadata: Metadata = contentMetadata('legal-privacy');

export default function Page() {
  return <ContentPage name="legal-privacy" trail={[['Home', '/'], ['Privacy']]} />;
}
