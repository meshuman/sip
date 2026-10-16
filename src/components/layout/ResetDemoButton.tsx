'use client';

import { useRouter } from 'next/navigation';
import { useDemo } from '@/store/demo-store';

export function ResetDemoButton({ className = 'link-btn', label = 'Reset the demo' }: { className?: string; label?: string }) {
  const { reset } = useDemo();
  const router = useRouter();
  return (
    <button
      className={className}
      type="button"
      onClick={() => {
        reset();
        router.push('/');
      }}
    >
      {label}
    </button>
  );
}
