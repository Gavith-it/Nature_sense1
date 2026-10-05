import React, { useEffect, useState } from 'react';
import { Menu, X, MessageCircle, Phone, Instagram, Facebook } from 'lucide-react';
import { NAV, BOOKING_URL, CONTACT, TIMES, WA_HELLO } from '../site';
import { TimeProvider, TimeSwitch } from './time';

function Wordmark({ onPlate = false }) {
  return (
    <a href="/" className="flex min-h-12 shrink-0 items-center gap-3" aria-label="Nature Senses Farm Stay, home">
      <img src="/img/logo.webp" alt="" width="44" height="44" className="h-11 w-11 rounded-full" />
      <span className="leading-none">
        <span className={`block text-[1.1rem] font-semibold tracking-[-0.02em] ${onPlate ? 'text-plate-ink' : 'text-ink'}`}>Nature Senses</span>
        <span className={`mt-1 block text-[0.8rem] font-medium ${onPlate ? 'text-plate-muted' : 'text-ink-2'}`}>Farm Stay</span>
      </span>
    </a>
  );
}

// The site header is a sign in two positions. Over the home page's opening photograph it floats as a
// plate; everywhere else, and as soon as you scroll, it docks into a full-width sign band at the top.
function Header({ page, floating }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setScrolled(window.scrollY > 40));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { window.removeEventListener('scroll', onScroll); cancelAnimationFrame(frame); };
  }, []);

  const docked = !floating || scrolled;
  const ease = 'duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]';

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-[padding] ${ease} [view-transition-name:site-header] ${docked ? 'p-0' : 'px-3 pt-3 sm:px-5 lg:px-8 lg:pt-4'}`}
      >
        <div
          className={`sign mx-auto transition-[max-width,border-radius,box-shadow] ${ease} ${
            docked
              ? `max-w-[100vw] rounded-none shadow-[inset_0_-1px_0_rgb(var(--plate-ink)/0.1)] ${scrolled || open ? '!shadow-[inset_0_-1px_0_rgb(var(--plate-ink)/0.1),0_10px_28px_-18px_rgba(8,20,15,0.6)]' : ''}`
              : 'max-w-site shadow-[0_10px_30px_-20px_rgba(8,20,15,0.5)]'
          }`}
        >
        <div className={`mx-auto flex h-16 max-w-site items-center justify-between gap-3 transition-[padding] lg:h-[4.25rem] ${ease} ${docked ? 'pl-5 pr-3 sm:pl-8 sm:pr-6 lg:pl-12 lg:pr-10' : 'pl-3 pr-2 lg:pl-4'}`}>
          <Wordmark onPlate />
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center">
              {NAV.map((item) => {
                const current = item.key === page;
                return (
                  <li key={item.key}>
                    <a
                      href={item.href}
                      aria-current={current ? 'page' : undefined}
                      className={`group relative inline-flex min-h-11 items-center px-3.5 text-[0.97rem] font-medium transition-colors duration-200 xl:px-4 ${current ? 'text-plate-ink' : 'text-plate-muted hover:text-plate-ink'}`}
                    >
                      {item.label}
                      {/* The brass pointer marks where you are, like the arrow on a site plan. */}
                      <span
                        className={`absolute inset-x-3.5 bottom-1.5 h-[3px] origin-left rounded-full bg-brass transition-transform duration-300 ease-out xl:inset-x-4 ${current ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-hover:bg-plate-muted/60'}`}
                        aria-hidden="true"
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex items-center gap-1.5">
            <TimeSwitch className="hidden lg:inline-flex" compact onPlate />
            <a href={WA_HELLO} className="hidden h-11 w-11 items-center justify-center rounded-full text-plate-ink transition-colors hover:bg-plate-2 md:inline-flex" aria-label="Message us on WhatsApp">
              <MessageCircle size={20} strokeWidth={1.8} aria-hidden="true" />
            </a>
            <a href={BOOKING_URL} className="btn-act hidden min-h-11 sm:inline-flex">Book a stay</a>
            <button
              type="button"
              className="inline-flex h-12 w-12 items-center justify-center rounded-full text-plate-ink transition-colors hover:bg-plate-2 lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X strokeWidth={1.8} aria-hidden="true" /> : <Menu strokeWidth={1.8} aria-hidden="true" />}
            </button>
          </div>
        </div>
        </div>

        {open && (
          <div id="mobile-menu" className={`sign mt-2 max-h-[calc(100dvh-6.5rem)] max-w-site overflow-y-auto lg:hidden ${docked ? 'mx-3 sm:mx-5' : 'mx-auto'}`} style={{ boxShadow: '0 24px 50px -20px rgba(8,20,15,0.6)' }}>
            <nav aria-label="Main" className="px-5 pb-6 pt-2">
              <ul>
                {[{ href: '/', label: 'Home', key: 'home' }, ...NAV].map((item) => (
                  <li key={item.key} className="rule border-b">
                    <a href={item.href} aria-current={item.key === page ? 'page' : undefined} className="flex min-h-14 items-center justify-between text-[1.5rem] font-semibold tracking-[-0.025em]">
                      {item.label}
                      {item.key === page && <span className="h-2.5 w-2.5 rounded-full bg-brass" aria-hidden="true" />}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between gap-4">
                <span className="muted">Show the estate</span>
                <TimeSwitch onPlate />
              </div>
              <div className="mt-6 grid gap-3">
                <a href={BOOKING_URL} className="btn-act w-full">Book a stay</a>
                <a href={WA_HELLO} className="btn-line w-full"><MessageCircle size={18} strokeWidth={1.8} aria-hidden="true" /> Message on WhatsApp</a>
                <a href={CONTACT.phoneHref} className="btn-line w-full"><Phone size={18} strokeWidth={1.8} aria-hidden="true" /> Call {CONTACT.phone}</a>
              </div>
            </nav>
          </div>
        )}
      </header>
      {open && <div className="fixed inset-0 z-30 bg-[#172A22]/50 backdrop-blur-[2px] lg:hidden" onClick={() => setOpen(false)} aria-hidden="true" />}
    </>
  );
}

function Footer() {
  return (
    <footer className="w-full bg-[#172A22] text-[#F5F1E8] pt-14 sm:pt-20 lg:pt-24 pb-12 sm:pb-16 mt-0">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20">
        {/* Large Editorial Serif Branding Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          <a href="/" className="inline-block group focus:outline-none" aria-label="Nature Senses Farm Stay">
            <span className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-normal tracking-[0.08em] text-[#A7834F] block leading-none transition-colors group-hover:text-[#C5A059]">
              NATURE SENSES
            </span>
            <span className="mt-2.5 sm:mt-3.5 block text-[0.72rem] sm:text-xs md:text-sm uppercase tracking-[0.38em] sm:tracking-[0.45em] font-medium text-[#A7834F]/85">
              FARM STAY &amp; RESORTS
            </span>
          </a>
        </div>

        {/* Content Columns: Info on Left, Navigation Lists on Right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 text-sm sm:text-[0.95rem]">
          {/* Column 1: Address, Email, Phone, Socials */}
          <div className="md:col-span-5 lg:col-span-5 space-y-4 text-[#F5F1E8]/90 font-light leading-relaxed">
            <p className="text-[#F5F1E8]/85">
              Hosur - Denkanikottai Rd,<br />
              Kuppati, Near Denkanikottai, Tamil Nadu 635107
            </p>
            <p className="pt-1.5">
              <a
                href={`mailto:${CONTACT.email}`}
                className="text-[#A7834F] hover:text-[#C5A059] transition-colors break-all underline-offset-4 hover:underline"
              >
                {CONTACT.email}
              </a>
            </p>
            <p className="pt-0.5 text-[#F5F1E8]/90">
              <a href={CONTACT.phoneHref} className="hover:text-[#A7834F] transition-colors">
                {CONTACT.phone}
              </a>
            </p>

            <div className="flex items-center gap-3 pt-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-[#A7834F] hover:border-[#A7834F] transition-all"
                aria-label="Instagram"
              >
                <Instagram size={17} strokeWidth={1.75} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:text-[#A7834F] hover:border-[#A7834F] transition-all"
                aria-label="Facebook"
              >
                <Facebook size={17} strokeWidth={1.75} />
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links Col 1 */}
          <div className="md:col-span-3 lg:col-span-3 md:col-start-7 lg:col-start-7">
            <ul className="space-y-3 font-normal text-[#F5F1E8]/85">
              <li>
                <a href="/" className="hover:text-[#A7834F] transition-colors">Home</a>
              </li>
              <li>
                <a href="/stay/" className="hover:text-[#A7834F] transition-colors">Villas &amp; Rooms</a>
              </li>
              <li>
                <a href="/packages/" className="hover:text-[#A7834F] transition-colors">Suites &amp; Cottages</a>
              </li>
              <li>
                <a href="/farmland/" className="hover:text-[#A7834F] transition-colors">Managed Farmlands</a>
              </li>
              <li>
                <a href="/facilities/" className="hover:text-[#A7834F] transition-colors">Experiences</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation Links Col 2 */}
          <div className="md:col-span-3 lg:col-span-3">
            <ul className="space-y-3 font-normal text-[#F5F1E8]/85">
              <li>
                <a href="/#around-estate" className="hover:text-[#A7834F] transition-colors">Virtual Tour</a>
              </li>
              <li>
                <a href="/gallery/" className="hover:text-[#A7834F] transition-colors">Gallery</a>
              </li>
              <li>
                <a href="/events/" className="hover:text-[#A7834F] transition-colors">Contact Us</a>
              </li>
              <li>
                <a href={BOOKING_URL} className="hover:text-[#A7834F] transition-colors">Reservation</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Subtle Horizontal Divider */}
        <div className="border-t border-white/10 my-10 sm:my-14" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-white/60">
          <p>© {new Date().getFullYear()}. All rights reserved</p>
          <div className="flex items-center gap-2 sm:gap-3 text-white/60">
            <a href="/stay/" className="hover:text-white transition-colors">Resort Policy &amp; Cancellation Policy</a>
            <span>•</span>
            <a href="/visit/" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 border-t border-ink/10 bg-wall/95 p-2 backdrop-blur-md md:hidden" style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}>
      <div className="grid grid-cols-[1fr_1fr_1.35fr] gap-2">
        <a href={CONTACT.phoneHref} className="btn-line min-h-12 px-2"><Phone size={17} strokeWidth={1.8} aria-hidden="true" /> Call</a>
        <a href={WA_HELLO} className="btn-line min-h-12 px-2"><MessageCircle size={17} strokeWidth={1.8} aria-hidden="true" /> WhatsApp</a>
        <a href={BOOKING_URL} className="btn-act min-h-12 px-2">Book a stay</a>
      </div>
    </div>
  );
}

// `floating`: the home page opens on the aerial, so its header floats over the photograph until you scroll.
export default function Layout({ page, children, floating = false }) {
  return (
    <TimeProvider>
      <a href="#main" className="sr-only z-50 rounded-full bg-ink px-4 py-2 text-wall focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to content</a>
      <Header page={page} floating={floating} />
      <main id="main" tabIndex={-1} className={`outline-none ${floating ? '' : 'pt-16 lg:pt-[4.25rem]'}`}>{children}</main>
      <Footer />
      <div className="h-20 md:hidden" aria-hidden="true" />
      <ActionBar />
    </TimeProvider>
  );
}
