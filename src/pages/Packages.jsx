import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import {
  MessageCircle,
  Phone,
  Users,
  Sparkles,
  Building2,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Check,
  CheckCircle2,
  Waves,
  Dumbbell,
  Clock,
  Sun,
} from 'lucide-react';
import { Closing, Photo, ScrollRevealText } from '../components/ui';
import { CONTACT, PHOTOS, waLink } from '../site';

// Curated high-resolution photography from the user's event folder (strictly omitting Farm Kitchen and Toilets)
const EVENT_PHOTOS = [
  {
    id: 'banquet-function',
    title: 'Decorated Indoor Banquet Space',
    category: 'lawns',
    categoryLabel: 'Event Halls',
    desc: 'Spacious banquet hall decorated for celebratory events, family functions, and dining receptions.',
    src: '/img/additional/banquet-function.png',
    alt: 'Decorated indoor banquet hall for functions at Nature Senses Farm Stay',
  },
  {
    id: 'conference-room',
    title: 'Executive Air-Conditioned Conference Hall',
    category: 'lawns',
    categoryLabel: 'Corporate Offsites',
    desc: 'Executive conference room with ergonomic leather seating and presentation equipment.',
    src: '/img/additional/conference-room.png',
    alt: 'Executive air-conditioned conference room at Nature Senses Farm Stay',
  },
  {
    id: 'outdoor-event-lawn',
    title: 'Expansive Outdoor Party Lawn',
    category: 'lawns',
    categoryLabel: 'Party Lawns',
    desc: 'Vast manicured green lawn framed by palms and boundary panels for outdoor gatherings and parties.',
    src: '/img/additional/outdoor-event-lawn.png',
    alt: 'Expansive manicured party lawn at Nature Senses Farm Stay',
  },
  {
    id: 'bonfire',
    title: 'Sunken Stone Bonfire Arena',
    category: 'lawns',
    categoryLabel: 'Evening Gathering',
    desc: 'Rustic sunken amphitheatre stone fire pit with illuminated step seating for evening bonfires and celebrations.',
    src: '/img/additional/bonfire.png',
    alt: 'Sunken stone bonfire pit with lit steps at Nature Senses Farm Stay',
  },
  {
    id: 'walkway',
    title: 'Sunset Garden Walkway',
    category: 'lawns',
    categoryLabel: 'Estate Lawns',
    desc: 'Illuminated stone walkway flanked by lush tropical flora and manicured lawns at golden hour.',
    src: '/img/events/garden-walkway-sunset.png',
    alt: 'Golden hour walkway through lush resort lawns and illuminated lamp posts at Nature Senses Farm Stay',
  },
  {
    id: 'pool',
    title: 'Azure Pool & Sunset Sun Deck',
    category: 'pool',
    categoryLabel: 'Pool & Lounge',
    desc: 'Sprawling curved swimming pool bordered by palm trees and crimson foliage beneath an evening sky.',
    src: '/img/events/swimming-pool.png',
    alt: 'Sparkling resort swimming pool with sun deck and palms at Nature Senses Farm Stay',
  },
  {
    id: 'aerial-night',
    title: 'Estate Nightscape from Above',
    category: 'lawns',
    categoryLabel: 'Aerial & Lawns',
    desc: 'Illuminated aerial panorama showing ambient pathway lights, turquoise pool, and guest cottages.',
    src: '/img/events/resort-aerial-night.png',
    alt: 'Night aerial view of illuminated Nature Senses Farm Stay grounds and glowing swimming pool',
  },
  {
    id: 'aerial-sunset',
    title: 'Golden Hour Estate Panorama',
    category: 'lawns',
    categoryLabel: 'Aerial & Lawns',
    desc: 'Panoramic aerial view over the countryside farm stay, green groves, and expansive event lawns.',
    src: '/img/events/resort-aerial-sunset.png',
    alt: 'Golden sunset aerial panorama of Nature Senses Farm Stay estate',
  },
  {
    id: 'playground-night',
    title: 'Nightlit Gazebos & Lawns',
    category: 'play',
    categoryLabel: 'Play & Recreation',
    desc: 'Warmly lit evening gazebos and open lawns for nighttime celebrations and family games.',
    src: '/img/events/playground-night.png',
    alt: 'Evening illuminated gazebos and garden lawns at Nature Senses Farm Stay',
  },
  {
    id: 'aerial-day',
    title: 'Daylight Resort Grounds & Entrance',
    category: 'lawns',
    categoryLabel: 'Aerial & Lawns',
    desc: 'Welcoming gated driveway, glass conference building, and landscaped event grounds in full daylight.',
    src: '/img/events/resort-aerial-day.png',
    alt: 'Daytime aerial shot of the entrance, conference hall, and cottages at Nature Senses Farm Stay',
  },
  {
    id: 'cottages',
    title: 'Balcony Cottages at Dusk',
    category: 'pool',
    categoryLabel: 'Accommodations',
    desc: 'Two-tier resort cottages with private balconies overlooking peaceful rural horizons.',
    src: '/img/events/cottages-sunset.png',
    alt: 'Two-tier resort cottages with balconies under a sunset sky at Nature Senses Farm Stay',
  },
  {
    id: 'reception',
    title: 'Double-Height Arrival Lounge',
    category: 'pool',
    categoryLabel: 'Indoor Lounge',
    desc: 'Spacious reception lobby featuring soaring ceilings, polished marble, and contemporary lounge seating.',
    src: '/img/events/reception-lobby.png',
    alt: 'Modern high-ceiling reception and lounge at Nature Senses Farm Stay',
  },
  {
    id: 'play-park',
    title: 'Sand Play Park & Circular Pavilions',
    category: 'play',
    categoryLabel: 'Play & Recreation',
    desc: 'Sand playground with slides, swings, merry-go-round, and shaded circular sitting pergolas.',
    src: '/img/events/children-play-area.png',
    alt: 'Children sand playground and round shaded pavilions at Nature Senses Farm Stay',
  },
  {
    id: 'play-lawn',
    title: 'Manicured Play Lawn & Palms',
    category: 'play',
    categoryLabel: 'Play & Recreation',
    desc: 'Vast verdant lawn bordered by tropical palms and landscaped floral beds for outdoor activities.',
    src: '/img/events/children-play-lawn.png',
    alt: 'Wide green play lawn with palm trees and cabana at Nature Senses Farm Stay',
  },
];

