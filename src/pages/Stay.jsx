import React from 'react';
import Layout from '../components/Layout';
import { MessageCircle } from 'lucide-react';
import { BookButton, Closing, Disc, Facts, PageHero, Photo, SectionHead } from '../components/ui';
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
      <PageHero
        zone={2}
        title="Rooms that open onto the farm"
        intro="Two kinds of room, both with a private balcony, air conditioning and an attached bathroom. The pool, gym, games and play area are included."
        photo={PHOTOS.balconyPoolView}
        night="nightPool"
        position="50% 60%"
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
      />

      <section className="pt-16 lg:pt-28" aria-labelledby="types-title">
        <div className="wrap">
          <SectionHead id="types-title" title="Two kinds of room" intro="Both have a private balcony and the same comforts inside. Choose either one on the booking page." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 lg:gap-6">
            <article>
              <Photo photo={PHOTOS.roomBlock} night="nightEstate" sizes="(min-width: 768px) 48vw, 100vw" className="aspect-[4/3]" />
              <div className="sign mt-3 flex items-center justify-between gap-4 px-5 py-4">
                <h3 className="text-[1.35rem] font-semibold tracking-[-0.02em]">Superior Room with Balcony</h3>
              </div>
              <p className="muted mt-3 px-1">In the two-storey room block. The photographs on this page are from a Superior Room.</p>
            </article>
            <article className="flex flex-col">
              <div className="sign flex aspect-[4/3] flex-col justify-end p-7 sm:p-10">
                <p className="t-small muted">Photographs of the tent rooms are on their way.</p>
                <a href={waLink(CONTACT.whatsapp, 'Hi, could you send me photos of the Tent Room with Balcony?')} className="btn-line mt-5 self-start"><MessageCircle size={18} strokeWidth={1.8} aria-hidden="true" /> Ask for photos on WhatsApp</a>
              </div>
              <div className="sign mt-3 flex items-center justify-between gap-4 px-5 py-4">
                <h3 className="text-[1.35rem] font-semibold tracking-[-0.02em]">Tent Room with Balcony</h3>
              </div>
              <p className="muted mt-3 px-1">A private balcony and the same in-room comforts as the Superior Room.</p>
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
        </div>
      </section>

      <section id="rates" className="scroll-mt-24" aria-labelledby="rates-title">
        <div className="wrap">
          <div className="sign grid gap-12 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-14">
            <div className="lg:col-span-6">
              <h2 id="rates-title" className="t-h2">Rates</h2>
              <p className="t-lede muted mt-4">Per room, per night. GST is added when you book.</p>
              <dl className="mt-10">
                {ROOM_RATES.map((r) => (
                  <div key={r.label} className="rule flex items-baseline justify-between gap-6 border-t py-5">
                    <dt>
                      <span className="block text-[1.15rem] font-semibold">{r.label}</span>
                      <span className="t-small muted">{r.days}</span>
                    </dt>
                    <dd className="t-figure">{r.price}</dd>
                  </div>
                ))}
                <div className="rule flex items-baseline justify-between gap-6 border-y py-5">
                  <dt className="text-[1.15rem] font-semibold">Check-in and check-out</dt>
                  <dd className="num text-right font-semibold">{TIMES.checkIn} / {TIMES.checkOut}</dd>
                </div>
              </dl>
            </div>
            <div className="lg:col-span-5 lg:col-start-8 lg:self-end">
              <div className="rounded-sign bg-plate-2 p-7 sm:p-9">
                <h3 className="t-h3">Book your room</h3>
                <p className="muted mt-3">Choose your dates, see live availability and pay securely on our booking page.</p>
                <BookButton className="mt-7 w-full">Check availability</BookButton>
                <p className="t-small muted mt-5">Prefer to talk first? Call or WhatsApp us from the end of this page.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-28" aria-labelledby="included-title">
        <div className="wrap grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
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

        <div className="wrap mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <h2 className="t-h2">Good to know</h2>
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
