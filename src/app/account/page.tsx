import { redirect } from 'next/navigation';

// Sign-in, orders, notes and settings are not built yet (see docs/SITEMAP.md). The account opens on the collection.
export default function AccountPage() {
  redirect('/account/collection');
}
