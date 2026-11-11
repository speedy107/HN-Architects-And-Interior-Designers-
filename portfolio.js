(() => {
  const $ = (selector) => document.querySelector(selector);
  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
  const perspectiveImage = $("#perspective-image");
  const controls = document.querySelectorAll("[data-perspective]");
  if (perspectiveImage && controls.length) {
    $(".perspective-control").hidden = false;
    let request = 0;
    controls.forEach((button, index) => {
      button.addEventListener("click", async () => {
        if (button.getAttribute("aria-pressed") === "true") return;
        const currentRequest = ++request;
        const next = new Image();
        next.src = button.dataset.perspective;
        try {
          await next.decode();
          if (currentRequest !== request) return;
          perspectiveImage.src = next.src;
          perspectiveImage.alt = "Entrance: " + button.dataset.description;
          controls.forEach((control) =>
            control.setAttribute("aria-pressed", String(control === button)),
          );
          $("#perspective-index").textContent = `0${index + 1} / 03`;
          $("#perspective-status").textContent =
            `Perspective ${index + 1}: ${button.dataset.description}`;
          if (!reducedMotion.matches)
            perspectiveImage.animate([{ opacity: 0.65 }, { opacity: 1 }], {
              duration: 300,
              easing: "ease-out",
            });
        } catch {
          if (currentRequest === request)
            $("#perspective-status").textContent =
              "This photograph could not load. Please choose another perspective.";
        }
      });
    });
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
