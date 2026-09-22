import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import Layout from '../components/Layout';
import EstatePlan, { PINNED } from '../components/EstatePlan';
import Directory from '../components/Directory';
import RouteLines from '../components/RouteLines';
import { TimeSwitch } from '../components/time';
import { BookButton, Closing, Disc, Facts, Photo, Pic, SectionHead } from '../components/ui';
import { PHOTOS, ROOM_RATES, TIMES, WA_HELLO } from '../site';

const WAYS = [
  {
    href: '/stay/',
    title: 'Stay the night',
    text: 'Balcony rooms over the pool and lawns. Pool, gym and games included.',
    from: '₹3,500',
    unit: 'a room a night',
    photo: PHOTOS.balconyPoolView,
  },
  {
    href: '/day-out/',
    title: 'Spend the day',
    text: 'Arrive at ten, swim and play, lunch at Farm Kitchen, home after hi-tea.',
    from: '₹2,000',
    unit: 'a person, meals included',
    photo: PHOTOS.poolSunset,
  },
  {
    href: '/events/',
    title: 'Gather and celebrate',
    text: 'Parties on the lawn for up to 50, or a meeting room for your team.',
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
      <div className="relative aspect-[4/3] md:aspect-auto md:h-[100svh] md:min-h-[40rem] md:max-h-[64rem]">
        <EstatePlan />
      </div>

      <div className="wrap relative -mt-10 md:absolute md:inset-x-0 md:bottom-8 md:mt-0 lg:bottom-10">
        <div className="hero-plate sign p-6 sm:p-8 md:max-w-[34rem] lg:max-w-[36rem] lg:p-10">
          <h1 id="hero-title" className="t-display">A farm stay an hour from Bangalore</h1>
          <p className="t-lede muted mt-5 max-w-[32rem]">
            White, modern buildings in open farmland near Denkanikottai. Stay the night, spend the day, or bring everyone for a celebration.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <BookButton />
            <a href={WA_HELLO} className="btn-line"><MessageCircle size={18} strokeWidth={1.8} aria-hidden="true" /> WhatsApp us</a>
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

function Ways() {
  return (
    <section className="py-16 lg:py-28" aria-labelledby="ways-title">
      <div className="wrap">
        <SectionHead
          id="ways-title"
          title="Three ways to visit"
          intro="Pick the one that fits your group. Prices are per room or per person, plus GST."
        />
        <ul className="mt-10 grid gap-5 md:grid-cols-3 lg:mt-14 lg:gap-6">
          {WAYS.map((w) => (
            <li key={w.href}>
              <a href={w.href} className="group block">
                <Photo photo={w.photo} sizes="(min-width: 768px) 32vw, 100vw" className="aspect-[4/3] md:aspect-[3/4]">
                  <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_45%,rgba(0,0,0,0.55)_100%)]" aria-hidden="true" />
                  <span className="absolute inset-x-0 bottom-0 p-5 text-white lg:p-6">
                    <span className="block text-[0.9rem] text-white/80">From</span>
                    <span className="num block text-[2.25rem] font-semibold leading-none tracking-[-0.035em]">{w.from}</span>
                    <span className="mt-1 block text-[0.9rem] text-white/80">{w.unit}</span>
                  </span>
                </Photo>
                {/* A directional sign: the way, and an arrow pointing to it. */}
                <span className="sign mt-3 flex items-center justify-between gap-4 px-5 py-4 transition-colors duration-200 group-hover:bg-plate-2">
                  <span className="text-[1.35rem] font-semibold tracking-[-0.02em]">{w.title}</span>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-brass text-[#101915] transition-transform duration-300 ease-out group-hover:translate-x-1" aria-hidden="true">
                    <ArrowRight size={20} strokeWidth={2} />
                  </span>
                </span>
                <span className="muted mt-3 block max-w-[24rem] px-1">{w.text}</span>
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
          <SectionHead inline id="rooms-title" zone={2} title="Rooms that open onto the farm" />
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
      <RoomStrip />
    </section>
  );
}

function Estate() {
  return (
    <section className="py-16 lg:py-28" aria-labelledby="estate-title">
      <div className="wrap">
        <SectionHead
          id="estate-title"
          title="Around the estate"
          intro={`Everything here is included when you stay. The pool, gym and games are open ${TIMES.amenities}.`}
          aside={<a href="/facilities/" className="link">Facilities and visitor rates</a>}
        />
        <div className="mt-10 lg:mt-14"><Directory /></div>
      </div>
    </section>
  );
}

function DayOut() {
  return (
    <section className="rule border-t py-16 lg:py-28" aria-labelledby="day-title">
      <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-5">
          <SectionHead inline id="day-title" zone={6} title="A day out, with lunch at Farm Kitchen" />
          <p className="t-lede muted mt-5">A full, freshly cooked lunch and an evening hi-tea of bhajji, cutlets and filter coffee. Vegetarian from ₹2,000 a person, non-vegetarian from ₹2,200, plus GST.</p>
          <ol className="mt-8">
            {DAY.map(([t, d]) => (
              <li key={t} className="rule grid grid-cols-[6.5rem_1fr] gap-4 border-t py-3 last:border-b">
                <span className="num font-semibold">{t}</span>
                <span className="muted">{d}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8"><a href="/day-out/" className="link">Day out packages and menus</a></p>
        </div>
        <Photo photo={PHOTOS.kitchen} sizes="(min-width: 1024px) 55vw, 100vw" className="aspect-[4/3] lg:col-span-7 lg:aspect-auto lg:min-h-[36rem]" />
      </div>
    </section>
  );
}

// A full-width night plate, and the switch that lights the whole site.
function AfterDark() {
  return (
    <section className="relative isolate overflow-hidden bg-[#0B120F] text-white" aria-labelledby="night-title">
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
