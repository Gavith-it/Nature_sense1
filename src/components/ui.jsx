import React, { useEffect, useState } from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { BOOKING_URL, CONTACT, PHOTOS, WA_HELLO } from '../site';
import { useTime } from './time';

function srcSet(photo) {
  return photo.sm ? `${photo.sm} 900w, ${photo.src} ${photo.w}w` : undefined;
}

export function Pic({ photo, sizes = '100vw', eager = false, position, className = 'absolute inset-0 h-full w-full object-cover', alt, style }) {
  const set = srcSet(photo);
  return (
    <img
      src={photo.src}
      srcSet={set}
      sizes={set ? sizes : undefined}
      width={photo.w}
      height={photo.h}
      alt={alt ?? photo.alt}
      loading={eager ? 'eager' : 'lazy'}
      fetchpriority={eager ? 'high' : undefined}
      decoding="async"
      className={className}
      style={{ ...(position ? { objectPosition: position } : null), ...style }}
    />
  );
}

// Loads a photo's night twin only once the site has been switched to night.
export function useTwin(photo, nightKey) {
  const { time } = useTime();
  const [seen, setSeen] = useState(time === 'night');
  useEffect(() => { if (time === 'night') setSeen(true); }, [time]);
  // `night={false}` keeps a slot in daylight; a string picks a different night still for this slot.
  const key = nightKey === false ? null : nightKey ?? photo.night;
  const twin = key ? PHOTOS[key] : null;
  return { twin: twin && seen ? twin : null, night: time === 'night' && !!twin };
}

// A photograph in a rounded frame. At night it crossfades to its lit twin when one exists.
export function Photo({ photo, night: nightKey = null, className = '', sizes = '100vw', eager = false, position = undefined, nightPosition = undefined, unveil = true, children = null, rounded = true }) {
  const { twin, night } = useTwin(photo, nightKey);
  return (
    <div className={`${rounded ? 'photo' : 'relative overflow-hidden bg-wall-2'} ${unveil ? 'unveil' : ''} ${className}`}>
      <Pic photo={photo} sizes={sizes} eager={eager} position={position} alt={night ? '' : undefined} />
      {twin && (
        <Pic
          photo={twin}
          sizes={sizes}
          position={nightPosition ?? position}
          alt={night ? twin.alt : ''}
          className={`twin absolute inset-0 h-full w-full object-cover ${night ? 'opacity-100' : 'opacity-0'}`}
        />
      )}
      {children}
    </div>
  );
}

export function Disc({ n, lg = false, className = '' }) {
  return <span className={`disc ${lg ? 'disc-lg' : ''} ${className}`} aria-hidden="true">{n}</span>;
}

// A section heading. When the section is about one place on the estate, it carries that zone's disc.
export function SectionHead({ id, title, intro = undefined, zone = undefined, className = '', aside = undefined, inline = false }) {
  return (
    <div className={`grid gap-6 ${inline ? '' : 'lg:grid-cols-12 lg:items-end'} ${className}`}>
      <div className={inline ? '' : 'lg:col-span-7'}>
        {zone ? (
          <h2 id={id} className="sign inline-flex items-start gap-4 px-5 py-4 text-[clamp(1.6rem,2.6vw,2.35rem)] font-semibold leading-[1.08] tracking-[-0.025em] sm:px-6 sm:py-5">
            <Disc n={zone} lg className="mt-0.5" />
            <span>{title}</span>
          </h2>
        ) : (
          <h2 id={id} className="t-h2">{title}</h2>
        )}
        {intro && <p className="t-lede muted mt-5 max-w-[38rem]">{intro}</p>}
      </div>
      {aside && <div className="lg:col-span-4 lg:col-start-9 lg:justify-self-end">{aside}</div>}
    </div>
  );
}

// Signage copy: short ruled rows of key and value.
export function Facts({ rows, className = '', wide = false }) {
  return (
    <dl className={className}>
      {rows.map(([k, v]) => (
        <div key={k} className={`rule grid gap-x-6 gap-y-0.5 border-t py-3 ${wide ? 'sm:grid-cols-[12rem_1fr]' : 'grid-cols-[7.5rem_1fr] sm:grid-cols-[9rem_1fr]'}`}>
          <dt className="muted t-small pt-[0.1rem]">{k}</dt>
          <dd className="font-medium">{v}</dd>
        </div>
      ))}
    </dl>
  );
}

export function BookButton({ children = 'Book a stay', className = '' }) {
  return <a href={BOOKING_URL} className={`btn-act ${className}`}>{children}</a>;
}

