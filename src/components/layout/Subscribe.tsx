'use client';

import { useId, useState } from 'react';

const KEY = 'sipa-subscribers-v1';
const INTERESTS = ['New pieces', 'Maker stories', 'Care tips'];

/** Newsletter sign-up. Prototype: the address is kept in this browser only and nothing is sent. */
export function Subscribe() {
  const id = useId();
  const [email, setEmail] = useState('');
  const [picked, setPicked] = useState<string[]>(INTERESTS.slice(0, 2));
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState<string | null>(null);

  const toggle = (t: string) => setPicked((p) => (p.includes(t) ? p.filter((x) => x !== t) : [...p, t]));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) {
      setError('That does not look like an email address. Check it and try again.');
      return;
    }
    try {
      const list = JSON.parse(localStorage.getItem(KEY) ?? '[]') as { email: string; interests: string[] }[];
      localStorage.setItem(KEY, JSON.stringify([{ email: v, interests: picked }, ...list.filter((x) => x.email !== v)]));
    } catch {
      /* private mode: the confirmation still shows */
    }
    setError(null);
    setDone(v);
  };

  if (done)
    return (
      <div className="subscribe subscribe--done" role="status">
        <b>Thank you. You are on the list.</b>
        <p>
          We will write to {done}
          {picked.length ? ` about ${picked.join(', ').toLowerCase()}` : ''}. This is a demo, so nothing was sent.
        </p>
        <button type="button" className="link-btn" onClick={() => setDone(null)}>
          Use a different address
        </button>
      </div>
    );

  return (
    <form className="subscribe" onSubmit={submit} noValidate>
      <label className="sp-label" htmlFor={`${id}-email`}>
        Email address
      </label>
      <div className="subscribe__row">
        <input
          id={`${id}-email`}
          className="field"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? `${id}-err` : undefined}
        />
        <button className="sp-btn" type="submit">
          Subscribe
        </button>
      </div>
      <fieldset className="subscribe__picks">
        <legend className="sp-label">I would like to hear about</legend>
        {INTERESTS.map((t) => (
          <label key={t} className="subscribe__pick">
            <input type="checkbox" checked={picked.includes(t)} onChange={() => toggle(t)} />
            <span>{t}</span>
          </label>
        ))}
      </fieldset>
      {error && (
        <p className="reg-err" id={`${id}-err`} role="alert">
          {error}
        </p>
      )}
      <p className="muted small">One email a month. Unsubscribe at any time. Demo form: nothing is sent from this prototype.</p>
    </form>
  );
}