const GALLERY_FILTERS = [
  { id: 'all', label: 'All Views' },
  { id: 'lawns', label: 'Aerial & Lawns' },
  { id: 'pool', label: 'Pool & Lounge' },
  { id: 'play', label: 'Play & Recreation' },
];

function PackagesLightbox({ photos, currentIndex, onClose, onNavigate }) {
  const current = photos[currentIndex];

  useEffect(() => {
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + photos.length) % photos.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % photos.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = origOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentIndex, photos.length, onClose, onNavigate]);

  if (!current) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      className="fixed inset-0 z-50 flex flex-col bg-[#172A22]/95 text-white backdrop-blur-md"
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 border-b border-white/10">
        <div className="flex items-center gap-3">
          <span className="text-xs uppercase tracking-[0.2em] font-medium text-[#E5CA8F]">
            {current.categoryLabel}
          </span>
          <span className="text-white/40">•</span>
          <span className="text-xs tracking-wider text-white/70 font-mono">
            {String(currentIndex + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
          </span>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          aria-label="Close photo viewer"
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>

      {/* Main Photo Viewport */}
      <div
        className="relative flex min-h-0 flex-1 items-center justify-center p-3 sm:p-8"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <button
          type="button"
          onClick={() => onNavigate((currentIndex - 1 + photos.length) % photos.length)}
          className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm border border-white/15 transition-all hover:bg-black/90 hover:scale-105"
          aria-label="Previous photo"
        >
          <ChevronLeft size={22} strokeWidth={2} aria-hidden="true" />
        </button>

        <img
          src={current.src}
          alt={current.alt}
          className="max-h-[72vh] max-w-full rounded-xl object-contain shadow-2xl transition-all select-none"
        />

        <button
          type="button"
          onClick={() => onNavigate((currentIndex + 1) % photos.length)}
          className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm border border-white/15 transition-all hover:bg-black/90 hover:scale-105"
          aria-label="Next photo"
        >
          <ChevronRight size={22} strokeWidth={2} aria-hidden="true" />
        </button>
      </div>

      {/* Bottom Caption Bar */}
      <div className="px-4 py-3 sm:py-4 text-center border-t border-white/10 bg-black/30 backdrop-blur-sm">
        <h4 className="text-base sm:text-lg font-semibold text-white tracking-[-0.01em]">
          {current.title}
        </h4>
        <p className="mt-1 text-xs sm:text-sm text-white/70 max-w-xl mx-auto leading-relaxed">
          {current.desc}
        </p>
      </div>
    </div>
  );
}

