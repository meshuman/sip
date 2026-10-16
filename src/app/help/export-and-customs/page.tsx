import type { Metadata } from 'next';
import { ContentPage, contentMetadata } from '@/components/ui/ContentPage';
import { HelpMore } from '@/components/ui/HelpMore';

export const metadata: Metadata = contentMetadata('help-export');

export default function Page() {
  return <ContentPage name="help-export" trail={[['Home', '/'], ['Help', '/help'], ['Export and customs']]} after={<HelpMore current="/help/export-and-customs" />} />;
}
