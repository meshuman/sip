import type { Metadata } from 'next';
import { ContentPage, contentMetadata } from '@/components/ui/ContentPage';

export const metadata: Metadata = contentMetadata('legal-cookies');

export default function Page() {
  return <ContentPage name="legal-cookies" trail={[['Home', '/'], ['Cookies']]} />;
}
