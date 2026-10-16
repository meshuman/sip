import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound, permanentRedirect } from 'next/navigation';
import { ArtisanByline } from '@/components/maker/ArtisanByline';
import { MakerNotes } from '@/components/maker/MakerNotes';
import { BuyBar } from '@/components/piece/BuyBar';
import { BuyButton } from '@/components/piece/BuyButton';
import { CareKit } from '@/components/piece/CareKit';
import { CatalogueCard } from '@/components/piece/CatalogueCard';
import { ChapterNav } from '@/components/piece/ChapterNav';
import { Making } from '@/components/piece/Making';
import { ObjectLabel } from '@/components/piece/ObjectLabel';
import { PieceGrid } from '@/components/piece/PieceCard';
import { Placement } from '@/components/piece/Placement';
import { RegistrySeal } from '@/components/piece/RegistrySeal';
import { ShareBar } from '@/components/piece/ShareBar';
import { Stage } from '@/components/piece/Stage';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { PIECE_PHOTOS } from '@/data/photos';
import { STORIES } from '@/data/stories';
import { abs, trimDesc } from '@/lib/seo';
import { Crumbs } from '@/components/ui/Crumbs';
import { Icon } from '@/components/ui/Icon';
import { Plate } from '@/components/ui/Plate';
import { Title } from '@/components/ui/Title';
import { CARE_KITS, MAKERS, paths, pieceFromKey, pieceKey, PIECES, piecesIn } from '@/lib/catalog';
import { getPlaces, getRooms, getTopics } from '@/lib/content';

type Params = { params: Promise<{ pieceKey: string }> };

