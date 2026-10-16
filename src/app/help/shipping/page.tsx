import type { Metadata } from 'next';
import { ContentPage, contentMetadata } from '@/components/ui/ContentPage';
import { HelpMore } from '@/components/ui/HelpMore';

export const metadata: Metadata = contentMetadata('help-shipping');

export default function Page() {
  return <ContentPage name="help-shipping" trail={[['Home', '/'], ['Help', '/help'], ['Shipping']]} after={<HelpMore current="/help/shipping" />} />;
}
