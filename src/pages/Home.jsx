import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import Layout from '../components/Layout';
import EstatePlan, { PINNED } from '../components/EstatePlan';
import Directory from '../components/Directory';
import SunEstateJourney from '../components/SunEstateJourney';
import RouteLines from '../components/RouteLines';
import { TimeSwitch } from '../components/time';
import { BookButton, Closing, Disc, Facts, Photo, Pic, SectionHead } from '../components/ui';
import { PHOTOS, ROOM_RATES, TIMES, WA_HELLO } from '../site';

const WAYS = [
  {
    href: '/stay/',
    title: 'Stay the night',
    text: 'Balcony rooms and luxury glamping tents overlooking the pool and lawns. Swimming pool, gym, and outdoor games included.',
    from: '₹3,000',
    unit: 'a room a night',
    photo: PHOTOS.balconyPoolView,
  },
  {
    href: '/events/',
    title: 'Gather and celebrate',
    text: 'Host your celebrations in our indoor banquet hall or beautiful outdoor lawns, accommodating up to 200-400 guests, with a complimentary buffet lunch or dinner included with selected party packages.',
    from: '₹799',
    unit: 'a guest for party menus',
    photo: PHOTOS.playLawn,
  },
];

const ROOM_DETAILS = [
  { title: 'Your balcony', text: 'Two armchairs over the pool', photo: PHOTOS.balcony },
  { title: 'Tea and coffee', text: 'Kettle, cups and a tea tray', photo: PHOTOS.teaTray },
  { title: 'Mini fridge', text: 'Inside the wardrobe unit', photo: PHOTOS.fridge },
  { title: 'Work desk', text: 'A long desk and leather chair', photo: PHOTOS.desk },
  { title: 'TV and wardrobe', text: 'Wall-mounted TV, wooden wardrobe', photo: PHOTOS.tvUnit },
  { title: 'Attached bathroom', text: 'Hot water all day', photo: PHOTOS.bath },
  { title: 'Marble walls', text: 'Vessel basin and mirror', photo: PHOTOS.bath2 },
  { title: 'Toiletries kit', text: 'Soap, dental and shower kits', photo: PHOTOS.toiletries },
];

const DAY = [
  ['10:00 AM', 'Welcome drink, then the pool and lawns'],
  ['1:30 PM', 'Lunch at Farm Kitchen'],
  ['5:00 PM', 'Hi-tea with bhajji and filter coffee'],
  ['7:00 PM', 'Head home ahead of the traffic'],
];

function Hero() {
  return (
    <section className="hero-in relative pt-[5.25rem] md:pt-0" aria-labelledby="hero-title">
      <div className="relative h-[85svh] min-h-[36rem] md:h-[100svh] md:min-h-[42rem] md:max-h-[64rem]">
        <EstatePlan />

        <div className="wrap on-plate pointer-events-none absolute inset-x-0 bottom-4 z-10 sm:bottom-5 md:bottom-6 lg:bottom-7">
          <div className="hero-plate pointer-events-auto mx-auto max-w-[42rem] text-center">
            <h1
              id="hero-title"
              className="text-2xl sm:text-3xl md:text-[2.25rem] lg:text-[2.6rem] font-semibold tracking-[-0.02em] leading-tight text-[#E5CA8F] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
            >
              Discover Nature Senses Farm Stay
            </h1>
            <p className="mt-2 text-sm sm:text-base md:text-[1.05rem] text-[#F5F3ED]/90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)] font-normal">
              A serene countryside escape where nature meets refined comfort
            </p>
            <div className="mt-4 sm:mt-5 flex flex-wrap items-center justify-center gap-3">
              <BookButton className="shadow-lg shadow-black/30" />
              <a href={WA_HELLO} className="btn-glass shadow-lg shadow-black/30">
                <MessageCircle size={18} strokeWidth={1.8} aria-hidden="true" /> WhatsApp us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* On phones the pins become a key below the photo. */}
      <div className="wrap mt-6 md:hidden">
        <div className="flex items-center justify-between gap-4">
          <p className="t-small muted">On the plan</p>
          <TimeSwitch />
        </div>
      </div>
      <ol className="strip mt-3 pb-1 md:hidden" aria-label="Places on the plan">
        {PINNED.map((z) => (
          <li key={z.n} className="flex min-h-11 items-center gap-2.5 rounded-full bg-ink/[0.06] py-1 pl-1 pr-4 font-medium"><Disc n={z.n} /> {z.short}</li>
        ))}
      </ol>
    </section>
  );
}

