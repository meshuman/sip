import { notFound, permanentRedirect } from 'next/navigation';
import { paths, pieceFromRegistryId, PIECES, regKey } from '@/lib/catalog';

// Short share link: /p/ptn-mt-26-0142 → the piece page.
export const generateStaticParams = () => PIECES.map((p) => ({ registryId: regKey(p) }));

export default async function ShareLink({ params }: { params: Promise<{ registryId: string }> }) {
  const p = pieceFromRegistryId((await params).registryId);
  if (!p) notFound();
  permanentRedirect(paths.piece(p));
}
