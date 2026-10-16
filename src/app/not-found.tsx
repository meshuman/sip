import Link from 'next/link';
import { ChapterHeader } from '@/components/ui/ChapterHeader';

export default function NotFound() {
  return (
    <section className="sec-top wrap nf">
      <ChapterHeader as="h1" label="404" heading="This room is empty" lead="The page you’re looking for isn’t here. It may have moved, or the link may be mistyped." />
      <div className="sp-row">
        <Link className="sp-btn" href="/rooms">
          Enter the rooms
        </Link>
        <Link className="sp-btn sp-btn--quiet" href="/registry">
          Check a registry number
        </Link>
      </div>
    </section>
  );
}
