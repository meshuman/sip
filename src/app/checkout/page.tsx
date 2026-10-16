import type { Metadata } from 'next';
import { Crumbs } from '@/components/ui/Crumbs';
import { CheckoutView } from '@/components/views/CheckoutView';

export const metadata: Metadata = { title: 'Checkout', robots: { index: false } };

export default function CheckoutPage() {
  return (
    <>
      <Crumbs items={[['Home', '/'], ['Bag', '/cart'], ['Checkout']]} />
      <CheckoutView />
    </>
  );
}
