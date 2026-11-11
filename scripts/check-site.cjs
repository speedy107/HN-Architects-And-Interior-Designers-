// Dependency-free content and link checks. Run after scripts/render-site.cjs.
const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");
const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const pages = [
  "index.html",
  ...fs
    .readdirSync(path.join(dist, "projects"))
    .filter((f) => f.endsWith(".html"))
    .map((f) => "projects/" + f),
];
assert.equal(pages.length, 6, "Expected a homepage and five galleries");
const photographs = JSON.parse(
  fs.readFileSync(path.join(root, "project-assets.json"), "utf8"),
);
let references = 0;
let allHTML = "";
for (const page of pages) {
  const html = fs.readFileSync(path.join(dist, page), "utf8");
  allHTML += html;
  assert.equal(
    (html.match(/<h1\b/g) || []).length,
    1,
    `${page}: one primary heading`,
  );
  assert(html.includes('href="tel:+919969310369"'), `${page}: phone contact`);
  assert(
    html.includes("https://www.instagram.com/hn.archin/"),
    `${page}: Instagram`,
  );
  assert(
    !/justdial|koovira|google\.com\/maps|<address\b|Navi Mumbai|Ulwe|Bay Bliss|location/i.test(
      html,
    ),
    `${page}: obsolete location content`,
  );
  assert(
    !/id="loader"|id="cursor"|feTurbulence|gsap\.min\.js/.test(html),
    `${page}: removed effects`,
  );
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(new Set(ids).size, ids.length, `${page}: unique ids`);
  for (const [, value] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if (/^(https?:|tel:|data:)/.test(value)) continue;
    const [file, fragment] = value.split("#");
    const target = file
      ? path.resolve(path.dirname(path.join(dist, page)), file)
      : path.join(dist, page);
    assert(target.startsWith(dist + path.sep), `${page}: valid local target`);
    assert(fs.existsSync(target), `${page}: missing ${value}`);
    if (fragment && target.endsWith(".html")) {
      assert(
        fs.readFileSync(target, "utf8").includes(`id="${fragment}"`),
        `${page}: missing anchor ${value}`,
      );
    }
    references++;
  }
}
for (const photo of photographs) {
  assert(fs.existsSync(path.join(dist, photo.asset)), `Missing ${photo.asset}`);
  const gallery = fs.readFileSync(
    path.join(dist, "projects", photo.project + ".html"),
    "utf8",
  );
  assert(
    gallery.includes("../" + photo.asset),
    `Photograph absent from its gallery: ${photo.asset}`,
  );
}
const homepage = fs.readFileSync(path.join(dist, "index.html"), "utf8");
for (const chapter of ["threshold", "room", "detail"]) {
  assert(homepage.includes(`id="${chapter}"`), `Missing photographic chapter: ${chapter}`);
  assert(homepage.includes(`href="#${chapter}"`), `Missing chapter navigation: ${chapter}`);
}
assert.equal((homepage.match(/<details class="project-reel /g) || []).length, 5, "Five expandable projects");
assert(!homepage.includes('class="intro-hn"'), "Discarded giant wordmark must not return");
for (const photo of photographs) {
  const gallery = fs.readFileSync(path.join(dist, "projects", photo.project + ".html"), "utf8");
  assert(gallery.includes(`href="../${photo.asset}"`), `Missing direct full-frame fallback: ${photo.asset}`);
  assert(gallery.includes('<dialog class="photo-viewer"'), `Missing photograph viewer: ${photo.project}`);
}
assert.equal(photographs.length, 38);
assert(!/\b(?:Ulwe|Mumbai|Bay Bliss|Directions)\b/i.test(allHTML));
console.log(
  `PASS: ${pages.length} pages, ${references} local links, all ${photographs.length} original photographs, contact details and removed location content.`,
);
