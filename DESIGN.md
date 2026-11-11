---
name: HN Architects & Interior Designers
description: A cinematic photographic identity, moving from threshold to room to detail.
colors:
  bg: "#171817"
  deep: "#101110"
  ink: "#e9e4d9"
  gold: "#b69a62"
  muted: "#aaa99f"
  line: "#393b35"
typography:
  invitation: {fontFamily: "Instrument, Arial, sans-serif", fontSize: "clamp(38px, 4.5vw, 68px)", fontWeight: 400, lineHeight: 1.1, letterSpacing: "-0.035em"}
  scene-title: {fontFamily: "Instrument, Arial, sans-serif", fontSize: "clamp(40px, 4.5vw, 66px)", fontWeight: 400, lineHeight: 1.08, letterSpacing: "-0.035em"}
  studio-title: {fontFamily: "Instrument, Arial, sans-serif", fontSize: "clamp(32px, 3.3vw, 50px)", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.03em"}
  project-title: {fontFamily: "Instrument, Arial, sans-serif", fontSize: "clamp(30px, 3.2vw, 48px)", fontWeight: 400, lineHeight: 1.12, letterSpacing: "-0.03em"}
  reel-title: {fontFamily: "Instrument, Arial, sans-serif", fontSize: "clamp(25px, 3vw, 45px)", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.025em"}
  body: {fontFamily: "Instrument, Arial, sans-serif", fontSize: "16px", fontWeight: 400, lineHeight: 1.65}
  navigation: {fontFamily: "Instrument, Arial, sans-serif", fontSize: "13px", fontWeight: 400}
  photo-index: {fontFamily: "ui-monospace, Consolas, monospace", fontSize: "10px", fontWeight: 400, lineHeight: 1.5}
rounded:
  square: "0"
spacing:
  page: "5vw"
  page-mobile: "6vw"
  studio-section: "115px"
  studio-section-mobile: "65px"
  reel-grid: "24px"
  gallery-column: "35px"
  gallery-row: "70px"
  gallery-row-mobile: "38px"
components:
  line-link: {backgroundColor: "transparent", textColor: "{colors.ink}", padding: "12px 0"}
  line-link-hover: {textColor: "{colors.gold}"}
  input: {backgroundColor: "transparent", textColor: "{colors.ink}", rounded: "{rounded.square}", padding: "11px 0", width: "100%"}
  reel-summary: {padding: "27px 0"}
  viewer-control: {width: "44px", height: "44px"}
  photo-index: {textColor: "{colors.gold}", typography: "{typography.photo-index}"}
---

# Design System: HN Architects & Interior Designers

## Overview

**Cinematic and immersive: photography dominates, with dramatic framing and transitions.** Walk through Threshold → Room → Detail, then choose a project. The original transparent silver/gold logo anchors a restrained Instrument Sans identity. The oversized HN wordmark, condensed display face and three-view selector have been retired.

The surface contract is [.impeccable/surfaces/website.md](.impeccable/surfaces/website.md). These tokens describe `dist/portfolio.css`; `scripts/render-site.cjs` generates the homepage and five project pages.

## Colors

Charcoal is the page canvas; near black supports photographs, approach content and the viewer. Warm ivory carries primary text; supporting grey carries secondary copy. Brass identifies rules, indices, focus, active chapters and hover feedback. Thin structural grey rules divide expandable rows and contact information. Use the implemented colors directly; no additional tonal ramps are implied.

## Typography

Instrument Sans is self-hosted in regular 400 and medium 500 weights. It supplies both titles and reading text; modest negative tracking gives titles definition without competing with photography. Monospace is reserved for actual scene, project and photograph indices with tabular numerals. Headings remain regular weight; the opening studio name uses medium at 15px.

## Layout

The opening comprises three native sticky scenes, each `100svh` with a 680px desktop minimum. Threshold presents Entrance beside a narrow charcoal text margin. Room expands Restaurant 1 across the frame. Detail pairs Residence photographs at different scales. The cuts happen through ordinary scrolling; there is no scroll interception or autoplay.

The fixed header retains the original logo, Studio, Projects, Approach and Contact links. A dark top scrim supports navigation over photographs; scrolling beyond 50px gives the header a near-opaque ground. The chapter rail sits at the left on desktop, tracks the current scene with `aria-current="step"`, and hides beyond the film when enhanced. Without JavaScript it remains an ordinary in-film anchor navigation.

Studio content uses two columns, followed by five native project reels. Residence starts open. Each reel retains a name, index and category; opening it reveals a photographic spread and a direct project action. Restaurant 1 uses one panoramic frame; Entrance pairs contained portrait frames. Construction imagery leads into direct contact.

Project pages begin with a full-height photographic opening and quiet title margin. Galleries use two columns with selective full-width landscapes and portrait offsets. Photographs preserve their full frames in gallery and viewer. Captions and actual photo indices persist. The next-project scene continues the five-project cycle.

### Responsive rules

- **1800px minimum:** gutter becomes `max(5vw, calc((100vw - 1680px) / 2))`; the Threshold photograph begins at 25%, chapter rail narrows to 15%, and scene-copy maximum becomes 20%.
- **1100px maximum:** navigation and scene margins tighten; studio spacing becomes 85px, approach imagery 570px minimum, and ordinary reel imagery 470px high.
- **700px maximum:** gutter becomes 6vw; header becomes 84px with a 65px logo and all four navigation links. The separate Instagram header link hides. Sticky scenes have a 700px minimum; photography fills the viewport behind readable lower scrims, the chapter rail becomes horizontal, and Detail's companion hides. Studio, approach, contact, forms and construction grids stack. Reels show a single main image. Project openings return to document flow; galleries become one column with alternating 90%-width portraits. Viewer controls remain 44px square.
- **370px maximum:** navigation gaps become 15px, logo width 57px, invitation 50px, reel titles 23px and contact heading 32px.

## Elevation & Depth

Native sticky stacking provides the principal scene transition. Supported cross-document View Transitions fade the old page out over 0.2s and the new page in over 0.35s. State transitions last 0.2–0.3s; principal easing is `cubic-bezier(0.16, 1, 0.3, 1)`. Reduced motion disables animation and transitions and changes smooth scrolling to automatic scrolling.

## Shapes

Square image frames, thin brass strokes and baseline fields define the interface. There are no box shadows or rounded panels. Gradients are functional photographic scrims for text contrast; do not add ornamental gradients or permanent photographic color filters.

## Components

**Actions and disclosures:** Text actions have a brass baseline, a minimum 44px height and a small arrow shift on hover. Native `details`/`summary` power project reels, construction photographs and the optional brief. Brass plus marks become minus marks when open. Construction hash links open their disclosure with JavaScript.

**Full-frame viewer:** Gallery photographs are direct-image links. When native dialog support and JavaScript are available, activation opens a full-viewport dialog with contained photography, a caption, count, Close, Previous and Next controls. Arrow keys cycle photographs and Escape closes the dialog. Modified clicks retain normal link behavior. Page scrolling locks while open.

**Brief and contact:** Transparent fields retain visible labels and baseline borders. Native validation requires name and vision. The brief downloads a local text file and sends no data; status says so. The form stays hidden without JavaScript and direct contact remains available. Contact uses +91 99693 13069 and @hn.archin only; the studio works remotely.

**Progressive enhancement:** Keep a skip link, visible 2px brass focus outlines with 6px offsets, descriptive alt text, keyboard-operable native controls and usable static navigation. Print exposes disclosure content, removes interactive extras and uses white/black for reading sections.

## Do's and Don'ts

Preserve the original logo and all 38 supplied photographs; consult `project-assets.json` and `.impeccable/asset-provenance.json` for provenance. Keep the factual project names and confirmed contact details. Do not invent clients, credentials, dates, measurements or statistics. Do not publish physical locations or visit invitations. Avoid replacement imagery, giant replacement wordmarks, identical cards, luxury serif styling, loaders, custom cursors, liquid effects, autoplay and runtime animation libraries.
