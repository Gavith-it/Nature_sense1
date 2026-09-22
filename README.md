# Nature Senses Farm Stay website

A static, multi-page website (Vite + React + Tailwind CSS). It builds to plain HTML, CSS, JS and images, so it can be hosted on any static host. No server, database or environment variables are needed.

## Pages

| URL | Source |
|---|---|
| `/` | `index.html` → `src/pages/Home.jsx` |
| `/stay/` | `stay/index.html` → `src/pages/Stay.jsx` |
| `/day-out/` | `day-out/index.html` → `src/pages/DayOut.jsx` |
| `/events/` | `events/index.html` → `src/pages/Events.jsx` |
| `/facilities/` | `facilities/index.html` → `src/pages/Facilities.jsx` |
| `/gallery/` | `gallery/index.html` → `src/pages/Gallery.jsx` |
| `/visit/` | `visit/index.html` → `src/pages/Visit.jsx` |

Each page is its own HTML file. Keep the trailing slash (`/stay/`) or let the host serve `stay/index.html` for `/stay`.

## Build

Requires Node.js 18 or newer.

```bash
npm ci
npm run build
```

The site is written to `dist/`. Upload the **contents** of `dist/` to the web root. To check the build locally: `npm run preview` (opens on port 4173).

For local development: `npm run dev`.

## Hosting notes

- **Any static host works:** Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3 + CloudFront, or a normal cPanel/Apache/Nginx web root. Build command `npm run build`, publish directory `dist`.
- **Do not configure a single-page-app fallback** (rewriting every URL to `/index.html`). Each page has its own `index.html`.
- **Caching:** files in `dist/assets/` have content hashes in their names and can be cached for a year (`Cache-Control: public, max-age=31536000, immutable`). Cache HTML for a short time only.
- **HTTPS** should be on (the booking and WhatsApp links are HTTPS).

## Where to change things

- **Phone numbers, WhatsApp, email, map link, booking link, times, room rates, drive times, estate zones:** `src/site.js`.
- **Photos:** `public/img/` (older set) and `public/img/v2/` (new professional set), listed in `src/photos.js`. Each image has a small `.json` file beside it that records where it came from. Those files aren't used by the site and can be excluded from the upload if you like.
- **Page titles and descriptions (SEO):** the `<title>` and `<meta name="description">` in each page's `index.html`.
- **Design tokens (colours, fonts):** `src/index.css` and `tailwind.config.js`. The full design system is documented in `DESIGN.md`.

## Before going live (to do on the developer's side)

1. **Booking link dates:** `BOOKING_DEFAULTS` in `src/site.js` holds fixed dates (`checkin=2026-09-21`). The owner fixed these dates, and they are now in the past. Confirm with the owner whether the link should use today's date or no dates at all.
2. **Social preview image:** set `og:image` in every `index.html` to the full URL once the domain is known (for example `https://yourdomain.com/img/v2/aerial-sunset.webp`), and add `og:url`. Some platforms prefer a JPG or PNG preview image.
3. **Search engines:** add `robots.txt`, `sitemap.xml` and canonical URLs for the final domain.
4. **Analytics** (if wanted): add the tracking snippet to each `index.html`.

## Third-party services used at runtime

- Google Fonts (Host Grotesk), loaded from `fonts.googleapis.com`.
- External links only: letsbook.me (room booking), wa.me (WhatsApp), Google Maps.

## Not needed for hosting

`ROOM/`, `PROPERTY/` (original photos, already converted into `public/img/v2/`), `files to understand/`, `legacy-v1/`, `_archive/`, `.impeccable/`, `.claude/`, `.agent/`, `node_modules/`.
