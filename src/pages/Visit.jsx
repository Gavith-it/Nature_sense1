import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, ChevronDown } from 'lucide-react';
import Layout from '../components/Layout';
import RouteLines from '../components/RouteLines';
import { Closing, PageHero, SectionHead } from '../components/ui';
import { CONTACT, PHOTOS, TIMES, WA_HELLO, waLink } from '../site';

const FAQ = [
  ['What time is check-in and check-out?', `Check-in is from ${TIMES.checkIn} and check-out is by ${TIMES.checkOut}.`],
  ['Are the pool, gym and games included when we stay?', `Yes. Staying guests use the pool, gym, indoor games and play area at no extra charge, ${TIMES.amenities}.`],
  ['Is there a restaurant?', 'Yes. Farm Kitchen, our dining hall, serves the day-out lunch and hi-tea and caters events.'],
  ['What do children pay at the pool?', 'Children aged 5 to 12 pay ₹200 per session if you are visiting only for the pool. Children under 12 must be with an adult.'],
  ['Can we bring our own food or drinks?', 'No. Outside food, drinks and caterers are not allowed.'],
  ['How do I book a day out or an event?', `Message or call us. Day outs: ${CONTACT.phone}. Events and parties: ${CONTACT.eventsPhone}.`],
  ['Are prices inclusive of tax?', 'No. GST is added to room, day-out and package prices.'],
];

const CONTACTS = [
  { icon: Phone, label: 'Rooms and day outs', value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Message us', href: WA_HELLO },
  { icon: Phone, label: 'Events and parties', value: CONTACT.eventsPhone, href: CONTACT.eventsPhoneHref },
  { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
];

export default function Visit() {
  return (
    <Layout page="visit">
      <PageHero
        title="Getting here"
        intro="We're near Denkanikottai and Kuppati in Tamil Nadu, about an hour's drive from south Bangalore. Most of the way is highway; the last stretch runs through farmland."
        photo={PHOTOS.aerialFields}
        facts={[
          ['Where', CONTACT.area],
          ['Nearest town', 'Hosur, then country roads'],
          ['Check-in', `From ${TIMES.checkIn}, out by ${TIMES.checkOut}`],
        ]}
        actions={
          <>
            <a href={CONTACT.maps} className="btn-act" target="_blank" rel="noopener noreferrer"><MapPin size={18} strokeWidth={1.8} aria-hidden="true" /> Open in Google Maps</a>
            <a href={waLink(CONTACT.whatsapp, 'Hi, could you share the exact location of Nature Senses Farm Stay?')} className="btn-line">Ask for the location pin</a>
          </>
        }
      />

      <section className="py-16 lg:py-28" aria-labelledby="drive-title">
        <div className="wrap">
          <SectionHead id="drive-title" title="Drive times" intro="From four parts of Bangalore. Approximate, in normal traffic." />
          <RouteLines className="mt-10 lg:mt-14" />
        </div>
      </section>

      <section aria-labelledby="talk-title">
        <div className="wrap">
          <div className="sign p-6 sm:p-10 lg:p-14">
            <h2 id="talk-title" className="t-h2">Talk to us</h2>
            <p className="t-lede muted mt-4">Calls and WhatsApp are the quickest way to reach us.</p>
            <ul className="mt-10 grid gap-x-12 sm:grid-cols-2">
              {CONTACTS.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="rule border-t">
                  <a href={href} className="group flex min-h-[5.5rem] items-center gap-5 py-5">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-plate-2 text-brass-ink"><Icon size={20} strokeWidth={1.8} aria-hidden="true" /></span>
                    <span className="min-w-0">
                      <span className="t-small muted block">{label}</span>
                      <span className="block break-words text-[1.2rem] font-semibold underline decoration-transparent decoration-2 underline-offset-[6px] transition-colors group-hover:decoration-brass">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-28" aria-labelledby="faq-title">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-12">
          <h2 id="faq-title" className="t-h2 lg:col-span-4">Before you come</h2>
          <div className="rule border-t lg:col-span-7 lg:col-start-6">
            {FAQ.map(([q, a]) => (
              <details key={q} className="rule group border-b">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-4 [&::-webkit-details-marker]:hidden">
                  <span className="font-semibold leading-snug">{q}</span>
                  <ChevronDown size={20} strokeWidth={1.8} className="shrink-0 text-brass-ink transition-transform duration-300 group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="muted max-w-prose pb-6">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Closing photo={PHOTOS.aerialSunset} />
    </Layout>
  );
}
