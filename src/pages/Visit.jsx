import React from 'react';
import { MapPin, Phone, Mail, MessageCircle, ChevronDown } from 'lucide-react';
import Layout from '../components/Layout';
import RouteLines from '../components/RouteLines';
import { Closing, PageHero, Photo, ScrollRevealText, SectionHead } from '../components/ui';
import { CONTACT, PHOTOS, TIMES, WA_HELLO, waLink } from '../site';

const FAQ = [
  ['What time is check-in and check-out?', `Check-in is from ${TIMES.checkIn} and check-out is by ${TIMES.checkOut}.`],
  ['Are the pool, gym and games included when we stay?', `Yes. Staying guests use the pool, gym, indoor games and play area at no extra charge, ${TIMES.amenities}.`],
  ['Is there a restaurant?', 'Yes, our in-house restaurant, Nature Senses Farm Kitchen, serves delicious South Indian, North Indian, and Chinese cuisines.'],
  ['How much is pool access?', 'If you have booked a room stay, pool access is included at no extra charge. If you are visiting only for the pool, charges are ₹400 per session. Children under 12 must be with an adult.'],
  ['Can we bring our own food or drinks?', 'No. Outside food, drinks and caterers are not allowed.'],
  ['How do I book a day out or an event?', `Message or call us at ${CONTACT.phone}.`],
  ['Are prices inclusive of tax?', 'No. GST is added to room, day-out and package prices.'],
];

const CONTACTS = [
  { icon: Phone, label: 'Reservations & enquiries', value: CONTACT.phone, href: CONTACT.phoneHref },
  { icon: MessageCircle, label: 'WhatsApp', value: 'Message us', href: WA_HELLO },
  { icon: Mail, label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
];

export default function Visit() {
  return (
    <Layout page="visit">
      {/* 
        PRESERVED CODE - Previous PageHero style:
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
      */}

      {/* 1. Hero Section: Clean, Cinematic Photography with Breadcrumb & Headline */}
      <section className="relative overflow-hidden bg-wall-2">
        <div className="relative h-[56svh] min-h-[22rem] max-h-[42rem] lg:h-[min(70svh,46rem)] lg:max-h-none">
          <Photo
            photo={PHOTOS.aerialSunset}
            night="nightEstate"
            eager
            unveil={false}
            rounded={false}
            position="50% 50%"
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
                <span className="text-[#E5CA8F] font-medium">Visit</span>
              </nav>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-[-0.028em] drop-shadow-sm max-w-4xl mx-auto leading-[1.12]">
                Getting Here
              </h1>
              <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed font-light">
                About an hour’s drive from South Bangalore, surrounded by peaceful Tamil Nadu countryside.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Centered Editorial Intro Section (Scroll Reveal Effect + Essential Visit Details & Maps Actions) */}
      <section className="py-12 sm:py-16 lg:py-20" aria-labelledby="getting-here-title">
        <div className="wrap max-w-4xl mx-auto text-center">
          <span className="text-[0.7rem] uppercase tracking-[0.25em] font-medium text-[#A7834F]">
            LOCATION &amp; ARRIVAL
          </span>
          <h2
            id="getting-here-title"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-serif text-ink mt-2 tracking-[-0.02em] leading-tight"
          >
            Scenic Country Roads, <span className="italic text-[#A7834F] font-serif">an hour from Bangalore.</span>
          </h2>
          <ScrollRevealText
            content="We're near Denkanikottai and Kuppati in Tamil Nadu, about an hour's drive from south Bangalore. Most of the way is highway; the last stretch runs through farmland."
            className="mt-4 text-base sm:text-lg md:text-xl text-ink/75 leading-relaxed max-w-2xl mx-auto font-light"
          />

          {/* Quick Facts Strip: Where, Nearest town, Check-in */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center max-w-3xl mx-auto">
            <div className="rounded-2xl border border-ink/8 bg-card p-5 shadow-xs">
              <span className="text-[0.7rem] uppercase tracking-wider text-ink-2 font-medium">Where</span>
              <p className="mt-1.5 font-semibold text-ink text-sm sm:text-base">{CONTACT.area}</p>
            </div>
            <div className="rounded-2xl border border-ink/8 bg-card p-5 shadow-xs">
              <span className="text-[0.7rem] uppercase tracking-wider text-ink-2 font-medium">Nearest Town</span>
              <p className="mt-1.5 font-semibold text-ink text-sm sm:text-base">Hosur, then country roads</p>
            </div>
            <div className="rounded-2xl border border-ink/8 bg-card p-5 shadow-xs">
              <span className="text-[0.7rem] uppercase tracking-wider text-ink-2 font-medium">Check-In / Out</span>
              <p className="mt-1.5 font-semibold text-ink text-sm sm:text-base">From {TIMES.checkIn}, out by {TIMES.checkOut}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Full-Frame Dark Theme Map Section */}
      <section className="relative w-full bg-[#131F19] text-[#F5F1E8] pb-10 sm:pb-12 border-y border-white/10" aria-label="Interactive Location Map">
        <div className="relative w-full h-[460px] sm:h-[540px] lg:h-[620px] overflow-hidden bg-[#172A22]">
          <iframe
            title="Nature Senses Farm Stay Exact Pinpoint Location"
            src={CONTACT.mapsEmbed}
            className="absolute inset-0 h-full w-full border-0 [filter:invert(90%)_hue-rotate(180deg)_contrast(105%)_brightness(95%)]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Direct Map & Location Actions in Dark Theme */}
        <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 px-4">
          <a
            href={CONTACT.maps}
            className="btn bg-[#A7834F] text-white hover:bg-[#896A3D] inline-flex items-center gap-2 shadow-sm transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={18} strokeWidth={1.8} aria-hidden="true" />
            <span>Open in Google Maps</span>
          </a>
          <a
            href={waLink(CONTACT.whatsapp, 'Hi, could you share the exact location of Nature Senses Farm Stay?')}
            className="btn border border-white/20 text-[#F5F1E8] hover:bg-white/10 hover:border-white/35 inline-flex items-center gap-2 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} strokeWidth={1.8} aria-hidden="true" />
            <span>Ask for the location pin</span>
          </a>
        </div>
      </section>

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
