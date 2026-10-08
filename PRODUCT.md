# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Four audiences, confirmed as equally important:

- **Families from Bangalore** on weekend getaways with children. The pool and the children's play area matter to them.
- **Friend groups** coming for a day out or an overnight stay.
- **Corporate teams** planning offsites, meetings and team outings.
- **Party hosts** planning birthdays and celebrations on the lawn for up to 50 guests.

Most arrive by car from south and east Bangalore, about an hour's drive via Hosur.

## Product Purpose

Nature Senses Farm Stay is a modern farm stay near Denkanikottai and Kuppati, Tamil Nadu. The website must make each of its four offers understood and easy to act on:

1. **Room stays**, booked online at `https://letsbook.me/booking/naturesense?checkin=2026-09-21&checkout=2026-09-22&adults=2&children=0` (the link is fixed by the owner).
2. **Day outs** (10 AM – 7 PM, lunch and hi-tea), booked by WhatsApp or phone.
3. **Events and parties** on the lawn, with catered food packages, booked through the events line.
4. **Corporate meetings** in the conference room.

All three actions carry equal weight: book a room online, message on WhatsApp, or call. Success means a visitor quickly finds the offer that fits them and takes its action.

## Positioning

White, contemporary buildings set in open farmland an hour from Bangalore, not a rustic cottage property. Every room has a balcony, most overlooking the pool and lawns. At night the entire estate is outlined in warm light, which drone footage shows clearly. Pool, gym, indoor games and play area are included with every room.

## Operating Context

- Guests compare options on phones, often in WhatsApp group chats, before one person books.
- Room bookings go through the external letsbook.me engine; day outs and events are confirmed by phone or WhatsApp.
- The site is a multi-page static build (Vite + React + Tailwind). Pages: Home, Stay, Day out, Events, Facilities, Gallery, Visit.

## Capabilities and Constraints

- **Rooms:** ₹3,500 + GST a night Sunday to Thursday, ₹4,000 + GST Friday, Saturday and holidays. Check-in 2:00 PM, check-out 11:00 AM. Rooms have a private balcony, split AC, attached bathroom with hot water, Wi-Fi, TV, work desk, wardrobe, mini fridge, kettle with tea and coffee, drinking water, and a toiletries kit.
- **Day out:** 10:00 AM – 7:00 PM. Vegetarian ₹2,000, non-vegetarian ₹2,200 per person + GST. Includes welcome drink, lunch, hi-tea and facilities.
- **Room categories (owner, 22 Sep 2026):** Superior Room with Balcony and Tent Room with Balcony. The professional room photos show a Superior Room; there are no tent room photos yet. Rates per category are not confirmed separately.
- **Farm Kitchen:** the on-site restaurant and dining hall, in the round building at the centre of the estate (owner, 22 Sep 2026).
- **Games room and gym:** in the reception building (owner, 22 Sep 2026). Tent room photos will come from the owner later.
- **Facilities:** swimming pool, children's play area, gym, indoor games (billiards, table tennis, carrom, board games), lawns and lit walkways, a lobby lounge, a conference room for 10–15 people, and a lawn and banquet space for up to 50 guests.
- **Amenity hours:** 9:00 AM – 6:30 PM.
- **Rates for non-staying visitors:** pool ₹400 per adult and ₹200 per child aged 5–12 per session; gym ₹500 per session; table tennis ₹250/hr; billiards ₹500/hr; carrom ₹200/hr; board games free with a ₹200 deposit.
- **Events:** lawn ₹15,000 for 5 hours, then ₹2,500 an hour. Conference room ₹3,000 for a half day (4 hrs) or ₹5,000 for a full day (8 hrs), refreshments included. Party food packages are ₹799 and ₹999 (vegetarian) and ₹1,099, ₹1,399 and ₹1,699 (non-vegetarian), per person + GST. Prawn, fish and mutton add-ons cost ₹200–₹240.
- **House rules:** outside food and drinks are not allowed. Swimwear is required in the pool. Children under 12 must be with an adult. A confirmed booking is needed before arrival.
- **Open (not yet confirmed):** exact room count, whether rates differ by room category, pet policy, and Farm Kitchen opening hours and à la carte menu.

## Brand Commitments

- **Name:** "Nature Senses Farm Stay". Tagline: "Where Nature Meets Comfort".
- **Logo:** a circular rust-coloured badge with script lettering and a hummingbird (`public/img/logo.webp`).
- **Restaurant name:** "Farm Kitchen".
- **Contacts:** phone and WhatsApp +91 99131 36868; email Sales@nsfarmstay.com.

- **Visual preference (user, 21 Sep 2026):** quiet, modern, timeless and pleasing, never bold. Reference sites: Evolve Back resorts and Aman, plus touches of the resort's own identity. Soft natural colours.

## Evidence on Hand

- **Photography:** a professional set in `Nature Sense Marketing Material/`:
  - `PHOTOS/ROOMS`: bedroom, desk, bathroom, amenities and balcony views over the pool.
  - `PHOTOS/PROPERTY`: pool, play area, lobby, Farm Kitchen dining hall, and day and night aerials.
  - `DRONE PICTURES`: about 110 day and night drone stills and 6 drone videos (`DJI_0393/0432/0433/0459/0460/0461.MP4`).
- **Official documents:** the resort profile and banquet package PDFs in `files to understand/`.
- **Drive times from Bangalore:** from the owner's previous website data (`legacy-v1/src/data/resortData.js`, `BANGALORE_ROUTES`). Electronic City is 48 km and 55–65 min, JP Nagar 58 km and 70–80 min, Silk Board 62 km and 75–85 min, Whitefield 66 km and 80–90 min. Always present these as approximate.
- **Absent:** there are no guest reviews, ratings, awards or press. None of these may be invented.
- **Unusable:** the videos in `legacy-v1/public/videos/` show a different property and must never be used.

## Product Principles

1. **Every visitor sees their offer within seconds.** Stay, day out and events are peers, each with its own clear action.
2. **Show, don't claim.** Use real photography and real prices in place of adjectives.
3. **Keep booking friction low.** Guests book online for rooms and by one tap to WhatsApp or phone for everything else.
4. **Be honest about what's included**, and what isn't (GST, outside food).

## Accessibility & Inclusion

The site is mostly viewed on phones, often on mobile data. It must follow WCAG 2.2 AA: readable text sizes, visible focus, reduced-motion support, and touch targets of at least 44 px.
