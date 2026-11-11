# HN Architects & Interior Designers

A dependency-free static website with an identity-led homepage and five editorial project galleries. Deploy the contents of `dist/` to any static host. No installation or build is required for hosting.

## Develop

From this repository:

```sh
python3 -m http.server 8000 --bind 0.0.0.0 --directory dist
```

The content and HTML templates live in `scripts/render-site.cjs`. After editing those templates, regenerate the six pages and check all local references:

```sh
node scripts/render-site.cjs
node scripts/check-site.cjs
node --check dist/portfolio.js
```

CSS and browser interactions are in `dist/portfolio.css` and `dist/portfolio.js`. No bundler or package manager is needed. The generated HTML is committed for direct hosting. The checker verifies six pages, local file and fragment links, all 38 project photographs in their own galleries, direct contact details, and removal of obsolete location content.

## Photography and fonts

All 38 supplied photographs are retained: 28 finished-space images and 10 construction images. `project-assets.json` records original-to-web mappings and image dimensions. The existing WebP images and original transparent logo are unchanged. There are no generated, recoloured, retouched or stock replacements. Home-page frames crop selected photographs; the project galleries preserve full frames.

Barlow Condensed Light is locally hosted, sourced from the [Google Fonts repository](https://github.com/google/fonts/tree/main/ofl/barlowcondensed), with its SIL Open Font License included at `dist/assets/barlow-OFL.txt`. Instrument Sans and its medium weight are the existing local body fonts. All fonts and photographs load locally; the site makes no external resource requests. Legacy Italiana and GSAP files remain in the asset directory for compatibility, but are not loaded by any page.

## Interaction and access

The opening perspective control switches between three actual Entrance photographs, with pressed states and an accessible status message. Its controls are only revealed when JavaScript is available. It does not autoplay. Photography, navigation and native disclosures work without JavaScript.

Construction anchors open the associated disclosure when JavaScript is available; the native disclosure remains manually accessible otherwise. The optional project brief downloads plain text to the visitor’s device; it does not submit or store anything. All required fields must be completed before downloading. The form is hidden without JavaScript, with direct-contact alternatives explained.

Motion is limited to a short aperture opening and responses to user actions. Reduced motion removes these effects. The old loader, replay controls, custom cursor, liquid text and GSAP runtime have been removed.

## Contact

User-confirmed phone: **+91 99693 13069**. Instagram: **[@hn.archin](https://www.instagram.com/hn.archin/)**. The studio works remotely. No addresses, office locations, maps, directions or physical-visit invitations are published.

## Design records

`PRODUCT.md` contains current product truth. `DESIGN.md` and `.impeccable/design.json` record the implemented system; `.impeccable/surfaces/website.md` records the redesign direction. Local browser-review images are ignored under `.impeccable/review/`.