// Preserved original venue structure for future reference
const VENUES = [
  {
    name: 'Party Lawns & Pergola',
    capacity: 'Up to 200 guests',
    desc: 'Expansive manicured open lawn bordered by greenery, perfect for celebrations, team games, and evening receptions.',
    photo: PHOTOS.pergolaLawn,
    night: 'nightLawn',
  },
  {
    name: 'Conference Room & Clubhouse',
    capacity: '10 to 50 guests',
    desc: 'Glass-fronted, air-conditioned indoor facility equipped with high-speed Wi-Fi, audio-visual support, and lounge seating.',
    photo: PHOTOS.clubhouse,
    night: 'nightClubhouse',
  },
  {
    name: 'Farm Kitchen Dining Hall',
    capacity: 'All event guests',
    desc: 'Spacious dining hall serving wholesome, freshly cooked vegetarian and non-vegetarian buffet spreads.',
    photo: PHOTOS.kitchen,
  },
  {
    name: 'Swimming Pool & Deck',
    capacity: 'Complimentary access',
    desc: 'Curved resort pool with shallow end for children, framed by palms and flowering garden borders.',
    photo: PHOTOS.poolSunset,
    night: 'nightPool',
  },
];

export default function Packages() {
  const [dayOutTab, setDayOutTab] = useState('individual');
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredPhotos = activeFilter === 'all'
    ? EVENT_PHOTOS
    : EVENT_PHOTOS.filter((p) => p.category === activeFilter);

  const dayOutWa = waLink(
    CONTACT.whatsapp,
    'Hi, I would like to book an Individual Day-Out Package at Nature Senses.\nPreference: Veg (₹999 + GST) / Non-Veg (₹1,199 + GST)\nDate: \nNumber of Guests: '
  );

  const teamWa = waLink(
    CONTACT.eventsWhatsapp,
    'Hi, I would like to enquire about a Team Day-Out Package at Nature Senses.\nCompany / Group Name: \nDate: \nEstimated Team Size: '
  );

  const corporateWa = waLink(
    CONTACT.eventsWhatsapp,
    'Hi, I would like to enquire about Corporate Events / Offsites (Starting from ₹799+GST) at Nature Senses.\nDate: \nNumber of Guests: \nCompany Name: '
  );

  const familyWa = waLink(
    CONTACT.eventsWhatsapp,
    'Hi, I would like to enquire about Family & Friends Celebrations (Starting from ₹799+GST) at Nature Senses.\nEvent Type (Birthday/Anniversary/Reunion): \nDate: \nNumber of Guests: '
  );

  const generalWa = waLink(
    CONTACT.eventsWhatsapp,
    'Hi, I would like to get a quote for a Package at Nature Senses.\nType (Day-Out / Events): \nDate: \nGuests: '
  );

  return (
    <Layout page="packages">
      {/* 1. Hero Section: Clean, Cinematic Photography with Breadcrumb & Headline */}
      <section className="relative overflow-hidden bg-wall-2">
        <div className="relative h-[56svh] min-h-[22rem] max-h-[42rem] lg:h-[min(72svh,48rem)] lg:max-h-none">
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
          {/* Subtle gradient vignette for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/50" />

          {/* Centered Hero Content */}
          <div className="absolute inset-0 flex flex-col justify-end pb-12 sm:pb-16 lg:pb-20">
            <div className="wrap w-full text-center">
              <nav
                className="inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md border border-white/15 px-4 py-1.5 text-[0.8rem] uppercase tracking-[0.2em] text-white/80 mb-4"
                aria-label="Breadcrumb"
              >
                <a href="/" className="hover:text-white transition-colors">Home</a>
                <span className="text-white/40">›</span>
                <span className="text-[#E5CA8F] font-medium">Packages</span>
              </nav>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-[-0.028em] drop-shadow-sm max-w-4xl mx-auto leading-[1.12]">
                Gather. Celebrate. Connect.
              </h1>

              <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed font-light">
                Day-out packages, corporate offsites, family reunions, and celebrations in nature.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#E5CA8F]/20 backdrop-blur-md border border-[#E5CA8F]/40 px-4 py-1.5 text-xs sm:text-sm font-medium text-[#E5CA8F]">
                <Sparkles size={14} className="text-[#E5CA8F]" aria-hidden="true" />
                <span>Day-Out from ₹999 + GST • Events from ₹799 + GST</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Editorial Content Brief with Soneva Scroll Reveal Text Effect */}
      <section className="py-14 sm:py-20 lg:py-24" aria-labelledby="packages-title">
        <div className="wrap max-w-3xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#A7834F]">
            GATHER • CELEBRATE • CONNECT
          </span>
          <h2 id="packages-title" className="text-3xl sm:text-4xl md:text-5xl font-semibold text-ink mt-3 tracking-[-0.025em]">
            Packages
          </h2>
          <div className="w-12 h-[2px] bg-[#A7834F]/40 mx-auto my-5 rounded-full" />
          <ScrollRevealText
            content="From meaningful celebrations to productive corporate gatherings, Nature Senses Farm Stay offers a refreshing setting surrounded by nature. With elegant indoor event spaces and expansive outdoor lawns, we can host intimate gatherings from 40 guests to larger events of up to 200 guests, complemented by thoughtfully prepared lunch or dinner from our Farm Kitchen."
            className="text-base sm:text-lg md:text-xl lg:text-[1.25rem] leading-relaxed md:leading-[1.75] tracking-normal"
          />
        </div>
      </section>

      {/* 3. The Two Core Packages (Events & Celebrations and Day-Out Package) */}
      <section className="pb-16 lg:pb-24" aria-labelledby="curated-packages">
        <div className="wrap">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 items-stretch">
            
            {/* ========================================================= */}
            {/* CARD 1: EVENTS & CELEBRATIONS (Starting from ₹799 + GST)  */}
            {/* ========================================================= */}
            <article className="group flex flex-col rounded-sign overflow-hidden border-2 border-ink/10 bg-card shadow-sm hover:shadow-md transition-all duration-300">
              {/* Image with Tag & Capacity */}
              <div className="relative aspect-[16/10] overflow-hidden bg-wall">
                <Photo
                  photo={PHOTOS.banquetFunction}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-[#172A22]/90 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-[#E5CA8F] tracking-wide flex items-center gap-1.5 border border-[#A7834F]/40 shadow-xs">
                  <Building2 size={13} aria-hidden="true" /> Events &amp; Celebrations
                </span>
                <span className="absolute top-4 right-4 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-medium text-white/90">
                  10 to 200 Guests
                </span>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em]">
                      Events &amp; Celebrations
                    </h3>
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-ink-2 leading-relaxed">
                    Corporate offsites, team meetings, family reunions, birthdays, and celebrations in our air-conditioned conference hall and sprawling party lawns.
                  </p>
                </div>

                {/* Pricing Box: Starting from ₹799 + GST */}
                <div className="mt-5 p-4 rounded-xl bg-ink/[0.03] border border-ink/8 text-center flex items-center justify-between gap-4">
                  <div className="text-left">
                    <span className="text-[0.68rem] uppercase tracking-wider font-bold text-[#A7834F] block">
                      PACKAGE PRICING
                    </span>
                    <span className="text-xs text-ink-2">Per person buffet spread</span>
                  </div>
                  <div className="text-right">
                    <div className="flex items-baseline justify-end gap-1">
                      <span className="text-xs text-ink-2 font-medium">Starting from</span>
                      <span className="text-2xl sm:text-3xl font-bold text-ink">₹799</span>
                    </div>
                    <span className="text-[0.7rem] text-ink-2 block">+ GST / person</span>
                  </div>
                </div>

                {/* Features & Inclusions */}
                <div className="mt-5 pt-4 border-t border-ink/10 flex-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#A7834F] block mb-3">
                    Venue Inclusions &amp; Amenities:
                  </span>
                  <ul className="space-y-2.5 text-xs sm:text-sm text-ink-2">
                    <li className="flex items-start gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#A7834F]/15 text-[#A7834F] mt-0.5">
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                      <span className="text-ink font-medium">
                        AC Conference &amp; Banquet Hall <span className="font-normal text-ink-2">(AV setup, presentation screen &amp; Wi-Fi)</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#A7834F]/15 text-[#A7834F] mt-0.5">
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                      <span className="text-ink font-medium">
                        Expansive Outdoor Party Lawns <span className="font-normal text-ink-2">(Manicured green spaces &amp; shaded gazebos)</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#A7834F]/15 text-[#A7834F] mt-0.5">
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                      <span className="text-ink font-medium">
                        Swimming Pool Access <span className="font-normal text-ink-2">(Curved lagoon pool with sun loungers)</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#A7834F]/15 text-[#A7834F] mt-0.5">
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                      <span className="text-ink font-medium">
                        Fresh Farm Kitchen Buffet Dining <span className="font-normal text-ink-2">(Curated Veg &amp; Non-Veg spreads)</span>
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#A7834F]/15 text-[#A7834F] mt-0.5">
                        <Check size={12} strokeWidth={2.5} />
                      </span>
                      <span className="text-ink font-medium">
                        Dedicated Event Coordination <span className="font-normal text-ink-2">(Tailored seating &amp; setup assistance)</span>
                      </span>
                    </li>
                  </ul>
                </div>

                {/* CTAs */}
                <div className="mt-6 pt-5 border-t border-ink/10 flex items-center justify-between gap-3 flex-wrap">
                  <div className="text-xs text-ink-2">
                    <span className="block font-semibold text-ink">From ₹799 + GST</span>
                    <span>10 to 200 Guests</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <a
                      href={corporateWa}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-act text-xs sm:text-sm py-2 px-4 flex items-center gap-1.5"
                    >
                      <MessageCircle size={15} strokeWidth={1.8} aria-hidden="true" /> Enquire on WhatsApp
                    </a>
                    <a
                      href={CONTACT.eventsPhoneHref}
                      className="btn-line text-xs sm:text-sm py-2 px-3.5 hidden sm:inline-flex items-center gap-1.5"
                    >
                      <Phone size={14} strokeWidth={1.8} aria-hidden="true" /> Call
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* ========================================================= */}
            {/* CARD 2: DAY-OUT PACKAGE (Individual & Team Options)       */}
            {/* ========================================================= */}
            <article className="group flex flex-col rounded-sign overflow-hidden border-2 border-[#A7834F]/40 bg-card shadow-sm hover:shadow-md transition-all duration-300">
              {/* Image with Tag & Timings */}
              <div className="relative aspect-[16/10] overflow-hidden bg-wall">
                <Photo
                  photo={PHOTOS.poolSunset}
                  sizes="(min-width: 1024px) 48vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-[#172A22]/90 backdrop-blur-md px-3.5 py-1 text-xs font-semibold text-[#E5CA8F] tracking-wide flex items-center gap-1.5 border border-[#A7834F]/40 shadow-xs">
                  <Sun size={13} aria-hidden="true" /> Day-Out Package
                </span>
                <span className="absolute top-4 right-4 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-medium text-white/90">
                  09:30 AM – 06:30 PM
                </span>
              </div>

              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl sm:text-3xl font-semibold text-ink tracking-[-0.02em]">
                      Day-Out Package
                    </h3>
                  </div>

                  {/* Sub-Tabs: Individual Package vs. Team Package (Future) */}
                  <div className="mt-4 flex rounded-xl bg-ink/[0.04] p-1 border border-ink/8">
                    <button
                      type="button"
                      onClick={() => setDayOutTab('individual')}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all ${
                        dayOutTab === 'individual'
                          ? 'bg-card text-ink shadow-xs border border-ink/10 font-bold'
                          : 'text-ink-2 hover:text-ink'
                      }`}
                    >
                      Individual Package
                    </button>
                    <button
                      type="button"
                      onClick={() => setDayOutTab('team')}
                      className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5 ${
                        dayOutTab === 'team'
                          ? 'bg-card text-ink shadow-xs border border-ink/10 font-bold'
                          : 'text-ink-2 hover:text-ink'
                      }`}
                    >
                      <span>Team Package</span>
                      <span className="text-[0.62rem] uppercase px-1.5 py-0.5 rounded-full bg-amber-500/20 text-amber-800 dark:text-amber-400 font-bold">
                        Future
                      </span>
                    </button>
                  </div>
                </div>

                {/* TAB 1: INDIVIDUAL PACKAGE (ACTIVE) */}
                {dayOutTab === 'individual' && (
                  <div className="flex flex-col flex-1 mt-4">
                    {/* Dual Pricing Grid: Veg 999 + GST / Non-Veg 1,199 + GST */}
                    <div className="grid grid-cols-2 gap-3 p-3 rounded-xl bg-ink/[0.03] border border-ink/8 text-center">
                      <div className="p-3 rounded-lg bg-card border border-ink/5 shadow-2xs">
                        <span className="text-[0.68rem] uppercase tracking-wider font-bold text-emerald-700 dark:text-emerald-400 block mb-1">
                          🌱 Vegetarian
                        </span>
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-2xl sm:text-3xl font-bold text-ink">₹999</span>
                        </div>
                        <span className="text-[0.7rem] text-ink-2 block mt-0.5">+ GST / person</span>
                      </div>

                      <div className="p-3 rounded-lg bg-card border border-ink/5 shadow-2xs">
                        <span className="text-[0.68rem] uppercase tracking-wider font-bold text-amber-800 dark:text-amber-400 block mb-1">
                          🍗 Non-Vegetarian
                        </span>
                        <div className="flex items-baseline justify-center gap-1">
                          <span className="text-2xl sm:text-3xl font-bold text-ink">₹1,199</span>
                        </div>
                        <span className="text-[0.7rem] text-ink-2 block mt-0.5">+ GST / person</span>
                      </div>
                    </div>

                    {/* Exact Inclusions from User Diagram */}
                    <div className="mt-5 pt-4 border-t border-ink/10 flex-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#A7834F] block mb-3">
                        Package Inclusions:
                      </span>
                      <ul className="grid sm:grid-cols-2 gap-2.5 text-xs sm:text-sm text-ink-2">
                        <li className="flex items-center gap-2">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#A7834F]/15 text-[#A7834F]">
                            <Check size={12} strokeWidth={2.5} />
                          </span>
                          <span className="text-ink font-medium">Swimming pool</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#A7834F]/15 text-[#A7834F]">
                            <Check size={12} strokeWidth={2.5} />
                          </span>
                          <span className="text-ink font-medium">Welcome drink</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#A7834F]/15 text-[#A7834F]">
                            <Check size={12} strokeWidth={2.5} />
                          </span>
                          <span className="text-ink font-medium">Lunch</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#A7834F]/15 text-[#A7834F]">
                            <Check size={12} strokeWidth={2.5} />
                          </span>
                          <span className="text-ink font-medium">Access to Gym</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#A7834F]/15 text-[#A7834F]">
                            <Check size={12} strokeWidth={2.5} />
                          </span>
                          <span className="text-ink font-medium">Access to Indoor Games</span>
                        </li>
                        <li className="flex items-center gap-2 sm:col-span-2">
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#A7834F]/15 text-[#A7834F]">
                            <Check size={12} strokeWidth={2.5} />
                          </span>
                          <span className="text-ink font-medium">
                            Hi-tea <span className="font-normal text-ink-2">(Tea or Coffee with one snack)</span>
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* CTAs */}
                    <div className="mt-6 pt-5 border-t border-ink/10 flex items-center justify-between gap-3 flex-wrap">
                      <div className="text-xs text-ink-2">
                        <span className="block font-semibold text-ink">From ₹999 + GST</span>
                        <span>09:30 AM to 06:30 PM</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <a
                          href={dayOutWa}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-act text-xs sm:text-sm py-2 px-4 flex items-center gap-1.5"
                        >
                          <MessageCircle size={15} strokeWidth={1.8} aria-hidden="true" /> Book on WhatsApp
                        </a>
                        <a
                          href={CONTACT.phoneHref}
                          className="btn-line text-xs sm:text-sm py-2 px-3.5 hidden sm:inline-flex items-center gap-1.5"
                        >
                          <Phone size={14} strokeWidth={1.8} aria-hidden="true" /> Call
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 2: TEAM PACKAGE (FUTURE NOT NOW) */}
                {dayOutTab === 'team' && (
                  <div className="flex flex-col flex-1 mt-4">
                    <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/25 text-left mb-4">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-900 dark:text-amber-300 font-bold text-[0.7rem] uppercase tracking-wider mb-2">
                        Future Offering · Not Available Now
                      </span>
                      <h4 className="text-lg font-semibold text-ink">
                        Team Day-Out Package
                      </h4>
                      <p className="mt-1.5 text-xs sm:text-sm text-ink-2 leading-relaxed">
                        Curated for corporate groups, team sports days, and offsite celebrations with dedicated lawn spaces, team-building activities, and custom group menus.
                      </p>
                    </div>

                    <div className="p-4 rounded-xl border border-dashed border-ink/15 bg-ink/[0.02] flex-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-ink block mb-2">
                        Status Note:
                      </span>
                      <p className="text-xs text-ink-2 leading-relaxed">
                        Online package bookings for Team Day-Out are planned for future release. In the meantime, custom team packages and corporate group bookings are accommodated on direct request with our events team.
                      </p>
                    </div>

                    {/* CTAs */}
                    <div className="mt-6 pt-5 border-t border-ink/10 flex items-center justify-between gap-3 flex-wrap">
                      <div className="text-xs text-ink-2">
                        <span className="block font-semibold text-ink">Team Outings</span>
                        <span>Custom Quote on Request</span>
                      </div>
                      <a
                        href={teamWa}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-act text-xs sm:text-sm py-2 px-4 flex items-center gap-1.5"
                      >
                        <MessageCircle size={15} strokeWidth={1.8} aria-hidden="true" /> Inquire for Teams
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </article>

          </div>
        </div>
      </section>

      {/* 
        PRESERVED CODE - Previous Event Spaces & Inclusions section:
        <section className="py-14 sm:py-20 lg:py-24 bg-wall-2/50 border-y border-ink/5" aria-labelledby="venues-title">
          <div className="wrap">
            <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-14">
              <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#A7834F]">
                SPACES & SETTINGS
              </span>
              <h2 id="venues-title" className="text-3xl sm:text-4xl font-semibold text-ink mt-2 tracking-[-0.025em]">
                Event Spaces & Inclusions
              </h2>
              <p className="mt-3 text-ink-2 text-sm sm:text-base leading-relaxed">
                Explore the indoor halls, sprawling lawns, and dining spaces available for your gathering.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {VENUES.map((v) => (
                <article key={v.name} className="flex flex-col rounded-2xl overflow-hidden bg-wall border border-ink/8 shadow-sm">
                  <div className="relative aspect-[4/3] overflow-hidden bg-wall-2">
                    <Photo
                      photo={v.photo}
                      night={v.night}
                      sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw"
                      className="h-full w-full object-cover"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-0.5 text-[0.7rem] font-medium text-white tracking-wide">
                      {v.capacity}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-semibold text-ink text-base tracking-[-0.01em]">
                      {v.name}
                    </h3>
                    <p className="text-ink-2 text-xs leading-relaxed mt-1.5 flex-1">
                      {v.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      */}

      {/* 4. Luxury Event & Estate Photography Gallery */}
      <section className="py-16 sm:py-24 bg-wall-2/40 border-y border-ink/5" aria-labelledby="gallery-title">
        <div className="wrap">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-12">
            <span className="text-xs uppercase tracking-[0.25em] font-medium text-[#A7834F]">
              ESTATE &amp; EVENT GROUNDS
            </span>
            <h2 id="gallery-title" className="text-3xl sm:text-4xl font-semibold text-ink mt-2 tracking-[-0.025em]">
              Atmosphere &amp; Event Spaces
            </h2>
            <div className="w-12 h-[2px] bg-[#A7834F]/40 mx-auto my-4 rounded-full" />
            <p className="text-ink-2 text-sm sm:text-base leading-relaxed">
              Experience our manicured party lawns, sunset pool deck, illuminated evening gazebos, and tranquil countryside settings.
            </p>

            {/* Filter Tabs */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2">
              {GALLERY_FILTERS.map((f) => {
                const count = f.id === 'all'
                  ? EVENT_PHOTOS.length
                  : EVENT_PHOTOS.filter((p) => p.category === f.id).length;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setActiveFilter(f.id)}
                    className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-all ${
                      activeFilter === f.id
                        ? 'bg-[#172A22] text-white shadow-sm dark:bg-[#A7834F] dark:text-white'
                        : 'bg-wall text-ink-2 hover:text-ink hover:bg-wall-2 border border-ink/10'
                    }`}
                  >
                    {f.label} ({count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Luxury Editorial Grid */}
          <div className="grid gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredPhotos.map((photo, idx) => {
              const isHero = activeFilter === 'all' && idx === 0;
              return (
                <article
                  key={photo.id}
                  onClick={() => setLightboxIndex(idx)}
                  className={`group relative overflow-hidden rounded-2xl bg-wall border border-ink/8 shadow-sm cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-ink/20 ${
                    isHero ? 'sm:col-span-2 lg:col-span-3' : 'col-span-1'
                  }`}
                >
                  <div
                    className={`relative overflow-hidden ${
                      isHero
                        ? 'aspect-[16/10] sm:aspect-[21/9] lg:aspect-[2.4/1]'
                        : 'aspect-[4/3]'
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                        photo.id === 'reception' ? 'object-top' : 'object-center'
                      }`}
                    />

                    {/* Subtle hover expand hint (appears only on hover, no text) */}
                    <div className="absolute top-3.5 right-3.5 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <Maximize2 size={13} aria-hidden="true" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <PackagesLightbox
          photos={filteredPhotos}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={(newIdx) => setLightboxIndex(newIdx)}
        />
      )}

      {/* 5. Simple Luxury Inquiry Card (Styled in the new balanced Alabaster + Dark Green style) */}
      <section id="enquire" className="py-16 lg:py-24 scroll-mt-24" aria-labelledby="enquiry-title">
        <div className="wrap">
          <div className="rounded-sign border border-ink/10 bg-card grid gap-10 p-6 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12 shadow-sm">
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#A7834F]">
                CUSTOM EVENT HOSTING
              </span>
              <h2 id="enquiry-title" className="text-3xl sm:text-4xl font-semibold text-ink tracking-[-0.025em] mt-1.5">
                Plan Your Gathering
              </h2>
              <p className="text-ink-2 text-sm sm:text-base mt-2">
                Intimate offsites or grand gatherings up to 200 guests with custom menus from Farm Kitchen.
              </p>

              <dl className="mt-8 border-t border-ink/10">
                <div className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-4">
                  <dt>
                    <span className="block font-semibold text-ink">Package Pricing</span>
                    <span className="text-xs text-ink-2">Day-Out from ₹999 + GST • Events from ₹799 + GST</span>
                  </dt>
                  <dd className="text-right">
                    <span className="text-xl sm:text-2xl font-semibold text-ink">From ₹799</span>
                    <span className="text-xs text-ink-2 ml-1.5">+ GST</span>
                  </dd>
                </div>

                <div className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-4">
                  <dt>
                    <span className="block font-semibold text-ink">Day-Out Inclusions</span>
                    <span className="text-xs text-ink-2">Veg (₹999) / Non-Veg (₹1,199) + GST</span>
                  </dt>
                  <dd className="text-xs sm:text-sm text-ink-2 text-right">
                    Pool Access • Welcome Drink • Lunch • Gym • Indoor Games • Hi-Tea
                  </dd>
                </div>

                <div className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-4">
                  <dt>
                    <span className="block font-semibold text-ink">Events &amp; Celebrations</span>
                    <span className="text-xs text-ink-2">Indoor conference space &amp; outdoor party lawn</span>
                  </dt>
                  <dd className="text-base sm:text-lg font-semibold text-ink text-right">
                    10 to 200 Guests
                  </dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-5 lg:self-center">
              <div className="rounded-2xl sign bg-plate p-7 sm:p-8 shadow-md">
                <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-[-0.015em]">
                  Get a Custom Quote
                </h3>
                <p className="text-plate-muted text-sm sm:text-base mt-2 leading-relaxed">
                  Tell us your estimated date and guest count on WhatsApp for an instant itinerary and customized package pricing.
                </p>
                <a
                  href={generalWa}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-act mt-6 w-full text-center py-3 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} strokeWidth={1.8} aria-hidden="true" /> Enquire on WhatsApp
                </a>
                <p className="text-xs text-plate-muted mt-4 text-center">
                  Prefer to speak with our event manager?{' '}
                  <a href={CONTACT.eventsPhoneHref} className="font-medium text-[#E5CA8F] hover:underline">
                    Call {CONTACT.eventsPhone}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Closing Section */}
      <Closing
        title="Host your gathering in nature"
        text="Speak with our events team on WhatsApp or call to discuss available dates, venues, and curated menus."
        photo={PHOTOS.aerialSunset}
        night="nightWide"
        whatsapp={generalWa}
        whatsappLabel="Enquire on WhatsApp"
        phone={CONTACT.eventsPhone}
        phoneHref={CONTACT.eventsPhoneHref}
      />
    </Layout>
  );
}
