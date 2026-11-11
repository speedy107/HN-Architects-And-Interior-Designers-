const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const assets = JSON.parse(
  fs.readFileSync(path.join(root, "project-assets.json"), "utf8"),
);
const instagram = "https://www.instagram.com/hn.archin/";
const arrow =
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 12h15M12 5l7 7-7 7"/></svg>';
const outward =
  '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 19 19 5M5 5h14v14"/></svg>';
const projects = [
  {
    slug: "residence",
    title: "Residence",
    category: "Residential interior",
    cover: "lr2",
    portrait: true,
    note: "Soft curves. Warm wood. A place to pause.",
    description:
      "Curved seating meets warm wood and fitted joinery. A walk through the living room and bedrooms, with a closer look at the details that bring them together.",
    order: ["lr2", "lr3", "lr1", "kb2", "mb2", "mb1", "kb1"],
    captions: [
      "Living room, curved seating",
      "Living room, fitted joinery",
      "A closer look at the seating",
      "Bedroom, headboard and joinery",
      "Bedroom, warm light",
      "Bedroom, timber detailing",
      "Bedroom, bedside detail",
    ],
  },
  {
    slug: "restaurant-1",
    title: "Restaurant 1",
    category: "Restaurant interior",
    cover: "4",
    note: "A dining room drawn in light.",
    description:
      "Burgundy upholstery, mirrored walls and a ceiling traced with light. The photographs follow the dining room from the tables to its reflected details.",
    order: ["4", "1", "2", "3", "5"],
    captions: [
      "The dining room",
      "Tables and burgundy seating",
      "Ceiling and reflected light",
      "Seating, mirrors and light",
      "A view across the tables",
    ],
  },
  {
    slug: "entrance",
    title: "Entrance",
    category: "Interior detail",
    cover: "1",
    portrait: true,
    note: "The space between one room and the next.",
    description:
      "A sequence of arches, panelled walls and geometric flooring. Warm light marks the passage from one room to another.",
    order: ["1", "3", "2", "6", "4", "5"],
    captions: [
      "The entrance hall",
      "Looking through the archway",
      "Wall panelling and light",
      "A view along the hall",
      "The passage between rooms",
      "Light at the doorway",
    ],
  },
  {
    slug: "restaurant-2",
    title: "Restaurant 2",
    category: "Restaurant interior",
    cover: "2",
    note: "Colour gives the room its rhythm.",
    description:
      "Teal seating, graphic wall panels and brick finishes shape a compact dining space. Interior views lead out to the completed frontage.",
    order: ["2", "4", "3", "5", "1"],
    captions: [
      "Teal seating and wall details",
      "The seating arrangement",
      "A view along the dining room",
      "A closer view of the interior",
      "The completed frontage",
    ],
  },
  {
    slug: "ice-cream-parlour",
    title: "Ice cream parlour",
    category: "Commercial interior",
    cover: "3",
    note: "A small space with a bright character.",
    description:
      "Blue and white carry through the service counter, walls and seating. A compact interior seen from the counter to the far end of the room.",
    order: ["3", "1", "2", "4", "5"],
    captions: [
      "A view of the interior",
      "Seating along the wall",
      "The service counter",
      "Colour and seating details",
      "A view across the space",
    ],
  },
];
const asset = (p, name) =>
  assets.find(
    (a) =>
      a.project === p.slug &&
      !a.before &&
      path.basename(a.asset, ".webp") === name,
  );
