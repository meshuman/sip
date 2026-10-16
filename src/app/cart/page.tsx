import type { Metadata } from 'next';
import { Crumbs } from '@/components/ui/Crumbs';
import { CartView } from '@/components/views/CartView';

export const metadata: Metadata = { title: 'Bag', robots: { index: false } };

export default function CartPage() {
  return (
    <>
      <Crumbs items={[['Home', '/'], ['Bag']]} />
      <CartView />
    </>
  );
}
