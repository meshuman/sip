'use client';

import Link from 'next/link';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { Icon } from '@/components/ui/Icon';
import { Plate } from '@/components/ui/Plate';
import { Title } from '@/components/ui/Title';
import { BY_ID, MAKERS, paths } from '@/lib/catalog';
import { placeName } from '@/data/places';
import { useDemo } from '@/store/demo-store';

export function CartView() {
  const { bag, money, removeFromBag, ready } = useDemo();
  const items = bag.map((id) => BY_ID[id]).filter(Boolean);
  if (!ready) return <section className="sec-top wrap" aria-busy="true" />;
  if (!items.length)
    return (
      <section className="sec-top wrap">
        <ChapterHeader as="h1" label="Bag" heading="Your bag is empty" lead="Each piece is single. When you choose one, it waits here until checkout." />
        <div className="sp-row">
          <Link className="sp-btn" href="/rooms">
            Enter the rooms
          </Link>
          <Link className="sp-btn sp-btn--quiet" href="/pieces">
            See every piece
          </Link>
        </div>
      </section>
    );
  const total = items.reduce((a, p) => a + p.price, 0);
  return (
    <>
      <section className="sec-top wrap">
        <ChapterHeader as="h1" label="Bag" heading="Your bag" />
      </section>
      <section className="wrap bag">
        <div className="bag__items">
          {items.map((p) => (
            <article className="bag-line" key={p.id}>
              <Link className="plate" href={paths.piece(p)}>
                <Plate piece={p} />
              </Link>
              <div>
                <h3>
                  <Title text={p.title} />
                </h3>
                <p className="muted">
                  {MAKERS[p.maker].name} · {placeName(p.place)} · <span className="sp-reg-s">SĪPA · {p.id}</span>
                </p>
                <p className="ships-line">
                  <Icon name="card" /> Ships with its catalogue card and care kit
                </p>
                <button className="link-btn" type="button" onClick={() => removeFromBag(p.id)}>
                  Remove
                </button>
              </div>
              <span className="sp-reg">{money(p.price)}</span>
            </article>
          ))}
        </div>
        <aside className="bag__sum">
          <dl>
            <div>
              <dt>Pieces</dt>
              <dd className="sp-reg">{money(total)}</dd>
            </div>
            <div>
              <dt>Shipping</dt>
              <dd>Shown at the next step</dd>
            </div>
            <div>
              <dt>Export clearance</dt>
              <dd>Included</dd>
            </div>
            <div className="tot">
              <dt>Total so far</dt>
              <dd className="sp-reg">{money(total)}</dd>
            </div>
          </dl>
          <Link className="sp-btn wide" href={paths.checkout()}>
            Continue to details
          </Link>
          <p className="muted small">Prices are set in Nepali rupees and shown in US dollars at an illustrative rate. Switch currency at the top of the page.</p>
        </aside>
      </section>
    </>
  );
}