// The opening of an inside page: a wide photograph with the page's sign plate set over its foot.
export function PageHero({ title, intro = undefined, photo, night = undefined, position = undefined, nightPosition = undefined, facts = undefined, actions = undefined, zone = undefined }) {
  return (
    <section className="relative">
      <Photo
        photo={photo}
        night={night}
        eager
        unveil={false}
        rounded={false}
        position={position}
        nightPosition={nightPosition}
        sizes="100vw"
        className="hero-photo h-[58svh] min-h-[20rem] max-h-[38rem] sm:h-[64svh] lg:h-[min(84svh,56rem)] lg:max-h-none"
      />
      <div className="wrap relative -mt-16 sm:-mt-24 lg:-mt-40">
        <div className="sign mx-2 p-6 sm:mx-6 sm:p-9 lg:mx-10 lg:grid lg:max-w-[64rem] lg:grid-cols-12 lg:gap-x-10 lg:p-12">
          <div className="lg:col-span-7">
            <h1 className="t-h1 flex items-start gap-4">
              {zone && <Disc n={zone} lg className="mt-1.5" />}
              <span>{title}</span>
            </h1>
            <p className="t-lede muted mt-5">{intro}</p>
            {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
          </div>
          {facts && <Facts rows={facts} className="mt-8 lg:col-span-5 lg:mt-1" />}
        </div>
      </div>
    </section>
  );
}

// The close of every page: a full-width photograph and the three ways to get in touch, side by side.
export function Closing({
  title = 'Come and stay a while',
  text = 'Book a room online in a few minutes, or message us first with any questions.',
  photo = PHOTOS.poolSunset,
  night = undefined,
  book = true,
  whatsapp = WA_HELLO,
  whatsappLabel = 'Message on WhatsApp',
  phone = CONTACT.phone,
  phoneHref = CONTACT.phoneHref,
}) {
  return (
    <section className="pb-16 pt-4 lg:pb-24" aria-labelledby="closing-title">
      <Photo photo={photo} night={night} rounded={false} unveil={false} sizes="100vw" className="h-[46svh] min-h-[16rem] max-h-[30rem] lg:h-[40rem] lg:max-h-none" />
      <div className="wrap">
        <div className="sign relative mx-2 -mt-14 p-6 sm:mx-6 sm:p-9 lg:mx-10 lg:-mt-24 lg:grid lg:grid-cols-12 lg:items-end lg:gap-x-10 lg:p-12">
          <div className="lg:col-span-6">
            <h2 id="closing-title" className="t-h2">{title}</h2>
            <p className="t-lede muted mt-4 max-w-[34rem]">{text}</p>
          </div>
          {/* Book, WhatsApp and Call carry equal weight, so they share one width. */}
          <div className={`mt-8 grid gap-3 lg:col-span-6 lg:mt-0 [&>a]:w-full ${book ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
            {book && <BookButton />}
            <a href={whatsapp} className={book ? 'btn-line' : 'btn-act'}><MessageCircle size={18} strokeWidth={1.8} aria-hidden="true" /> {book ? 'WhatsApp' : whatsappLabel}</a>
            <a href={phoneHref} className="btn-line"><Phone size={18} strokeWidth={1.8} aria-hidden="true" /> {book ? 'Call' : `Call ${phone}`}</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Soneva-inspired grey-to-black scroll reveal text component for narrative introductions.
export function ScrollRevealText({ content, className = '', theme = 'light' }) {
  const textRef = React.useRef(null);
  const words = content.split(' ');
  const isDark = theme === 'dark';

  React.useEffect(() => {
    let ticking = false;

    const updateWords = () => {
      if (textRef.current) {
        const spans = textRef.current.querySelectorAll('.reveal-word');
        const vh = window.innerHeight;
        const startY = vh * 0.85;
        const endY = vh * 0.40;
        const isNight = isDark || document.documentElement.dataset.time === 'night';
        const activeColor = isNight ? '#F5F1E8' : '#252B27';
        const idleColor = isNight ? '#828E86' : '#9EA7A1';

        spans.forEach((span) => {
          const rect = span.getBoundingClientRect();
          const progress = Math.min(Math.max((startY - rect.top) / (startY - endY), 0), 1);

          if (progress >= 0.85) {
            span.style.color = activeColor;
            span.style.opacity = '1';
            span.style.fontWeight = '500';
          } else if (progress <= 0.1) {
            span.style.color = idleColor;
            span.style.opacity = '0.35';
            span.style.fontWeight = '400';
          } else {
            span.style.color = activeColor;
            span.style.opacity = (0.35 + progress * 0.65).toFixed(2);
            span.style.fontWeight = progress > 0.5 ? '500' : '400';
          }
        });
      }
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateWords();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateWords();

    const observer = new MutationObserver(() => updateWords());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-time'] });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <p
      ref={textRef}
      className={className || "text-base sm:text-lg md:text-xl lg:text-[1.25rem] leading-relaxed md:leading-[1.7] tracking-normal"}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="reveal-word inline-block mr-[0.26em] transition-all duration-150 ease-out"
          style={{ color: isDark ? '#A3B5AA' : '#9EA7A1', opacity: 0.45, fontWeight: 400 }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}

