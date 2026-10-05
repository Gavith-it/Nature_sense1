import React from 'react';
import Layout from '../components/Layout';
import { MessageCircle } from 'lucide-react';
import { BookButton, Closing, Disc, Facts, PageHero, Photo, ScrollRevealText, SectionHead } from '../components/ui';
import { CONTACT, PHOTOS, ROOM_RATES, TIMES, ZONES, waLink } from '../site';

const IN_ROOM = [
  ['Private balcony', 'Full-height glass doors onto two armchairs and a view of the pool or lawns.'],
  ['Split air conditioning', 'Cool and quiet through the summer.'],
  ['TV and work desk', 'A long wooden desk and a leather chair under a wall-mounted TV.'],
  ['Mini fridge', 'Tucked into the wardrobe unit.'],
  ['Tea and coffee', 'Kettle, cups and a tea tray in the room.'],
  ['Attached bathroom', 'Vessel basin, marble walls and hot water all day.'],
  ['Toiletries kit', 'Soap, shower cap, dental kits and bath products.'],
  ['Wi-Fi', 'Complimentary throughout your stay.'],
  ['Drinking water', 'Purified water in the room.'],
];

const INCLUDED = ZONES.filter((z) => ['pool', 'play', 'lawn', 'games'].includes(z.key));