function image(a, alt, prefix = "", priority = false, extra = "") {
  if (!a) throw new Error(`Missing asset: ${alt}`);
  return `<img src="${prefix}${a.asset}" alt="${alt}" width="${a.width}" height="${a.height}" ${priority ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async" ${extra}>`;
}
function header(home) {
  const b = home ? "" : "../index.html";
  const prefix = home ? "" : "../";
  return `<a class="skip" href="#main">Skip to content</a><header class="site-header">
    <a class="brand" href="${home ? "#home" : "../index.html"}" aria-label="HN Architects home"><img src="${prefix}assets/logo.png" alt="HN Architects & Interior Designers" width="1092" height="1092"></a>
    <nav aria-label="Main navigation"><a href="${b}#studio">Studio</a><a href="${b}#projects">Projects</a><a href="${b}#approach">Approach</a><a href="${b}#contact">Contact</a></nav>
    <a class="header-social" href="${instagram}" target="_blank" rel="noopener noreferrer" aria-label="HN Architects on Instagram (opens in a new tab)">Instagram ${outward}</a>
  </header>`;
}
function footer(home) {
  return `<footer class="footer"><a class="footer-name" href="${home ? "#home" : "../index.html"}">HN Architects<span>&amp; Interior Designers</span></a><span>© <span data-year>2026</span></span><a class="text-link" href="${home ? "#home" : "#top"}">Back to top</a></footer>`;
}
function contact(home) {
  return `<section class="contact" id="contact" aria-labelledby="contact-title">
  <div class="contact-top"><h2 id="contact-title">Tell us what<br>you have in mind.</h2><p>A home. A restaurant. A new beginning.<br>We’d like to hear about it.</p></div>
  <div class="contact-links"><a class="contact-phone" href="tel:+919969310369"><span class="contact-label">Call the studio</span><span>+91 99693 13069 ${outward}</span></a><a class="contact-instagram" href="${instagram}" target="_blank" rel="noopener noreferrer"><span class="contact-label">The studio on Instagram</span><span>@hn.archin ${outward}</span></a></div>
  ${home ? `<details class="brief"><summary>Put your ideas on paper<span class="disclosure-mark" aria-hidden="true"></span></summary><div class="brief-content"><p>A small starting point for your conversation. Download a project brief to keep or share with us. Your details stay on your device.</p><form id="project-brief" hidden><div class="form-row"><label>Your name<input name="name" autocomplete="name" maxlength="160" required></label><label>Project type<select name="type"><option>Residential interior</option><option>Restaurant</option><option>Ice cream parlour</option><option>Entrance</option><option>Other</option></select></label></div><label>What do you have in mind?<textarea name="vision" rows="3" maxlength="10000" required></textarea></label><button type="submit" class="line-link">Download your brief ${arrow}</button><p id="brief-status" role="status"></p></form><noscript><p>The download needs JavaScript. You can call the studio or send your ideas through Instagram instead.</p></noscript></div></details>` : ""}
</section>`;
}
function shell(title, description, body, home = false, project = "") {
  const prefix = home ? "" : "../";
  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="dark"><title>${title}</title><meta name="description" content="${description}"><meta name="theme-color" content="#171817"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:type" content="website"><link rel="icon" href="${prefix}assets/logo.png"><link rel="preload" href="${prefix}assets/instrument-sans.ttf" as="font" type="font/ttf" crossorigin><link rel="stylesheet" href="${prefix}portfolio.css"><script src="${prefix}portfolio.js" defer></script></head>
<body id="${home ? "home" : "top"}" ${project ? `class="project-page project-${project}"` : ""}>${header(home)}${body}${project ? viewer() : ""}${footer(home)}</body></html>`.replace(
    /[ \t]+$/gm,
    "",
  );
}
function viewer() {
  return `<dialog class="photo-viewer" aria-label="Full-frame photograph viewer"><div class="viewer-top"><span>HN Architects / Photographs</span><button type="button" class="viewer-close" aria-label="Close photograph viewer">Close <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg></button></div><div class="viewer-image"><img src="../assets/logo.png" alt="" width="1092" height="1092"></div><div class="viewer-bottom"><p id="viewer-caption" aria-live="polite"></p><div><button type="button" class="viewer-prev" aria-label="Previous photograph">${arrow}</button><span class="photo-index" id="viewer-count"></span><button type="button" class="viewer-next" aria-label="Next photograph">${arrow}</button></div></div></dialog>`;
}
function viewImage(a, alt, priority = false) {
  return `<a class="gallery-view" href="../${a.asset}" data-caption="${alt}" aria-label="View ${alt} full frame">${image(a, alt, "../", priority)}<span class="view-cue">View full frame ${outward}</span></a>`;
}
const entrance = projects.find((p) => p.slug === "entrance");
const intro = `<section class="film" aria-label="A closer look at HN Architects">
  <section class="film-scene scene-threshold" id="threshold" aria-labelledby="intro-title">
    <div class="scene-photograph">${image(asset(entrance, "6"), "Entrance: warm lantern light, panelling and a framed archway", "", true)}</div>
    <div class="scene-copy"><h1 id="intro-title">HN Architects<span>&amp; Interior Designers</span></h1><p class="scene-invitation">Come in.</p><p class="scene-note">Start at the threshold.<br>Stay for the details.</p></div>
    <a class="scene-credit" href="projects/entrance.html"><span class="photo-index">01 / Threshold</span><span>Entrance ${outward}</span></a>
    <a class="scene-continue" href="#room"><span>Scroll to explore</span><span class="scroll-stroke" aria-hidden="true"></span></a>
  </section>
  <section class="film-scene scene-room" id="room" aria-labelledby="room-title">
    <div class="scene-photograph">${image(asset(projects[1], "4"), "Restaurant 1: a panoramic dining room in burgundy, mirrors and light")}</div>
    <div class="scene-copy"><h2 id="room-title">A place<br>to gather.</h2><p>Light, reflection, and the room between.</p></div>
    <a class="scene-credit" href="projects/restaurant-1.html"><span class="photo-index">02 / Room</span><span>Restaurant 1 ${outward}</span></a>
    <a class="scene-continue" href="#detail"><span>Look a little closer</span><span class="scroll-stroke" aria-hidden="true"></span></a>
  </section>
  <section class="film-scene scene-detail" id="detail" aria-labelledby="detail-title">
    <div class="scene-photograph">${image(asset(projects[0], "lr1"), "Residence: a quiet seating corner with curved upholstery and timber joinery")}</div>
    <div class="detail-companion">${image(asset(projects[0], "kb1"), "Residence: bedside light and warm material details")}</div>
    <div class="scene-copy"><h2 id="detail-title">Closer still.</h2><p>A curve. A texture.<br>A change in the light.</p></div>
    <a class="scene-credit" href="projects/residence.html"><span class="photo-index">03 / Detail</span><span>Residence ${outward}</span></a>
    <a class="scene-continue" href="#studio"><span>Meet the studio</span><span class="scroll-stroke" aria-hidden="true"></span></a>
  </section>
  <nav class="film-nav" aria-label="Photographic chapters"><a href="#threshold" aria-current="step"><span>01</span>Threshold</a><a href="#room"><span>02</span>Room</a><a href="#detail"><span>03</span>Detail</a></nav>
</section>`;
const studio = `<section class="studio" id="studio" aria-labelledby="studio-title"><div class="studio-intro"><h2 id="studio-title">Space is something<br>you experience.</h2><p>HN Architects &amp; Interior Designers works across homes, restaurants and commercial interiors.</p></div><div class="studio-body"><p>A doorway changes the way you enter. Seating changes the way you gather. Light changes the way a room feels.</p><p>Our work is here in the spaces themselves, from the first view to the details you notice later.</p><a class="line-link" href="${instagram}" target="_blank" rel="noopener noreferrer">Follow the studio on Instagram ${outward}</a></div></section>`;
function projectEntry(p, i) {
  const second = asset(p, p.order[p.order.length > 2 ? 2 : 1]);
  return `<details class="project-reel reel-${p.slug}" ${i === 0 ? "open" : ""}><summary><span class="photo-index">${String(i + 1).padStart(2, "0")}</span><h3>${p.title}</h3><span class="reel-category">${p.category}</span><span class="disclosure-mark" aria-hidden="true"></span></summary><div class="reel-content"><div class="reel-images"><a class="project-link reel-main" href="projects/${p.slug}.html" aria-label="Explore ${p.title}">${image(asset(p, p.cover), p.title + ": " + p.captions[0])}</a><a class="reel-detail" href="projects/${p.slug}.html" aria-label="Explore the details of ${p.title}">${image(second, p.title + ": " + p.captions[2])}</a></div><div class="reel-caption"><p>${p.note}</p><a class="line-link" href="projects/${p.slug}.html">Explore ${p.title} ${arrow}</a></div></div></details>`;
}
const work = `<section class="selected-work" id="projects" aria-labelledby="work-title"><div class="work-heading"><h2 id="work-title">The projects</h2><p>Five spaces. Come closer.</p></div><div class="project-index">${projects.map(projectEntry).join("\n")}</div></section>`;
const approach = `<section class="approach" id="approach" aria-labelledby="approach-title"><div class="making-photograph">${image(
  assets.find((a) => a.project === "residence" && a.before),
  "Residence during construction, with unfinished walls and fitted joinery taking shape",
)}</div><div class="making-copy"><h2 id="approach-title">Before<br> the finish.</h2><p>The open walls. The unfinished surfaces. The parts that disappear into the completed room.</p><p>Construction photographs are kept alongside the finished work. A record of the space taking shape.</p><a class="line-link" href="projects/residence.html#in-the-making">See the work in progress ${arrow}</a></div></section>`;
const home = `<main id="main">${intro}${studio}${work}${approach}${contact(true)}</main>`;
fs.mkdirSync(path.join(dist, "projects"), { recursive: true });
fs.writeFileSync(
  path.join(dist, "index.html"),
  shell(
    "HN Architects & Interior Designers",
    "Architecture and interiors, from a whole room to the smallest detail. Explore five projects and the studio behind them.",
    home,
    true,
  ),
);
projects.forEach((p, i) => {
  const photos = p.order.map((n) => asset(p, n));
  const before = assets.filter((a) => a.project === p.slug && a.before);
  const next = projects[(i + 1) % projects.length];
  const heading = `<div class="case-heading"><a class="case-back text-link" href="../index.html#projects">All projects</a><h1>${p.title}</h1><p>${p.category}</p></div>`;
  const opening = `<section class="case-opening ${p.portrait ? "case-portrait" : "case-landscape"}"><figure>${viewImage(photos[0], p.title + ": " + p.captions[0], true)}<figcaption><span>${p.captions[0]}</span><span class="photo-index">01 / ${String(photos.length).padStart(2, "0")}</span></figcaption></figure>${heading}</section>`;
  const description = `<div class="case-description"><p>${p.description}</p><a class="explore-link" href="#photographs">Look through the space <span class="scroll-stroke" aria-hidden="true"></span></a></div>`;
  const gallery = photos
    .slice(1)
    .map(
      (a, n) =>
        `<figure class="gallery-photo gallery-photo-${n + 2} ${a.width > a.height ? "landscape" : "portrait"}">${viewImage(a, p.title + ": " + p.captions[n + 1])}<figcaption><span>${p.captions[n + 1]}</span><span class="photo-index">${String(n + 2).padStart(2, "0")}</span></figcaption></figure>`,
    )
    .join("\n");
  const construction = before.length
    ? `<section class="construction-section" id="in-the-making" aria-label="Construction photographs"><details class="construction"><summary><span>In the making</span><span class="construction-count">${before.length} construction photographs</span><span class="disclosure-mark" aria-hidden="true"></span></summary><div class="construction-gallery">${before.map((a, n) => `<figure>${viewImage(a, p.title + " during construction, photograph " + (n + 1))}<figcaption>During the work <span class="photo-index">${String(n + 1).padStart(2, "0")}</span></figcaption></figure>`).join("")}</div></details></section>`
    : "";
  const nextProject = `<section class="next-project" aria-label="Next project"><a href="${next.slug}.html"><div class="next-image">${image(asset(next, next.cover), next.title, "../")}</div><div class="next-copy"><span>Next in the collection</span><h2>${next.title}</h2><span class="line-link">Step inside ${arrow}</span></div></a></section>`;
  const body = `<main id="main">${opening}${description}<section class="project-gallery" id="photographs" aria-label="${p.title} photographs">${gallery}</section>${construction}${nextProject}${contact(false)}</main>`;
  fs.writeFileSync(
    path.join(dist, "projects", p.slug + ".html"),
    shell(
      p.title + " — HN Architects & Interior Designers",
      p.description,
      body,
      false,
      p.slug,
    ),
  );
});
console.log(
  "Generated identity homepage and five editorial project galleries.",
);
