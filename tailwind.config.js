/** @type {import('tailwindcss').Config} */
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

export default {
  content: ['./index.html', './{stay,day-out,events,facilities,gallery,visit}/index.html', './src/**/*.{js,jsx}'],
  theme: {
    screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
    extend: {
      // Estate signage colours. Every value is a token that the day / night switch redefines.
      colors: {
        wall: { DEFAULT: v('wall'), 2: v('wall-2') },
        ink: { DEFAULT: v('ink'), 2: v('ink-2') },
        plate: { DEFAULT: v('plate'), 2: v('plate-2'), ink: v('plate-ink'), muted: v('plate-muted') },
        brass: { DEFAULT: v('brass'), ink: v('brass-ink') },
        act: { DEFAULT: v('act'), hover: v('act-hover'), ink: v('act-ink') },
      },
      fontFamily: {
        sans: ['"Host Grotesk"', 'system-ui', 'sans-serif'],
      },
      maxWidth: { site: '90rem' },
      borderRadius: { sign: '10px', disc: '9999px' },
      transitionTimingFunction: { out: 'cubic-bezier(0.16, 1, 0.3, 1)' },
    },
  },
  plugins: [],
};
