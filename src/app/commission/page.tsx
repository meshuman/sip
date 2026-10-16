import type { Metadata } from 'next';
import { CommissionForm } from '@/components/forms/CommissionForm';
import { ContentPage, contentMetadata } from '@/components/ui/ContentPage';
import { getCrafts } from '@/lib/content';

export const metadata: Metadata = { ...contentMetadata('commission'), alternates: { canonical: '/commission' } };

export default function CommissionPage() {
  const crafts = Object.values(getCrafts()).map((c) => ({ slug: c.slug, name: c.name }));
  return (
    <ContentPage name="commission" accent="made for you" trail={[['Home', '/'], ['Request a piece']]}>
      <section className="wrap sec-tight">
        <CommissionForm crafts={crafts} />
      </section>
    </ContentPage>
  );
}
