import React from 'react';

// Drive routes from Bangalore, drawn like a transit line diagram. Times are approximate.
export const ROUTE_LINES = [
  { from: 'Electronic City', km: '48 km', time: '55–65 min', stops: ['Hosur', 'Thally'] },
  { from: 'JP Nagar / Bannerghatta', km: '58 km', time: '70–80 min', stops: ['Anekal', 'Thally'] },
  { from: 'Silk Board / Koramangala', km: '62 km', time: '75–85 min', stops: ['Hosur Road', 'Hosur'] },
  { from: 'Whitefield / Sarjapur', km: '66 km', time: '80–90 min', stops: ['Bagalur', 'Berigai', 'Denkanikottai'] },
];

function Line({ stops }) {
  const n = stops.length;
  return (
    <div className="relative h-14">
      <span className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-ink/[0.12]" aria-hidden="true" />
      <span className="route-path absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 origin-left rounded-full bg-brass" aria-hidden="true" />
      <span className="absolute left-0 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rounded-full border-[3px] border-brass bg-wall" aria-hidden="true" />
      <span className="route-stop absolute right-0 top-1/2 h-5 w-5 -translate-y-1/2 translate-x-1/2 rounded-full bg-brass ring-4 ring-brass/30" aria-hidden="true" />
      {stops.map((s, i) => {
        const left = ((i + 1) / (n + 1)) * 100;
        return (
          <span key={s} className="route-stop absolute top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ left: `${left}%` }}>
            <span className="block h-2.5 w-2.5 rounded-full bg-wall ring-2 ring-brass" aria-hidden="true" />
            <span className="t-small muted absolute left-1/2 top-4 hidden -translate-x-1/2 whitespace-nowrap sm:block">{s}</span>
          </span>
        );
      })}
    </div>
  );
}

export default function RouteLines({ className = '' }) {
  return (
    <ol className={className}>
      {ROUTE_LINES.map((r) => (
        <li key={r.from} className="rule grid gap-x-8 gap-y-1 border-t py-5 last:border-b md:grid-cols-[14rem_1fr_7rem] md:items-center">
          <div className="flex items-baseline justify-between gap-4 md:block">
            <p className="font-semibold leading-snug">From {r.from}</p>
            <p className="t-small muted md:mt-0.5">{r.km}</p>
          </div>
          <div className="pr-3">
            <Line stops={r.stops} />
            <p className="t-small muted -mt-1 sm:hidden">Via {r.stops.join(', ')}</p>
          </div>
          <p className="flex items-center gap-2 md:justify-end">
            <span className="num text-[1.35rem] font-semibold tracking-[-0.02em]">{r.time}</span>
            <span className="sr-only">, via {r.stops.join(', ')}</span>
          </p>
        </li>
      ))}
    </ol>
  );
}
