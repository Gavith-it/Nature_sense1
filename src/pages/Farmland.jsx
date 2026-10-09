import React from 'react';
import {
  MessageCircle,
  Phone,
  Trees,
  Sprout,
  ShieldCheck,
  Sparkles,
  Waves,
  Sun,
  MapPin,
  CheckCircle2,
  Building,
  HeartHandshake,
} from 'lucide-react';
import Layout from '../components/Layout';
import { Closing, Photo, ScrollRevealText } from '../components/ui';
import { CONTACT, FARMLAND_CONTACT, PHOTOS, waLink } from '../site';

const METRICS = [
  {
    icon: ShieldCheck,
    value: '100+ Acres',
    label: 'Gated & Fenced Community',
    detail: 'Perimeter fencing & 24/7 security staff',
  },
  {
    icon: Sprout,
    value: '40+ Trees',
    label: 'Per Farmland Plot',
    detail: '20 Teak/Timber + 20 Fruit-bearing trees',
  },
  {
    icon: Sun,
    value: '10°C – 30°C',
    label: 'Year-Round Climate',
    detail: 'Pleasant countryside weather near Bangalore',
  },
  {
    icon: Waves,
    value: 'Lake & Gaushala',
    label: 'Natural Estate Amenities',
    detail: 'Central lake, walking trails & ethical dairy',
  },
];

const FARMLAND_PILLARS = [
  {
    badge: '20 Teak + 20 Fruit Trees',
    title: 'Nurtured Tree Orchard',
    icon: Sprout,
    image: '/img/farmland/orchard-trees.jpg',
    description:
      'Each plot is enriched with approximately 40 to 50 mature plantation trees—including 20 teak and timber trees plus 20 fruit-bearing trees (mango, guava, chikoo)—supported by drip irrigation and dedicated farm maintenance.',
    highlights: ['Organic Fertile Soil', 'Drip Irrigation', 'Long-Term Timber Asset'],
  },
  {
    badge: 'Design Your Retreat',
    title: 'Build Your Dream Farmhouse',
    icon: Building,
    image: '/img/farmland/luxury-villa.jpg',
    description:
      'Total flexibility to construct your personal countryside sanctuary, eco-villa, or weekend home for family escapes. You also have the freedom to host on platforms like Airbnb, subject to applicable approvals.',
    highlights: ['Flexible Architecture', 'Weekend Living', 'Rental Potential'],
  },
  {
    badge: 'Scenic Waterfront',
    title: 'Private Estate Lake & Walking Trails',
    icon: Waves,
    image: '/img/farmland/estate-lake.jpg',
    description:
      'At the heart of Nature Senses lies a serene freshwater lake featuring a wooden viewing deck, walking pathways, and blooming greenery—creating a refreshing oasis for morning walks and peaceful sunset reflections.',
    highlights: ['Waterfront Deck', 'Morning Walking Trails', 'Tranquil Serenity'],
  },
  {
    badge: 'Traditional Country Life',
    title: 'Traditional Farm Gaushala',
    icon: HeartHandshake,
    image: '/img/farmland/organic-gaushala.jpg',
    description:
      'A dedicated Gaushala where indigenous cattle are nurtured with natural chemical-free fodder in open green pastures. Plot owners enjoy a deep connection to authentic Indian farm heritage and fresh dairy produce.',
    highlights: ['Indigenous Cattle Care', 'Chemical-Free Fodder', 'Pure Country Living'],
  },
];

const DISTANCES = [
  { km: '45 KM', location: 'Electronics City', time: '~55–65 min', via: 'Direct Hosur / Thally Rd' },
  { km: '25 KM', location: 'Hosur Town', time: '~30–35 min', via: 'Denkanikottai Main Rd' },
  { km: '25 KM', location: 'Anekal', time: '~35 min', via: 'Scenic Countryside Route' },
  { km: '29 KM', location: 'Attibele Junction', time: '~40 min', via: 'Quick NH 44 Access' },
];

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Choose Your Plot',
    desc: 'Select from quarter-acre (10,890 sq.ft.), half-acre, or 1-acre demarcated plots with clear boundaries and fertile soil.',
  },
  {
    num: '02',
    title: 'Plan Your Farmhouse',
    desc: 'Design your custom countryside villa, wooden cottage, or organic farm retreat tailored to your family’s vision.',
  },
  {
    num: '03',
    title: 'Enjoy & Appreciate',
    desc: 'Unwind on weekends or explore hosting rental income, while our professional team manages day-to-day plantation upkeep.',
  },
];

