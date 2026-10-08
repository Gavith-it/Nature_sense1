import React, { useState, useEffect, useRef } from 'react';
import { PHOTOS } from '../site';
import { Clock, Check, ChevronLeft, ChevronRight } from 'lucide-react';

export const ESTATE_STEPS = [
  {
    id: 'arrival-lawns',
    timeNum: '09:30',
    timePeriod: 'AM',
    timeLabel: '09:30',
    periodBadge: '🌿 MORNING ARRIVAL',
    eyebrow: 'WELCOME DRINK & OPEN GROUNDS',
    title: 'Clubhouse & Lawns Exploration',
    shortTitle: 'Clubhouse & Lawns',
    quote: 'Arrive to refreshing countryside welcome drinks, explore scenic greenery and open lawns, and soak in the fresh morning air.',
    hours: '09:30 AM – 06:30 PM',
    badge: 'Included in Package',
    tag: 'Zone 01 · Clubhouse & Lawns',
    photo: PHOTOS.pergolaLawn || PHOTOS.gardenPath,
    zoneKey: 'lawn',
  },
  {
    id: 'games-gym',
    timeNum: '11:30',
    timePeriod: 'AM',
    timeLabel: '11:30',
    periodBadge: '🎯 INDOOR RECREATION',
    eyebrow: 'CLUBHOUSE GAMES & FITNESS',
    title: 'Clubhouse Games & Fitness Gym',
    shortTitle: 'Games & Gym',
    quote: 'Challenge friends to a frame of billiards, table tennis, or carrom in shaded comfort, or stay energized at the fitness gym.',
    hours: '09:30 AM – 06:30 PM',
    badge: 'All Equipment Included',
    tag: 'Zone 07 · Games & Gym',
    photo: PHOTOS.tableTennis || PHOTOS.clubhouse,
    zoneKey: 'games',
  },
  {
    id: 'lunch',
    timeNum: '01:00',
    timePeriod: 'PM',
    timeLabel: '01:00',
    periodBadge: '🍽️ BUFFET LUNCH',
    eyebrow: 'COUNTRYSIDE REGIONAL FLAVOURS',
    title: 'Farm Kitchen Buffet Lunch Feast',
    shortTitle: 'Buffet Lunch',
    quote: 'Freshly prepared South Indian and regional specialties served hot, prepared with local vegetables and countryside care.',
    hours: '09:30 AM – 06:30 PM',
    badge: 'Buffet Lunch Included',
    tag: 'Zone 06 · Farm Kitchen',
    photo: PHOTOS.kitchen,
    zoneKey: 'kitchen',
  },
  {
    id: 'swimming',
    timeNum: '03:30',
    timePeriod: 'PM',
    timeLabel: '03:30',
    periodBadge: '☀️ AFTERNOON SPLASH',
    eyebrow: 'BENEATH THE PALM CANOPY',
    title: 'Curved Lagoon Swimming Pool',
    shortTitle: 'Lagoon Pool',
    quote: 'An invigorating afternoon plunge into crystal-clear filtered waters surrounded by lush coconut palms and flowering shrubs.',
    hours: '09:30 AM – 06:30 PM',
    badge: 'Pool Access Included',
    tag: 'Zone 03 · Swimming Pool',
    photo: PHOTOS.poolSunset,
    zoneKey: 'pool',
  },
  {
    id: 'hi-tea',
    timeNum: '05:30',
    timePeriod: 'PM',
    timeLabel: '05:30',
    periodBadge: '☕ EVENING HI-TEA',
    eyebrow: 'SUNSET REFRESHMENT & SNACKS',
    title: 'Evening Hi-Tea & Hot Snacks',
    shortTitle: 'Evening Hi-Tea',
    quote: 'Unwind at golden hour with freshly brewed South Indian filter coffee, tea, and warm traditional snacks like crisp bhajji and cutlets.',
    hours: '09:30 AM – 06:30 PM',
    badge: 'Hi-Tea Included in Package',
    tag: 'Zone 06 · Farm Kitchen & Terrace',
    photo: PHOTOS.outdoorRestaurant || PHOTOS.teaTray,
    zoneKey: 'kitchen',
  },
  {
    id: 'play-evening',
    timeNum: '06:30',
    timePeriod: 'PM',
    timeLabel: '06:30',
    periodBadge: '🌇 TWILIGHT LEISURE',
    eyebrow: 'FAMILY PLAY & EVENING STROLL',
    title: 'Children’s Play Park & Evening Leisure',
    shortTitle: 'Play & Twilight',
    quote: 'Swings, slides, and lawn play for children while families enjoy twilight strolls across illuminated walking pathways.',
    hours: '09:30 AM – 06:30 PM',
    badge: 'Full Access Included',
    tag: 'Zone 04 · Children’s Play & Lawns',
    photo: PHOTOS.playSunset || PHOTOS.playLawn,
    zoneKey: 'play',
  },
];

