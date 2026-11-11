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
  return `<a class="skip" href="#main">Skip to content</a>
<header class="site-header">
  <a class="brand" href="${home ? "#home" : "../index.html"}" aria-label="HN Architects home"><img src="${prefix}assets/logo.png" alt="HN Architects & Interior Designers" width="1092" height="1092"><span>Architecture &amp;<br>interior design</span></a>
  <nav aria-label="Main navigation"><a href="${b}#studio">Studio</a><a href="${b}#projects">Work</a><a href="${b}#approach">Approach</a><a href="${b}#contact">Contact</a></nav>
  <a class="header-social" href="${instagram}" target="_blank" rel="noopener noreferrer" aria-label="HN Architects on Instagram (opens in a new tab)">Instagram ${outward}</a>
</header>`;
}
function footer(home) {
  return `<footer class="footer"><a class="footer-name" href="${home ? "#home" : "../index.html"}">HN Architects<span>&amp; Interior Designers</span></a><span>© <span data-year>2026</span></span><a class="text-link" href="${home ? "#home" : "#top"}">Back to top</a></footer>`;
}
function contact(home) {
  return `<section class="contact" id="contact" aria-labelledby="contact-title">
  <div class="contact-top"><h2 id="contact-title">Let’s talk<br>about your space.</h2><p>A home, a place to gather,<br>or something of your own.<br>Start with a conversation.</p></div>
  <div class="contact-links"><a class="contact-phone" href="tel:+919969310369"><span class="contact-label">Call the studio</span><span>+91 99693 13069 ${outward}</span></a><a class="contact-instagram" href="${instagram}" target="_blank" rel="noopener noreferrer"><span class="contact-label">The studio on Instagram</span><span>@hn.archin ${outward}</span></a></div>
  ${home ? `<details class="brief"><summary>Put your ideas on paper<span class="disclosure-mark" aria-hidden="true"></span></summary><div class="brief-content"><p>A small starting point for your conversation. Download a project brief to keep or share with us. Your details stay on your device.</p><form id="project-brief" hidden><div class="form-row"><label>Your name<input name="name" autocomplete="name" maxlength="160" required></label><label>Project type<select name="type"><option>Residential interior</option><option>Restaurant</option><option>Ice cream parlour</option><option>Entrance</option><option>Other</option></select></label></div><label>What do you have in mind?<textarea name="vision" rows="3" maxlength="10000" required></textarea></label><button type="submit" class="line-link">Download your brief ${arrow}</button><p id="brief-status" role="status"></p></form><noscript><p>The download needs JavaScript. You can call the studio or send your ideas through Instagram instead.</p></noscript></div></details>` : ""}
</section>`;
}
function shell(title, description, body, home = false, project = "") {
  const prefix = home ? "" : "../";
  return `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="color-scheme" content="dark"><title>${title}</title><meta name="description" content="${description}"><meta name="theme-color" content="#171817"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:type" content="website"><link rel="icon" href="${prefix}assets/logo.png"><link rel="preload" href="${prefix}assets/barlow-condensed-light.ttf" as="font" type="font/ttf" crossorigin><link rel="preload" href="${prefix}assets/instrument-sans.ttf" as="font" type="font/ttf" crossorigin><link rel="stylesheet" href="${prefix}portfolio.css"><script src="${prefix}portfolio.js" defer></script></head>
<body id="${home ? "home" : "top"}" ${project ? `class="project-page project-${project}"` : ""}>${header(home)}${body}${footer(home)}</body></html>`.replace(/[ \t]+$/gm, "");
}
const entrance = projects.find((p) => p.slug === "entrance");
const intro = `<section class="intro" aria-label="HN Architects introduction">
  <h1 class="intro-title"><span class="intro-hn">HN</span><span class="intro-architects">ARCHITECTS</span><span class="sr-only"> &amp; Interior Designers</span></h1>
  <p class="intro-statement">A different way<br>to look at space.</p>
  <div class="intro-aperture"><div class="aperture-caption"><span>Through the doorway</span><span class="photo-index" id="perspective-index">01 / 03</span></div><div class="aperture-image">${image(asset(entrance, "1"), "Entrance hall with arches, panelling and warm light", "", true, 'id="perspective-image"')}</div><div class="perspective-control" hidden><span>Change perspective</span><div role="group" aria-label="Entrance perspectives">${["1", "3", "6"].map((n, i) => `<button type="button" aria-label="Entrance perspective ${i + 1}" aria-pressed="${i === 0}" data-perspective="assets/projects/entrance/${n}.webp" data-description="${entrance.captions[entrance.order.indexOf(n)]}">${String(i + 1).padStart(2, "0")}</button>`).join("")}</div></div><p class="sr-only" id="perspective-status" role="status"></p></div>
  <div class="intro-bottom"><a href="#studio" class="explore-link">Inside the practice <span class="vertical-line" aria-hidden="true"></span></a><span>Architecture &amp; interior design</span></div>
</section>`;
const studio = `<section class="studio section-space" id="studio" aria-labelledby="studio-title"><div class="section-title"><h2 id="studio-title">The studio</h2><span class="section-marker" aria-hidden="true"></span></div><div class="studio-statement"><p>From a whole room<br>to the smallest detail.</p></div><div class="studio-body"><p>HN Architects &amp; Interior Designers works across homes, restaurants and commercial interiors.</p><p>A curved seat. A framed doorway. A ceiling traced with light. The work is best understood up close, through the spaces and the details within them.</p><a class="line-link" href="${instagram}" target="_blank" rel="noopener noreferrer">Get to know the studio ${outward}</a></div></section>`;
function projectEntry(p, i) {
  return `<article class="work-entry work-${p.slug}"><a class="project-link" href="projects/${p.slug}.html"><div class="work-image">${image(asset(p, p.cover), p.title + ": " + p.captions[0])}<span class="image-action">Explore project ${arrow}</span></div><div class="work-caption"><span class="photo-index">${String(i + 1).padStart(2, "0")}</span><h3>${p.title}</h3><span class="work-category">${p.category}</span><span class="work-arrow">${arrow}</span></div></a><p class="work-note">${p.note}</p></article>`;
}
const work = `<section class="selected-work section-space" id="projects" aria-labelledby="work-title"><div class="work-heading"><h2 id="work-title">Selected work</h2><p>Five spaces.<br> Different ways of being.</p></div><div class="work-collection">${projects.map(projectEntry).join("\n")}</div></section>`;
const approach = `<section class="approach section-space" id="approach" aria-labelledby="approach-title"><div class="section-title"><h2 id="approach-title">In the making</h2><span class="section-marker" aria-hidden="true"></span></div><div class="approach-heading"><p>The parts you<br>don’t usually see.</p><div><p>Before the finished room: open walls, unfinished surfaces, light finding its way in.</p><p>The construction photographs sit alongside the completed interiors. A record of the space taking shape.</p><a class="line-link" href="projects/residence.html#in-the-making">See the Residence in progress ${arrow}</a></div></div><div class="making-composition"><figure class="making-wide">${image(
  assets.find((a) => a.project === "residence" && a.before),
  "Residence during construction, before the finished interior",
)}<figcaption><span>Residence</span><span>During the work</span></figcaption></figure><figure class="making-detail">${image(asset(projects[0], "lr1"), "Residence, completed seating and joinery detail")}<figcaption><span>The finished detail</span><span>Living room</span></figcaption></figure></div></section>`;
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
  const heading = `<div class="project-title-block"><a class="project-back text-link" href="../index.html#projects">Selected work <span class="photo-index">/ ${String(i + 1).padStart(2, "0")}</span></a><h1>${p.title}</h1><p class="project-category">${p.category}</p><p class="project-description">${p.description}</p><a class="explore-link" href="#photographs">Explore the photographs <span class="vertical-line" aria-hidden="true"></span></a></div>`;
  const opening = `<figure class="opening-photo">${image(photos[0], p.title + ": " + p.captions[0], "../", true)}<figcaption><span>${p.captions[0]}</span><span class="photo-index">01 / ${String(photos.length).padStart(2, "0")}</span></figcaption></figure>`;
  const gallery = photos
    .slice(1)
    .map(
      (a, n) =>
        `<figure class="gallery-photo gallery-photo-${n + 2} ${a.width > a.height ? "landscape" : "portrait"}">${image(a, p.title + ": " + p.captions[n + 1], "../")}<figcaption><span>${p.captions[n + 1]}</span><span class="photo-index">${String(n + 2).padStart(2, "0")}</span></figcaption></figure>`,
    )
    .join("\n");
  const construction = before.length
    ? `<section class="construction-section" id="in-the-making" aria-label="Construction photographs"><details class="construction"><summary><span>In the making</span><span class="construction-count">${before.length} construction photographs</span><span class="disclosure-mark" aria-hidden="true"></span></summary><div class="construction-gallery">${before.map((a, n) => `<figure>${image(a, p.title + " during construction, photograph " + (n + 1), "../")}<figcaption>During the work <span class="photo-index">${String(n + 1).padStart(2, "0")}</span></figcaption></figure>`).join("")}</div></details></section>`
    : "";
  const nextProject = `<section class="next-project" aria-label="Next project"><a href="${next.slug}.html"><div><span class="next-label">Next in the collection</span><h2>${next.title}</h2><span class="line-link">Explore project ${arrow}</span></div><div class="next-image">${image(asset(next, next.cover), next.title, "../")}</div></a></section>`;
  const body = `<main id="main"><section class="project-opening ${p.portrait ? "split-opening" : "wide-opening"}">${heading}${opening}</section><section class="project-gallery" id="photographs" aria-label="${p.title} photographs">${gallery}</section>${construction}${nextProject}${contact(false)}</main>`;
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
