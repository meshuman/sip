import type { Metadata } from 'next';
import { ContentPage, contentMetadata } from '@/components/ui/ContentPage';

export const metadata: Metadata = contentMetadata('about-how-we-work');

export default function Page() {
  return <ContentPage name="about-how-we-work" trail={[['Home', '/'], ['Our promise', '/about'], ['How we work']]} />;
}
