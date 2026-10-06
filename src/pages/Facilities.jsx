import React from 'react';
import Layout from '../components/Layout';
import { Closing, Disc, Facts, PageHero, Photo, SectionHead, ScrollRevealText } from '../components/ui';
import { CONTACT, PHOTOS, TIMES, ZONES } from '../site';
import {
  Waves,
  Dumbbell,
  Crown,
  Dices,
  Sparkles,
  BookOpen,
  Flower2,
  Palmtree,
  Building2,
  TentTree,
  Presentation,
  Wifi,
  Car,
  Flame,
} from 'lucide-react';

// Custom refined SVG line icons for sports & games to match the architectural luxury aesthetic
const TableTennisIcon = ({ size = 22, strokeWidth = 1.5, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="11" cy="10" r="6" />
    <path d="M15 15l4 4" />
    <circle cx="18" cy="7" r="1.5" fill="currentColor" />
  </svg>
);

const BilliardsIcon = ({ size = 22, strokeWidth = 1.5, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const CarromIcon = ({ size = 22, strokeWidth = 1.5, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="2" />
    <circle cx="12" cy="12" r="3" />
    <circle cx="6.5" cy="6.5" r="1" />
    <circle cx="17.5" cy="6.5" r="1" />
    <circle cx="6.5" cy="17.5" r="1" />
    <circle cx="17.5" cy="17.5" r="1" />
  </svg>
);

const KiteIcon = ({ size = 22, strokeWidth = 1.4, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 2L19 9L12 21L5 9L12 2Z" />
    <path d="M5 9H19" />
    <path d="M12 2V21" />
    <path d="M12 21C13.5 22.5 15.5 22.5 17 21" />
  </svg>
);

const FACILITIES_EXPERIENCES = [
  { name: 'Swimming Pool', icon: Waves },
  { name: 'Gym', icon: Dumbbell },
  { name: 'Table Tennis', icon: TableTennisIcon },
  { name: 'Billiards', icon: BilliardsIcon },
  { name: 'Carrom', icon: CarromIcon },
  { name: 'Chess', icon: Crown },
  { name: 'Board Games', icon: Dices },
  { name: 'Kids’ Play Area', icon: KiteIcon },
  { name: 'Library Corner', icon: BookOpen },
  { name: 'Landscaped Gardens', icon: Flower2 },
  { name: 'Outdoor Lawn', icon: Palmtree },
  { name: 'Indoor Event Space', icon: Building2 },
  { name: 'Outdoor Event Space', icon: TentTree },
  { name: 'Conference Room', icon: Presentation },
  { name: 'Evening Bonfire', icon: Flame },
  { name: 'Complimentary Wi-Fi', icon: Wifi },
  { name: 'Parking', icon: Car },
];

// What each facility zone offers, with clean luxury inclusions and no hourly price tags.
const DETAIL = {
  pool: {
    name: 'Pool',
    text: 'A refreshing morning plunge into crystal-clear filtered waters surrounded by lush coconut palms and flowering shrubs, featuring a child-friendly curved shallow end.',
    rows: [
      ['Hours', TIMES.amenities],
      ['Features', 'Filtered water, shallow end for kids & poolside sun loungers'],
      ['Access', 'Complimentary for staying guests & day package visitors'],
    ],
  },
  lawn: {
    name: 'Party and Lawns',
    text: 'Spacious manicured open lawns and shaded pergolas, ideal for outdoor gatherings, team games, celebrations, and relaxing evening walks under illuminated pathways.',
    rows: [
      ['Hours', 'Open all day to guests'],
      ['Capacity', 'Accommodates up to 200–400 guests for events & parties'],
      ['Setting', 'Expansive party lawns, white pergola seating & stone walkways'],
    ],
  },
  games: {
    name: 'Games and Gym',
    text: 'A full-size billiards table, table tennis, carrom, chess and board games, alongside an air-conditioned fitness gym with cardio machines and free weights in shaded comfort.',
    rows: [
      ['Hours', TIMES.amenities],
      ['Indoor Games', 'Billiards table, table tennis, carrom & board games'],
      ['Fitness Gym', 'Cardio machines and strength training free weights'],
      ['Access', 'Complimentary equipment for staying guests & package visitors'],
    ],
  },
  'event-space': {
    name: 'Indoor Event Space',
    text: 'Air-conditioned conference and banquet hall with tall windows, acoustic treatment, and lounge seating, perfect for corporate offsites, workshops, and private celebrations.',
    rows: [
      ['Capacity', '10 to 200 guests with flexible seating layouts'],
      ['Amenities', 'Air conditioning, high-speed Wi-Fi, audio-visual support'],
      ['Ideal for', 'Team offsites, meetings, family gatherings & ceremonies'],
    ],
  },
  play: {
    name: 'Children Play',
    text: 'Sand pits, swings, slides, a see-saw and roundabout nestled safely by the lawns, where children play freely while parents relax under shaded gazebos.',
    rows: [
      ['Hours', 'Open all day to guests'],
      ['Equipment', 'Swings, slides, roundabout, see-saw and sand pit'],
      ['Safety', 'Child-safe enclosed play area with adjacent gazebos'],
      ['Access', 'Free for all staying and day guests'],
    ],
  },
  kitchen: {
    name: 'Kitchen',
    text: 'Good food is an essential part of every getaway. Our Farm Kitchen brings together freshly prepared flavours across South Indian, North Indian and Chinese cuisines, offering something for every palate in a relaxed countryside setting.',
    rows: [
      ['Cuisines', 'South Indian, North Indian & Chinese'],
      ['Setting', 'Spacious countryside dining hall'],
      ['Hours', 'Breakfast, Lunch, Hi-Tea & Dinner'],
    ],
  },
};

const RULES = [
  ['Timings', `Pool, gym and indoor games are open ${TIMES.amenities}.`],
  ['Pool', 'Proper swimwear is required. Children under 12 must be with an adult.'],
  ['Food and drink', 'Outside food, drinks and caterers are not allowed.'],
  ['Booking', `Book in advance by phone (${CONTACT.phone}) or email.`],
];

const FACILITY_ZONES = [
  { n: 1, key: 'pool', name: 'Pool', short: 'Pool' },
  { n: 2, key: 'lawn', name: 'Party and Lawns', short: 'Party and Lawns' },
  { n: 3, key: 'games', name: 'Games and Gym', short: 'Games and Gym' },
  { n: 4, key: 'event-space', name: 'Indoor Event Space', short: 'Indoor Event Space' },
  { n: 5, key: 'play', name: 'Children Play', short: 'Children Play' },
  { n: 6, key: 'kitchen', name: 'Kitchen', short: 'Kitchen' },
];

const FACILITY_PHOTOS = {
  pool: PHOTOS.poolSunset,
  lawn: PHOTOS.outdoorEventLawn || PHOTOS.pergolaLawn,
  games: PHOTOS.gym || PHOTOS.tableTennis,
  'event-space': PHOTOS.banquetFunction || PHOTOS.lobby,
  play: PHOTOS.playSunset,
  kitchen: PHOTOS.kitchen,
};

export default function Facilities() {
  return (
    <Layout page="facilities">
      {/* 
        PRESERVED CODE - Previous PageHero style:
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
      */}

      {/* 1. Hero Section: Clean, Cinematic Photography with Breadcrumb & Headline */}
      <section className="relative overflow-hidden bg-wall-2">
        <div className="relative h-[56svh] min-h-[22rem] max-h-[42rem] lg:h-[min(72svh,48rem)] lg:max-h-none">
          <Photo
            photo={PHOTOS.aerialDay}
            night="nightEstate"
            eager
            unveil={false}
            rounded={false}
            position="50% 55%"
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
                <span className="text-[#E5CA8F] font-medium">Facilities</span>
              </nav>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-[-0.028em] drop-shadow-sm max-w-4xl mx-auto leading-[1.12]">
                Facilities & Experiences
              </h1>
              <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed font-light">
                Everything you need to relax, play and make the most of your stay, surrounded by the peaceful charm of nature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Facilities & Experiences Section - Compact Luxury Architectural Layout (Preserves 6-6-4 structure, reduced scale) */}
      <section className="py-10 sm:py-14 lg:py-18" aria-labelledby="facilities-intro-title">
        <div className="wrap max-w-5xl mx-auto text-center px-4 sm:px-6">
          <span className="text-[0.7rem] uppercase tracking-[0.25em] font-medium text-[#A7834F]">
            Estate Amenities &amp; Activities
          </span>
          <h2
            id="facilities-intro-title"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-serif text-ink mt-2 tracking-[-0.02em] leading-tight"
          >
            Facilities &amp; <span className="italic text-[#A7834F] font-serif">Experiences.</span>
          </h2>
          <ScrollRevealText
            content="Everything you need to relax, play and make the most of your stay, surrounded by the peaceful charm of nature."
            className="mt-3 text-sm sm:text-base md:text-lg text-ink/75 leading-relaxed max-w-xl mx-auto font-light"
          />

          {/* Concentric Double-Ring Luxury Amenities Grid - Compact 6-6-4 structure directly on page */}
          <div className="mt-8 sm:mt-11 flex flex-wrap justify-center gap-x-4 sm:gap-x-6 lg:gap-x-7 xl:gap-x-8 gap-y-6 sm:gap-y-7 lg:gap-y-8 max-w-5xl mx-auto">
            {FACILITIES_EXPERIENCES.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.name}
                  className="group flex flex-col items-center text-center w-[calc(50%-0.6rem)] sm:w-[calc(25%-0.85rem)] lg:w-[110px] xl:w-[118px] cursor-default"
                >
                  {/* Concentric Double-Ring Circle (Refined, Compact Scale) */}
                  <div className="relative flex h-14 w-14 sm:h-15 sm:w-15 lg:h-16 lg:w-16 items-center justify-center rounded-full border border-[#A7834F]/45 p-1.5 transition-all duration-300 group-hover:scale-105 group-hover:border-[#A7834F]">
                    <div className="flex h-full w-full items-center justify-center rounded-full border border-[#A7834F]/30 text-[#A7834F] transition-all duration-300 group-hover:bg-[#172A22] group-hover:border-[#172A22] group-hover:text-[#F5F1E8]">
                      <IconComponent size={20} strokeWidth={1.4} aria-hidden="true" />
                    </div>
                  </div>

                  {/* Clean Tracked Uppercase Label */}
                  <span className="mt-2.5 text-[0.62rem] sm:text-[0.66rem] lg:text-[0.69rem] font-semibold uppercase tracking-[0.14em] text-ink/90 transition-colors duration-200 group-hover:text-[#A7834F] leading-tight">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-28" aria-labelledby="zones-title">
        <div className="wrap">
          <SectionHead id="zones-title" title="Around the estate" intro="Numbered as on the signs you will see when you arrive." />
          <nav aria-label="Zones" className="mt-8 flex flex-wrap gap-2">
            {FACILITY_ZONES.map((z) => (
              <a key={z.key} href={`#${z.key}`} className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink/[0.06] py-1 pl-1 pr-4 font-medium transition-colors hover:bg-ink/[0.1]">
                <Disc n={z.n} /> {z.short}
              </a>
            ))}
          </nav>

          <div className="mt-14 space-y-16 lg:mt-20 lg:space-y-24">
            {FACILITY_ZONES.map((z, i) => {
              const d = DETAIL[z.key];
              const photo = FACILITY_PHOTOS[z.key];
              return (
                <section key={z.key} id={z.key} className="grid scroll-mt-24 items-center gap-8 lg:grid-cols-12 lg:gap-12" aria-labelledby={`h-${z.key}`}>
                  {photo ? (
                    <Photo
                      photo={photo}
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
                    <h3 id={`h-${z.key}`} className="sign inline-flex items-start gap-4 px-5 py-4 text-[clamp(1.5rem,2.4vw,2.1rem)] font-semibold leading-[1.1] tracking-[-0.025em]"><Disc n={z.n} lg className="mt-0.5" /><span>{d.name || z.name}</span></h3>
                    <p className="t-lede muted mt-5">{d.text}</p>
                    <Facts rows={d.rows} className="mt-7" />
                  </div>
                </section>
              );
            })}
          </div>
          <p className="muted mt-16">Planning a celebration or gathering? Indoor and outdoor spaces accommodate 10 to 400 guests. <a href="/packages/" className="link">Explore Event Packages</a></p>
        </div>
      </section>

      {/* 4. Evening Bonfire & Amphitheatre Arena Showcase */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[#172A22] text-[#F5F1E8]" aria-labelledby="bonfire-section-title">
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14 items-center">
            <div className="lg:col-span-7">
              <Photo
                photo={PHOTOS.bonfire}
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="aspect-[4/3] rounded-2xl sm:rounded-3xl shadow-xl border border-white/10"
              />
            </div>
            <div className="lg:col-span-5">
              <span className="text-[0.7rem] uppercase tracking-[0.25em] font-medium text-[#E5CA8F]">
                Twilight &amp; Night Leisure
              </span>
              <h2 id="bonfire-section-title" className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white mt-2.5 leading-tight">
                Sunken Bonfire &amp; <span className="italic text-[#E5CA8F]">Amphitheatre.</span>
              </h2>
              <p className="mt-4 text-white/80 text-sm sm:text-base leading-relaxed font-light">
                As twilight settles over the countryside, gather around the warm crackle of our sunken stone fire pit. Framed by illuminated step seating and open starry skies, it offers a magical setting for musical evenings, storytelling, and relaxed conversations with family and friends.
              </p>
              <div className="mt-6 pt-5 border-t border-white/10 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-white/10 px-3.5 py-1.5 font-medium text-white/90">Curved Stone Step Seating</span>
                <span className="rounded-full bg-white/10 px-3.5 py-1.5 font-medium text-white/90">Warm LED Step Lighting</span>
                <span className="rounded-full bg-white/10 px-3.5 py-1.5 font-medium text-white/90">Starry Countryside Nights</span>
              </div>
            </div>
          </div>
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
