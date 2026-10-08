import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import { MessageCircle, Phone, Users, Sparkles, Building2, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
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
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const filteredPhotos = activeFilter === 'all'
    ? EVENT_PHOTOS
    : EVENT_PHOTOS.filter((p) => p.category === activeFilter);

  const corporateWa = waLink(
    CONTACT.eventsWhatsapp,
    'Hi, I would like to enquire about Corporate Events / Offsites at Nature Senses.\nDate: \nNumber of Guests: \nCompany Name: '
  );

  const familyWa = waLink(
    CONTACT.eventsWhatsapp,
    'Hi, I would like to enquire about Family & Friends Gatherings at Nature Senses.\nEvent Type (Birthday/Anniversary/Reunion): \nDate: \nNumber of Guests: '
  );

  const generalWa = waLink(
    CONTACT.eventsWhatsapp,
    'Hi, I would like to get a quote for a Package at Nature Senses.\nType: \nDate: \nGuests: '
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
                Corporate offsites, family reunions, and celebrations in nature.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#E5CA8F]/20 backdrop-blur-md border border-[#E5CA8F]/40 px-4 py-1 text-xs sm:text-sm font-medium text-[#E5CA8F]">
                <Sparkles size={14} className="text-[#E5CA8F]" aria-hidden="true" />
                <span>Packages starting from ₹799/- per person</span>
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

      {/* 3. The Two Packages Section (Luxury Showcase Cards) */}
      <section className="pb-16 lg:pb-24" aria-labelledby="curated-packages">
        <div className="wrap">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
            {/* Package 1: Corporate Events */}
            <article className="group flex flex-col rounded-sign overflow-hidden border border-ink/10 bg-card shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden bg-wall">
                <Photo
                  photo={PHOTOS.banquetFunction}
                  sizes="(min-width: 768px) 48vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1 text-xs font-medium text-white tracking-wide flex items-center gap-1.5">
                  <Building2 size={13} aria-hidden="true" /> Beyond the Boardroom
                </span>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-ink tracking-[-0.02em]">
                    Corporate Events
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-ink-2 font-medium">10 – 200 Guests</span>
                </div>

                <p className="mt-3 text-ink-2 text-sm sm:text-base leading-relaxed flex-1">
                  Bring your team together in a refreshing countryside setting for meetings, team outings and corporate gatherings. Enjoy versatile indoor and outdoor spaces, recreational facilities, and a thoughtfully prepared lunch or dinner.
                </p>

                <div className="mt-6 pt-5 border-t border-ink/10 flex flex-wrap gap-2 text-xs text-ink-2">
                  <span className="rounded-full bg-ink/[0.05] px-3 py-1 font-medium">AC Conference Hall</span>
                  <span className="rounded-full bg-ink/[0.05] px-3 py-1 font-medium">High-Speed Wi-Fi & AV</span>
                  <span className="rounded-full bg-ink/[0.05] px-3 py-1 font-medium">Team Outings & Lawns</span>
                  <span className="rounded-full bg-ink/[0.05] px-3 py-1 font-medium">Indoor Games & Pool</span>
                  <span className="rounded-full bg-ink/[0.05] px-3 py-1 font-medium">Farm Kitchen Meals</span>
                </div>

                <div className="mt-6 pt-5 border-t border-ink/10 flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <span className="text-xs text-ink-2 block">Starting from</span>
                    <span className="text-xl font-semibold text-ink">₹799</span>
                    <span className="text-xs text-ink-2"> / person + GST</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={corporateWa}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-act text-xs sm:text-sm py-2 px-4 flex items-center gap-1.5"
                    >
                      <MessageCircle size={15} strokeWidth={1.8} aria-hidden="true" /> Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </article>

            {/* Package 2: Family & Friends Get-Togethers */}
            <article className="group flex flex-col rounded-sign overflow-hidden border border-ink/10 bg-card shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative aspect-[16/10] overflow-hidden bg-wall">
                <Photo
                  photo={PHOTOS.outdoorEventLawn || PHOTOS.pergolaLawn}
                  night="nightLawn"
                  sizes="(min-width: 768px) 48vw, 100vw"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-[#A7834F]/90 backdrop-blur-md px-3.5 py-1 text-xs font-medium text-white tracking-wide flex items-center gap-1.5">
                  <Users size={13} aria-hidden="true" /> 40 to 200 Guests
                </span>
              </div>
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-ink tracking-[-0.02em]">
                    Family & Friends Get-Togethers
                  </h3>
                  <span className="text-xs uppercase tracking-wider text-ink-2 font-medium">40 – 200 Guests</span>
                </div>

                <p className="mt-3 text-ink-2 text-sm sm:text-base leading-relaxed flex-1">
                  From birthdays and anniversaries to reunions and family celebrations, enjoy beautiful indoor spaces and expansive outdoor lawns for gatherings of 40 to 200 guests, complete with lunch or dinner.
                </p>

                <div className="mt-6 pt-5 border-t border-ink/10 flex flex-wrap gap-2 text-xs text-ink-2">
                  <span className="rounded-full bg-ink/[0.05] px-3 py-1 font-medium">Expansive Party Lawns</span>
                  <span className="rounded-full bg-ink/[0.05] px-3 py-1 font-medium">Gazebos & Shaded Seating</span>
                  <span className="rounded-full bg-ink/[0.05] px-3 py-1 font-medium">Swimming Pool Access</span>
                  <span className="rounded-full bg-ink/[0.05] px-3 py-1 font-medium">Children's Play Area</span>
                  <span className="rounded-full bg-ink/[0.05] px-3 py-1 font-medium">Veg & Non-Veg Spreads</span>
                </div>

                <div className="mt-6 pt-5 border-t border-ink/10 flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <span className="text-xs text-ink-2 block">Starting from</span>
                    <span className="text-xl font-semibold text-ink">₹799</span>
                    <span className="text-xs text-ink-2"> / person + GST</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={familyWa}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-act text-xs sm:text-sm py-2 px-4 flex items-center gap-1.5"
                    >
                      <MessageCircle size={15} strokeWidth={1.8} aria-hidden="true" /> Enquire on WhatsApp
                    </a>
                  </div>
                </div>
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
                    <span className="text-xs text-ink-2">Per person, with lunch or dinner buffet</span>
                  </dt>
                  <dd className="text-right">
                    <span className="text-2xl sm:text-3xl font-semibold text-ink">₹799</span>
                    <span className="text-xs text-ink-2 ml-1.5">+ GST</span>
                  </dd>
                </div>

                <div className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-4">
                  <dt>
                    <span className="block font-semibold text-ink">Guest Capacity</span>
                    <span className="text-xs text-ink-2">Indoor conference space &amp; outdoor party lawn</span>
                  </dt>
                  <dd className="text-base sm:text-lg font-semibold text-ink text-right">
                    10 to 200 Guests
                  </dd>
                </div>

                <div className="flex items-baseline justify-between gap-6 border-b border-ink/10 py-4">
                  <dt>
                    <span className="block font-semibold text-ink">Package Inclusions</span>
                    <span className="text-xs text-ink-2">Access to venues &amp; dining</span>
                  </dt>
                  <dd className="text-xs sm:text-sm text-ink-2 text-right">
                    Outdoor Lawn Areas • Banquet Space • Buffet Lunch &amp; Dinner
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