function Welcome() {
  const textRef = useRef(null);

  const content =
    "Surrounded by lush greenery, unwind in thoughtfully designed stays, enjoy curated leisure experiences, and savour fresh flavours from our Farm Kitchen — all crafted for a refreshing getaway away from the city.";

  const words = content.split(' ');

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (textRef.current) {
            const spans = textRef.current.querySelectorAll('.reveal-word');
            const vh = window.innerHeight;
            const startY = vh * 0.85;
            const endY = vh * 0.40;
            const isNight = document.documentElement.dataset.time === 'night';
            const activeColor = isNight ? '#F5F1E8' : '#252B27';
            const idleColor = isNight ? '#828E86' : '#9EA7A1';

            spans.forEach((span) => {
              const rect = span.getBoundingClientRect();
              const progress = Math.min(Math.max((startY - rect.top) / (startY - endY), 0), 1);

              if (progress >= 0.85) {
                span.style.color = activeColor;
                span.style.opacity = '1';
                span.style.fontWeight = '500';
              } else if (progress <= 0.1) {
                span.style.color = idleColor;
                span.style.opacity = '0.35';
                span.style.fontWeight = '400';
              } else {
                span.style.color = activeColor;
                span.style.opacity = (0.35 + progress * 0.65).toFixed(2);
                span.style.fontWeight = progress > 0.5 ? '500' : '400';
              }
            });
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden" aria-labelledby="welcome-title">
      {/* Botanical Foliage - Left Branch with gentle breeze breathing movement */}
      <div
        className="pointer-events-none absolute -left-28 sm:-left-20 md:-left-24 lg:-left-20 xl:-left-12 top-1/2 -translate-y-1/2 z-0 w-44 sm:w-56 md:w-64 lg:w-80 xl:w-96 select-none opacity-40 sm:opacity-85 mix-blend-multiply dark:opacity-25 -rotate-6"
        aria-hidden="true"
      >
        <img
          src="/img/botanical-branch-left.png"
          alt=""
          className="w-full h-auto object-contain animate-botanical-left drop-shadow-[0_4px_16px_rgba(37,43,39,0.06)]"
          loading="lazy"
        />
      </div>

      {/* Botanical Foliage - Right Branch with gentle breeze breathing movement */}
      <div
        className="pointer-events-none absolute -right-28 sm:-right-20 md:-right-24 lg:-right-20 xl:-right-12 top-1/2 -translate-y-1/2 z-0 w-44 sm:w-56 md:w-64 lg:w-80 xl:w-96 select-none opacity-40 sm:opacity-85 mix-blend-multiply dark:opacity-25 rotate-6"
        aria-hidden="true"
      >
        <img
          src="/img/botanical-branch-right.png"
          alt=""
          className="w-full h-auto object-contain animate-botanical-right drop-shadow-[0_4px_16px_rgba(37,43,39,0.06)]"
          loading="lazy"
        />
      </div>

      <div className="wrap max-w-3xl mx-auto text-center px-4 sm:px-6 relative z-10">
        <h2 id="welcome-title" className="text-2xl sm:text-3xl font-semibold tracking-tight text-ink mb-3 sm:mb-4">
          Welcome
        </h2>
        <p
          ref={textRef}
          className="text-base sm:text-lg md:text-xl lg:text-[1.35rem] leading-relaxed md:leading-[1.7] tracking-normal"
        >
          {words.map((word, i) => (
            <span
              key={i}
              className="reveal-word inline-block mr-[0.26em] transition-all duration-150 ease-out"
              style={{ color: '#9EA7A1', opacity: 0.35, fontWeight: 400 }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}

function Ways() {
  return (
    <section className="py-16 lg:py-28" aria-labelledby="ways-title">
      <div className="wrap">
        <SectionHead
          id="ways-title"
          title="Ways to visit"
          intro="Choose the experience that fits your plans. Prices are per room or per guest, plus GST."
        />
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-14 lg:gap-8">
          {WAYS.map((w) => (
            <li key={w.href}>
              <a href={w.href} className="group block">
                <Photo photo={w.photo} sizes="(min-width: 640px) 48vw, 100vw" className="aspect-[4/3] sm:aspect-[16/11] lg:aspect-[16/10]">
                  <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_40%,rgba(0,0,0,0.6)_100%)]" aria-hidden="true" />
                  <span className="absolute inset-x-0 bottom-0 p-5 text-white lg:p-7">
                    <span className="block text-[0.9rem] text-white/80">From</span>
                    <span className="num block text-[2.25rem] lg:text-[2.6rem] font-semibold leading-none tracking-[-0.035em]">{w.from}</span>
                    <span className="mt-1.5 block text-[0.9rem] text-white/80">{w.unit}</span>
                  </span>
                </Photo>
                {/* A directional sign: the way, and an arrow pointing to it. */}
                <span className="sign mt-3 flex items-center justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 transition-colors duration-200 group-hover:bg-plate-2">
                  <span className="text-[1.35rem] sm:text-[1.48rem] font-semibold tracking-[-0.02em]">{w.title}</span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brass text-white transition-transform duration-300 ease-out group-hover:translate-x-1" aria-hidden="true">
                    <ArrowRight size={20} strokeWidth={2} />
                  </span>
                </span>
                <span className="muted mt-3 block px-1 text-sm sm:text-[0.95rem] leading-relaxed">{w.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// Close-ups of what is in every room. Swipe on touch, or step with the arrows.
function RoomStrip() {
  const stripRef = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const measure = useCallback(() => {
    const el = stripRef.current;
    if (el) setEdge({ start: el.scrollLeft < 8, end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 8 });
  }, []);

  useEffect(() => {
    const el = stripRef.current;
    measure();
    el.addEventListener('scroll', measure, { passive: true });
    window.addEventListener('resize', measure);
    return () => {
      el.removeEventListener('scroll', measure);
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  const step = (dir) => {
    const el = stripRef.current;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 16;
    const smooth = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({ left: dir * (el.firstElementChild.offsetWidth + gap), behavior: smooth ? 'smooth' : 'auto' });
  };

  const arrow = 'btn-line h-12 w-12 min-h-0 px-0 disabled:cursor-default disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-ink';

  return (
    <div className="mt-16 lg:mt-20" role="region" aria-labelledby="details-title">
      <div className="wrap flex items-end justify-between gap-6">
        <div>
          <h3 id="details-title" className="t-h3">In every room</h3>
          <p className="muted mt-1">Close-ups from a guest room.</p>
        </div>
        <div className="flex shrink-0 gap-2">
          <button type="button" className={arrow} onClick={() => step(-1)} disabled={edge.start} aria-label="Previous photos"><ChevronLeft size={20} strokeWidth={1.8} aria-hidden="true" /></button>
          <button type="button" className={arrow} onClick={() => step(1)} disabled={edge.end} aria-label="Next photos"><ChevronRight size={20} strokeWidth={1.8} aria-hidden="true" /></button>
        </div>
      </div>
      <ul ref={stripRef} className="strip mt-7 pb-2">
        {ROOM_DETAILS.map((d) => (
          <li key={d.title} className="w-[72vw] max-w-[20rem] sm:w-[17rem] lg:w-[19rem]">
            <div className="photo aspect-[4/5]"><Pic photo={d.photo} sizes="(min-width: 640px) 19rem, 72vw" /></div>
            <h4 className="mt-3 font-semibold">{d.title}</h4>
            <p className="t-small muted">{d.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Rooms() {
  return (
    <section className="rule border-t py-16 lg:py-28" aria-labelledby="rooms-title">
      <div className="wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
        <Photo photo={PHOTOS.bed} sizes="(min-width: 1024px) 55vw, 100vw" className="aspect-[4/3] lg:col-span-7 lg:aspect-[7/5]" />
        <div className="lg:col-span-5">
          <SectionHead inline id="rooms-title" zone={2} title="Farm Stay" />
          <p className="t-lede muted mt-5">Superior rooms and tent rooms, each with a private balcony. Inside: split AC, a TV and work desk, a mini fridge, tea and coffee, and an attached bathroom with hot water all day.</p>
          <Facts
            className="mt-8"
            rows={[
              ...ROOM_RATES.map((r) => [r.label, `${r.price} a night, plus GST`]),
              ['Check-in', `From ${TIMES.checkIn}, out by ${TIMES.checkOut}`],
            ]}
          />
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <BookButton>Check availability</BookButton>
            <a href="/stay/" className="link">See the rooms</a>
          </div>
        </div>
      </div>
      {/* 
        PRESERVED CODE - "In every room" carousel:
        <RoomStrip /> 
      */}
    </section>
  );
}

function Estate() {
  return (
    <section id="around-estate" className="py-6 lg:py-10" aria-label="Around the estate">
      <SunEstateJourney />
      {/* 
        PRESERVED CODE - Original Directory:
        <div className="wrap">
          <SectionHead
            id="estate-title"
            title="Around the estate"
            intro={`Everything here is included when you stay. The pool, gym and games are open ${TIMES.amenities}.`}
            aside={<a href="/facilities/" className="link">Facilities and visitor rates</a>}
          />
          <div className="mt-10 lg:mt-14"><Directory /></div>
        </div>
      */}
    </section>
  );
}

function DayOut() {
  return (
    <section className="rule border-t py-16 lg:py-28" aria-labelledby="day-title">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHead inline id="day-title" zone={6} title="Farm Kitchen" />
          <p className="t-lede muted mt-5">
            Good food is an essential part of every getaway. Our Farm Kitchen brings together freshly prepared flavours across South Indian, North Indian and Chinese cuisines, offering something for every palate in a relaxed countryside setting.
          </p>
          <Facts
            className="mt-8"
            rows={[
              ['Cuisines', 'South Indian, North Indian & Chinese'],
              ['Setting', 'Spacious countryside dining hall'],
              ['Hours', 'Breakfast, Lunch, Hi-Tea & Dinner'],
            ]}
          />
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href="/facilities/#kitchen" className="link font-medium text-ink hover:text-[#A7834F]">
              Explore Farm Kitchen &rarr;
            </a>
            <a href="/day-out/" className="link">Day packages &amp; menus</a>
          </div>
        </div>
        <Photo photo={PHOTOS.kitchen} sizes="(min-width: 1024px) 55vw, 100vw" className="aspect-[4/3] lg:col-span-7 lg:aspect-auto lg:min-h-[36rem]" />
      </div>
    </section>
  );
}

// A full-width night plate, and the switch that lights the whole site.
function AfterDark() {
  return (
    <section className="relative isolate overflow-hidden bg-[#172A22] text-white" aria-labelledby="night-title">
      <Pic photo={PHOTOS.aerialNight} sizes="100vw" position="50% 45%" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-90" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(6,10,8,0.85)_0%,rgba(6,10,8,0.45)_45%,rgba(6,10,8,0)_75%)]" aria-hidden="true" />
      <div className="wrap flex min-h-[34rem] flex-col justify-end py-14 lg:min-h-[44rem] lg:py-20">
        <h2 id="night-title" className="t-h2 max-w-[30rem]">Every path traced in light</h2>
        <p className="t-lede mt-5 max-w-[30rem] text-white/80">After sunset the walls, walkways and balconies glow warm against the dark fields. Switch the whole site to night to see it.</p>
        <TimeSwitch onPhoto className="mt-8 self-start" />
      </div>
    </section>
  );
}

function GettingHere() {
  return (
    <section className="py-16 lg:py-28" aria-labelledby="route-title">
      <div className="wrap">
        <SectionHead
          id="route-title"
          title="Getting here"
          intro="Out of the city on the highway, then quiet country roads. Drive times are approximate."
          aside={<a href="/visit/" className="link">Directions and contact</a>}
        />
        <RouteLines className="mt-10 lg:mt-14" />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <Layout page="home" floating>
      <Hero />
      <Welcome />
      <Ways />
      <Rooms />
      <Estate />
      <AfterDark />
      <DayOut />
      <GettingHere />
      <Closing photo={PHOTOS.balconyPoolView} night="nightWide" />
    </Layout>
  );
}
