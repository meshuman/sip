'use client';

import { useMemo, useState, useSyncExternalStore } from 'react';
import { Icon } from '@/components/ui/Icon';
import { useDemo } from '@/store/demo-store';

const KEY = 'sipa-requests-v1';
const EVENT = 'sipa-requests';

export interface RequestRecord {
  id: string;
  date: string;
  craft: string;
  subject: string;
  size: string;
  budget: string;
  needed: string;
  country: string;
  name: string;
}

const subscribe = (cb: () => void) => {
  window.addEventListener(EVENT, cb);
  window.addEventListener('storage', cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener('storage', cb);
  };
};
const snapshot = () => {
  try {
    return localStorage.getItem(KEY) ?? '[]';
  } catch {
    return '[]';
  }
};
const save = (list: RequestRecord[]) => {
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    /* private mode: the confirmation still shows */
  }
  window.dispatchEvent(new Event(EVENT));
};

const SIZES = ['Small, under 25 cm', 'Medium, 25 to 50 cm', 'Large, over 50 cm', 'Not sure yet'];
/** Budget steps, in rupees (how prices are stored). Shown in the visitor's currency. */
const STEPS = [35000, 105000, 280000, 700000];

const NEXT: [string, string][] = [
  ['We ask the makers', 'We send your request to the makers who work in that craft.'],
  ['A maker replies', 'You get a sketch, a price and a time to make it, and the maker’s name.'],
  ['You decide', 'If you agree, you pay a deposit and the making begins. If not, nothing is owed.'],
];

/** Request a piece made to order. Prototype: requests are kept in this browser only. */
export function CommissionForm({ crafts }: { crafts: { slug: string; name: string }[] }) {
  const { money } = useDemo();
  const raw = useSyncExternalStore(subscribe, snapshot, () => '[]');
  const requests = useMemo<RequestRecord[]>(() => JSON.parse(raw), [raw]);
  const [done, setDone] = useState<RequestRecord | null>(null);

  const budgets = useMemo(
    () => [
      `Under ${money(STEPS[0])}`,
      `${money(STEPS[0])} to ${money(STEPS[1])}`,
      `${money(STEPS[1])} to ${money(STEPS[2])}`,
      `${money(STEPS[2])} to ${money(STEPS[3])}`,
      `Over ${money(STEPS[3])}`,
      'Not sure yet',
    ],
    [money],
  );

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = (k: string) => String(f.get(k) ?? '').trim();
    const rec: RequestRecord = {
      id: `REQ-26-${String(requests.length + 1).padStart(4, '0')}`,
      date: new Date().toISOString().slice(0, 10),
      craft: v('craft'),
      subject: v('subject'),
      size: v('size'),
      budget: v('budget'),
      needed: v('needed'),
      country: v('country'),
      name: v('name'),
    };
    save([rec, ...requests]);
    setDone(rec);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const withdraw = (id: string) => save(requests.filter((r) => r.id !== id));

  return (
    <div className="req">
      {done ? (
        <div className="sent req__done" role="status">
          <Icon name="seal" />
          <div>
            <b>Thank you, {done.name.split(' ')[0] || 'friend'}. Your request is recorded.</b>
            <p className="sp-reg-s">{done.id}</p>
            <p>
              {done.craft}: {done.subject}. We will write to the email you gave. This is a demo: nothing was sent.
            </p>
            <button type="button" className="sp-btn sp-btn--quiet" onClick={() => setDone(null)}>
              Make another request
            </button>
          </div>
        </div>
      ) : (
        <form className="demo-form req__form" onSubmit={submit}>
          <div className="fields">
            <label htmlFor="rq-craft">
              Craft
              <select className="field" id="rq-craft" name="craft" defaultValue="" required>
                <option value="" disabled>
                  Choose a craft
                </option>
                {crafts.map((c) => (
                  <option key={c.slug}>{c.name}</option>
                ))}
                <option>Not sure, advise me</option>
              </select>
            </label>
            <label htmlFor="rq-size">
              Size
              <select className="field" id="rq-size" name="size" defaultValue={SIZES[3]}>
                {SIZES.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
            <label className="w2" htmlFor="rq-subject">
              What should it show?
              <textarea
                className="field"
                id="rq-subject"
                name="subject"
                rows={4}
                required
                placeholder="For example: a seated Green Tara in copper, about 30 cm, for a meditation room"
              />
            </label>
            <label htmlFor="rq-budget">
              Budget
              <select className="field" id="rq-budget" name="budget" defaultValue={budgets[5]}>
                {budgets.map((b) => (
                  <option key={b}>{b}</option>
                ))}
              </select>
            </label>
            <label htmlFor="rq-needed">
              Needed by (optional)
              <input className="field" id="rq-needed" name="needed" type="date" />
            </label>
            <label htmlFor="rq-country">
              Ship to
              <input className="field" id="rq-country" name="country" autoComplete="country-name" required />
            </label>
            <label htmlFor="rq-ref">
              Link to a reference image (optional)
              <input className="field" id="rq-ref" name="ref" type="url" placeholder="https://" />
            </label>
            <label htmlFor="rq-name">
              Your name
              <input className="field" id="rq-name" name="name" autoComplete="name" required />
            </label>
            <label htmlFor="rq-email">
              Email
              <input className="field" id="rq-email" name="email" type="email" autoComplete="email" required />
            </label>
          </div>
          <div className="sp-row">
            <button className="sp-btn" type="submit">
              Send my request
            </button>
            <span className="muted small">Demo form: requests stay in this browser.</span>
          </div>
        </form>
      )}

      <aside className="req__side" aria-label="What happens next">
        <h2 className="group-h">What happens next</h2>
        <ol className="req__steps">
          {NEXT.map(([h, t], i) => (
            <li key={h}>
              <span className="req__n" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <b>{h}</b>
                <p>{t}</p>
              </div>
            </li>
          ))}
        </ol>
        {requests.length > 0 && (
          <div className="req__list">
            <h2 className="group-h">Your requests</h2>
            <ul>
              {requests.map((r) => (
                <li key={r.id}>
                  <span className="sp-reg-s">{r.id}</span>
                  <b>{r.craft}</b>
                  <span>{r.subject.length > 90 ? `${r.subject.slice(0, 90)}…` : r.subject}</span>
                  <button type="button" className="link-btn" onClick={() => withdraw(r.id)}>
                    Withdraw
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </aside>
    </div>
  );
}
