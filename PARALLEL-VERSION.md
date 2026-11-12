# Parallel walkthrough refinement

Original site and its deployment are untouched. Source baseline: e74a1c55068b4ee7936b4f806067ee423e27f5e1. Separate checkout and branch codex/walkthrough-refinement. No Sites hosting identity is attached to this copy.

Run a static server against dist/. Regenerate HTML with node scripts/render-site.cjs. Canonical and og:image currently target the original production origin; set them to the chosen destination before publishing this parallel copy. The og image and favicons are bundled locally.

Implemented: native menu cursor; pre-paint session loader class and cleanup with fallback; fixed call link after hero; responsive hero images; one display serif; looser tracking; non-hero accents removed; concrete copy and explicit About placeholders; duplicate hover labels and unused CSS removed; horizontal snap Walkthrough with room observer, buttons, arrow keys, caption and reduced-motion behaviour.

Hero source PROJECTS/RESIDENTIAL1/LR2.jpeg is only 960 × 1280. Supply a native export at least 2000px wide for a sharper large-screen hero. No artificial upscale was created.

Validation: Lighthouse accessibility 100/100 (report in review/); homepage overflow and headline fit checked at 360, 768, 1440, 1920px. Walkthrough button and keyboard updates, native menu cursor and Escape verified in browser. No console errors. CSS provides native touch scrolling and reduced-motion alternatives; physical touchscreen swipe and OS reduced-motion mode were not directly exercised. Static checks retain all 38 photos and exact logo. About placeholders intentionally require owner content.
