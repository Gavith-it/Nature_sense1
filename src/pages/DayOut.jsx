import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import Layout from '../components/Layout';
import { Closing, PageHero, Photo, SectionHead } from '../components/ui';
import { CONTACT, PHOTOS, waLink } from '../site';

const PACKAGES = [
  {
    name: 'Vegetarian',
    price: '₹2,000',
    lunch: ['Baby corn pepper dry', 'Veg Manchurian', 'Dal fry', 'Veg kurma', 'Roti and naan', 'Rice and sambar', 'Indian sweets', 'Ice cream'],
    tea: ['Onion and mirchi bhajji', 'Sandwiches', 'Cutlets', 'Filter coffee or tea'],
  },
  {
    name: 'Non-vegetarian',
    price: '₹2,200',
    note: 'The full vegetarian spread, plus two chicken dishes.',
    lunch: ['Rayalaseema chicken dry', 'Kadai chicken', 'Everything on the vegetarian lunch'],
    tea: ['Onion and mirchi bhajji', 'Sandwiches', 'Cutlets', 'Filter coffee or masala tea'],
  },
];

const DAY = [
  ['9:30 AM', 'Arrive to a refreshing welcome drink and explore the clubhouse, gardens and open lawns.'],
  ['11:30 AM', 'Clubhouse recreation: billiards, table tennis, carrom, and fitness gym.'],
  ['1:00 PM', 'Farm Kitchen Buffet Lunch: a full, freshly cooked regional spread.'],
  ['3:30 PM', 'Afternoon swim in the curved lagoon pool beneath palm shade.'],
  ['5:30 PM', 'Hi-tea with hot bhajji, cutlets, and South Indian filter coffee.'],
  ['6:30 PM', 'Children’s play park, twilight stroll on illuminated paths, and evening leisure.'],
];

const STEPS = [
  ['Message or call', `Send your date, number of guests and package on WhatsApp, or call ${CONTACT.phone}.`],
  ['Get confirmation', "We'll confirm availability and share payment details."],
  ['Arrive at 9:30 AM', 'Bring swimwear. Outside food and drinks are not allowed.'],
];

export default function DayOut() {
  const enquire = waLink(CONTACT.whatsapp, 'Hi, I would like to book a day out at Nature Senses. Date: , Number of guests: , Veg / Non-veg: ');
  return (
    <Layout page="day-out">
      <PageHero
        title="A day on the farm"
        intro="Drive in with family or friends for a day of swimming, games and good food, and be home by evening."
        photo={PHOTOS.poolSunset}
        position="50% 65%"
        facts={[
          ['Hours', '9:30 AM to 6:30 PM'],
          ['Per person', 'From ₹2,000 + GST'],
          ['Included', 'Welcome drink, lunch, hi-tea and every facility'],
        ]}
        actions={
          <>
            <a href={enquire} className="btn-act"><MessageCircle size={18} strokeWidth={1.8} aria-hidden="true" /> Book on WhatsApp</a>
            <a href={CONTACT.phoneHref} className="btn-line"><Phone size={18} strokeWidth={1.8} aria-hidden="true" /> {CONTACT.phone}</a>
          </>
        }
      />

      <section className="py-16 lg:py-28" aria-labelledby="pkg-title">
        <div className="wrap">
          <SectionHead id="pkg-title" title="Two packages" intro="Per person, plus GST. Both include the welcome drink, lunch, hi-tea and every facility." />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:mt-14 lg:gap-6">
            {PACKAGES.map((p) => (
              <article key={p.name} className="rounded-sign bg-card border border-ink/8 shadow-sm p-6 sm:p-9">
                <div className="rule flex items-baseline justify-between gap-4 border-b pb-6">
                  <h3 className="t-h3">{p.name}</h3>
                  <p className="text-right">
                    <span className="t-figure block">{p.price}</span>
                    <span className="t-small muted">a person</span>
                  </p>
                </div>
                {p.note && <p className="muted mt-6">{p.note}</p>}
                <div className="mt-6 grid gap-8 sm:grid-cols-2">
                  <div>
                    <h4 className="font-semibold text-brass-ink">Lunch</h4>
                    <ul className="muted mt-2 space-y-1">{p.lunch.map((d) => <li key={d}>{d}</li>)}</ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-brass-ink">Hi-tea</h4>
                    <ul className="muted mt-2 space-y-1">{p.tea.map((d) => <li key={d}>{d}</li>)}</ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="day-title">
        <div className="wrap">
          <div className="sign grid gap-10 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-14">
            <div className="lg:col-span-5">
              <h2 id="day-title" className="t-h2">How the day goes</h2>
              <p className="t-lede muted mt-4">A rough guide. Spend the hours however you like.</p>
              <Photo photo={PHOTOS.kitchen} sizes="(min-width: 1024px) 40vw, 100vw" className="mt-10 aspect-[4/3]" />
              <p className="t-small muted mt-3">Farm Kitchen, where lunch and hi-tea are served</p>
            </div>
            <ol className="lg:col-span-6 lg:col-start-7">
              {DAY.map(([time, text]) => (
                <li key={time} className="rule grid grid-cols-[6.5rem_1fr] gap-5 border-t py-5 last:border-b sm:grid-cols-[8rem_1fr]">
                  <span className="num font-semibold">{time}</span>
                  <span className="muted">{text}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-28" aria-labelledby="book-title">
        <div className="wrap">
          <div className="grid gap-4 md:grid-cols-3 lg:gap-5">
            <Photo photo={PHOTOS.playSunset} sizes="(min-width: 768px) 32vw, 100vw" className="aspect-[4/5]" />
            <Photo photo={PHOTOS.playLawn} night="nightLawn" sizes="(min-width: 768px) 32vw, 100vw" className="aspect-[4/5] md:mt-14" />
            <Photo photo={PHOTOS.lobby} sizes="(min-width: 768px) 32vw, 100vw" className="aspect-[4/5]" />
          </div>

          <div className="mt-16 grid gap-10 lg:mt-24 lg:grid-cols-12 lg:gap-12">
            <h2 id="book-title" className="t-h2 lg:col-span-4">How to book</h2>
            <ol className="grid gap-x-8 sm:grid-cols-3 lg:col-span-8">
              {STEPS.map(([t, d], i) => (
                <li key={t} className="rule border-t py-5">
                  <span className="num inline-grid h-8 w-8 place-items-center rounded-full border border-ink/25 text-[0.95rem] font-semibold">{i + 1}</span>
                  <h3 className="mt-4 font-semibold">{t}</h3>
                  <p className="muted mt-2">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Closing
        title="Planning a day out?"
        text="Tell us the date and how many are coming. Groups are welcome."
        photo={PHOTOS.poolWide}
        night="nightEstateTop"
        book={false}
        whatsapp={enquire}
        whatsappLabel="Book on WhatsApp"
      />
    </Layout>
  );
}
