import React from 'react';
import Layout from '../components/Layout';
import { ZONE_PHOTOS } from '../components/Directory';
import { Closing, Disc, Facts, PageHero, Photo, SectionHead } from '../components/ui';
import { CONTACT, PHOTOS, TIMES, ZONES } from '../site';

// What each zone offers, and what it costs if you are visiting just for that.
const DETAIL = {
  reception: { text: 'A double-height lobby with sofas and tall windows, beside the glass-fronted conference room.', rows: [['Hours', 'All day'], ['Visitors', 'Free for all guests']] },
  rooms: { text: 'A two-storey block where every room has its own balcony, most of them over the pool and lawns.', rows: [['Check-in', `From ${TIMES.checkIn}`], ['Check-out', `By ${TIMES.checkOut}`]] },
  pool: { text: 'A long pool with a curved shallow end, lined with palms and red crotons, and lit blue after dark.', rows: [['Hours', TIMES.amenities], ['Visitors', 'Adults ₹400, children (5–12) ₹200 per session']] },
  play: { text: 'Slides, swings, a see-saw and a roundabout on sand, with shaded gazebos alongside for parents.', rows: [['Hours', 'Open to all guests'], ['Visitors', 'Free']] },
  lawn: { text: 'Open lawns for games and gatherings, and paved paths that light up in the evening for a walk after dinner.', rows: [['Hours', 'All day'], ['Events', 'Party lawn for up to 50 guests']] },
  kitchen: { text: 'The dining hall where day-out lunches and hi-tea are served and event menus are cooked.', rows: [['Hours', 'Meal times'], ['Menus', 'See day out and event packages']] },
  games: { text: 'A full-size billiards table, table tennis, carrom and board games, and a gym with cardio machines and free weights.', rows: [['Hours', TIMES.amenities], ['Visitors', 'Table tennis ₹250/hr, billiards ₹500/hr, carrom ₹200/hr, gym ₹500 a session. Board games free with a ₹200 deposit.']] },
};

const RULES = [
  ['Timings', `Pool, gym and indoor games are open ${TIMES.amenities}.`],
  ['Pool', 'Proper swimwear is required. Children under 12 must be with an adult.'],
  ['Food and drink', 'Outside food, drinks and caterers are not allowed.'],
  ['Booking', `Book in advance by phone (${CONTACT.phone}) or email.`],
];

export default function Facilities() {
  return (
    <Layout page="facilities">
      <PageHero
        title="Pool, play and space to unwind"
        intro="Everything here is free when you stay and included in day-out packages. Visiting for one activity? Pay per session, as listed below."
        photo={PHOTOS.aerialDay}
        position="50% 55%"
        facts={[
          ['Open', `Pool, gym and games, ${TIMES.amenities}`],
          ['Staying guests', 'Everything included'],
          ['Day guests', 'Included in day-out packages'],
        ]}
      />

      <section className="py-16 lg:py-28" aria-labelledby="zones-title">
        <div className="wrap">
          <SectionHead id="zones-title" title="Around the estate" intro="Numbered as on the signs you will see when you arrive." />
          <nav aria-label="Zones" className="mt-8 flex flex-wrap gap-2">
            {ZONES.map((z) => (
              <a key={z.key} href={`#${z.key}`} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink/[0.06] py-1 pl-1 pr-4 font-medium transition-colors hover:bg-ink/[0.1]">
                <Disc n={z.n} /> {z.short}
              </a>
            ))}
          </nav>

          <div className="mt-14 space-y-16 lg:mt-20 lg:space-y-24">
            {ZONES.map((z, i) => {
              const d = DETAIL[z.key];
              const photo = ZONE_PHOTOS[z.key];
              return (
                <section key={z.key} id={z.key} className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-12 lg:gap-12" aria-labelledby={`h-${z.key}`}>
                  {photo ? (
                    <Photo
                      photo={photo}
                      position={z.key === 'reception' ? '50% 60%' : undefined}
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className={`aspect-[4/3] lg:col-span-7 ${i % 2 ? 'lg:order-2 lg:col-start-6' : ''}`}
                    />
                  ) : (
                    <div className={`sign flex aspect-[4/3] flex-col justify-end p-8 sm:p-12 lg:col-span-7 ${i % 2 ? 'lg:order-2 lg:col-start-6' : ''}`}>
                      <p className="t-small muted">Indoors, for the hottest hours or a rainy one</p>
                      <ul className="mt-4 grid gap-x-8 gap-y-2 text-[1.4rem] font-semibold tracking-[-0.02em] sm:grid-cols-2 sm:text-[1.75rem]">
                        <li>Billiards</li><li>Table tennis</li><li>Carrom</li><li>Board games</li><li>Gym</li>
                      </ul>
                    </div>
                  )}
                  <div className={`lg:col-span-5 ${i % 2 ? 'lg:order-1 lg:col-start-1 lg:row-start-1' : ''}`}>
                    <h3 id={`h-${z.key}`} className="sign inline-flex items-start gap-4 px-5 py-4 text-[clamp(1.5rem,2.4vw,2.1rem)] font-semibold leading-[1.1] tracking-[-0.025em]"><Disc n={z.n} lg className="mt-0.5" /><span>{z.name}</span></h3>
                    <p className="t-lede muted mt-5">{d.text}</p>
                    <Facts rows={d.rows} className="mt-7" />
                  </div>
                </section>
              );
            })}
          </div>
          <p className="muted mt-16">Planning a meeting? The conference room seats 10 to 15. <a href="/events/" className="link">Meeting rates</a></p>
        </div>
      </section>

      <section aria-labelledby="rules-title">
        <div className="wrap">
          <div className="sign grid gap-10 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-14">
            <div className="lg:col-span-4">
              <h2 id="rules-title" className="t-h2">House rules</h2>
              <p className="t-lede muted mt-4">They keep the place calm, clean and safe for everyone.</p>
            </div>
            <Facts wide rows={RULES} className="lg:col-span-7 lg:col-start-6 lg:self-end" />
          </div>
        </div>
      </section>

      <Closing title="Enjoy all of it when you stay" photo={PHOTOS.playSunset} night="nightWide" />
    </Layout>
  );
}
