import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { OwnedView } from '@/components/views/OwnedView';
import { pieceFromRegistryId, PIECES, regKey } from '@/lib/catalog';

export const metadata: Metadata = { title: 'Your owner’s record', robots: { index: false } };
export const generateStaticParams = () => PIECES.map((p) => ({ registryId: regKey(p) }));

export default async function OwnedPage({ params }: { params: Promise<{ registryId: string }> }) {
  const p = pieceFromRegistryId((await params).registryId);
  if (!p) notFound();
  return <OwnedView piece={p} />;
}
