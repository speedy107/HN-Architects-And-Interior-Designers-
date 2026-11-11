---
name: HN Architects & Interior Designers
description: An experimental editorial identity built from architectural photography and condensed typography.
colors:
  bg: "#171817"
  deep: "#101110"
  ink: "#e9e4d9"
  gold: "#b69a62"
  muted: "#85847d"
  secondary: "#aaa99f"
  line: "#393b35"
typography:
  display-hn: {fontFamily: 'Barlow, "Arial Narrow", sans-serif', fontSize: "clamp(250px, 24vw, 420px)", fontWeight: 300, lineHeight: 0.8, letterSpacing: "-0.025em"}
  display-wordmark: {fontFamily: 'Barlow, "Arial Narrow", sans-serif', fontSize: "19.1vw", fontWeight: 300, lineHeight: 0.77, letterSpacing: "-0.025em"}
  headline: {fontFamily: 'Barlow, "Arial Narrow", sans-serif', fontSize: "clamp(64px, 8.5vw, 128px)", fontWeight: 300, lineHeight: 1, letterSpacing: "-0.02em"}
  project-title: {fontFamily: 'Barlow, "Arial Narrow", sans-serif', fontSize: "clamp(72px, 9vw, 140px)", fontWeight: 300, lineHeight: 0.98, letterSpacing: "-0.02em"}
  project-caption: {fontFamily: "Instrument, Arial, sans-serif", fontSize: "24px", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.02em"}
  body: {fontFamily: "Instrument, Arial, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: 1.6}
  navigation: {fontFamily: "Instrument, Arial, sans-serif", fontSize: "14px", fontWeight: 400}
  photo-index: {fontFamily: 'ui-monospace, "SFMono-Regular", Consolas, monospace', fontSize: "11px", fontWeight: 400, lineHeight: 1.5}
rounded:
  square: "0"
spacing:
  page: "4.5vw"
  page-mobile: "6vw"
  section: "140px"
  section-mobile: "80px"
  grid: "24px"
  grid-mobile: "15px"
  gallery-row: "100px"
  gallery-row-mobile: "45px"
components:
  line-link: {backgroundColor: "transparent", textColor: "{colors.ink}", padding: "12px 0"}
  line-link-hover: {textColor: "{colors.gold}"}
  perspective-button: {backgroundColor: "transparent", textColor: "{colors.muted}", width: "44px", height: "44px", typography: "{typography.photo-index}"}
  perspective-button-selected: {textColor: "{colors.ink}"}
  input: {backgroundColor: "transparent", textColor: "{colors.ink}", rounded: "{rounded.square}", padding: "12px 0", width: "100%"}
  disclosure-summary: {padding: "24px 0"}
  photo-index: {textColor: "{colors.gold}", typography: "{typography.photo-index}"}
---

# Design System: HN Architects & Interior Designers

## Overview

**Creative North Star: "The Open Architectural Section"**

An experimental editorial identity with cinematic scale: light condensed lettering counterbalances tall photographic apertures and deliberate gaps. Warm photographs sit directly on charcoal; unequal compositions provide variety. The original transparent silver/gold logo and all 38 supplied photographs remain the evidence.

**Key Characteristics:**

- Oversized condensed type and real architectural photography.
- Charcoal grounds, warm ivory text and precise brass marks.
- Unequal grids, square frames and open corners.
- Manual interactions, native disclosures and progressive enhancement.

The current surface contract is [.impeccable/surfaces/website.md](.impeccable/surfaces/website.md). Frontmatter tokens above describe the implementation in `dist/portfolio.css`; `secondary` names its recurring literal supporting text color.

## Colors

### Primary

**Muted Brass — gold:** Photograph indices, open corners, action rules, selection, focus, status and hover feedback.

### Neutral

**Charcoal — bg** is the page canvas. **Deep Ground — deep** distinguishes making/contact sections and photographic fallback surfaces. **Warm Ivory — ink** carries headings and primary text. **Supporting Grey — secondary** carries secondary paragraphs, categories and captions. **Quiet Grey — muted** marks inactive perspective numbers, instructions and field baselines. **Structural Grey — line** supplies dividers.

**The Photograph Rule.** Preserve supplied photographs without a permanent color wash, saturation filter or replacement imagery.

## Typography

Barlow Condensed Light is self-hosted as `dist/assets/barlow-condensed-light.ttf` and registered as the CSS family `Barlow`. Existing local Instrument Sans files supply body/interface text. Monospace indices use system fonts and tabular numerals; they refer to actual photographs, perspectives or collection positions.

Frontmatter records the main desktop roles. Studio body text uses 17px/1.75 within 510px; project descriptions use 16px/1.8 within 43ch. Other condensed headings vary by context: studio statement `clamp(45px, 5.8vw, 88px)/1.02`, making statement `clamp(52px, 6vw, 88px)/1.05`, contact `clamp(60px, 7vw, 104px)/1.02`. Restaurant 1 intentionally has a larger condensed collection caption.

**The Two Voices Rule.** Use Barlow for expressive scale and Instrument for reading and controls. Reserve monospace for indices and perspective numbers.

## Layout

Desktop editorial compositions use twelve equal columns. Studio/collection column gaps use `spacing.grid`; galleries use 28px column gaps and `spacing.gallery-row`. Page edges and section rhythm follow frontmatter. The homepage collection spans columns 2–8 for Residence, all twelve for Restaurant 1, 7–11 for Entrance, 1–6 for Restaurant 2 and 9–12 for Ice cream parlour. Frames vary from panoramic to tall; captions remain visible.

The opening identity places HN left, a tall Entrance aperture right and ARCHITECTS across the lower composition. Its manual selector uses actual `entrance/1.webp`, `entrance/3.webp` and `entrance/6.webp`; the first photograph is immediately present in HTML.

Residence and Entrance have split project openings; the other three use wide openings. Galleries preserve full photographic frames and natural height. The following records each authored desktop sequence; filenames are relative to that project's asset folder, and column ranges are inclusive.

| Project | Opening | Following photographs and columns |
| --- | --- | --- |
| Residence | `lr2` | `lr3`: 1–12; `lr1`: 2–5; `kb2`: 7–12, +100px top; `mb2`: 1–6; `mb1`: 8–12, +110px; `kb1`: 4–8. |
| Restaurant 1 | `4` | `1`: 1–9; `2`: 6–12; `3`: 1–9; `5`: 5–12. |
| Entrance | `1` | `3`: 1–5; `2`: 8–12, +190px; `6`: 4–9; `4`: 1–5; `5`: 8–12, +160px. |
| Restaurant 2 | `2` | `4`: 3–10; `3`: 1–5; `5`: 8–12, +130px; `1`: 2–11. |
| Ice cream parlour | `3` | `1`: 2–6; `2`: 8–12, +140px; `4`: 1–4; `5`: 6–12, +150px. |

Responsive CSS uses these inclusive boundaries:

- **1800px minimum:** Gutter becomes `max(5vw, calc((100vw - 1660px) / 2))`; HN/ARCHITECTS become 470px/350px.
- **1100px maximum:** Brand descriptor hides, navigation tightens, HN becomes 32vw and aperture width 49%. Ice cream parlour begins at column 8; galleries retain desktop compositions.
- **700px maximum:** Gutter becomes `spacing.page-mobile`. All four navigation links remain; the separate Instagram header link hides. HN/aperture remain side by side, with ARCHITECTS below; HN is 43vw, ARCHITECTS 18.5vw, and hero height is bounded by 600px/780px. Studio uses four columns; collection/galleries use six, retaining alternating insets. Project headings become 80px. Gallery top offsets reset; landscapes span six columns, portraits alternate columns 1–5 and 2–6, except Entrance photograph 4 spans all six and Ice cream parlour photograph 4 spans 1–4. Galleries use `spacing.gallery-row-mobile`. Contact, forms and construction galleries stack; studio body stays indented.
- **370px maximum:** Header tightens, logo shrinks, hero minimum becomes 560px and aperture width 49%. Contact heading becomes 58px, phone 26px, selected-work heading 59px; Restaurant 1's category gets its own line.

## Elevation & Depth

There are no box shadows. Tonal sections, photographic depth, typography and open space establish hierarchy. A deep rectangular action label overlays collection imagery on desktop hover/focus.

Motion consists of a non-blocking aperture reveal (1.2s), short state transitions (0.2–0.3s) and a manually triggered photograph fade (300ms). Principal easing is `cubic-bezier(0.16, 1, 0.3, 1)`; the fade uses `ease-out`. Reduced motion disables CSS animations/transitions, uses automatic scrolling and skips the JavaScript fade. Hover/selected states remain immediate. No autoplay, loaders, custom cursors, liquid filters or runtime GSAP are present.

## Shapes

Square photographs and fields, thin horizontal rules and incomplete brass corners form the vocabulary. The aperture's top/right corner is persistent; project corners reveal on hover and keyboard focus. Short perpendicular ticks echo these marks. Thin inline SVG arrows identify actions. Fields have a baseline rather than a rounded or filled container.

## Components

**Navigation/actions:** The header is in normal flow. Studio, Work, Approach and Contact links reveal brass underlines on hover/focus. Line actions use a brass baseline and a small arrow movement on hover. Contact rows show `+91 99693 13069` (`tel:+919969310369`) and `@hn.archin` (`https://www.instagram.com/hn.archin/`).

**Perspective selector:** Three manual numbered buttons use `aria-pressed`, a selected underline and an accessible status message. Images decode before replacement; alt text follows the view and failures announce an explanation. Buttons are 44px square on desktop, 39px × 40px at 700px and below. Controls remain hidden without JavaScript.

**Project links/captions:** Names, categories and indices persist. Hover/focus reveal the corner and “Explore project” label; mobile hides the image overlay and displays a caption arrow. Full-frame gallery figures have descriptive captions and actual indices. Next-project links continue the five-project cycle.

**Disclosures/fields:** Native `details`/`summary` hold construction images and the homepage brief. Brass plus marks become minus marks when open. Construction grids have two desktop columns and one mobile column. Brief fields are transparent with muted baselines, brass carets and visible labels. Native validation requires name and vision. The download creates local plain text; it submits no data and uses no remote storage. Status explains this result.

**Access/progressive enhancement:** Interactive elements have a 2px brass focus outline with a 6px offset. A skip link appears on focus; decorative marks and SVGs are hidden from assistive technology. Static photography, navigation, contact and native disclosures work without JavaScript. Construction fragments open their disclosure automatically with JavaScript, manually otherwise. The brief form is hidden until JavaScript is available; `noscript` explains direct-contact alternatives. Print switches to white/black, hides interactive extras and exposes disclosure content.

## Do's and Don'ts

### Do:

- **Do** preserve the original logo and all 38 photographs; consult `project-assets.json` and `.impeccable/asset-provenance.json` for mappings, hashes and origins.
- **Do** maintain the distinct display/body/index roles, unequal compositions, square frames and complete frames in galleries.
- **Do** retain factual names: Residence, Restaurant 1, Entrance, Restaurant 2 and Ice cream parlour.
- **Do** preserve keyboard focus, native disclosures, reduced-motion behavior and usable static content.
- **Do** use the confirmed phone and Instagram for direct conversation.

### Don't:

- **Don't** introduce stock/generated replacement photography, permanent image filters, identical project cards, luxury serif styling, ornamental gradients or rounded panels.
- **Don't** restore loaders, custom cursors, liquid effects, autoplay or runtime animation libraries.
- **Don't** invent clients, dates, credentials, drawings, measurements or statistics.
- **Don't** publish addresses, office locations, maps, directions or physical-visit invitations; the studio works remotely.
- **Don't** imply that a locally downloaded brief has been sent.
