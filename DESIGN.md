---
name: Nature Senses Farm Stay
description: The estate's own wayfinding system, by day and with the lamps on.
colors:
  wall: "#F3F4EF"
  wall-2: "#E7E9E2"
  ink: "#101915"
  ink-2: "#4A5650"
  plate: "#173A2E"
  plate-2: "#214A3B"
  plate-ink: "#F3F4EF"
  plate-muted: "#B8C9BF"
  brass: "#B8925A"
  brass-ink: "#805E2C"
  act: "#173A2E"
  act-hover: "#0E2A21"
  act-ink: "#F3F4EF"
  plate-act: "#D6B074"
  plate-act-hover: "#E2C28E"
  plate-act-ink: "#101915"
  night-wall: "#0B120F"
  night-wall-2: "#141E1A"
  night-ink: "#ECEEE7"
  night-ink-2: "#A4B2AA"
  night-plate: "#162A23"
  night-plate-2: "#203A30"
  night-plate-ink: "#ECEEE7"
  night-plate-muted: "#A4B8AD"
  night-brass: "#F0C27A"
  night-act: "#F0C27A"
  night-act-hover: "#F7D49C"
  night-act-ink: "#0B120F"
typography:
  display:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.6rem, 6vw, 5.5rem)"
    fontWeight: 600
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 4.4rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.032em"
  headline-section:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3.25rem)"
    fontWeight: 600
    lineHeight: 1.04
    letterSpacing: "-0.028em"
  sign-heading:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.6rem, 2.6vw, 2.35rem)"
    fontWeight: 600
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.35rem, 1.8vw, 1.6rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.015em"
  figure:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3vw, 2.75rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.035em"
    fontFeature: "'tnum', 'lnum'"
  lede:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.125rem, 1.4vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.55
    letterSpacing: "-0.005em"
  body:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
    fontFeature: "'kern', 'liga', 'ss01'"
  small:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Host Grotesk, system-ui, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.005em"
rounded:
  thumb: "6px"
  row: "8px"
  sign: "10px"
  pill: "9999px"
spacing:
  gutter-sm: "20px"
  gutter-md: "32px"
  gutter-lg: "48px"
  plate-sm: "24px"
  plate-md: "36px"
  plate-lg: "48px"
  head-gap: "40px"
  head-gap-lg: "56px"
  section: "64px"
  section-lg: "112px"
components:
  button-act:
    backgroundColor: "{colors.act}"
    textColor: "{colors.act-ink}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
    typography: "{typography.label}"
  button-act-hover:
    backgroundColor: "{colors.act-hover}"
  button-act-on-plate:
    backgroundColor: "{colors.plate-act}"
    textColor: "{colors.plate-act-ink}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-act-on-plate-hover:
    backgroundColor: "{colors.plate-act-hover}"
  button-line:
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "48px"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.wall}"
  sign-plate:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.plate-ink}"
    rounded: "{rounded.sign}"
    padding: "{spacing.plate-lg}"
  zone-disc:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "1.9rem"
  zone-disc-lg:
    backgroundColor: "{colors.brass}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    size: "2.6rem"
  directory-row-hover:
    backgroundColor: "{colors.plate-2}"
    rounded: "{rounded.row}"
  nav-item-current:
    backgroundColor: "{colors.plate}"
    textColor: "{colors.plate-ink}"
    rounded: "{rounded.pill}"
    padding: "0 16px"
    height: "44px"
---

# Design System: Nature Senses Farm Stay

## Overview

**Creative North Star: "Estate Wayfinding"**

The site behaves like the estate's own signage program. Places are numbered zones on a real aerial site plan, headings about a place are green sign plates carrying a brass zone disc, and facts sit in short ruled rows the way copy sits on a sign. The ground is a lime-washed wall, the plates are estate-sign green, and brass marks every number, marker and route. Real photographs carry the atmosphere; the system around them stays quiet, structural and legible.

