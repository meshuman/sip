import type { Metadata } from 'next';
import { CompleteView } from '@/components/views/CompleteView';

export const metadata: Metadata = { title: 'Recorded to you', robots: { index: false } };

export default async function CompletePage({ params }: { params: Promise<{ orderId: string }> }) {
  return <CompleteView orderId={(await params).orderId} />;
}
