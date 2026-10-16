import type { IconName } from '@/data/types';

// 24-pixel line icons from the design system (design-system/assets/Icons).
const PATHS: Record<IconName, string> = {
  compass: '<circle cx="12" cy="12" r="9"/><path d="M12 5.5 14.2 12 12 18.5 9.8 12Z"/><path d="M12 2v1.5M12 20.5V22M2 12h1.5M20.5 12H22"/>',
  hand: '<path d="M7.5 13V6.5a1.5 1.5 0 0 1 3 0V11M10.5 11V4.5a1.5 1.5 0 0 1 3 0V11M13.5 11V6a1.5 1.5 0 0 1 3 0v5.5M16.5 11.5V9a1.5 1.5 0 0 1 3 0v5c0 4-3 7-7 7-3 0-4.8-1.6-6.2-3.8L3.7 14a1.5 1.5 0 0 1 2.6-1.6L7.5 14"/>',
  seal: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="6"/><path d="M9.5 10.5h5M12 10.5v4"/>',
  cube: '<path d="M12 3 20 7.5v9L12 21l-8-4.5v-9Z"/><path d="M4 7.5 12 12l8-4.5M12 12v9"/>',
  film: '<path d="M3 6h18v12H3Z"/><path d="M10 9.5 15 12l-5 2.5Z"/>',
  brush: '<path d="M20 4 12.5 11.5"/><path d="M11 10.5 13.5 13"/><path d="M11.5 12.5C8.5 12.5 6.5 14.5 6.5 17c0 1.5-1 2.5-2.5 3 3.5 1 8 0 8.6-3.6.2-1.5 0-2.9-1.1-3.9Z"/>',
  flask: '<path d="M10 3h4v3h-4Z"/><path d="M9 6h6l2 4v10.5H7V10Z"/><path d="M7 14h10"/>',
  card: '<path d="M4 4h16v16H4Z"/><path d="M7 8h10M7 11h10M7 14h6"/><path d="M14 15h3v3h-3Z"/>',
  cover: '<path d="M5 3h14v18H5Z"/><path d="M5 3c3 4 11 4 14 0"/>',
  folder: '<path d="M3 6h7l2 2h9v11H3Z"/>',
  share: '<path d="M12 3v12M7.5 7.5 12 3l4.5 4.5"/><path d="M5 12v8h14v-8"/>',
  pin: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
  lamp: '<path d="M3.5 14h17c0 3.5-3.8 6-8.5 6s-8.5-2.5-8.5-6Z"/><path d="M12 11.5c-1.6-1.2-1.6-3.6 0-6.5 1.6 2.9 1.6 5.3 0 6.5Z"/>',
  days: '<path d="M4 6h16v15H4ZM4 10h16M8 3v5M16 3v5"/><path d="M8 14h2M14 14h2M8 17h2"/>',
  wall: '<path d="M4 4h16v16H4Z"/><path d="M8 8h8v8H8Z"/>',
  play: '<path d="M8 5l11 7-11 7Z"/>',
  pause: '<path d="M7 5h3v14H7ZM14 5h3v14h-3Z"/>',
  turnL: '<path d="M9 7 4 12l5 5"/><path d="M4 12h11a5 5 0 0 1 5 5"/>',
  turnR: '<path d="M15 7l5 5-5 5"/><path d="M20 12H9a5 5 0 0 0-5 5"/>',
  search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/>',
};

export function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  return (
    <svg
      className={`ic ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden="true"
      dangerouslySetInnerHTML={{ __html: PATHS[name] }}
    />
  );
}