export default function Stay() {
  return (
    <Layout page="stay">
      {/*
        PRESERVED RATE BANNER CODE (kept as requested, hidden from hero display):
        zone={2}
        facts={[
          ...ROOM_RATES.map((r) => [r.label, `${r.price} a night + GST`]),
          ['Check-in', `From ${TIMES.checkIn}`],
          ['Check-out', `By ${TIMES.checkOut}`],
        ]}
        actions={
          <>
            <BookButton />
            <a href="#rates" className="btn-line">Rates and dates</a>
          </>
        }
      */}

      {/* Photography-First Hero with Reference-Inspired Typography & Breadcrumb */}
      <section className="relative overflow-hidden bg-wall-2">
        <div className="relative h-[56svh] min-h-[22rem] max-h-[42rem] lg:h-[min(72svh,48rem)] lg:max-h-none">
          <Photo
            photo={PHOTOS.balconyPoolView}
            night="nightPool"
            eager
            unveil={false}
            rounded={false}
            position="50% 60%"
            sizes="100vw"
            className="absolute inset-0 h-full w-full"
          />
          {/* Subtle gradient overlay to ensure crystal-clear text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/50" />

          {/* Centered Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-end pb-12 sm:pb-16 lg:pb-20">
            <div className="wrap w-full text-center">
              <nav className="inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md border border-white/15 px-4 py-1.5 text-[0.8rem] uppercase tracking-[0.2em] text-white/80 mb-4" aria-label="Breadcrumb">
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span className="text-white/40">›</span>
                <span className="text-[#E5CA8F] font-medium">Accommodation</span>
              </nav>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-[-0.028em] drop-shadow-sm max-w-4xl mx-auto leading-[1.12]">
                Luxury Rooms & Suites Near Bangalore
              </h1>
              <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed font-light">
                Two kinds of room, both with a private balcony, air conditioning and an attached bathroom. The pool, gym, games and play area are included.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accommodation Intro Section */}
      <section className="py-14 sm:py-20 lg:py-24" aria-labelledby="accommodation-title">
        <div className="wrap max-w-3xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#A7834F]">
            SANCTUARY & SERENITY
          </span>
          <h2 id="accommodation-title" className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ink mt-3 tracking-[-0.025em]">
            Accommodation
          </h2>
          <div className="w-12 h-[2px] bg-[#A7834F]/40 mx-auto my-5 rounded-full" />
          <ScrollRevealText
            content="Wake up to peaceful surroundings and the refreshing charm of the countryside at Nature Senses Farm Stay. Our accommodations are thoughtfully designed to blend comfort with nature, offering a relaxed retreat away from the city. Choose between our Superior Rooms with Balcony for contemporary comfort or our Tent Rooms for a more immersive stay close to nature."
            className="text-base sm:text-lg md:text-xl lg:text-[1.25rem] leading-relaxed md:leading-[1.75] tracking-normal"
          />
        </div>
      </section>

      {/* Two Rooms Section */}
      <section className="pb-16 lg:pb-28" aria-labelledby="rooms-list">
        <div className="wrap">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            {/* 1. Superior Rooms with Balcony */}
            <article className="group flex flex-col rounded-sign overflow-hidden border border-ink/10 bg-card shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden bg-wall">
                <Photo
                  photo={PHOTOS.roomBlock}
                  night="nightEstate"
                  sizes="(min-width: 768px) 48vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1 text-xs font-medium text-white tracking-wide">
                  Private Balcony
                </span>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold text-ink tracking-[-0.02em]">
                  Superior Rooms with Balcony
                </h3>
                <p className="mt-3 text-ink-2 text-sm sm:text-base leading-relaxed flex-1">
                  Spacious and thoughtfully designed, our Superior Rooms offer modern comforts in a calm, nature-inspired setting. Each room features a private balcony, giving you your own space to sit back, unwind and take in the peaceful surroundings.
                </p>

                <div className="mt-6 pt-5 border-t border-ink/10 flex flex-wrap gap-2 text-xs text-ink-2">
                  <span className="rounded-full bg-ink/[0.05] px-3 py-1 font-medium">Balcony with Pool View</span>
                  <span className="rounded-full bg-ink/[0.05] px-3 py-1 font-medium">Split AC</span>
                  <span className="rounded-full bg-ink/[0.05] px-3 py-1 font-medium">Attached Bath</span>
                  <span className="rounded-full bg-ink/[0.05] px-3 py-1 font-medium">Work Desk & Wi-Fi</span>
                </div>

                <div className="mt-6 pt-5 border-t border-ink/10 flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <span className="text-xs text-ink-2 block">Starting from</span>
                    <span className="text-xl font-semibold text-ink">₹3,500</span>
                    <span className="text-xs text-ink-2"> / night + GST</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookButton className="text-xs sm:text-sm py-2 px-4">
                      Book a stay
                    </BookButton>
                  </div>
                </div>
              </div>
            </article>

            {/* 2. Tent Rooms */}
            <article className="group flex flex-col rounded-sign overflow-hidden border border-ink/10 bg-card shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden bg-wall">
                <Photo
                  photo={PHOTOS.tentRoom}
                  sizes="(min-width: 768px) 48vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-[#A7834F]/90 backdrop-blur-md px-3.5 py-1 text-xs font-medium text-white tracking-wide">
                  Glamping Experience
                </span>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-semibold text-ink tracking-[-0.02em]">
                  Tent Rooms
                </h3>
                <p className="mt-3 text-ink-2 text-sm sm:text-base leading-relaxed flex-1">
                  For those looking for something a little different, our Tent Rooms offer a charming stay inspired by the outdoors. Enjoy the experience of being closer to nature while still having the essential comforts for a relaxing and memorable getaway.
                </p>

                <div className="mt-6 pt-5 border-t border-ink/10 flex flex-wrap gap-2 text-xs text-ink-2">
                  <span className="rounded-full bg-ink/[0.05] px-3 py-1 font-medium">Tensile Tent Suite</span>
                  <span className="rounded-full bg-ink/[0.05] px-3 py-1 font-medium">Private Balcony Deck</span>
                  <span className="rounded-full bg-ink/[0.05] px-3 py-1 font-medium">Split AC</span>
                  <span className="rounded-full bg-ink/[0.05] px-3 py-1 font-medium">Attached Bath</span>
                </div>

                <div className="mt-6 pt-5 border-t border-ink/10 flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <span className="text-xs text-ink-2 block">Starting from</span>
                    <span className="text-xl font-semibold text-ink">₹3,000</span>
                    <span className="text-xs text-ink-2"> / night + GST</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={waLink(CONTACT.whatsapp, 'Hi, I would like to know more about the Tent Rooms at Nature Senses.')}
                      className="btn-line text-xs sm:text-sm py-2 px-3.5 flex items-center gap-1.5"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <MessageCircle size={15} strokeWidth={1.8} aria-hidden="true" /> WhatsApp
                    </a>
                    <BookButton className="text-xs sm:text-sm py-2 px-4">
                      Book a stay
                    </BookButton>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-28" aria-labelledby="room-title">
        <div className="wrap">
          <SectionHead id="room-title" title="Inside a Superior Room" intro="Close-ups of the bed, balcony, desk and bathroom." />
          <div className="mt-10 grid gap-4 md:grid-cols-12 lg:mt-14 lg:gap-5">
            <Photo photo={PHOTOS.bed} sizes="(min-width: 768px) 58vw, 100vw" className="aspect-[4/3] md:col-span-8 md:row-span-2 md:aspect-auto" />
            <Photo photo={PHOTOS.balcony} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-[4/3] md:col-span-4" />
            <Photo photo={PHOTOS.tvUnit} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-[4/3] md:col-span-4" />
            <Photo photo={PHOTOS.bath} sizes="(min-width: 768px) 33vw, 50vw" className="aspect-[4/3] md:col-span-4" />
            <Photo photo={PHOTOS.teaTray} sizes="(min-width: 768px) 33vw, 50vw" className="aspect-[4/3] md:col-span-4" />
            <Photo photo={PHOTOS.toiletries} sizes="(min-width: 768px) 33vw, 50vw" className="aspect-[4/3] md:col-span-4" />
          </div>

          {/*
            PRESERVED "IN YOUR ROOM" SECTION (hidden per user instruction; code preserved):
          <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-12">
            <h3 className="t-h2 lg:col-span-4">In your room</h3>
            <ul className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
              {IN_ROOM.map(([name, text]) => (
                <li key={name} className="rule border-t py-4">
                  <p className="font-semibold">{name}</p>
                  <p className="muted mt-1">{text}</p>
                </li>
              ))}
            </ul>
          </div>
          */}
        </div>
      </section>

      <section id="rates" className="scroll-mt-24" aria-labelledby="rates-title">
        <div className="wrap">
          <div className="rounded-sign border border-ink/10 bg-card grid gap-10 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12 shadow-sm">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#A7834F]">
                TRANSPARENT TARIFFS
              </span>
              <h2 id="rates-title" className="text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.025em] mt-1.5">
                Rates
              </h2>
              <p className="text-ink-2 text-sm sm:text-base mt-2">
                Per room, per night. GST is added when you book.
              </p>

              <dl className="mt-8 border-t border-ink/10">
                {ROOM_RATES.map((r) => (
                  <div key={r.label} className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-5">
                    <dt>
                      <span className="block text-[1.15rem] font-semibold text-ink">{r.label}</span>
                      <span className="text-xs sm:text-sm text-ink-2 mt-0.5 block">{r.days}</span>
                    </dt>
                    <dd className="text-right">
                      <span className="text-2xl sm:text-3xl font-semibold text-ink">{r.price}</span>
                      <span className="text-xs sm:text-sm text-ink-2 font-normal ml-2 whitespace-nowrap">+ GST</span>
                    </dd>
                  </div>
                ))}
                {/* Check-in & check-out timings preserved in code, hidden per user instruction since displayed in Good to know section below:
                <div className="rule flex items-baseline justify-between gap-6 border-y py-5">
                  <dt className="text-[1.15rem] font-semibold">Check-in and check-out</dt>
                  <dd className="num text-right font-semibold">{TIMES.checkIn} / {TIMES.checkOut}</dd>
                </div>
                */}
              </dl>
            </div>

            <div className="lg:col-span-5 lg:self-center">
              <div className="rounded-2xl sign bg-plate p-7 sm:p-8 shadow-md">
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-[-0.015em]">
                  Book your room
                </h3>
                <p className="text-plate-muted text-sm sm:text-base mt-2 leading-relaxed">
                  Choose your dates, see live availability and pay securely on our booking page.
                </p>
                <BookButton className="mt-6 w-full text-center py-3">
                  Check availability
                </BookButton>
                <p className="text-xs text-plate-muted mt-4 text-center">
                  Prefer to talk first?{' '}
                  <a
                    href={waLink(CONTACT.whatsapp, 'Hi, I would like to check room availability at Nature Senses.')}
                    className="font-medium text-[#E5CA8F] hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp concierge
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-28" aria-labelledby="good-to-know-title">
        {/*
          PRESERVED "INCLUDED WITH EVERY ROOM" SECTION (hidden per user instruction; code preserved):
        <div className="wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-12 mb-16 lg:mb-24">
          <Photo photo={PHOTOS.playSunset} sizes="(min-width: 1024px) 55vw, 100vw" className="aspect-[4/3] lg:col-span-7" />
          <div className="lg:col-span-5">
            <h2 id="included-title" className="t-h2">Included with every room</h2>
            <p className="t-lede muted mt-5">No add-on charges for the things you came for. Open {TIMES.amenities}.</p>
            <ul className="mt-8">
              {INCLUDED.map((z) => (
                <li key={z.n} className="rule flex items-center gap-4 border-t py-3.5 last:border-b">
                  <Disc n={z.n} />
                  <span><span className="block font-semibold">{z.name}</span><span className="t-small muted">{z.note}</span></span>
                </li>
              ))}
            </ul>
            <p className="mt-7"><a href="/facilities/" className="link">Facilities and timings</a></p>
          </div>
        </div>
        */}

        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 id="good-to-know-title" className="t-h2">Good to know</h2>
            <Facts
              className="mt-8"
              rows={[
                ['Check-in', `From ${TIMES.checkIn}`],
                ['Check-out', `By ${TIMES.checkOut}`],
                ['Food', 'Outside food and drinks are not allowed.'],
                ['Pool', 'Swimwear required. Children under 12 with an adult.'],
                ['Booking', 'A confirmed booking is needed before arrival.'],
              ]}
            />
          </div>
          <Photo photo={PHOTOS.desk} sizes="(min-width: 1024px) 50vw, 100vw" className="aspect-[16/10] lg:col-span-6 lg:col-start-7 lg:self-end" />
        </div>
      </section>

      <Closing title="Your balcony is an hour away" photo={PHOTOS.aerialSunset} night="nightWide" />
    </Layout>
  );
}
