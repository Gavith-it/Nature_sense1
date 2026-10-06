import React, { useState } from 'react';
import { PHOTOS, ZONES } from '../site';
import { Disc, Photo, Pic } from './ui';

export const ZONE_PHOTOS = {
  reception: PHOTOS.lobby,
  rooms: PHOTOS.roomBlock,
  pool: PHOTOS.poolSunset,
  play: PHOTOS.playSunset,
  lawn: PHOTOS.outdoorEventLawn || PHOTOS.pergolaLawn,
  kitchen: PHOTOS.kitchen,
  games: PHOTOS.tableTennis,
};

// The directory board by the gate: every zone, its number and its hours.
// Hovering or focusing a row turns the preview to that place.
export default function Directory({ hrefBase = '/facilities/#' }) {
  const [active, setActive] = useState(0);
  const zone = ZONES[active];
  const photo = ZONE_PHOTOS[zone.key];

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
      <div className="sign p-3 sm:p-4 lg:col-span-7">
        <ol>
          {ZONES.map((z, i) => {
            const thumb = ZONE_PHOTOS[z.key];
            const on = i === active;
            return (
              <li key={z.n}>
                <a
                  href={`${hrefBase}${z.key}`}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className={`grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-[8px] px-3 py-3.5 lg:py-[1.05rem] transition-colors duration-200 sm:gap-5 sm:px-4 ${on ? 'lg:bg-plate-2' : ''} hover:bg-plate-2`}
                >
                  <Disc n={z.n} />
                  <span className="min-w-0">
                    <span className="block font-semibold leading-snug">{z.name}</span>
                    <span className="t-small muted block">{z.note}</span>
                  </span>
                  <span className="flex items-center gap-4">
                    <span className="t-small muted hidden text-right sm:block">{z.hours}</span>
                    {thumb && (
                      <span className="relative block h-12 w-12 overflow-hidden rounded-[6px] lg:hidden">
                        <Pic photo={thumb} sizes="48px" alt="" />
                      </span>
                    )}
                  </span>
                </a>
              </li>
            );
          })}
        </ol>
      </div>
      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-28">
          {photo ? (
            <div className="relative">
              {ZONES.filter((z) => ZONE_PHOTOS[z.key]).map((z) => (
                <div key={z.key} className={`transition-opacity duration-500 ${z.key === zone.key ? 'relative opacity-100' : 'absolute inset-0 opacity-0'}`} aria-hidden={z.key !== zone.key}>
                  <Photo photo={ZONE_PHOTOS[z.key]} night={false} unveil={false} sizes="36vw" className="aspect-square" />
                </div>
              ))}
            </div>
          ) : (
            <div className="sign flex aspect-square flex-col justify-end p-10">
              <Disc n={zone.n} lg />
              <p className="t-h2 mt-6">{zone.name}</p>
              <p className="muted mt-3">{zone.note}. Open {zone.hours}.</p>
            </div>
          )}
          <p className="t-small muted mt-4 flex items-center gap-3" aria-live="polite">
            <Disc n={zone.n} />
            {zone.name}
          </p>
        </div>
      </div>
    </div>
  );
}
