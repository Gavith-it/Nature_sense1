import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import Layout from '../components/Layout';
import { Closing } from '../components/ui';
import { PHOTOS } from '../site';

const ALL = [
  { p: PHOTOS.aerialSunset, g: 'estate' },
  { p: PHOTOS.bed, g: 'rooms' },
  { p: PHOTOS.aerialNight, g: 'night' },
  { p: PHOTOS.poolSunset, g: 'estate' },
  { p: PHOTOS.balconyPoolView, g: 'rooms' },
  { p: PHOTOS.playSunset, g: 'estate' },
  { p: PHOTOS.nightPool, g: 'night' },
  { p: PHOTOS.balcony, g: 'rooms' },
  { p: PHOTOS.lobby, g: 'estate' },
  { p: PHOTOS.kitchen, g: 'estate' },
  { p: PHOTOS.playNight, g: 'night' },
  { p: PHOTOS.tvUnit, g: 'rooms' },
  { p: PHOTOS.aerialDay, g: 'estate' },
  { p: PHOTOS.bath, g: 'rooms' },
  { p: PHOTOS.nightEstateTop, g: 'night' },
  { p: PHOTOS.roomBlock, g: 'estate' },
  { p: PHOTOS.desk, g: 'rooms' },
  { p: PHOTOS.playLawn, g: 'estate' },
  { p: PHOTOS.nightClubhouse, g: 'night' },
  { p: PHOTOS.teaTray, g: 'rooms' },
  { p: PHOTOS.aerialFields, g: 'estate' },
  { p: PHOTOS.bath2, g: 'rooms' },
  { p: PHOTOS.nightBalconies, g: 'night' },
  { p: PHOTOS.clubhouse, g: 'estate' },
  { p: PHOTOS.toiletries, g: 'rooms' },
  { p: PHOTOS.nightLawn, g: 'night' },
  { p: PHOTOS.washrooms, g: 'estate' },
  { p: PHOTOS.fridge, g: 'rooms' },
  { p: PHOTOS.nightGate, g: 'night' },
  { p: PHOTOS.wardrobe, g: 'rooms' },
];

const FILTERS = [
  ['all', 'All'],
  ['estate', 'The estate'],
  ['rooms', 'Rooms'],
  ['night', 'After dark'],
];

function Lightbox({ items, index, onClose, onMove }) {
  const closeRef = useRef(null);
  const item = items[index].p;

  useEffect(() => {
    const prev = document.activeElement;
    closeRef.current?.focus();
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onMove(1);
      if (e.key === 'ArrowLeft') onMove(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      prev?.focus?.();
    };
  }, [onClose, onMove]);

  const trap = (e) => {
    if (e.key !== 'Tab') return;
    const f = e.currentTarget.querySelectorAll('button');
    const first = f[0];
    const last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  };

  const round = 'flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20';

  return (
    <div role="dialog" aria-modal="true" aria-label="Photo viewer" onKeyDown={trap} className="fixed inset-0 z-50 flex flex-col bg-[#0B120F]/95 text-white backdrop-blur-sm">
      <div className="flex items-center justify-between p-3 sm:p-5">
        <p className="num font-semibold" aria-live="polite">{index + 1} <span className="text-white/60">of {items.length}</span></p>
        <button ref={closeRef} type="button" onClick={onClose} className={round} aria-label="Close photo viewer"><X aria-hidden="true" /></button>
      </div>
      <div className="relative flex min-h-0 flex-1 items-center justify-center px-2 sm:px-20" onClick={(e) => e.target === e.currentTarget && onClose()}>
        <img src={item.src} alt={item.alt} className="max-h-full max-w-full rounded-[6px] object-contain" />
        <button type="button" onClick={() => onMove(-1)} className={`${round} absolute left-2 top-1/2 -translate-y-1/2 sm:left-5`} aria-label="Previous photo"><ChevronLeft strokeWidth={1.8} aria-hidden="true" /></button>
        <button type="button" onClick={() => onMove(1)} className={`${round} absolute right-2 top-1/2 -translate-y-1/2 sm:right-5`} aria-label="Next photo"><ChevronRight strokeWidth={1.8} aria-hidden="true" /></button>
      </div>
      <p className="mx-auto max-w-2xl px-5 pb-6 pt-4 text-center text-white/75">{item.alt}</p>
    </div>
  );
}

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [open, setOpen] = useState(null);
  const items = filter === 'all' ? ALL : ALL.filter((x) => x.g === filter);

  const close = useCallback(() => setOpen(null), []);
  const move = useCallback((d) => setOpen((i) => (i + d + items.length) % items.length), [items.length]);

  return (
    <Layout page="gallery">
      <section className="wrap grid gap-8 pb-10 pt-10 lg:grid-cols-12 lg:gap-12 lg:pb-14 lg:pt-16">
        <div className="lg:col-span-7">
          <h1 className="t-h1">From first light to lights-out</h1>
          <p className="t-lede muted mt-5 max-w-[36rem]">The rooms, pool, lawns and the farmland around them, from the ground and from the air. Tap any photo to see it large.</p>
        </div>
        <div className="lg:col-span-5 lg:self-end lg:justify-self-end">
          <div className="inline-flex flex-wrap gap-1 rounded-[28px] bg-ink/[0.07] p-1" role="group" aria-label="Filter photos">
            {FILTERS.map(([key, label]) => (
              <button
                key={key}
                type="button"
                aria-pressed={filter === key}
                onClick={() => setFilter(key)}
                className={`min-h-11 rounded-full px-4 font-semibold transition-colors ${filter === key ? 'bg-ink text-wall' : 'text-ink-2 hover:text-ink'}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8" aria-label="Photos">
        <ul className="wrap columns-2 gap-3 md:columns-3 lg:gap-5 [&>li]:mb-3 lg:[&>li]:mb-5">
          {items.map((x, i) => (
            <li key={x.p.src} className="break-inside-avoid">
              <button type="button" onClick={() => setOpen(i)} className="group block w-full overflow-hidden rounded-sign bg-wall-2 text-left" aria-label={`Enlarge: ${x.p.alt}`}>
                <img
                  src={x.p.sm}
                  width={x.p.w}
                  height={x.p.h}
                  alt=""
                  loading={i < 6 ? 'eager' : 'lazy'}
                  className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </button>
            </li>
          ))}
        </ul>
      </section>

      {open !== null && <Lightbox items={items} index={open} onClose={close} onMove={move} />}

      <Closing title="See it for yourself" photo={PHOTOS.nightPool} />
    </Layout>
  );
}