The whole site runs on estate time. A Day/Night switch redefines every colour token at once: walls go dark, plates deepen, brass warms into lamp amber, and every photograph that has a lit twin crossfades to it. Night is not an inverted skin; it is the same estate after sunset, and it is a first-class system with its own token set.

Density is moderate and plate-led: wide wrappers, generous section rhythm, and hierarchy carried by one family through size, weight and rules. The resort template (slideshow hero with a date-picker bar, cream and serif, centred sections, icon grids) is the confirmed anti-reference, and the earlier Almanac, beige quiet-luxury and Field Guide worlds were rejected and replaced.

**Key Characteristics:**
- Green sign plates on a lime-washed wall; brass for zone discs, route lines and markers.
- Zones 1 to 7 are fixed site-wide and numbered by brass discs only where a real zone is meant.
- One family, Host Grotesk, sentence case, no kickers or eyebrows.
- Opening and closing photographs run full-bleed, with the page's sign plate overlapping their foot.
- A whole-site Day/Night state with night twins for photographs.
- Flat surfaces; depth comes from plates over photographs, never from card shadows.

## Colors

A two-state signage palette: wall, ink, sign green and brass by day; dark wall, deep green and lamp amber by night. Every value is an RGB-triplet custom property on `:root`, redefined under `html[data-time='night']`; Tailwind reads them as `rgb(var(--token) / alpha)`.

### Primary
- **Estate-Sign Green** (`plate`): the sign plate itself. Hero plate, page-hero plate, zone-bearing headings, offer signs, the directory board, the closing plate, the footer, the mobile menu and the current nav item. By day it doubles as the primary action colour (`act`) on the wall.
- **Raised Sign Green** (`plate-2`): the hover and active row inside a plate (directory rows, offer signs on hover).
- **Deep Sign Green** (`act-hover`): primary action hover on the wall.

### Secondary
- **Sign Brass** (`brass`): zone discs, route lines and stops, the offer-sign arrow roundel, current-page dot in the mobile menu, link underlines, text selection (at 45%).
- **Brass Ink** (`brass-ink`): brass dark enough to read as a stroke on the wall; focus outlines, input carets, and the small menu subheads (Lunch, Hi-tea, Vegetarian) and disclosure chevrons on the Day out and Events menus.
- **Plate Brass** (`plate-act`, hover `plate-act-hover`, text `plate-act-ink`): the primary action inside any plate, so the action never disappears into the green.

### Tertiary
- **Lamp Amber** (`night-brass` / `night-act`): brass after dark. Discs, route lines and every primary action turn to it at night, on the wall and inside plates alike. It exists only in night mode.

### Neutral
- **Lime-Wash Wall** (`wall`): page ground, mobile action bar (95%), text on a dark action.
- **Shaded Wall** (`wall-2`): photo placeholders before an image loads.
- **Sign Ink** (`ink`): text and outline buttons; at 14% it draws every rule, at 6 to 7% it tints pills and the time switch track.
- **Weathered Ink** (`ink-2`): muted text, intros, fact keys, inactive nav.
- **Plate Ink** (`plate-ink`) and **Plate Muted** (`plate-muted`): text and muted text on a plate; plate rules use plate ink at 18%.
- **Night set:** `night-wall`, `night-wall-2`, `night-ink`, `night-ink-2`, `night-plate`, `night-plate-2`, `night-plate-ink`, `night-plate-muted` replace their day counterparts one for one.

### Named Rules
**The Two Clocks Rule.** Every colour is a token that the Day/Night switch redefines. A new surface uses tokens only; a literal colour is allowed only on photographs, whose ground does not change with the clock (glass buttons, pin labels, the after-dark band).

**The Brass Inside Green Rule.** Inside a plate the primary action turns brass (`plate-act`); outside a plate by day it is green (`act`); at night it is lamp amber everywhere.

**The Brass Means Place Rule.** Brass marks zones, routes and wayfinding arrows. It is never a decorative fill or a background wash.

