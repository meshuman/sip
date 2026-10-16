import type { Metadata } from 'next';
import { ContentPage, contentMetadata } from '@/components/ui/ContentPage';
import { HelpMore } from '@/components/ui/HelpMore';

export const metadata: Metadata = contentMetadata('help-payments');

export default function Page() {
  return <ContentPage name="help-payments" trail={[['Home', '/'], ['Help', '/help'], ['Payments']]} after={<HelpMore current="/help/payments" />} />;
}
