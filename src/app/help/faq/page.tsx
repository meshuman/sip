import type { Metadata } from 'next';
import { ContentPage, contentMetadata } from '@/components/ui/ContentPage';
import { HelpMore } from '@/components/ui/HelpMore';
import { JsonLd } from '@/components/ui/JsonLd';
import { getPage } from '@/lib/content';
import { faqFromHtml, faqLd } from '@/lib/seo';

export const metadata: Metadata = contentMetadata('help-faq');

export default function Page() {
  const qas = faqFromHtml(getPage('help-faq').html);
  return (
    <>
      {qas.length > 0 && <JsonLd data={faqLd(qas)} />}
      <ContentPage name="help-faq" trail={[['Home', '/'], ['Help', '/help'], ['Questions']]} faq after={<HelpMore current="/help/faq" />} />
    </>
  );
}
