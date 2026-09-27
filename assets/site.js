(() => {
  const button = document.querySelector(".menu-toggle");
  const nav = document.getElementById("mobile-nav");
  if (!button || !nav) return;

  button.addEventListener("click", () => {
    const open = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!open));
    button.setAttribute("aria-label", open ? "Öppna menyn" : "Stäng menyn");
    nav.hidden = open;
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Öppna menyn");
      nav.hidden = true;
    });
  });
})();
