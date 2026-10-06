import React, { useRef, useState } from 'react';
import { ChevronDown, MessageCircle, Phone } from 'lucide-react';
import Layout from '../components/Layout';
import { Closing, Disc, Facts, PageHero, Photo, SectionHead } from '../components/ui';
import { CONTACT, PHOTOS, waLink } from '../site';

const SPACES = [
  {
    name: 'Lawn and banquet space',
    photo: PHOTOS.banquetFunction || PHOTOS.pergolaLawn,
    zone: 5,
    for: 'Birthdays, anniversaries, family functions and team parties.',
    facts: [
      ['Guests', 'Up to 50'],
      ['Rate', '₹15,000 for 5 hours'],
      ['Extra time', '₹2,500 an hour'],
      ['Included', 'Welcome drink. Food is charged separately.'],
    ],
  },
  {
    name: 'Conference room',
    photo: PHOTOS.conferenceRoom || PHOTOS.clubhouse,
    zone: 1,
    for: 'Offsites, planning days, workshops and training.',
    facts: [
      ['People', '10 to 15'],
      ['Half day', '₹3,000 for 4 hours'],
      ['Full day', '₹5,000 for 8 hours'],
      ['Included', 'Wi-Fi, audio-visual setup and refreshments'],
    ],
  },
];

const COURSES = ['Soft drinks (200 ml)', 'Soup', 'Salad', 'Veg starter', 'Non-veg starter', 'Veg main course', 'Non-veg main course', 'Rice or noodles', 'Bread', 'Pickle', 'Curd rice or curd', 'Dessert'];

const PACKAGES = {
  veg: [
    { name: 'Veg 1', price: '₹799', counts: [1, 1, 1, 1, 0, 2, 0, 1, 1, 1, 1, 1] },
    { name: 'Veg 2', price: '₹999', counts: [2, 1, 1, 2, 0, 2, 0, 2, 1, 1, 1, 2] },
  ],
  nonveg: [
    { name: 'Non-veg 1', price: '₹1,099', counts: [2, 1, 1, 1, 2, 1, 1, 2, 1, 1, 1, 1] },
    { name: 'Non-veg 2', price: '₹1,399', counts: [2, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 2] },
    { name: 'Non-veg 3', price: '₹1,699', counts: [3, 1, 1, 2, 3, 2, 2, 3, 2, 1, 1, 3] },
  ],
};

const MENU = [
  { course: 'Soups', veg: ['Man chow', 'Sweet corn', 'Hot and sour'], nonveg: ['Man chow', 'Sweet corn', 'Hot and sour'] },
  {
    course: 'Starters',
    veg: ['Mix veg bajji', 'Onion corn pakoda', 'Baby corn pepper dry', 'Mushroom pepper dry', 'Paneer ghee roast', 'Veg ball Manchurian', 'Chilli paneer', 'Baby corn Manchurian', 'Corn salt and pepper', 'Paneer tikka', 'Hariyali paneer tikka', 'Aloo corn tikka'],
    nonveg: ['Chicken pepper dry', 'Andhra chilli chicken', 'Chicken Chettinad', 'Chicken varuval', 'Guntur chilli chicken', 'Chicken lollipop', 'Chilli chicken dry', 'Chicken Manchurian', 'Thai basil chicken', 'Dilli-6 chicken tikka', 'Hariyali chicken tikka', 'Kali mirchi chicken tikka'],
  },
  {
    course: 'Main course',
    veg: ['Veg gassi', 'Mangalore mushroom masala', 'Paneer tikka masala', 'Veg Kolhapuri', 'Kadai veg', 'Veg ball Manchurian gravy', 'Veg in Schezwan sauce'],
    nonveg: ['Desi chicken curry', 'Kadai chicken', 'Chicken tikka masala', 'Chicken in black pepper sauce', 'Chilli chicken gravy', 'Chicken in Hunan sauce'],
  },
  {
    course: 'Rice, noodles and breads',
    veg: ['Hyderabadi veg biryani', 'Veg fried rice', 'Veg noodles', 'Jeera rice', 'Ghee rice', 'Roti, naan or kulcha'],
    nonveg: ['Hyderabadi chicken biryani', 'Chicken or egg fried rice', 'Chicken or egg noodles'],
  },
  { course: 'Desserts', veg: ['Gulab jamun', 'Gajar ka halwa', 'Semiya kheer', 'Jaggery rice kheer', 'Ice cream'] },
];

