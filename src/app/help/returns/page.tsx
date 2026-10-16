import type { Metadata } from 'next';
import { ContentPage, contentMetadata } from '@/components/ui/ContentPage';
import { HelpMore } from '@/components/ui/HelpMore';

export const metadata: Metadata = contentMetadata('help-returns');

export default function Page() {
  return <ContentPage name="help-returns" trail={[['Home', '/'], ['Help', '/help'], ['Returns']]} after={<HelpMore current="/help/returns" />} />;
}