export function generateStaticParams() {
  return PIECES.map((p) => ({ pieceKey: pieceKey(p) }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const p = pieceFromKey((await params).pieceKey);
  if (!p) return {};
  const m = MAKERS[p.maker];
  const img = PIECE_PHOTOS[p.id];
  const description = trimDesc(`${p.lead} Registry number ${p.id}.`);
  return {
    title: `${p.title} by ${m.name}`,
    description,
    alternates: { canonical: paths.piece(p) },
    openGraph: { type: 'website', title: `${p.title} by ${m.name}`, description, ...(img ? { images: [{ url: abs(img), alt: `${p.title}, ${p.material}` }] } : {}) },
    twitter: { card: 'summary_large_image', ...(img ? { images: [abs(img)] } : {}) },
  };
}

const CHAPTERS: [string, string][] = [
  ['story', 'The story'],
  ['making', 'The making'],
  ['meaning', 'What it means'],
  ['look', 'Look closer'],
  ['living', 'Living with it'],
  ['maker', 'The maker'],
  ['record', 'The record'],
];

export default async function PiecePage({ params }: Params) {
  const key = (await params).pieceKey;
  const p = pieceFromKey(key);
  if (!p) notFound();
  const story = STORIES[p.id];
  if (key !== pieceKey(p)) permanentRedirect(paths.piece(p)); // old or partial slugs redirect

  const m = MAKERS[p.maker];
  const pl = getPlaces()[p.place];
  const room = getRooms()[p.rooms[0]];
  const topics = getTopics();
  const inRoom = piecesIn(p.rooms[0]);
  const same = PIECES.filter((x) => x !== p && x.rooms.some((r) => p.rooms.includes(r)))
    .sort((a, b) => Number(b.rooms.includes(p.rooms[0])) - Number(a.rooms.includes(p.rooms[0])))
    .slice(0, 3);
  const kit = CARE_KITS[p.care];

  // Structured data for search and answer engines.
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': ['Product', 'VisualArtwork'],
    name: p.title,
    identifier: p.id,
    sku: p.id,
    url: abs(paths.piece(p)),
    description: p.lead,
    artMedium: p.material,
    image: PIECE_PHOTOS[p.id] ? [abs(PIECE_PHOTOS[p.id])] : undefined,
    brand: { '@type': 'Brand', name: 'Sīpa' },
    countryOfOrigin: 'NP',
    material: p.material,
    creator: { '@type': 'Person', name: m.name, address: { '@type': 'PostalAddress', addressLocality: pl.name, addressCountry: 'NP' } },
    offers: p.recorded
      ? undefined
      : {
          '@type': 'Offer',
          url: abs(paths.piece(p)),
          price: p.price,
          priceCurrency: 'NPR',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          seller: { '@type': 'Organization', name: 'Sīpa' },
        },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Crumbs items={[['Home', '/'], ['Rooms', '/rooms'], [room.name, paths.room(room.slug)], [p.title]]} />
      <section className="wrap sec-top">
        <section className="sp-hero">
          <figure className="sp-hero__plate" style={{ margin: 0 }}>
            <Plate piece={p} alt={`${p.title}, ${p.material}, made by ${m.name} in ${pl.name}`} />
            <figcaption className="sp-hero__caption">Day {p.days}, finished</figcaption>
          </figure>
          <div className="sp-hero__text">
            <div className="sp-hero__room">
              <span className="sp-label">
                Room {room.number}: {room.name}
              </span>
              <span className="sp-label">
                {inRoom.indexOf(p) + 1} of {inRoom.length}
              </span>
            </div>
            <h1>
              <Title text={p.title} />
            </h1>
            <p className="sp-hero__maker">
              Made by{' '}
              <b>
                <Link className="plain" href={paths.maker(p.maker)}>
                  {m.name}
                </Link>
              </b>{' '}
              in {m.area}, {pl.name}, over {p.days} days.
            </p>
            <p className="sp-hero__lead">{p.lead}</p>
            {p.origin && <p className="origin">From the land of the Buddha’s birth</p>}
            <div className="sp-hero__act" id="hero-act">
              <RegistrySeal piece={p} />
              <div className="sp-row">
                <BuyButton piece={p} />
                <a className="sp-btn sp-btn--quiet" href="#making">
                  <Icon name="film" className="sp-btn__icon" /> Watch the making
                </a>
              </div>
            </div>
          </div>
        </section>
      </section>

      <ChapterNav chapters={CHAPTERS} />

      <section className="wrap sec split split--label">
        <div>
          <ObjectLabel piece={p} />
        </div>
        <div className="stack">
          <ShareBar piece={p} />
          <div className="ships">
            <p className="sp-label" style={{ margin: 0 }}>
              Ships with
            </p>
            <ul>
              <li>
                <Icon name="card" /> Its catalogue card, printed on lokta paper
              </li>
              <li>
                <Icon name={kit.items[0].icon} /> A care kit for {kit.label}
              </li>
              <li>
                <Icon name="seal" /> Export clearance, arranged by Sīpa
              </li>
            </ul>
            {p.filled && <p className="muted">{p.filled}</p>}
            <p className="more">
              <Link className="sp-link" href="/help/shipping">
                Shipping
              </Link>
              ,{' '}
              <Link className="sp-link" href="/help/export-and-customs">
                export
              </Link>{' '}
              and{' '}
              <Link className="sp-link" href="/help/returns">
                returns
              </Link>
            </p>
          </div>
        </div>
      </section>

      {story && (
        <section className="sec" id="story">
          <div className="wrap story">
            <ChapterHeader label="The story" heading={story.heading} />
            <div className="story__body">
              {story.paragraphs.map((t, i) => (
                <p key={i} className={i === 0 ? 'story__lead' : undefined}>
                  {t}
                </p>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="sec sec--deep" id="making">
        <div className="wrap">
          <ChapterHeader
            label="The making"
            heading={`${p.days} days in the hand`}
            lead={`Wherever we can, we film a piece from its first step to its last. This is ${p.title}, in ${m.first}’s hands.`}
          />
          <Making piece={p} />
        </div>
      </section>

      <section className="sec" id="meaning">
        <div className="wrap split">
          <div>
            <ChapterHeader label="What it means" heading={p.meaningHeading} lead={p.meaning} />
            {p.topics.length > 0 && (
              <div className="chips">
                {p.topics.map((t) => (
                  <Link key={t} className="chip" href={paths.meaning(t)}>
                    {topics[t]?.name ?? t}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div className="suits">
            <p className="sp-label">Who it suits</p>
            <p className="suits__text">{p.suits}</p>
          </div>
        </div>
      </section>

      <section className="sec" id="look">
        <div className="wrap">
          <ChapterHeader label="Look closer" heading="Turn it, and look closer" lead={`The numbers mark the parts of ${p.title} worth knowing.`} />
          <div className="stage-wrap">
            <Stage piece={p} />
          </div>
          <p className="muted proto-note">Prototype: an illustration stands in for the 3D scan and photographs.</p>
        </div>
      </section>

      <section className="sec" id="living">
        <div className="wrap">
          <ChapterHeader
            label="Living with it"
            heading="Where it belongs, and how to keep it"
            lead="Customary placement, and the care steps its maker uses. Both are printed on its card."
          />
          <div className="split living">
            <div>
              <Placement piece={p} />
            </div>
            <div>
              <CareKit piece={p} />
            </div>
          </div>
        </div>
      </section>

      <section className="sec" id="maker">
        <div className="wrap split">
          <div>
            <ArtisanByline slug={p.maker} />
            <p className="more">
              <Link className="sp-link" href={paths.maker(p.maker)}>
                Meet {m.first}
              </Link>
            </p>
          </div>
          <div>
            <div className="fair-note">
              <p className="sp-label">Fair pay</p>
              <p>{m.first} is paid a fair share of every sale, enough to sustain their livelihood and their workshop.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap split">
          <div>
            <ChapterHeader
              label={`Notes to ${m.first}`}
              heading={`What owners have written to ${m.first}`}
              lead="Owners can write to the maker once their piece arrives. We read every note at the workshop."
            />
          </div>
          <div>
            <MakerNotes maker={p.maker} empty={`No notes to ${m.first} yet. The first will come from this piece’s owner.`} />
          </div>
        </div>
      </section>

      <section className="sec" id="record">
        <div className="wrap split">
          <div>
            <ChapterHeader
              label="The record"
              heading="A number for life"
              lead={`This piece is registered as SĪPA · ${p.id}. The number is marked on the piece, printed on its card, and opens its record for as long as it exists.`}
            />
            <p className="more">
              <Link className="sp-link" href={paths.record(p)}>
                Open its record
              </Link>
            </p>
          </div>
          <div>
            <ChapterHeader label="Where it was made" place heading={`${pl.name}, ${pl.epithet}`} lead={pl.summary} />
            <p className="more">
              <Link className="sp-link" href={paths.place(p.place)}>
                More about {pl.name}
              </Link>
            </p>
          </div>
        </div>
        <div className="wrap card-wrap">
          <CatalogueCard piece={p} />
        </div>
      </section>

      {same.length > 0 && (
        <section className="sec">
          <div className="wrap">
            <h2 className="group-h">In the same room</h2>
            <PieceGrid pieces={same} />
          </div>
        </section>
      )}

      <BuyBar piece={p} watch="#hero-act" />
    </>
  );
}
