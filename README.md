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

Existing Instrument Sans and its medium weight are locally hosted. Display text is deliberately restrained; the original studio logo carries the identity and photography owns the screen. Legacy Barlow, Italiana and GSAP assets remain in the directory but are not loaded. The site requests no external runtime resources.

## Interaction and access

The homepage opens with three photographic chapters: Threshold, Room and Detail. Native sticky positioning lets one scene cover the previous one through ordinary scrolling. There is no autoplay, intercepted scrolling, simulated camera movement, loading screen or custom cursor. Chapter links jump to each scene; a small rail indicates the current chapter when JavaScript is available. Without JavaScript, the photographic sequence and anchor navigation still work.

The five project-index entries are native disclosures with photographic spreads and separate gallery links. All 38 original images remain on their project pages. A full-frame viewer progressively enhances the direct-image links: click a photograph, use previous/next buttons or arrow keys, then Escape or Close to leave. The native dialog contains focus and restores it on close. Modified clicks retain the direct-image behavior.

Construction anchors open the associated disclosure when JavaScript is available, with a manual native disclosure otherwise. The optional project brief downloads plain text locally; no data is submitted or stored. Without JavaScript the form stays hidden and direct-contact alternatives are explained. Reduced motion disables smooth scrolling, hover transitions and supported cross-document view transitions.

## Contact

User-confirmed phone: **+91 99693 13069**. Instagram: **[@hn.archin](https://www.instagram.com/hn.archin/)**. The studio works remotely. No addresses, office locations, maps, directions or physical-visit invitations are published.

## Design records

`PRODUCT.md` contains current product truth. `DESIGN.md` and `.impeccable/design.json` record the implemented system; `.impeccable/surfaces/website.md` records the redesign direction. Local browser-review images are ignored under `.impeccable/review/`.
