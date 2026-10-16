import Link from 'next/link';
import { HeroVideo } from '@/components/home/HeroVideo';
import { HomeMotion } from '@/components/home/HomeMotion';
import { HowItsMade } from '@/components/home/HowItsMade';
import { Learn } from '@/components/home/Learn';
import { Rail } from '@/components/home/Rail';
import { RoomCard } from '@/components/home/RoomCard';
import { RegistryForm } from '@/components/forms/RegistryForm';
import { ArtisanByline } from '@/components/maker/ArtisanByline';
import { PieceCard } from '@/components/piece/PieceCard';
import { SealRing } from '@/components/piece/RegistrySeal';
import { ChapterHeader } from '@/components/ui/ChapterHeader';
import { Icon } from '@/components/ui/Icon';
import { Plate } from '@/components/ui/Plate';
import { Title } from '@/components/ui/Title';
import { BY_ID, MAKERS, paths, PIECES, piecesIn, ROOM_ORDER, SAMPLE_NOTES } from '@/lib/catalog';
import { HERO_VIDEO } from '@/data/hero-video';
import { PROMISES } from '@/data/process';
import { getRooms } from '@/lib/content';

export default function HomePage() {
  const rooms = getRooms();
  const p = BY_ID['PTN-MT-26-0142'];
  const note = SAMPLE_NOTES[0];
  const np = BY_ID[note.piece];
  const nm = MAKERS[note.maker];
  const buddha = piecesIn('buddha');
  const lead = buddha[buddha.length - 1];

  return (
    <div className="home">
      <HomeMotion />
      <section className="hero2">
        <HeroVideo video={HERO_VIDEO} />
        <div className="hero2__text">
          <p className="hero2__eyebrow">Sīpa · handmade art from Nepal</p>
          <h1>
            <span className="hero2__line">
              <em>Made by hand</em> in Nepal.
            </span>
            <span className="hero2__line">Recorded for life.</span>
          </h1>
          <p className="t-lead">
            One-of-a-kind statues, thangkas, Mithila paintings and carvings from named makers across Nepal. Each arrives with its maker’s story, a care kit for its material, and a
            registry number for life.
          </p>
          <div className="sp-row">
            <Link className="sp-btn" href={paths.pieces()}>
              See all the art
            </Link>
            <Link className="sp-btn sp-btn--quiet" href="/rooms">
              Enter the rooms
            </Link>
          </div>
        </div>
      </section>

      <section className="promise-strip" aria-label="Our three promises">
        <div className="wrap promise-strip__grid">
          {PROMISES.map((x) => (
            <div key={x.heading} className="promise">
              <Icon name={x.icon} className="promise__ic" />
              <div>
                <h2>{x.heading}</h2>
                <p>{x.text}</p>
              </div>
            </div>
          ))}
          <Link className="sp-link promise-strip__more" href="/about">
            Read our promise
          </Link>
        </div>
      </section>

      <section className="sec sec--rail sec--deep" aria-labelledby="rail-h">
        <div className="wrap sec-head">
          <ChapterHeader
            label="Now hanging"
            heading={
              <span id="rail-h">
                Pieces from <em>every room</em>
              </span>
            }
          />
          <Link className="sp-link" href={paths.pieces()}>
            See all the art
          </Link>
        </div>
        <Rail label="Pieces from every room">
          {PIECES.slice(0, 8).map((x) => (
            <PieceCard key={x.id} piece={x} />
          ))}
        </Rail>
      </section>

      <section className="sec">
        <div className="wrap feature">
          <Link className="plate feature__plate" href={paths.piece(lead)} aria-label={lead.title}>
            <Plate piece={lead} />
          </Link>
          <div className="feature__body">
            <ChapterHeader
              label="Room 1"
              place
              heading="From the land of the Buddha’s birth"
              accent="Buddha’s birth"
              lead="Siddhartha Gautama was born in Lumbini, in southern Nepal. This room gathers Buddha figures cast, carved and painted by makers across the country, each with the meaning of its gesture explained."
            />
            <div className="feature__pair">
              {buddha
                .filter((x) => x.id !== lead.id)
                .slice(0, 2)
                .map((x) => (
                  <PieceCard key={x.id} piece={x} />
                ))}
            </div>
            <p className="more">
              <Link className="sp-link" href={paths.room('buddha')}>
                Enter the room
              </Link>
            </p>
          </div>
        </div>
      </section>

      <HowItsMade />

      <Learn />

      <section className="sec sec--rail" aria-labelledby="rooms-h">
        <div className="wrap sec-head">
          <ChapterHeader
            label="The rooms"
            heading={
              <span id="rooms-h">
                Walk through <em>the collection</em>
              </span>
            }
            lead="Each room gathers work by craft, by place or by a story, and opens on one piece hung large."
          />
          <Link className="sp-link" href={paths.rooms()}>
            All rooms
          </Link>
        </div>
        <Rail label="The rooms" wide>
          {ROOM_ORDER.map((slug) => (
            <RoomCard key={slug} room={rooms[slug]} />
          ))}
        </Rail>
      </section>

      <section className="sec sec--deep">
        <div className="wrap">
          <ChapterHeader
            label="The makers"
            heading="Every piece is signed by a person"
            accent="signed by a person"
            lead="We work with makers in their own workshops, film them at work, and name them on every piece."
          />
          <div className="makers-row makers-row--stagger">
            {['raju-shakya', 'sunita-jha', 'karma-tamang'].map((s) => (
              <ArtisanByline key={s} slug={s} quote={false} label={MAKERS[s].craftLabel} />
            ))}
          </div>
          <p className="more">
            <Link className="sp-link" href="/makers">
              Meet all six makers
            </Link>
          </p>
        </div>
      </section>

      <section className="sec sec--quote">
        <div className="wrap pullquote">
          <Link className="pullquote__plate plate" href={paths.piece(np)}>
            <Plate piece={np} />
          </Link>
          <figure>
            <blockquote>
              <p>{note.text}</p>
            </blockquote>
            <figcaption>
              <b>
                {note.from}, {note.city}
              </b>
              , writing to {nm.name} about{' '}
              <Link className="plain" href={paths.piece(np)}>
                {np.title}
              </Link>
            </figcaption>
            {note.reply && (
              <div className="pullquote__reply">
                <span className="sp-label">{nm.first} replied</span>
                <p>“{note.reply.en}”</p>
              </div>
            )}
            <p className="muted small">Owners can write to the person who made their piece. We read each note aloud at the workshop.</p>
          </figure>
        </div>
      </section>

      <section className="sec sec--deep">
        <div className="wrap">
          <ChapterHeader
            label="In the box"
            heading="Everything a piece needs, from the day it arrives"
            accent="from the day it arrives"
            lead="Every piece leaves Nepal cleared for export."
          />
          <ul className="box-cards">
            <li className="box-card">
              <div className="box-card__vis">
                <SealRing owned />
              </div>
              <span className="box-card__n">01</span>
              <h3>Recorded to you</h3>
              <p>The moment you buy, the registry records the piece to you, and the record follows it for life.</p>
              <Link className="sp-link" href={paths.registry()}>
                Check a registry number
              </Link>
            </li>
            <li className="box-card">
              <div className="box-card__vis">
                <div className="mini-card">
                  <span className="sp-label">Sīpa</span>
                  <b>
                    <Title text={p.title} />
                  </b>
                  <span className="sp-reg-s">{p.id}</span>
                </div>
              </div>
              <span className="box-card__n">02</span>
              <h3>Its catalogue card</h3>
              <p>Printed on lokta paper: maker, meaning, placement and care, with a code that opens its record.</p>
              <Link className="sp-link" href={paths.record(p)}>
                See a record
              </Link>
            </li>
            <li className="box-card">
              <div className="box-card__vis">
                <Icon name="flask" className="big-ic" />
                <Icon name="brush" className="big-ic" />
              </div>
              <span className="box-card__n">03</span>
              <h3>Its care kit</h3>
              <p>The tools its material needs. A wooden carving comes with a flask of wood oil and a soft brush.</p>
              <Link className="sp-link" href={paths.care()}>
                Read the care guides
              </Link>
            </li>
            <li className="box-card">
              <div className="box-card__vis">
                <Icon name="film" className="big-ic" />
              </div>
              <span className="box-card__n">04</span>
              <h3>Its making, on film</h3>
              <p>The piece being made, from first step to last, waiting in your owner’s record.</p>
              <Link className="sp-link" href={`${paths.piece(p)}#making`}>
                Watch a making film
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="sec">
        <div className="wrap fair">
          <ChapterHeader
            label="Fair pay"
            heading="Makers are paid a fair share, enough to live on"
            accent="a fair share"
            lead="Every sale pays the maker first. The share is agreed with each maker, so the craft can sustain their livelihood, their apprentices and their workshop."
          />
          <p className="more">
            <Link className="sp-link" href="/about/how-we-work">
              How we work
            </Link>
          </p>
        </div>
      </section>

      <section className="sec sec--deep sec--cta">
        <div className="wrap cta">
          <ChapterHeader
            heading="Every piece is one of one"
            accent="one of one"
            lead="When it is recorded to an owner, it leaves the collection. See what is hanging now, or ask for a piece made for you."
          />
          <div className="sp-row">
            <Link className="sp-btn" href={paths.pieces()}>
              See all the art
            </Link>
            <Link className="sp-btn sp-btn--quiet" href={paths.rooms()}>
              Enter the rooms
            </Link>
          </div>
          <p className="cta__ask">
            Cannot find it?{' '}
            <Link className="sp-link" href="/commission">
              Request a piece made for you
            </Link>
          </p>
        </div>
      </section>

      <section className="sec sec--tight-band sec--sand">
        <div className="wrap split">
          <div>
            <ChapterHeader
              label="Registry"
              heading="Check a registry number"
              accent="registry number"
              lead="Every Sīpa piece has a number on its base or back, and on its card. Enter it to see the piece’s record."
            />
          </div>
          <div>
            <RegistryForm />
          </div>
        </div>
      </section>
    </div>
  );
}