export default function Farmland() {
  const whatsappFarmland = waLink(
    FARMLAND_CONTACT.whatsapp,
    'Hi, I would like to enquire about Nature Senses Managed Farmlands plots and schedule a site visit.'
  );

  return (
    <Layout page="farmland">
      {/* 1. Hero Section: Clean, Cinematic Farmland Sunset Photography with Breadcrumb & Headline */}
      <section className="relative overflow-hidden bg-wall-2">
        <div className="relative h-[56svh] min-h-[22rem] max-h-[42rem] lg:h-[min(70svh,46rem)] lg:max-h-none">
          <Photo
            photo={PHOTOS.farmlandHero}
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
                <span className="text-[#E5CA8F] font-medium">Farmland</span>
              </nav>

              <span className="block text-xs sm:text-sm uppercase tracking-[0.28em] font-medium text-[#E5CA8F] mb-2 drop-shadow-sm">
                Nature Senses Lifestyle
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white tracking-[-0.028em] drop-shadow-sm max-w-4xl mx-auto leading-[1.12]">
                Nature Senses Managed Farmlands
              </h1>

              <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed font-light">
                Experience the Farm Life. Own a Piece of It.
              </p>

              <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#E5CA8F]/20 backdrop-blur-md border border-[#E5CA8F]/40 px-4 py-1 text-xs sm:text-sm font-medium text-[#E5CA8F]">
                <Trees size={14} className="text-[#E5CA8F]" aria-hidden="true" />
                <span>Quarter-Acre Managed Farmland Plots</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Luxury Emerald Forest & Champagne Gold Section */}
      <section
        className="relative py-14 sm:py-20 lg:py-24 bg-[#0D1C15] text-[#FBF9F5] overflow-hidden"
        aria-labelledby="farmland-brief-title"
      >
        {/* Subtle Ambient Radial Lighting */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-[#183827]/40 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/2 -right-40 h-[400px] w-[500px] rounded-full bg-[#E5CA8F]/5 blur-[100px]" />

        <div className="wrap relative max-w-5xl mx-auto px-4 sm:px-6">
          {/* Editorial Section Header */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[0.7rem] uppercase tracking-[0.28em] font-semibold text-[#E5CA8F]">
              NATURE SENSES MANAGED FARMLANDS
            </span>

            <h2
              id="farmland-brief-title"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-serif text-white mt-2 tracking-[-0.02em] leading-tight"
            >
              Experience the Farm Life,{' '}
              <span className="italic text-[#E5CA8F] font-serif">Own a Piece of It.</span>
            </h2>

            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#E5CA8F] to-transparent mx-auto my-5 rounded-full" />

            <ScrollRevealText
              theme="dark"
              content="Thoughtfully planned farmland plots for those seeking to reconnect with nature, build a personal countryside haven, and own an appreciating green asset with complete turnkey maintenance."
              className="text-base sm:text-lg md:text-xl leading-relaxed md:leading-[1.75] tracking-normal text-[#D5DDD7] font-light"
            />
          </div>

          {/* At-a-Glance Estate Metrics Strip (Emerald & Gold) */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {METRICS.map((m) => {
              const Icon = m.icon;
              return (
                <div
                  key={m.label}
                  className="rounded-2xl border border-[#E5CA8F]/25 bg-[#14261E]/90 p-5 sm:p-6 backdrop-blur-md shadow-lg transition-all duration-300 hover:border-[#E5CA8F]/50 hover:bg-[#182F25]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E5CA8F]/15 text-[#E5CA8F] mb-3">
                    <Icon size={22} strokeWidth={1.6} aria-hidden="true" />
                  </div>
                  <span className="block text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {m.value}
                  </span>
                  <span className="mt-1 block text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#E5CA8F]">
                    {m.label}
                  </span>
                  <p className="mt-1 text-xs text-[#A3B5AA] leading-normal">{m.detail}</p>
                </div>
              );
            })}
          </div>

          {/* 4 Core Pillars with AI-Generated Photography & Gold Accents */}
          <div className="mt-14 sm:mt-20 grid gap-8 sm:grid-cols-2 text-left">
            {FARMLAND_PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#E5CA8F]/20 bg-[#14261E]/85 shadow-xl transition-all duration-300 hover:border-[#E5CA8F]/50 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.4)]"
                >
                  {/* Photo Header */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14261E] via-transparent to-black/25" />
                    <span className="absolute top-3.5 left-3.5 rounded-full bg-[#0D1C15]/85 backdrop-blur-md border border-[#E5CA8F]/40 px-3.5 py-1 text-[0.7rem] uppercase tracking-wider font-semibold text-[#E5CA8F]">
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight flex items-center gap-2.5">
                      <Icon className="text-[#E5CA8F] shrink-0" size={22} strokeWidth={1.6} />
                      <span>{pillar.title}</span>
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-[#C2CDC5] leading-relaxed flex-1">
                      {pillar.description}
                    </p>

                    {/* Feature Highlights Pills */}
                    <div className="mt-6 pt-4 border-t border-[#E5CA8F]/15 flex flex-wrap items-center gap-2 text-xs text-[#E5CA8F]">
                      {pillar.highlights.map((h, i) => (
                        <span
                          key={h}
                          className="inline-flex items-center gap-1 rounded-full bg-[#E5CA8F]/10 px-2.5 py-1 text-[0.72rem] font-medium"
                        >
                          <CheckCircle2 size={12} className="text-[#E5CA8F]" />
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Location & Bangalore Driving Distance Strip */}
          <div className="mt-14 sm:mt-20 rounded-2xl border border-[#E5CA8F]/25 bg-[#12231A]/95 p-6 sm:p-8 backdrop-blur-md shadow-lg">
            <div className="text-center max-w-xl mx-auto mb-6">
              <span className="text-[0.68rem] uppercase tracking-[0.25em] font-medium text-[#E5CA8F]">
                Location &amp; Connectivity
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-white mt-1">
                Peacefully Secluded, Yet Effortlessly Connected
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-[#A3B5AA]">
                Located near Denkanikottai &amp; Kuppati, an easy scenic drive from South Bangalore.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center">
              {DISTANCES.map((d) => (
                <div
                  key={d.location}
                  className="rounded-xl border border-white/10 bg-black/25 p-4 transition-colors hover:border-[#E5CA8F]/30"
                >
                  <span className="block text-2xl sm:text-3xl font-bold text-[#E5CA8F]">
                    {d.km}
                  </span>
                  <span className="mt-1 block text-xs uppercase tracking-wider font-semibold text-white/90">
                    {d.location}
                  </span>
                  <span className="text-[0.72rem] text-[#A3B5AA] block mt-0.5">{d.time}</span>
                  <span className="text-[0.68rem] text-[#7A8F82] block mt-1">{d.via}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3-Step Journey & Trust CTA Box */}
          <div className="mt-14 sm:mt-20 rounded-3xl border border-[#E5CA8F]/35 bg-gradient-to-b from-[#182F24] via-[#14261E] to-[#0D1C15] p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#E5CA8F]/10 blur-3xl rounded-full" />

            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E5CA8F]/15 border border-[#E5CA8F]/35 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#E5CA8F] mb-4">
              <Sparkles size={14} /> How Farmland Ownership Works
            </span>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white tracking-tight">
              “Own the Land. Grow with Nature.{' '}
              <span className="italic text-[#E5CA8F]">Create Your Escape.”</span>
            </h3>

            {/* 3 Simple Steps */}
            <div className="mt-8 grid gap-5 sm:grid-cols-3 text-left max-w-4xl mx-auto">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.num}
                  className="rounded-xl border border-white/10 bg-black/30 p-5 backdrop-blur-sm"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#E5CA8F] font-bold text-[#0D1C15] text-sm mb-3">
                    {step.num}
                  </span>
                  <h4 className="text-base font-semibold text-white">{step.title}</h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-[#C2CDC5] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Customer Review Endorsement */}
            <div className="mt-9 inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-white/5 border border-white/10 px-5 py-2.5 text-xs sm:text-sm text-[#D5DDD7]">
              <div className="flex text-[#E5CA8F]" aria-label="5 stars">
                {'★'.repeat(5)}
              </div>
              <span className="font-semibold text-white">Rated 4.5 / 5</span>
              <span className="text-[#A3B5AA]">•</span>
              <span>46+ Farmland Owners</span>
              <span className="text-[#A3B5AA]">•</span>
              <span className="italic text-[#E5CA8F]">
                “100-acre fenced estate with 24/7 security &amp; professional team”
              </span>
            </div>

            {/* Direct Contact Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href={whatsappFarmland}
                className="inline-flex items-center gap-2 rounded-full bg-[#E5CA8F] px-6 py-3.5 text-sm font-semibold text-[#0D1C15] shadow-lg transition-all duration-200 hover:bg-[#F3DEB2] hover:scale-105"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={18} strokeWidth={2} aria-hidden="true" />
                <span>Book a Site Visit on WhatsApp</span>
              </a>
              <a
                href={FARMLAND_CONTACT.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-[#E5CA8F]/50 px-6 py-3.5 text-sm font-semibold text-[#E5CA8F] transition-all duration-200 hover:bg-[#E5CA8F]/15 hover:border-[#E5CA8F]"
              >
                <Phone size={18} strokeWidth={1.8} aria-hidden="true" />
                <span>Call {FARMLAND_CONTACT.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Closing title="Stay with nature. Own a piece of it." photo={PHOTOS.farmlandClosing} />
    </Layout>
  );
}