const ADD_ONS = [
  ['Prawns', '₹240', 'Pepper dry, chilli fry, or butter pepper garlic'],
  ['Fish', '₹200', 'Koliwada, chilli fish, or ajwain fish tikka'],
  ['Mutton', '₹220', 'Mutton pepper, Nalgonda mutton dry, or desi mutton dry'],
];


function PackageTable() {
  const [tab, setTab] = useState('veg');
  const refs = { veg: useRef(null), nonveg: useRef(null) };
  const rows = PACKAGES[tab];
  const onKey = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const next = tab === 'veg' ? 'nonveg' : 'veg';
    setTab(next);
    refs[next].current?.focus();
  };

  return (
    <div>
      <div role="tablist" aria-label="Package type" className="inline-flex rounded-full bg-ink/[0.07] p-1">
        {[['veg', 'Vegetarian'], ['nonveg', 'Non-vegetarian']].map(([key, label]) => (
          <button
            key={key}
            ref={refs[key]}
            role="tab"
            id={`tab-${key}`}
            aria-selected={tab === key}
            aria-controls="pkg-panel"
            tabIndex={tab === key ? 0 : -1}
            onClick={() => setTab(key)}
            onKeyDown={onKey}
            className={`min-h-11 rounded-full px-5 font-semibold transition-colors ${tab === key ? 'bg-ink text-wall' : 'text-ink-2 hover:text-ink'}`}
          >
            {label}
          </button>
        ))}
      </div>
      <div id="pkg-panel" role="tabpanel" aria-labelledby={`tab-${tab}`} className="mt-8 overflow-x-auto rounded-sign bg-card border border-ink/8 shadow-sm p-5 sm:p-8">
        <table className={`w-full border-collapse text-left ${tab === 'veg' ? 'min-w-[20rem]' : 'min-w-[32rem]'}`}>
          <caption className="sr-only">Number of dishes per course in each {tab === 'veg' ? 'vegetarian' : 'non-vegetarian'} package</caption>
          <thead>
            <tr className="border-b border-ink/30">
              <th scope="col" className="t-small muted py-4 pr-4 align-bottom font-medium">Course</th>
              {rows.map((p) => (
                <th key={p.name} scope="col" className="py-4 pl-4 text-right align-bottom font-normal">
                  <span className="t-small muted block">{p.name}</span>
                  <span className="t-figure mt-1 block">{p.price}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COURSES.map((c, i) => {
              if (rows.every((p) => !p.counts[i])) return null;
              return (
                <tr key={c} className="rule border-b">
                  <th scope="row" className="py-3 pr-4 font-normal">{c}</th>
                  {rows.map((p) => (
                    <td key={p.name} className="py-3 pl-4 text-right tabular-nums">
                      {p.counts[i] ? p.counts[i] : <span className="muted" aria-label="not included">–</span>}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
        <p className="t-small muted mt-4">Prices per person, plus GST. Numbers show how many dishes you choose from each course.</p>
      </div>
    </div>
  );
}

export default function Events() {
  const enquire = waLink(CONTACT.eventsWhatsapp, 'Hi, I would like to plan an event at Nature Senses. Occasion: , Date: , Guests: ');
  return (
    <Layout page="events">
      <PageHero
        title="Gatherings and celebrations"
        intro="Host up to 50 guests on the lawn, or bring a small team to the glass-fronted conference room. Farm Kitchen caters, with menus you choose yourself."
        photo={PHOTOS.playLawn}
        position="50% 55%"
        facts={[
          ['Lawn', 'Up to 50 guests, ₹15,000 for 5 hours'],
          ['Meeting room', '10 to 15 people, from ₹3,000'],
          ['Party menus', 'From ₹799 a guest + GST'],
        ]}
        actions={
          <>
            <a href={enquire} className="btn-act"><MessageCircle size={18} strokeWidth={1.8} aria-hidden="true" /> Plan on WhatsApp</a>
            <a href={CONTACT.eventsPhoneHref} className="btn-line"><Phone size={18} strokeWidth={1.8} aria-hidden="true" /> {CONTACT.eventsPhone}</a>
          </>
        }
      />

      <section className="py-16 lg:py-28" aria-labelledby="spaces-title">
        <div className="wrap">
          <SectionHead id="spaces-title" title="Two spaces" intro="One for celebrations, one for work." />
          <div className="mt-10 grid gap-14 md:grid-cols-2 md:gap-6 lg:mt-14 lg:gap-8">
            {SPACES.map((s) => (
              <article key={s.name}>
                <Photo photo={s.photo} sizes="(min-width: 768px) 50vw, 100vw" className="aspect-[4/3]" />
                <h3 className="sign mt-6 inline-flex items-center gap-3 px-4 py-3 text-[1.35rem] font-semibold tracking-[-0.02em]"><Disc n={s.zone} /> {s.name}</h3>
                <p className="muted mt-2">{s.for}</p>
                <Facts rows={s.facts} className="mt-6" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="menus-title">
        <div className="wrap">
          <div className="grid gap-10 rounded-sign bg-wall-2 p-5 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-14">
            <div className="lg:col-span-4">
              <h2 id="menus-title" className="t-h2">Party menus</h2>
              <p className="t-lede muted mt-4">Choose a package, then pick your dishes from the menu below.</p>
            </div>
            <div className="lg:col-span-8"><PackageTable /></div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-28" aria-labelledby="menu-title">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <h2 id="menu-title" className="t-h2">The menu</h2>
            <p className="t-lede muted mt-4">South Indian, Chinese and tandoor dishes. Open a course to see the choices.</p>
          </div>
          <div className="lg:col-span-8">
            <div className="rule border-t">
              {MENU.map((m) => (
                <details key={m.course} className="rule group border-b">
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
                    <span className="text-[1.2rem] font-semibold tracking-[-0.015em]">{m.course}</span>
                    <ChevronDown size={20} strokeWidth={1.8} className="shrink-0 text-brass-ink transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="grid gap-8 pb-8 sm:grid-cols-2">
                    <div>
                      <h3 className="font-semibold text-brass-ink">Vegetarian</h3>
                      <ul className="muted mt-2 space-y-1">{m.veg.map((d) => <li key={d}>{d}</li>)}</ul>
                    </div>
                    {m.nonveg && (
                      <div>
                        <h3 className="font-semibold text-brass-ink">Non-vegetarian</h3>
                        <ul className="muted mt-2 space-y-1">{m.nonveg.map((d) => <li key={d}>{d}</li>)}</ul>
                      </div>
                    )}
                  </div>
                </details>
              ))}
            </div>
            <div className="pt-12">
              <h3 className="t-h3">Seafood and mutton add-ons</h3>
              <p className="muted mt-2">Add to any non-veg package. Per person, plus taxes.</p>
              <ul className="rule mt-6 border-t">
                {ADD_ONS.map(([n, p, d]) => (
                  <li key={n} className="rule flex items-baseline justify-between gap-6 border-b py-4">
                    <span><span className="block font-semibold">{n}</span><span className="t-small muted">{d}</span></span>
                    <span className="num text-[1.2rem] font-semibold">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-4" aria-label="More of the event spaces">
        <div className="wrap grid gap-4 md:grid-cols-12 lg:gap-5">
          <Photo photo={PHOTOS.aerialDay} night="nightWide" sizes="(min-width: 768px) 42vw, 100vw" className="aspect-[4/3] md:col-span-5" />
          <Photo photo={PHOTOS.lobby} position="50% 60%" sizes="(min-width: 768px) 25vw, 100vw" className="aspect-[4/5] md:col-span-3" />
          <Photo photo={PHOTOS.kitchen} sizes="(min-width: 768px) 33vw, 100vw" className="aspect-[4/3] md:col-span-4 md:self-end" />
        </div>
      </section>

      <Closing
        title="Tell us about your event"
        text="Share the occasion, date and guest count. We'll suggest a package and confirm the space."
        photo={PHOTOS.nightEstate}
        book={false}
        whatsapp={enquire}
        whatsappLabel="Plan on WhatsApp"
        phone={CONTACT.eventsPhone}
        phoneHref={CONTACT.eventsPhoneHref}
      />
    </Layout>
  );
}
