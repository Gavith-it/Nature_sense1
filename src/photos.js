// Real photography of the property. `sm` is a 900px version.
// `night` names the lit twin shown when the site is switched to night.
const v2 = (name, w, h, alt, extra = {}) => ({ src: `/img/v2/${name}.webp`, sm: `/img/v2/${name}-sm.webp`, w, h, alt, ...extra });
const v1 = (name, w, h, alt, extra = {}) => ({ src: `/img/${name}.webp`, sm: `/img/${name}-sm.webp`, w, h, alt, ...extra });

export const PHOTOS = {
  // Estate and grounds (new professional set)
  aerialSunset: v2('aerial-sunset', 1780, 883, 'The estate from the air at sunset: white buildings, lit paths, the pool and farmland beyond', { night: 'aerialNight' }),
  aerialDay: v2('aerial-day', 1448, 1086, 'Aerial view of the entrance drive, reception building, rooms and pool among the fields', { night: 'nightEstate' }),
  aerialNight: v2('aerial-night', 1448, 1086, 'The estate from directly above at night, every path and wall outlined in warm light'),
  poolSunset: v2('pool-sunset', 1448, 1086, 'The swimming pool with its curved shallow end, lined with palms and red crotons at sunset', { night: 'nightPool' }),
  playLawn: v2('play-lawn', 1448, 1086, "Children's play area on the lawn beside a white gazebo, the room block behind", { night: 'playNight' }),
  playSunset: v2('play-sunset', 1448, 1086, "The children's play area with slides, swings and a see-saw on sand, at sunset", { night: 'playNight' }),
  playNight: v2('play-night', 1448, 1086, 'The play area and gazebos glowing among lit garden paths at night'),
  roomBlock: v2('room-block', 1448, 1086, 'The two-storey room block with a balcony for every room, at dusk', { night: 'nightBalconies' }),
  kitchen: v2('kitchen', 1496, 1051, 'Farm Kitchen dining hall with a curved serving counter and tables for groups'),
  lobby: v2('lobby', 1086, 1448, 'Double-height reception lobby with sofas and tall black-framed windows'),
  washrooms: v2('washrooms', 1448, 1086, 'Common washrooms with twin vessel basins and marble walls'),

  // Rooms (new professional set)
  bed: v2('bed', 1496, 1051, 'Superior room with a double bed, a painting above it and full-height glass doors'),
  balcony: v2('balcony', 1496, 1051, 'Room balcony with two armchairs and a side table looking over the pool', { night: 'nightBalconies' }),
  balconyPoolView: v2('balcony-pool-view', 1670, 942, 'View from a room balcony down to the pool, palms and lawns', { night: 'nightBalconies' }),
  tvUnit: v2('tv-unit', 1496, 1051, 'Wooden wardrobe unit, wall-mounted TV and a long work desk'),
  desk: v2('desk', 1672, 941, 'Long wooden work desk with a leather chair under the TV'),
  bath: v2('bath', 1496, 1051, 'Attached bathroom with a vessel basin on a granite counter and a wall-hung WC'),
  bath2: v2('bath-2', 1448, 1086, 'Marble-walled bathroom with a vessel basin, mirror and towel rack'),
  teaTray: v2('tea-tray', 1448, 1086, 'Kettle, two cups, tea bags and coffee on a tray'),
  fridge: v2('fridge', 1448, 1086, 'Mini fridge below the tea tray inside the wardrobe unit'),
  wardrobe: v2('wardrobe', 1448, 1086, 'Wooden wardrobe with a tea and coffee shelf'),
  toiletries: v2('toiletries', 1448, 1086, 'Toiletries kit on a tray: soap, shower cap, dental kits and bottles'),

  // Night and drone stills from the earlier set
  nightPool: v1('night-pool', 2000, 1500, 'The pool lit blue at night beside the glowing room block'),
  nightEstate: v1('night-estate', 2000, 1500, 'Night aerial of the estate with the blue pool and lit lawns'),
  nightEstateTop: v1('night-estate-top', 2000, 1500, 'The whole estate from above at night, paths and walls traced in light'),
  nightGate: v1('night-gate', 2000, 1500, 'Lit entrance walls and paved forecourt at night'),
  nightLawn: v1('night-lawn', 2000, 1500, 'Lawn and pathways glowing at night, play area in the background'),
  nightBalconies: v1('night-balconies', 2000, 1500, 'Room balconies at night with a lit staircase'),
  nightClubhouse: v1('night-clubhouse', 2000, 1500, 'Glass-fronted reception building lit up at night'),
  nightWide: v1('night-wide', 2000, 1500, 'The estate glowing in the dark farmland at night'),
  aerialFields: v1('aerial-fields', 2000, 1500, 'Aerial view of the estate surrounded by farm plots and tree lines', { night: 'nightWide' }),
  clubhouse: v1('clubhouse', 2000, 1500, 'Glass-fronted reception and conference building with a curved drive', { night: 'nightClubhouse' }),
  pergolaLawn: v1('pergola-lawn', 2000, 1500, 'Lawn with a white pergola and the play area beyond', { night: 'nightLawn' }),
  gardenPath: v1('garden-path', 2000, 1333, 'Garden path through the lawns towards the buildings', { night: 'nightLawn' }),
  amphitheatre: v1('amphitheatre', 2000, 1500, 'Open-air stepped seating area bordered by red plants'),
  poolWide: v1('pool-wide', 2000, 1500, 'Long view of the swimming pool and deck', { night: 'nightPool' }),
};
