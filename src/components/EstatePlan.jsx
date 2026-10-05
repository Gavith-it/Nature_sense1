import React, { useEffect, useRef, useState } from 'react';
import { PHOTOS, ZONES } from '../site';
import { useTime } from './time';
import { Pic } from './ui';

// Where each zone sits in each aerial, in % of the image. The same place, by day and at night.
const PINS = {
  day: {
    photo: PHOTOS.aerialSunset,
    ar: 1780 / 883,
    spots: { 1: [24.6, 40], 2: [82.5, 41], 3: [81, 64], 4: [63.8, 43.5], 5: [60, 62], 6: [50, 44], 7: [30.5, 47.5] },
  },
  night: {
    photo: PHOTOS.aerialNight,
    ar: 1448 / 1086,
    spots: { 1: [24, 27], 2: [90, 40], 3: [79.4, 63], 4: [67.5, 27], 5: [62, 52], 6: [52.8, 27], 7: [30, 34] },
  },
};

const PINNED = ZONES;

function Pin({ zone, at, i, open, onToggle }) {
  const [x, y] = at;
  const flip = x > 70;
  return (
    <div className="pin absolute" style={{ left: `${x}%`, top: `${y}%`, '--i': i }}>
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        {/* Leader line from the place up to its label. */}
        <svg className="pointer-events-none absolute bottom-1/2 left-1/2 hidden h-14 w-px -translate-x-1/2 overflow-visible md:block" aria-hidden="true">
          <line className="pin-line" x1="0" y1="0" x2="0" y2="56" pathLength="1" stroke="white" strokeWidth="1.25" />
        </svg>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-label={`${zone.n}. ${zone.name}`}
          className="relative grid h-11 w-11 place-items-center rounded-full"
        >
          <span className="disc relative shadow-[0_6px_16px_-6px_rgba(0,0,0,0.6)] ring-2 ring-white">{zone.n}</span>
        </button>
        <div className={`absolute bottom-[calc(50%+3.5rem)] hidden md:block ${flip ? 'right-[-0.5rem]' : 'left-[-0.5rem]'}`}>
          <div className={`w-max max-w-[15rem] rounded-[8px] bg-[#172A22]/85 px-3 py-2 text-white shadow-[0_10px_30px_-12px_rgba(0,0,0,0.7)] backdrop-blur-md transition-all duration-300 ${open ? 'ring-1 ring-brass' : ''}`}>
            <p className="text-[0.92rem] font-semibold leading-tight">{zone.short}</p>
            {open && <p className="mt-1 text-[0.85rem] leading-snug text-white/80">{zone.note}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

// The estate from the air, with its places labelled like the site plan at the gate.
export default function EstatePlan({ children, focus = { x: 0.62, y: 0.5 } }) {
  const { time } = useTime();
  const [open, setOpen] = useState(null);
  const [seenNight, setSeenNight] = useState(time === 'night');
  const ref = useRef(null);
  useEffect(() => { if (time === 'night') setSeenNight(true); }, [time]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const layers = seenNight ? ['day', 'night'] : ['day'];

  return (
    <div ref={ref} className="stage-frame hero-photo relative h-full w-full overflow-hidden bg-[#172A22]">
      {layers.map((key) => {
        const plan = PINS[key];
        const on = key === time;
        return (
          <div
            key={key}
            className="stage twin"
            style={{ '--ar': plan.ar, '--fx': focus.x, '--fy': key === 'night' ? 0.42 : focus.y, opacity: on ? 1 : 0, visibility: on ? 'visible' : 'hidden', transition: 'opacity 0.8s var(--ease), visibility 0.8s' }}
            aria-hidden={!on}
          >
            <Pic photo={plan.photo} eager={key === 'day'} sizes="100vw" className="absolute inset-0 h-full w-full object-cover" alt={on ? plan.photo.alt : ''} />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0)_25%,rgba(0,0,0,0.1)_60%,rgba(0,0,0,0.72)_100%)]" aria-hidden="true" />
            {PINNED.map((z, i) => (
              <Pin key={z.n} zone={z} at={plan.spots[z.n]} i={i} open={open === z.n} onToggle={() => setOpen(open === z.n ? null : z.n)} />
            ))}
          </div>
        );
      })}
      {children}
    </div>
  );
}

export { PINNED };
