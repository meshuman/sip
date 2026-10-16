'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { paths, pieceFromRegistryId } from '@/lib/catalog';

/** Check a registry number and open the piece's public record. */
export function RegistryForm() {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [error, setError] = useState<string | null>(null);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = value
      .trim()
      .toUpperCase()
      .replace(/^S[IĪ]PA\s*·?\s*/, '');
    if (!/^[A-Z]{3}-[A-Z]{2}-\d{2}-\d{4}$/.test(v)) {
      setError('That isn’t a registry number. They look like PTN-MT-26-0142: place, craft, year and serial.');
      return;
    }
    const p = pieceFromRegistryId(v);
    if (!p) {
      setError('We can’t find that number in the registry. Check it against the card, or write to us and we’ll look it up.');
      return;
    }
    router.push(paths.record(p));
  };
  const tryNumber = (n: string) => {
    setValue(n);
    setError(null);
  };
  return (
    <form className="reg-form" onSubmit={submit}>
      <label className="sp-label" htmlFor="reg-input">
        Registry number
      </label>
      <div className="reg-row">
        <input
          id="reg-input"
          className="field sp-reg"
          placeholder="PTN-MT-26-0142"
          autoComplete="off"
          spellCheck={false}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="sp-btn" type="submit">
          Check a number
        </button>
      </div>
      {error && (
        <p className="reg-err" role="alert">
          {error}
        </p>
      )}
      <p className="muted reg-try">
        Try{' '}
        <button type="button" className="link-btn sp-reg-s" onClick={() => tryNumber('PTN-MT-26-0118')}>
          PTN-MT-26-0118
        </button>
        , recorded to an owner in Kyoto, or{' '}
        <button type="button" className="link-btn sp-reg-s" onClick={() => tryNumber('JNK-MH-26-0031')}>
          JNK-MH-26-0031
        </button>
        , awaiting its first owner.
      </p>
    </form>
  );
}
