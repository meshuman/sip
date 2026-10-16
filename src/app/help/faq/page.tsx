import type { Metadata } from 'next';
import { ContentPage, contentMetadata } from '@/components/ui/ContentPage';
import { HelpMore } from '@/components/ui/HelpMore';

export const metadata: Metadata = contentMetadata('help-faq');

export default function Page() {
  return <ContentPage name="help-faq" trail={[['Home', '/'], ['Help', '/help'], ['Questions']]} faq after={<HelpMore current="/help/faq" />} />;
}
