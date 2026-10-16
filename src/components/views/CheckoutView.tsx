'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { Icon } from '@/components/ui/Icon';
import { Plate } from '@/components/ui/Plate';
import { Title } from '@/components/ui/Title';
import { BY_ID, paths } from '@/lib/catalog';
import { useDemo } from '@/store/demo-store';
import { CartView } from './CartView';

/** Shipping per piece in the prototype (insured). Replace with the carrier's quote. */
const SHIPPING_PER_PIECE = 6800;

/**
 * Demo checkout: takes no payment. In production, collect details, create the order and payment intent
 * on the server (route handler or server action), and record ownership only when payment succeeds.
 */
export function CheckoutView() {
  const store = useDemo();
  const router = useRouter();
  const [form, setForm] = useState({ email: 'alex.morgan@example.com', phone: '+44 7700 900123', address: '14 Cedar Row', postcode: 'N1 2AB', country: 'United Kingdom' });
  const [buyer, setBuyer] = useState(store.buyer);
  const [showOnRecord, setShowOnRecord] = useState(true);
  const items = store.bag.map((id) => BY_ID[id]).filter(Boolean);
  if (!store.ready) return <section className="sec-top wrap" aria-busy="true" />;
  if (!items.length) return <CartView />;
  const total = items.reduce((a, p) => a + p.price, 0);
  const ship = SHIPPING_PER_PIECE * items.length;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = store.checkout({ first: buyer.first, last: buyer.last, city: buyer.city, email: form.email, showOnRecord });
    router.push(paths.complete(id));
  };
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, [k]: e.target.value });

  return (
    <>
      <section className="sec-top wrap">
        <ChapterHeader as="h1" label="Checkout" heading="Make it yours" lead={`We’re holding ${items.length === 1 ? items[0].title : 'your pieces'} for you for 15 minutes.`} />
      </section>
      <form className="wrap checkout" onSubmit={submit}>
        <div className="co-steps">
          <fieldset>
            <legend>
              <span className="sp-reg-s">1</span> Your details
            </legend>
            <div className="fields">
              <label>
                First name
                <input className="field" value={buyer.first} onChange={(e) => setBuyer({ ...buyer, first: e.target.value })} required />
              </label>
              <label>
                Last name
                <input className="field" value={buyer.last} onChange={(e) => setBuyer({ ...buyer, last: e.target.value })} required />
              </label>
              <label className="w2">
                Email
                <input className="field" type="email" value={form.email} onChange={set('email')} required />
              </label>
              <label>
                Phone
                <input className="field" value={form.phone} onChange={set('phone')} />
              </label>
              <label className="chk">
                <input type="checkbox" defaultChecked /> Send updates on WhatsApp
              </label>
              <label className="w2">
                Address
                <input className="field" value={form.address} onChange={set('address')} />
              </label>
              <label>
                City
                <input className="field" value={buyer.city} onChange={(e) => setBuyer({ ...buyer, city: e.target.value })} required />
              </label>
              <label>
                Postcode
                <input className="field" value={form.postcode} onChange={set('postcode')} />
              </label>
              <label className="w2">
                Country
                <input className="field" value={form.country} onChange={set('country')} />
              </label>
            </div>
          </fieldset>
          <fieldset>
            <legend>
              <span className="sp-reg-s">2</span> Is it a gift?
            </legend>
            <div className="radios">
              <label>
                <input type="radio" name="gift" value="no" defaultChecked /> No, it’s for me
              </label>
              <label>
                <input type="radio" name="gift" value="yes" /> Yes, it’s a gift
              </label>
            </div>
            <p className="muted">
              A gift arrives with your message on a lokta card, with the price left off the packing slip. The piece is recorded to you, and you can pass the record on later.
            </p>
          </fieldset>
          <fieldset>
            <legend>
              <span className="sp-reg-s">3</span> Delivery
            </legend>
            <ol className="co-time">
              <li>
                <b>Export clearance</b>
                <span>About 5 working days. Included.</span>
              </li>
              <li>
                <b>Packing</b>
                <span>1 to 2 working days, with its card and care kit.</span>
              </li>
              <li>
                <b>Transit</b>
                <span>4 to 7 working days, insured, tracked.</span>
              </li>
            </ol>
            <p className="muted">
              Import duties in your country are shown before you pay.{' '}
              <Link className="sp-link" href="/help/export-and-customs">
                About export and customs
              </Link>
            </p>
          </fieldset>
          <fieldset>
            <legend>
              <span className="sp-reg-s">4</span> Payment
            </legend>
            <div className="radios">
              <label>
                <input type="radio" name="pay" value="card" defaultChecked /> Card
              </label>
              <label>
                <input type="radio" name="pay" value="esewa" /> eSewa
              </label>
              <label>
                <input type="radio" name="pay" value="khalti" /> Khalti
              </label>
            </div>
            <p className="demo-pay">
              <Icon name="seal" /> Demo checkout: no payment is taken in this prototype.
            </p>
          </fieldset>
          <fieldset>
            <legend>
              <span className="sp-reg-s">5</span> Review
            </legend>
            <label className="chk">
              <input type="checkbox" checked={showOnRecord} onChange={(e) => setShowOnRecord(e.target.checked)} /> Show my first name and city on this piece’s public record
            </label>
            <p className="muted small">You can change this later. Without it, the record says “a private owner”.</p>
          </fieldset>
        </div>
        <aside className="bag__sum">
          {items.map((p) => (
            <div className="sum-piece" key={p.id}>
              <div className="plate">
                <Plate piece={p} />
              </div>
              <div>
                <b>
                  <Title text={p.title} />
                </b>
                <span className="sp-reg-s">SĪPA · {p.id}</span>
              </div>
            </div>
          ))}
          <dl>
            <div>
              <dt>Pieces</dt>
              <dd className="sp-reg">{store.money(total)}</dd>
            </div>
            <div>
              <dt>Shipping, insured</dt>
              <dd className="sp-reg">{store.money(ship)}</dd>
            </div>
            <div>
              <dt>Export clearance</dt>
              <dd>Included</dd>
            </div>
            <div className="tot">
              <dt>Total</dt>
              <dd className="sp-reg">{store.money(total + ship)}</dd>
            </div>
          </dl>
          <button className="sp-btn wide" type="submit">
            <Icon name="seal" className="sp-btn__icon" /> Pay and record it to me
          </button>
        </aside>
      </form>
    </>
  );
}
