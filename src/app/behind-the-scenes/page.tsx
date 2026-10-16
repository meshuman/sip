import type { Metadata } from 'next';
import Link from 'next/link';
import { BehindList } from '@/components/behind/BehindList';
import { ContentPage, contentMetadata } from '@/components/ui/ContentPage';

export const metadata: Metadata = { ...contentMetadata('behind-the-scenes'), alternates: { canonical: '/behind-the-scenes' } };

export default function BehindPage() {
  return (
    <ContentPage name="behind-the-scenes" accent="the work" trail={[['Home', '/'], ['Behind the scenes']]}>
      <section className="wrap sec-tight">
        <BehindList />
      </section>
      <section className="sec sec--deep">
        <div className="wrap behind-cta">
          <div>
            <h2 className="group-h">Join the conversation</h2>
            <p>We hold open discussions with makers, neighbours and owners. If you would like to be at the next one, or have a question about how we work, write to us.</p>
          </div>
          <Link className="sp-btn" href="/contact">
            Write to us
          </Link>
        </div>
      </section>
    </ContentPage>
  );
}
