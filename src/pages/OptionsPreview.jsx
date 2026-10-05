import React from 'react';
import Layout from '../components/Layout';
import { Photo, Pic } from '../components/ui';
import { PHOTOS } from '../site';
import {
  Waves,
  Utensils,
  Palmtree,
  Trees,
  ArrowRight,
  Sun,
  Coffee,
  Sparkles,
  Check,
} from 'lucide-react';

const KiteIcon = ({ size = 20, strokeWidth = 1.4, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <path d="M12 2L19 9L12 21L5 9L12 2Z" />
    <path d="M5 9H19" />
    <path d="M12 2V21" />
    <path d="M12 21C13.5 22.5 15.5 22.5 17 21" />
  </svg>
);

const BilliardsIcon = ({ size = 20, strokeWidth = 1.4, className = '', ...props }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

export default function OptionsPreview() {
  return (
    <Layout page="home">
      <div className="py-12 space-y-24">
        {/* ================= PALETTE PREVIEW ================= */}
        <div id="palette-preview" className="space-y-12">
          
          {/* Swatches Banner */}
          <div className="wrap max-w-6xl mx-auto">
            <div className="text-center mb-6">
              <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A7834F]">
                COLOUR HARMONY EVALUATION
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#252B27] mt-1">
                Warm Ivory + Deep Forest Green + Muted Gold
              </h2>
            </div>
            
            {/* Color Swatches Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-xs">
              <div className="rounded-xl p-3 border border-[#252B27]/10 shadow-xs flex flex-col justify-between h-28" style={{ backgroundColor: '#F5F1E8' }}>
                <span className="font-mono text-[0.65rem] text-[#252B27]/70">#F5F1E8</span>
                <div>
                  <span className="font-semibold text-[#252B27] block">Main Canvas</span>
                  <span className="text-[0.65rem] text-[#252B27]/70">Warm Luxury Ivory</span>
                </div>
              </div>

              <div className="rounded-xl p-3 border border-[#252B27]/10 shadow-xs flex flex-col justify-between h-28" style={{ backgroundColor: '#E8E3D6' }}>
                <span className="font-mono text-[0.65rem] text-[#252B27]/70">#E8E3D6</span>
                <div>
                  <span className="font-semibold text-[#252B27] block">Alternate</span>
                  <span className="text-[0.65rem] text-[#252B27]/70">Soft Stone / Beige</span>
                </div>
              </div>

              <div className="rounded-xl p-3 shadow-xs flex flex-col justify-between h-28 text-white" style={{ backgroundColor: '#172A22' }}>
                <span className="font-mono text-[0.65rem] text-white/70">#172A22</span>
                <div>
                  <span className="font-semibold text-white block">Dark Accent</span>
                  <span className="text-[0.65rem] text-white/70">Deep Forest Green</span>
                </div>
              </div>

              <div className="rounded-xl p-3 border border-[#252B27]/10 shadow-xs flex flex-col justify-between h-28" style={{ backgroundColor: '#FFFCF5' }}>
                <span className="font-mono text-[0.65rem] text-[#252B27]/70">#FFFCF5</span>
                <div>
                  <span className="font-semibold text-[#252B27] block">Card Plate</span>
                  <span className="text-[0.65rem] text-[#252B27]/70">Crisp Ivory Card</span>
                </div>
              </div>

              <div className="rounded-xl p-3 shadow-xs flex flex-col justify-between h-28 text-white" style={{ backgroundColor: '#252B27' }}>
                <span className="font-mono text-[0.65rem] text-white/70">#252B27</span>
                <div>
                  <span className="font-semibold text-white block">Primary Text</span>
                  <span className="text-[0.65rem] text-white/70">Charcoal Olive Ink</span>
                </div>
              </div>

              <div className="rounded-xl p-3 shadow-xs flex flex-col justify-between h-28 text-white" style={{ backgroundColor: '#A7834F' }}>
                <span className="font-mono text-[0.65rem] text-white/80">#A7834F</span>
                <div>
                  <span className="font-semibold text-white block">Antique Gold</span>
                  <span className="text-[0.65rem] text-white/80">Buttons &amp; Highlights</span>
                </div>
              </div>

              <div className="rounded-xl p-3 shadow-xs flex flex-col justify-between h-28 text-white" style={{ backgroundColor: '#896A3D' }}>
                <span className="font-mono text-[0.65rem] text-white/80">#896A3D</span>
                <div>
                  <span className="font-semibold text-white block">Gold Hover</span>
                  <span className="text-[0.65rem] text-white/80">Deep Aged Brass</span>
                </div>
              </div>
            </div>
          </div>

          {/* Demonstration 1: Main Section on Warm Ivory (#F5F1E8) with Cards (#FFFCF5) */}
          <div style={{ backgroundColor: '#F5F1E8', color: '#252B27' }} className="py-14 border-y border-[#252B27]/8">
            <div className="wrap max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#252B27]/10">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A7834F]">
                    WARM IVORY CANVAS (#F5F1E8)
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif mt-1">
                    Light Daytime Storytelling <span className="italic font-serif text-[#A7834F]">&amp; Room Suites</span>
                  </h3>
                </div>
                <button
                  type="button"
                  style={{ backgroundColor: '#A7834F', color: '#FFFFFF' }}
                  className="mt-4 md:mt-0 px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-sm flex items-center gap-2 self-start hover:opacity-90"
                >
                  <span>Explore Accommodations</span>
                  <ArrowRight size={14} />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Card 1 */}
                <div style={{ backgroundColor: '#FFFCF5', borderColor: 'rgba(37,43,39,0.1)' }} className="rounded-2xl border p-6 shadow-sm">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5">
                    <img src={PHOTOS.roomBlock.src} alt="Superior Room" className="h-full w-full object-cover" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium">
                      Balcony • Pool View
                    </span>
                  </div>
                  <span className="text-[0.7rem] uppercase tracking-wider font-semibold text-[#A7834F]">
                    ZONE 02 · LUXURY STAY
                  </span>
                  <h4 className="text-xl font-serif font-semibold mt-1">Superior Rooms with Private Balcony</h4>
                  <p className="mt-2 text-xs sm:text-sm text-[#252B27]/80 leading-relaxed font-light">
                    Overlooking emerald lawns and the lagoon pool. Crisp organic linen, warm teak finishes, and morning birdsong.
                  </p>
                  <div className="mt-5 pt-4 border-t border-[#252B27]/10 flex items-center justify-between">
                    <div>
                      <span className="text-[0.68rem] uppercase tracking-wider text-[#252B27]/60 block">Daily Retreat</span>
                      <span className="text-sm font-medium text-[#252B27]">Breakfast &amp; Pool Included</span>
                    </div>
                    <span style={{ color: '#A7834F' }} className="text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
                      View Details &rarr;
                    </span>
                  </div>
                </div>

                {/* Card 2 */}
                <div style={{ backgroundColor: '#FFFCF5', borderColor: 'rgba(37,43,39,0.1)' }} className="rounded-2xl border p-6 shadow-sm">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden mb-5">
                    <img src={PHOTOS.tentRoom.src} alt="Glamping Suite" className="h-full w-full object-cover" />
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-medium">
                      Glamping • Immersive
                    </span>
                  </div>
                  <span className="text-[0.7rem] uppercase tracking-wider font-semibold text-[#A7834F]">
                    COUNTRYSIDE NATURE
                  </span>
                  <h4 className="text-xl font-serif font-semibold mt-1">Luxury Glamping Tent Rooms</h4>
                  <p className="mt-2 text-xs sm:text-sm text-[#252B27]/80 leading-relaxed font-light">
                    Wake up completely surrounded by nature. Handcrafted wooden decking, attached ensuite bath, and tranquil quiet.
                  </p>
                  <div className="mt-5 pt-4 border-t border-[#252B27]/10 flex items-center justify-between">
                    <div>
                      <span className="text-[0.68rem] uppercase tracking-wider text-[#252B27]/60 block">Daily Retreat</span>
                      <span className="text-sm font-medium text-[#252B27]">Farm Trails &amp; Wi-Fi Included</span>
                    </div>
                    <span style={{ color: '#A7834F' }} className="text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
                      View Details &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Demonstration 2: Alternate Section on Soft Stone (#E8E3D6) */}
          <div style={{ backgroundColor: '#E8E3D6', color: '#252B27' }} className="py-14 border-y border-[#252B27]/10">
            <div className="wrap max-w-6xl mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A7834F]">
                  ALTERNATE SECTION STONE (#E8E3D6)
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif mt-1">
                  Architectural Rhythm Across the Grounds
                </h3>
                <p className="text-xs sm:text-sm text-[#252B27]/80 mt-2 font-light">
                  Soft limestone stone creates natural visual division between daytime amenities, without needing heavy container cards or dark borders.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div style={{ backgroundColor: '#FFFCF5' }} className="p-6 rounded-2xl border border-[#252B27]/10 shadow-xs">
                  <div className="h-10 w-10 rounded-full border border-[#A7834F]/40 flex items-center justify-center text-[#A7834F] mb-4">
                    <Waves size={20} />
                  </div>
                  <h5 className="font-serif font-semibold text-base text-[#252B27]">Curved Lagoon Pool</h5>
                  <p className="text-xs text-[#252B27]/75 mt-1.5 leading-relaxed font-light">
                    Clean, filtered waters fringed by coconut palms and sunbeds.
                  </p>
                </div>

                <div style={{ backgroundColor: '#FFFCF5' }} className="p-6 rounded-2xl border border-[#252B27]/10 shadow-xs">
                  <div className="h-10 w-10 rounded-full border border-[#A7834F]/40 flex items-center justify-center text-[#A7834F] mb-4">
                    <Utensils size={20} />
                  </div>
                  <h5 className="font-serif font-semibold text-base text-[#252B27]">Farm Kitchen</h5>
                  <p className="text-xs text-[#252B27]/75 mt-1.5 leading-relaxed font-light">
                    Homestyle regional buffet dining cooked with countryside ingredients.
                  </p>
                </div>

                <div style={{ backgroundColor: '#FFFCF5' }} className="p-6 rounded-2xl border border-[#252B27]/10 shadow-xs">
                  <div className="h-10 w-10 rounded-full border border-[#A7834F]/40 flex items-center justify-center text-[#A7834F] mb-4">
                    <Palmtree size={20} />
                  </div>
                  <h5 className="font-serif font-semibold text-base text-[#252B27]">Manicured Lawns</h5>
                  <p className="text-xs text-[#252B27]/75 mt-1.5 leading-relaxed font-light">
                    Expansive open lawns and quiet gazebos for peaceful strolls.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Demonstration 3: Dark Luxury Section / Footer on Deep Forest Green (#172A22) */}
          <div style={{ backgroundColor: '#172A22', color: '#F5F1E8' }} className="py-16 border-y border-[#A7834F]/20">
            <div className="wrap max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-center">
              <div className="md:col-span-7">
                <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#A7834F]">
                  DARK LUXURY ACCENT &amp; FOOTER (#172A22)
                </span>
                <h3 className="text-2xl sm:text-4xl font-serif text-[#F5F1E8] mt-2 leading-tight">
                  Every Path Traced in <span className="italic font-serif text-[#A7834F]">Golden Light</span>
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-[#F5F1E8]/80 leading-relaxed font-light max-w-xl">
                  As the sun sets over the farmlands, the architecture glows with warm ambient lamps against the midnight forest canopy. Unpolluted starlit skies and cool night breezes.
                </p>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    style={{ backgroundColor: '#A7834F', color: '#FFFFFF' }}
                    className="px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-md hover:bg-[#896A3D]"
                  >
                    Reserve Your Stay
                  </button>
                  <span className="text-xs text-[#F5F1E8]/70 border-l border-[#A7834F]/30 pl-4 py-1">
                    Denkanikottai • 50 km from Bangalore
                  </span>
                </div>
              </div>
              <div className="md:col-span-5">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#A7834F]/30 shadow-lg">
                  <img src={PHOTOS.aerialNight.src} alt="Estate Night" className="h-full w-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#172A22]/80 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 text-xs font-serif italic text-[#F5F1E8]">
                    Night aerial of Nature Senses
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ================= OPTION 1 ================= */}
        <div id="option-1" className="bg-wall py-12 border-y border-ink/8">
          <div className="wrap max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#A7834F] bg-[#A7834F]/10 px-3 py-1 rounded-full">
                Option 1: Two Accommodations Showcase
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-ink mt-3">
                Choose Your Sanctuary, <span className="italic text-[#A7834F] font-serif">Superior Room or Glamping Tent.</span>
              </h2>
              <p className="mt-2 text-sm text-ink-2 max-w-xl mx-auto">
                Both accommodations feature private outdoor balconies overlooking nature and lush grounds.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              {/* Card 1 */}
              <div className="group rounded-sign overflow-hidden border border-ink/10 bg-wall-2 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="relative aspect-[16/10] overflow-hidden bg-wall">
                  <Photo photo={PHOTOS.roomBlock} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  <span className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-medium text-white tracking-wide">
                    Private Balcony • Pool View
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-ink">Superior Rooms with Balcony</h3>
                  <p className="mt-2 text-xs sm:text-sm text-ink-2 leading-relaxed">
                    Contemporary design with a private balcony overlooking the swimming pool and lawns, split AC, and attached bath.
                  </p>
                  <div className="mt-5 pt-4 border-t border-ink/10 flex items-center justify-between">
                    <div>
                      <span className="text-[0.7rem] text-ink-2 block uppercase tracking-wider">From</span>
                      <span className="text-lg font-semibold text-ink">₹3,500</span>
                      <span className="text-xs text-ink-2"> / night + GST</span>
                    </div>
                    <a href="/stay/" className="btn-act text-xs px-3.5 py-1.5 inline-flex items-center gap-1.5">
                      <span>Explore</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group rounded-sign overflow-hidden border border-ink/10 bg-wall-2 shadow-xs hover:shadow-md transition-all duration-300">
                <div className="relative aspect-[16/10] overflow-hidden bg-wall">
                  <img src={PHOTOS.tentRoom.src} alt={PHOTOS.tentRoom.alt} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  <span className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-medium text-white tracking-wide">
                    Glamping Suite • Nature Immersive
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-ink">Luxury Glamping Tent Rooms</h3>
                  <p className="mt-2 text-xs sm:text-sm text-ink-2 leading-relaxed">
                    Surrounded by open nature with a private veranda, king-size bed, attached modern bath, and countryside calm.
                  </p>
                  <div className="mt-5 pt-4 border-t border-ink/10 flex items-center justify-between">
                    <div>
                      <span className="text-[0.7rem] text-ink-2 block uppercase tracking-wider">From</span>
                      <span className="text-lg font-semibold text-ink">₹3,500</span>
                      <span className="text-xs text-ink-2"> / night + GST</span>
                    </div>
                    <a href="/stay/" className="btn-act text-xs px-3.5 py-1.5 inline-flex items-center gap-1.5">
                      <span>Explore</span>
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= OPTION 2 ================= */}
        <div id="option-2" className="bg-wall py-12 border-y border-ink/8">
          <div className="wrap max-w-5xl mx-auto text-center">
            <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#A7834F] bg-[#A7834F]/10 px-3 py-1 rounded-full">
              Option 2: Casa-Style Estate Highlights
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-ink mt-3">
              Hallmarks of the Estate, <span className="italic text-[#A7834F] font-serif">designed for leisurely days.</span>
            </h2>
            <p className="mt-2 text-sm text-ink-2 max-w-xl mx-auto">
              Spaces to swim, dine, play, and wander across our sixteen-acre community.
            </p>

            {/* Concentric Double-Ring Icons Grid */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl mx-auto items-center justify-items-center">
              {[
                { name: 'Swimming Pool', icon: Waves },
                { name: 'Farm Kitchen', icon: Utensils },
                { name: 'Outdoor Lawns', icon: Palmtree },
                { name: 'Kids’ Play Zone', icon: KiteIcon },
                { name: 'Indoor Billiards', icon: BilliardsIcon },
                { name: 'Managed Farmland', icon: Trees },
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <div key={item.name} className="group flex flex-col items-center text-center w-full cursor-default">
                    <div className="relative flex h-16 w-16 sm:h-[4.25rem] sm:w-[4.25rem] items-center justify-center rounded-full border border-[#A7834F]/45 p-1.5 transition-all duration-300 group-hover:scale-105 group-hover:border-[#A7834F]">
                      <div className="flex h-full w-full items-center justify-center rounded-full border border-[#A7834F]/30 text-[#A7834F] transition-all duration-300 group-hover:bg-[#172A22] group-hover:text-[#F5F1E8]">
                        <IconComponent size={21} strokeWidth={1.35} aria-hidden="true" />
                      </div>
                    </div>
                    <span className="mt-3 text-[0.68rem] sm:text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-ink/90 leading-tight">
                      {item.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= OPTION 3 ================= */}
        <div id="option-3" className="bg-wall py-12 border-y border-ink/8">
          <div className="wrap max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#A7834F] bg-[#A7834F]/10 px-3 py-1 rounded-full">
                Option 3: "A Day in Nature" Sensory Rhythm
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-ink mt-3">
                A Day at Nature Senses, <span className="italic text-[#A7834F] font-serif">from first light to lights-out.</span>
              </h2>
              <p className="mt-2 text-sm text-ink-2 max-w-xl mx-auto">
                How time slows down when surrounded by quiet Tamil Nadu countryside.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Time 1 */}
              <div className="rounded-2xl border border-ink/10 bg-wall-2 overflow-hidden shadow-xs">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Photo photo={PHOTOS.balconyPoolView} className="h-full w-full object-cover" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-medium text-white flex items-center gap-1.5">
                    <Coffee size={13} className="text-[#E5CA8F]" /> 07:30 AM
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-ink text-base">Quiet Balcony Mornings</h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-ink-2 leading-relaxed">
                    Wake up to birdsong and mist rising over farmland. Enjoy freshly brewed South Indian filter coffee in crisp air.
                  </p>
                </div>
              </div>

              {/* Time 2 */}
              <div className="rounded-2xl border border-ink/10 bg-wall-2 overflow-hidden shadow-xs">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Photo photo={PHOTOS.poolSunset} className="h-full w-full object-cover" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-medium text-white flex items-center gap-1.5">
                    <Sun size={13} className="text-[#E5CA8F]" /> 12:30 PM
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-ink text-base">Sunlit Pool &amp; Dining</h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-ink-2 leading-relaxed">
                    A refreshing swim in the palm-fringed pool, followed by hot regional flavours served fresh at Farm Kitchen.
                  </p>
                </div>
              </div>

              {/* Time 3 */}
              <div className="rounded-2xl border border-ink/10 bg-wall-2 overflow-hidden shadow-xs">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Photo photo={PHOTOS.nightPool} className="h-full w-full object-cover" />
                  <span className="absolute bottom-3 left-3 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-medium text-white flex items-center gap-1.5">
                    <Sparkles size={13} className="text-[#E5CA8F]" /> 06:30 PM
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-semibold text-ink text-base">Golden Hour &amp; Stargazing</h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-ink-2 leading-relaxed">
                    Stroll along illuminated garden walkways as sunset gives way to clear, unpolluted night skies and tranquil breezes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ================= OPTION 4 ================= */}
        <div id="option-4" className="bg-wall py-12 border-y border-ink/8">
          <div className="wrap max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-xs uppercase tracking-[0.22em] font-semibold text-[#A7834F] bg-[#A7834F]/10 px-3 py-1 rounded-full">
                Option 4: Managed Farmlands Feature Card
              </span>
            </div>

            <div className="rounded-3xl border border-[#A7834F]/30 bg-card overflow-hidden shadow-sm grid md:grid-cols-12 items-center">
              <div className="md:col-span-6 relative aspect-[16/11] md:aspect-auto md:h-full min-h-[18rem]">
                <Photo photo={PHOTOS.aerialSunset} className="absolute inset-0 h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent md:hidden" />
                <span className="absolute top-4 left-4 rounded-full bg-black/60 backdrop-blur-md px-3.5 py-1 text-xs font-medium text-white tracking-wide">
                  Nature Senses Lifestyle
                </span>
              </div>
              <div className="md:col-span-6 p-6 sm:p-10 lg:p-12">
                <span className="text-[0.7rem] uppercase tracking-[0.25em] font-semibold text-[#A7834F]">
                  MANAGED FARMLANDS
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-ink mt-2 leading-snug">
                  Experience the Farm Life. <span className="italic text-[#A7834F] font-serif">Own a Piece of It.</span>
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-ink-2 leading-relaxed font-light">
                  Thoughtfully planned quarter-acre farmland plots nurtured with 45–50 fruit-bearing and teak trees, located just beyond the resort lawns.
                </p>
                <div className="mt-5 space-y-2 text-xs sm:text-sm text-ink">
                  <div className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-[#A7834F]/15 text-[#896A3D] flex items-center justify-center shrink-0">
                      <Check size={12} strokeWidth={2.5} />
                    </span>
                    <span>45–50 Fruit, Flowering &amp; Teak Trees per plot</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-[#A7834F]/15 text-[#896A3D] flex items-center justify-center shrink-0">
                      <Check size={12} strokeWidth={2.5} />
                    </span>
                    <span>Professional upkeep &amp; estate management</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-5 w-5 rounded-full bg-[#A7834F]/15 text-[#896A3D] flex items-center justify-center shrink-0">
                      <Check size={12} strokeWidth={2.5} />
                    </span>
                    <span>Flexibility to build your weekend retreat</span>
                  </div>
                </div>
                <div className="mt-7">
                  <a href="/farmland/" className="btn-act inline-flex items-center gap-2 text-xs sm:text-sm px-5 py-2.5">
                    <span>Discover Managed Farmlands</span>
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