## Typography

**Display Font:** Host Grotesk (with system-ui, sans-serif)
**Body Font:** Host Grotesk
**Label/Mono Font:** Host Grotesk, tabular lining figures for numbers

**Character:** A single contemporary grotesque doing all the work, as an estate sign family would. Headings are semibold (600) with tight negative tracking; body is regular (400) at a comfortable 1.0625rem, with `ss01` on.

### Hierarchy
- **Display** (600, clamp(2.6rem, 6vw, 5.5rem), 0.98): the home hero H1 on its plate only.
- **Headline** (600, clamp(2.4rem, 5vw, 4.4rem), 1): inside-page H1 on the page-hero plate.
- **Section headline** (600, clamp(2rem, 3.6vw, 3.25rem), 1.04): section H2s that are not about one zone, the closing plate, the after-dark band.
- **Sign heading** (600, clamp(1.6rem, 2.6vw, 2.35rem), 1.08): zone-bearing headings set inside a sign plate with a large disc.
- **Title** (600, clamp(1.35rem, 1.8vw, 1.6rem), 1.2): subsection heads; offer signs use 1.35rem at the same weight.
- **Figure** (600, clamp(2rem, 3vw, 2.75rem), 1, tabular): prices and headline numbers; the offer price on photographs is 2.25rem.
- **Lede** (400, clamp(1.125rem, 1.4vw, 1.3rem), 1.55): intros under headings, max about 38rem.
- **Body** (400, 1.0625rem, 1.6): running copy; `text-wrap: pretty`.
- **Small** (400, 0.9375rem, 1.5): fact keys, notes, hours, captions.
- **Label** (600, 0.9375rem, 1.2): buttons (0.9875rem) and compact labels. Sentence case, never uppercase.

### Named Rules
**The One Family Rule.** Host Grotesk only, 400 to 600 in use. Hierarchy comes from size, weight and rules, never from a second face.

**The No Kicker Rule.** No eyebrows or kicker lines above headings, no uppercase tracked labels. Headings are sentence case and stand on their own; a zone is announced by its disc, not by a label.

## Layout

A centred wrapper (max 90rem) with side gutters of 20px, 32px from 640px and 48px from 1024px. Sections breathe at 64px vertical, 112px from 1024px, and neighbouring sections are separated by a full-width ink rule at 14% rather than by colour bands. Section heads sit on a 12-column grid (title in 7 columns, an aside link right-aligned in the last 4); content starts 40px, then 56px, below the head.

Pages open with a full-bleed photograph (home: the aerial site plan at the full viewport, running beneath the floating header; inside pages: 58 to 84svh, starting below the docked header band) and the page's sign plate pulled up over its foot (-4rem, -6rem, -10rem by breakpoint). Pages close the same way: a full-bleed photograph with the closing plate overlapping it, holding Book, WhatsApp and Call at equal width. Between them, split layouts pair a 7-column photograph with a 5-column plate or text column.

Horizontal strips (room close-ups, the mobile pin key) scroll natively with snap, their inline padding aligned to the wrapper edge at every breakpoint. Breakpoints are 640, 768, 1024 and 1280px. On mobile the home aerial becomes a 4:3 frame cropped to keep all seven pins visible, the plate stacks below it, and a fixed bottom bar carries Call, WhatsApp and Book a stay.

### Named Rules
**The Full-Bleed Bookends Rule.** The opening and closing photographs of every page run edge to edge with no radius; the sign plate overlaps their foot inside the wrapper.

## Elevation & Depth

Flat. Surfaces carry no shadow at rest or on hover; depth comes from a green plate laid over a photograph, and from rules. Shadows exist only where something floats over an uncontrolled photograph: markers on the aerial, and the header plate while it floats or once the page has scrolled.

