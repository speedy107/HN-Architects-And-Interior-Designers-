# HN Architects & Interior Designers

Static project portfolio with five dedicated galleries. Serve dist/ using any static HTTP server. No dependency installation or build is required for hosting. To regenerate the HTML after editing project copy, run node scripts/render-site.cjs from this directory.

## Project assets
The user supplied ../PROJECTS and confirmed neutral public project names: Residence, Restaurant 1, Restaurant 2, Entrance and Ice cream parlour. All 38 supplied images are used: 28 finished-space views and 10 construction views. The original files are unchanged. Browser-compatible WebP copies are under dist/assets/projects/. HEIC photographs were decoded with macOS sips, then encoded for the web. No generative image editing, retouching, recoloring or replacements were used. project-assets.json records the original-to-web mapping and dimensions for every image.

All former stock photographs have been removed from the deployed source. The unchanged transparent logo remains dist/assets/logo.png, derived from the original 1092 × 1092 upload with RGB channels preserved.

## Interaction and access
Projects is in the top navigation. Each image links to its gallery; a brief SVG-displacement title appears on mouse hover and keyboard focus. Persistent captions provide names on touch devices. Reduced motion disables liquid distortion, scaling and the custom cursor. The logo introduction plays once per browser session and can be replayed. Construction photographs use native details controls. The project brief is a local text download; nothing is submitted.

## Public business details
The address is supported by [Justdial](https://www.justdial.com/Navi-Mumbai/HN-architects-interior-designers-Station-Ulwe/022PXX22-XX22-250612213622-P8I9_BZDET) and [Koovira](https://koovira.com/architect-in-navi-mumbai), researched 11 November 2026. The site uses a listing link for enquiries and Google Maps for directions. No unverified phone, email, dates, budgets, square footage or awards are published.

## Libraries and design approach
GSAP 3.12.5 is bundled locally. Instrument Sans and Italiana are from Google Fonts. The refinement follows the user-invoked Unslop skill, adapted from Unslop by Damir Sokolovsky (@heydamir), https://heydamir.design/unslop, licensed CC BY 4.0: https://creativecommons.org/licenses/by/4.0/.
