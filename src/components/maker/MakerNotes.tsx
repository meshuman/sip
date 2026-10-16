'use client';

import { allNotes } from '@/lib/catalog';
import { useDemo } from '@/store/demo-store';
import { NotesThread } from './NotesThread';

/** Public notes to a maker (or about one piece), plus the visitor's own notes. */
export function MakerNotes({ maker, piece, empty }: { maker?: string; piece?: string; empty?: string | null }) {
  const { notes, owned } = useDemo();
  const list = allNotes(notes).filter((n) => (maker ? n.maker === maker : true) && (piece ? n.piece === piece : true) && (n.public || owned[n.piece]));
  return <NotesThread notes={list} empty={empty} />;
}

/** "Notes from owners (2)" — the count includes the visitor's own public notes. */
export function MakerNotesCount({ maker }: { maker: string }) {
  const { notes, owned } = useDemo();
  return <>{allNotes(notes).filter((n) => n.maker === maker && (n.public || owned[n.piece])).length}</>;
}