export default function SunEstateJourney() {
  const [activeIndex, setActiveIndex] = useState(0); // default to 09:30 AM arrival
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const isSeekingRef = useRef(false);

  // SVG Parametric Arc coordinates for 7 points inside viewBox 0 0 340 145
  const cx = 170;
  const cy = 125;
  const rx = 145;
  const ry = 88;

  const points = ESTATE_STEPS.map((_, i) => {
    const t = i / (ESTATE_STEPS.length - 1);
    const angle = Math.PI - t * Math.PI;
    const x = cx + rx * Math.cos(angle);
    const y = cy - ry * Math.sin(angle);
    return { x, y, t };
  });

  const arcPath = `M ${cx - rx} ${cy} A ${rx} ${ry} 0 0 1 ${cx + rx} ${cy}`;

  // Continuous Sun coordinates along the arc trajectory
  const sunAngle = Math.PI - scrollProgress * Math.PI;
  const sunX = cx + rx * Math.cos(sunAngle);
  const sunY = cy - ry * Math.sin(sunAngle);

  // Natural scroll handler with calibrated distance and zero lag
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (isSeekingRef.current) return;
      if (!containerRef.current) return;
      if (window.innerWidth < 1024) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) {
            ticking = false;
            return;
          }

          const rect = containerRef.current.getBoundingClientRect();
          const totalScrollable = rect.height - window.innerHeight;
          if (totalScrollable <= 0) {
            ticking = false;
            return;
          }

          // Calculate continuous progress from 0.0 to 1.0
          const progress = Math.min(Math.max(-rect.top / totalScrollable, 0), 1);
          setScrollProgress(progress);

          // Center-threshold rounding so each step transitions smoothly
          const stepFraction = progress * (ESTATE_STEPS.length - 1);
          const newIndex = Math.min(
            Math.max(Math.round(stepFraction), 0),
            ESTATE_STEPS.length - 1
          );

          setActiveIndex(newIndex);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToStep = (index) => {
    const targetProgress = index / (ESTATE_STEPS.length - 1);
    setActiveIndex(index);
    setScrollProgress(targetProgress);

    if (!containerRef.current || window.innerWidth < 1024) return;

    isSeekingRef.current = true;
    const rect = containerRef.current.getBoundingClientRect();
    const sectionTop = window.scrollY + rect.top;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetY = sectionTop + targetProgress * totalScrollable;

    window.scrollTo({ top: targetY, behavior: 'smooth' });
    setTimeout(() => {
      isSeekingRef.current = false;
    }, 600);
  };

  const current = ESTATE_STEPS[activeIndex];

  return (
    <div
      ref={containerRef}
      className="relative bg-wall text-ink transition-colors duration-500"
      style={{
        // Calibrated sticky scroll distance: ~230vh on desktop (never stuck or overlong)
        minHeight: typeof window !== 'undefined' && window.innerWidth >= 1024 ? `${ESTATE_STEPS.length * 36}vh` : 'auto',
      }}
    >
      {/* Sticky container on desktop, clean flowing section on mobile */}
      <div className="lg:sticky lg:top-20 lg:min-h-[calc(100vh-5rem)] flex flex-col justify-center py-6 sm:py-8 lg:py-12">
        {/* Expanded width container up to 1440px */}
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 lg:px-12 xl:px-16">
          
          {/* Top Header Bar matching reference */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between border-b border-ink/10 pb-3 sm:pb-4 mb-5 sm:mb-8">
            <div>
              <span className="text-[0.68rem] tracking-[0.25em] uppercase font-semibold text-[#A7834F]">
                DAY OUT PACKAGE ITINERARY · 09:30 AM – 06:30 PM
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-ink mt-0.5 sm:mt-1 tracking-tight">
                Package <span className="italic font-serif text-[#A7834F]">Itinerary &amp; Activities</span>
              </h2>
            </div>
            
            <div className="mt-3 sm:mt-0 flex items-center justify-between sm:justify-end gap-4 sm:gap-6">
              <div className="text-left sm:text-right">
                <span className="text-[0.62rem] sm:text-[0.65rem] tracking-[0.2em] uppercase font-medium text-ink-2 block">
                  SCROLL OR TAP TO EXPLORE
                </span>
                <span className="text-xs sm:text-sm font-serif text-ink mt-0.5 block">
                  <span className="italic text-ink-2 mr-2 font-serif">{current.shortTitle}</span>
                  <span className="font-semibold text-ink">0{activeIndex + 1}</span>
                  <span className="text-ink-2/50"> / 0{ESTATE_STEPS.length}</span>
                </span>
              </div>

              {/* Prev / Next controls */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => goToStep(Math.max(0, activeIndex - 1))}
                  disabled={activeIndex === 0}
                  className="p-1.5 sm:p-2 rounded-full border border-ink/15 text-ink hover:bg-ink/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  aria-label="Previous amenity"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={() => goToStep(Math.min(ESTATE_STEPS.length - 1, activeIndex + 1))}
                  disabled={activeIndex === ESTATE_STEPS.length - 1}
                  className="p-1.5 sm:p-2 rounded-full border border-ink/15 text-ink hover:bg-ink/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  aria-label="Next amenity"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Main Layout Grid - Expanded Width with 12 Columns */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* LEFT COLUMN: Sun Arc, Time, Narrative Details */}
            <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
              
              {/* Sun Arc Tracker Container */}
              <div className="relative w-full max-w-[380px] mx-auto lg:mx-0 pt-1 pb-1">
                
                {/* Period Badge placed above the arc */}
                <div className="flex justify-end mb-1.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-wall-2/95 border border-ink/10 shadow-xs text-[0.68rem] font-semibold tracking-wider uppercase text-ink">
                    {current.periodBadge}
                  </span>
                </div>

                {/* SVG Semicircular Arc */}
                <svg
                  viewBox="0 0 340 145"
                  className="w-full h-auto overflow-visible select-none"
                  aria-hidden="true"
                >
                  {/* Dashed trajectory line */}
                  <path
                    d={arcPath}
                    fill="none"
                    stroke="currentColor"
                    className="text-ink/20"
                    strokeWidth="1.5"
                    strokeDasharray="4 6"
                  />

                  {/* Nodes along the arc */}
                  {points.map((pt, i) => {
                    const isActive = i === activeIndex;
                    const step = ESTATE_STEPS[i];
                    return (
                      <g
                        key={step.id}
                        className="cursor-pointer group"
                        onClick={() => goToStep(i)}
                      >
                        {/* Invisible larger hit area for easy tapping */}
                        <circle cx={pt.x} cy={pt.y} r="16" fill="transparent" />

                        {/* Static subtle node dot */}
                        <circle
                          cx={pt.x}
                          cy={pt.y}
                          r={isActive ? "4" : "3.5"}
                          fill="currentColor"
                          className={isActive ? 'text-[#A7834F]' : 'text-ink/35 group-hover:text-[#A7834F] transition-colors'}
                        />

                        {/* Small time label near node */}
                        <text
                          x={pt.x}
                          y={pt.y - 12}
                          textAnchor="middle"
                          className={`text-[0.66rem] font-sans font-medium transition-all ${
                            isActive
                              ? 'fill-[#A7834F] font-bold'
                              : 'fill-ink-2/65 group-hover:fill-ink'
                          }`}
                        >
                          {step.timeLabel}
                        </text>
                      </g>
                    );
                  })}

                  {/* CONTINUOUS GLIDING SUN MARKER */}
                  <g
                    style={{
                      transform: `translate(${sunX}px, ${sunY}px)`,
                      transition: isSeekingRef.current
                        ? 'transform 550ms cubic-bezier(0.16, 1, 0.3, 1)'
                        : 'transform 90ms ease-out',
                    }}
                    className="pointer-events-none"
                  >
                    {/* Outer glowing halo ring */}
                    <circle
                      r="12"
                      fill="none"
                      stroke="#A7834F"
                      strokeWidth="2.5"
                      strokeOpacity="0.45"
                      className="animate-pulse"
                    />
                    {/* Inner radiant sun core */}
                    <circle
                      r="6"
                      fill="#A7834F"
                      stroke="#FFF"
                      strokeWidth="1.5"
                    />
                  </g>
                </svg>
              </div>

              {/* Animated Text Container with silky smooth fade */}
              <div key={activeIndex} className="animate-estate-fade">
                {/* Large Time Display */}
                <div className="flex items-baseline gap-2.5 mt-3 sm:mt-5">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-serif text-ink tracking-tight font-normal">
                    {current.timeNum}
                  </span>
                  <span className="text-base sm:text-lg font-serif font-semibold text-[#A7834F] tracking-wider uppercase">
                    {current.timePeriod}
                  </span>
                </div>

                {/* Eyebrow Category */}
                <span className="text-[0.68rem] sm:text-[0.72rem] uppercase tracking-[0.22em] font-semibold text-[#A7834F] block mt-2 sm:mt-3">
                  {current.eyebrow}
                </span>

                {/* Amenity Title */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-ink mt-1.5 leading-snug">
                  {current.title}
                </h3>

                {/* Evocative Narrative Quote */}
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm text-ink-2 italic font-serif leading-relaxed max-w-lg">
                  “{current.quote}”
                </p>

                {/* Clean Luxury Badges (STRICTLY NO PRICING) */}
                <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-2 sm:gap-2.5">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-ink/[0.05] border border-ink/8 text-ink text-[0.72rem] sm:text-xs font-medium">
                    <Clock size={12} className="text-[#A7834F]" />
                    <span>Hours: {current.hours}</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#172A22]/10 border border-[#172A22]/15 text-[#172A22] text-[0.72rem] sm:text-xs font-medium">
                    <Check size={12} className="text-[#2F6B52]" />
                    <span>{current.badge}</span>
                  </span>
                </div>
              </div>

              {/* Link to day packages */}
              <div className="mt-5 sm:mt-6 pt-3.5 sm:pt-4 border-t border-ink/8 flex items-center justify-between text-xs text-ink-2 max-w-lg">
                <span>Included in Day Out &amp; Celebration Packages</span>
                <a href="/packages/" className="link font-medium text-ink hover:text-[#A7834F]">
                  View Day Packages &rarr;
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN (Top on Mobile): Expansive Wide Photo */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="relative aspect-[16/10] sm:aspect-[16/10] lg:aspect-[16/10] xl:aspect-[16/9.5] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-ink/10 shadow-md bg-wall-2">
                {ESTATE_STEPS.map((step, idx) => {
                  const isCurrent = idx === activeIndex;
                  return (
                    <div
                      key={step.id}
                      className={`absolute inset-0 transition-opacity duration-600 ease-in-out ${
                        isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                      aria-hidden={!isCurrent}
                    >
                      <img
                        src={step.photo?.src || step.photo}
                        alt={step.photo?.alt || step.title}
                        className="h-full w-full object-cover"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  );
                })}

                {/* Bottom Left Badge */}
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20">
                  <span className="rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1.5 text-[0.72rem] sm:text-xs font-medium text-white tracking-wide shadow-xs">
                    {current.tag}
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