### Shadow Vocabulary
- **Pin lift** (`box-shadow: 0 6px 16px -6px rgba(0,0,0,0.6)`, with a 2px white ring): zone discs pinned on the aerial.
- **Pin label** (`box-shadow: 0 10px 30px -12px rgba(0,0,0,0.7)`): the dark glass label above each pin.

### Named Rules
**The On-Photo Only Rule.** Shadows and glass appear only over photographs. Anything on the wall or on a plate stays flat.

## Shapes

Gently rounded signs (10px) are the house corner: plates, contained photographs, sign headings. Rows inside a plate round at 8px, thumbnails at 6px. Everything the hand presses is a full pill: buttons, nav items, the time switch, the mobile pin key. Zone discs are perfect circles. Outlines are inset strokes (1.5px on line buttons) rather than borders, and contained photographs open with a clip that widens from a 10px-rounded inset as they scroll into view. Full-bleed bookend photographs have no radius.

## Components

### Buttons
Tactile, sign-plain pills.
- **Shape:** full pill, minimum 48px tall, 24px side padding, 10px gap for an icon.
- **Primary (act):** sign green with wall text on the wall; brass with ink text inside a plate; lamp amber with dark text at night. Hover steps one shade (`act-hover`). There is one primary per group, and it is always Book or the page's main booking action.
- **Line:** ink text with a 1.5px inset currentColor stroke; hover fills ink with wall text. Inside a plate it uses plate ink and fills plate ink on hover.
- **Glass:** for use over photographs only: white text on 42% dark with a 1px 35% white inset ring and a 10px blur; hover deepens to 60%.
- **Focus:** a 2px brass-ink outline at 3px offset, turning plate brass inside plates.
- **Transitions:** colour only, 200ms.

### Links
Semibold ink with a 2px brass underline at 6px offset; on hover the underline turns ink. Inside a plate the text is plate ink.

### Sign Plate
The signature container. Estate-sign green, 10px radius, plate ink text, padding 24px, 36px from 640px, 48px from 1024px. It holds hero and page-hero H1s with their lede, actions and facts; the closing call to action; the directory board; the footer.

