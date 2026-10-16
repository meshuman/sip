import { notFound, permanentRedirect } from 'next/navigation';
import { paths, pieceFromRegistryId, PIECES, regKey } from '@/lib/catalog';

// Printed on the catalogue card's QR code: /r/ptn-mt-26-0142 → the piece's record.
export const generateStaticParams = () => PIECES.map((p) => ({ registryId: regKey(p) }));

export default async function RecordLink({ params }: { params: Promise<{ registryId: string }> }) {
  const p = pieceFromRegistryId((await params).registryId);
  if (!p) notFound();
  permanentRedirect(paths.record(p));
}
