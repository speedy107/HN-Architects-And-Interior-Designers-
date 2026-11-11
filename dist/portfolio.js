(() => {
  const $ = (selector) => document.querySelector(selector);
  document.body.classList.add("enhanced");
  const updateHeader = () =>
    document.body.classList.toggle("scrolled", scrollY > 50);
  updateHeader();
  addEventListener("scroll", updateHeader, { passive: true });
  const film = $(".film");
  if (film) {
    const links = [...document.querySelectorAll(".film-nav a")];
    const scenes = [...document.querySelectorAll(".film-scene")];
    let ticking = false;
    function updateChapters() {
      const filmBounds = film.getBoundingClientRect();
      document.body.classList.toggle(
        "past-film",
        filmBounds.bottom < innerHeight * 0.3 || filmBounds.top > innerHeight,
      );
      let active = scenes[0];
      scenes.forEach((scene) => {
        if (scene.getBoundingClientRect().top <= innerHeight * 0.5)
          active = scene;
      });
      links.forEach((link) => {
        if (link.hash === "#" + active.id)
          link.setAttribute("aria-current", "step");
        else link.removeAttribute("aria-current");
      });
      ticking = false;
    }
    addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(updateChapters);
          ticking = true;
        }
      },
      { passive: true },
    );
    addEventListener("resize", updateChapters);
    updateChapters();
  }
  const dialog = $(".photo-viewer");
  if (dialog && typeof dialog.showModal === "function") {
    const photographs = [...document.querySelectorAll(".gallery-view")];
    const viewerImage = dialog.querySelector(".viewer-image img");
    let index = 0;
    function showPhoto(nextIndex) {
      index = (nextIndex + photographs.length) % photographs.length;
      const source = photographs[index];
      const original = source.querySelector("img");
      viewerImage.src = source.href;
      viewerImage.alt = source.dataset.caption;
      viewerImage.width = original.width;
      viewerImage.height = original.height;
      $("#viewer-caption").textContent = source.dataset.caption;
      $("#viewer-count").textContent =
        `${String(index + 1).padStart(2, "0")} / ${String(photographs.length).padStart(2, "0")}`;
    }
    photographs.forEach((link, photoIndex) =>
      link.addEventListener("click", (event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey)
          return;
        event.preventDefault();
        showPhoto(photoIndex);
        dialog.showModal();
        document.body.classList.add("viewer-open");
      }),
    );
    dialog
      .querySelector(".viewer-close")
      .addEventListener("click", () => dialog.close());
    dialog
      .querySelector(".viewer-prev")
      .addEventListener("click", () => showPhoto(index - 1));
    dialog
      .querySelector(".viewer-next")
      .addEventListener("click", () => showPhoto(index + 1));
    dialog.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showPhoto(index - 1);
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        showPhoto(index + 1);
      }
    });
    dialog.addEventListener("close", () =>
      document.body.classList.remove("viewer-open"),
    );
  }
  // A construction anchor opens its native disclosure, including on direct links.
  function revealConstruction() {
    if (location.hash !== "#in-the-making") return;
    const details = $("#in-the-making details");
    if (details) details.open = true;
  }
  revealConstruction();
  addEventListener("hashchange", revealConstruction);
  const form = $("#project-brief");
  if (form) form.hidden = false;
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const text = `PROJECT BRIEF\nHN Architects & Interior Designers\n\nName: ${data.get("name")}\nProject: ${data.get("type")}\n\n${data.get("vision")}\n\nPrepared on your device. This brief has not been sent.\n\nCall: +91 99693 13069\nInstagram: @hn.archin\nhttps://www.instagram.com/hn.archin/\n`;
    const status = $("#brief-status");
    try {
      const url = URL.createObjectURL(
        new Blob([text], { type: "text/plain;charset=utf-8" }),
      );
      const link = document.createElement("a");
      link.href = url;
      link.download = "HN-Architects-Project-Brief.txt";
      document.body.append(link);
      link.click();
      link.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      status.textContent =
        "Your brief is downloaded. Share it with the studio when you’re ready; nothing has been sent.";
    } catch {
      status.textContent =
        "The download could not start. You can keep your ideas here and call the studio on +91 99693 13069.";
    }
  });
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
})();
