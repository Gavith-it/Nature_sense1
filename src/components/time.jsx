import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

// The whole site runs on estate time: day, or night with the lamps on.
const TimeContext = createContext({ time: 'day', setTime: () => {} });

function readTime() {
  try {
    return localStorage.getItem('ns-time') === 'night' ? 'night' : 'day';
  } catch {
    return 'day';
  }
}

export function TimeProvider({ children }) {
  const [time, setTimeState] = useState(() => (typeof document !== 'undefined' && document.documentElement.dataset.time) || readTime());

  const setTime = useCallback((next) => {
    const root = document.documentElement;
    root.classList.add('time-fade');
    root.dataset.time = next;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'night' ? '#0B120F' : '#F3F4EF');
    try { localStorage.setItem('ns-time', next); } catch { /* storage blocked: the switch still works for this page */ }
    window.setTimeout(() => root.classList.remove('time-fade'), 700);
    setTimeState(next);
  }, []);

  useEffect(() => { document.documentElement.dataset.time = time; }, [time]);

  return <TimeContext.Provider value={{ time, setTime }}>{children}</TimeContext.Provider>;
}

export const useTime = () => useContext(TimeContext);

// A two-position switch, like the lighting panel at reception.
export function TimeSwitch({ className = '', onPhoto = false, onPlate = false, compact = false }) {
  const { time, setTime } = useTime();
  const opt = (value, Icon, label) => {
    const on = time === value;
    return (
      <button
        type="button"
        role="radio"
        aria-checked={on}
        tabIndex={on ? 0 : -1}
        onClick={() => setTime(value)}
        onKeyDown={(e) => {
          if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) return;
          e.preventDefault();
          const next = time === 'day' ? 'night' : 'day';
          setTime(next);
          e.currentTarget.parentElement.querySelector(`[data-v="${next}"]`)?.focus();
        }}
        data-v={value}
        className={`inline-flex h-10 items-center gap-1.5 rounded-full px-3.5 text-[0.9rem] font-semibold transition-colors duration-300 ${
          on
            ? onPhoto ? 'bg-white text-[#101915]' : onPlate ? 'bg-plate-ink text-plate' : 'bg-ink text-wall'
            : onPhoto ? 'text-white/85 hover:text-white' : onPlate ? 'text-plate-muted hover:text-plate-ink' : 'text-ink-2 hover:text-ink'
        }`}
      >
        <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
        <span className={compact ? 'sr-only xl:not-sr-only' : ''}>{label}</span>
      </button>
    );
  };
  return (
    <div
      role="radiogroup"
      aria-label="Show the estate by day or at night"
      className={`inline-flex items-center gap-0.5 rounded-full p-1 ${onPhoto ? 'bg-black/35 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.3)] backdrop-blur-md' : onPlate ? 'bg-plate-2' : 'bg-ink/[0.07]'} ${className}`}
    >
      {opt('day', Sun, 'Day')}
      {opt('night', Moon, 'Night')}
    </div>
  );
}