### Zone Disc
A brass roundel with the zone number in ink, semibold, tabular: 1.9rem standard, 2.6rem beside a heading. At night its number stays dark (#0B120F) on lamp amber. It appears only for the estate's real zones, and it is decorative to assistive tech (the zone name carries the meaning). Sequence numbers that are not zones, such as booking steps, are neutral outlined numerals: a 32px circle with a 25% ink hairline and semibold tabular ink, never brass.

### Zone Sign Heading
A heading about one place is itself a sign plate: an inline plate (20 to 24px padding) with a large disc and the sign-heading type. Page-hero H1s for a single place carry the large disc beside the title.

### Directional Offer Sign
Stay, day out and events are ways to visit, not places, so they get a directional sign instead of a number: a green plate below the photograph with the offer's name and a 40px brass roundel holding an arrow. On hover the plate raises to `plate-2` and the arrow nudges 4px right.

### Directory Board
The zones as numbered rows inside one plate: disc, name and note, hours right-aligned; rows round at 8px and raise to `plate-2` on hover or focus. On desktop a sticky square photograph beside it follows the active row; on mobile each row shows a 48px thumbnail.

### Facts
Signage copy: key and value rows separated by 14% ink rules (18% plate ink on a plate), muted small keys in a fixed 7.5 to 9rem column, medium-weight values.

### Estate Plan
The home aerial as a site plan. Brass discs pinned to real places with 1.25px white leader lines up to a dark glass label; pins open to show the zone note. Day and night aerials carry their own pin coordinates so a pin stays on its place in both.

### Route Line
Each drive from Bangalore drawn as a transit line: a 4px track at 12% ink, a brass line that draws on scroll, hollow brass origin, ringed wall-coloured stops, a filled brass terminus with a 30% halo, and the drive time in tabular semibold at the right.

### Navigation
The header is a green sign in two positions. On the home page, over the opening aerial, it floats as a plate (10px radius, 64px tall, 68px from 1024px) 12 to 16px inside the viewport edges with a soft lift shadow. As soon as the page scrolls 40px, and on every inside page from the start, it docks into a full-width sign band flush with the top edge: no radius, a 10% plate-ink bottom hairline, and a soft shadow once scrolled. Its contents align with the page wrapper when docked. The change between the two animates padding, width and radius over 0.5s. Inside pages begin below the docked band rather than beneath it. Wordmark in plate ink at left; nav links in medium weight plate-muted, brightening to plate ink on hover; the current page is plate ink with a 3px brass pointer bar beneath it. At right: the time switch in its on-plate form, WhatsApp, and Book a stay in brass. On mobile the menu drops as a second plate beneath the bar, over a 40% dimmed backdrop, with large semibold rows, a brass dot for the current page, the time switch and stacked full-width actions.

### Day/Night Switch
A two-position radio group in a pill track (7% ink on the wall, plate-2 inside a plate, 35% dark glass on photographs), 40px options with sun and moon line icons; the active option is filled ink (white on photographs). Switching fades colours over 0.6s and crossfades night twins over 0.8s; the choice persists.

### Named Rules
**The Real Zones Rule.** Zones 1 to 7 are fixed everywhere (1 Reception and lobby, 2 Rooms, 3 Swimming pool, 4 Children's play area, 5 Lawns and party lawn, 6 Farm Kitchen, 7 Games room and gym). A brass disc appears only for one of these zones and always shows that zone's number.

**The Signs Point, Zones Number Rule.** Offers get directional sign plates with arrows, never zone numbers. Zone-bearing headings are always sign plates.

**The Confirmed Pin Rule.** A zone is pinned on the aerial only when its position is confirmed. All seven zones are pinned, each confirmed by the owner on 22 Sep 2026: Farm Kitchen (6) is the round building, and the Games room and gym (7) are in the reception building beside pin 1.

**The Real Photograph Rule.** Only real photographs of the property, each shipped with a provenance sidecar (`.webp.json`). The AI-edited "ChatGPT Image" in PROPERTY/ is excluded.

**The Distinct Night Still Rule.** Each night slot on a page shows a different night still. When two photographs on one page share a twin, the photo takes a per-use `night` override: a key string picks a different still for that slot, and `night={false}` keeps the slot in daylight (as the directory previews do). PageHero and Closing pass `night` through.

## Do's and Don'ts

### Do:
- **Do** use colour tokens only, so the Day/Night switch recolours every new surface; keep literals for surfaces over photographs.
- **Do** set a heading about one place as a sign plate with its zone's brass disc, using the fixed numbers 1 to 7.
- **Do** give offers (stay, day out, events) a directional sign plate with a brass arrow roundel.
- **Do** open and close every page with a full-bleed photograph and an overlapping sign plate.
- **Do** make the primary action brass inside a plate and green on the wall by day.
- **Do** carry hierarchy with Host Grotesk size and weight (600 headings, 400 body) and 14% ink rules.
- **Do** give every night slot on a page its own night still, using a per-use `night` key where twins would repeat, or `night={false}` to keep a slot in daylight.
- **Do** ship every photograph with a provenance sidecar.

### Don't:
- **Don't** add a second typeface, uppercase tracked labels, or kicker and eyebrow lines above headings.
- **Don't** put a brass disc on anything that is not one of the seven real zones, or renumber a zone on any page; step and sequence numbers are neutral outlined numerals.
- **Don't** pin a zone on the aerial until the owner has confirmed its location .
- **Don't** use AI-generated or AI-edited images, including the "ChatGPT Image" in PROPERTY/.
- **Don't** add shadows or glass to surfaces on the wall or on a plate; they belong only over photographs.
- **Don't** build the resort template: slideshow hero with a date-picker bar, cream and serif, centred sections, icon grids.
- **Don't** use brass as a background wash or decorative fill; it marks place, route and direction.
