// Single source of truth for contact details, links and tariffs.
// Figures follow the official Nature Senses profile & banquet package PDFs.

import { PHOTOS } from './photos';

export { PHOTOS };

export const BOOKING_BASE = 'https://letsbook.me/booking/naturesense';
export const BOOKING_DEFAULTS = { checkin: '2026-09-21', checkout: '2026-09-22', adults: 2, children: 0 };
export const BOOKING_URL = bookingUrl(BOOKING_DEFAULTS);

export function bookingUrl({ checkin, checkout, adults, children }) {
  const q = new URLSearchParams({ checkin, checkout, adults: String(adults), children: String(children) });
  return `${BOOKING_BASE}?${q.toString()}`;
}

export const CONTACT = {
  phone: '+91 81432 32539',
  phoneHref: 'tel:+918143232539',
  whatsapp: 'https://wa.me/918143232539',
  eventsPhone: '+91 99131 36868',
  eventsPhoneHref: 'tel:+919913136868',
  eventsWhatsapp: 'https://wa.me/919913136868',
  email: 'naturesensesfarmstays@gmail.com',
  area: 'Near Denkanikottai & Kuppati, Tamil Nadu',
  maps: 'https://www.google.com/maps/search/?api=1&query=Nature+Senses+Farm+Stay+Denkanikottai',
};

export function waLink(base, text) {
  return `${base}?text=${encodeURIComponent(text)}`;
}

export const NAV = [
  { href: '/stay/', label: 'Stay', key: 'stay' },
  { href: '/packages/', label: 'Packages', key: 'packages' },
  { href: '/facilities/', label: 'Facilities', key: 'facilities' },
  { href: '/gallery/', label: 'Gallery', key: 'gallery' },
  { href: '/farmland/', label: 'Farmland', key: 'farmland' },
  { href: '/visit/', label: 'Visit', key: 'visit' },
];

export const TIMES = {
  checkIn: '2:00 PM',
  checkOut: '11:00 AM',
  dayOut: '10:00\u00a0AM–7:00\u00a0PM',
  amenities: '9:00\u00a0AM–6:30\u00a0PM',
};

export const ROOM_RATES = [
  { label: 'Weekdays', days: 'Sunday to Thursday', price: '₹3,500' },
  { label: 'Weekends & holidays', days: 'Friday and Saturday', price: '₹4,000' },
];

export const ROUTES = [
  { from: 'Electronic City', km: '48 km', time: '55–65 min', via: 'Hosur, then Thally – Denkanikottai Road' },
  { from: 'JP Nagar / Bannerghatta', km: '58 km', time: '70–80 min', via: 'Anekal and Thally' },
  { from: 'Silk Board / Koramangala', km: '62 km', time: '75–85 min', via: 'Hosur Road (NH 44)' },
  { from: 'Whitefield / Sarjapur', km: '66 km', time: '80–90 min', via: 'Bagalur, Berigai and Denkanikottai' },
];

// The estate's numbered zones. Numbers stay the same on every page and on the site plan.
export const ZONES = [
  { n: 1, key: 'reception', name: 'Reception and lobby', short: 'Reception', note: 'Check-in, lobby lounge and the conference room', hours: 'Open all day' },
  { n: 2, key: 'rooms', name: 'Rooms', short: 'Rooms', note: 'Superior rooms and tent rooms, each with a balcony', hours: `Check-in ${TIMES.checkIn}` },
  { n: 3, key: 'pool', name: 'Swimming pool', short: 'Pool', note: 'Curved shallow end for children', hours: TIMES.amenities },
  { n: 4, key: 'play', name: "Children's play area", short: 'Play area', note: 'Slides, swings and gazebos for parents', hours: 'Open to all guests' },
  { n: 5, key: 'lawn', name: 'Lawns and party lawn', short: 'Lawns', note: 'Up to 50 guests for events', hours: 'All day' },
  { n: 6, key: 'kitchen', name: 'Farm Kitchen', short: 'Farm Kitchen', note: 'Dining hall for lunch, hi-tea and event menus', hours: 'Meal times' },
  { n: 7, key: 'games', name: 'Games room and gym', short: 'Games and gym', note: 'In the reception building: billiards, table tennis, carrom, gym', hours: TIMES.amenities },
];

export const WA_HELLO = 'https://wa.me/918143232539?text=' + encodeURIComponent('Hi, I have a question about Nature Senses Farm Stay.');
