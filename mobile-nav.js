(function () {
  "use strict";
  function setupMobileMenu() {
    document.querySelectorAll(".top .nav").forEach(function (nav, index) {
      var links = nav.querySelector(".links");
      if (!links || nav.querySelector(".mobile-menu-toggle")) return;
      if (!links.id) links.id = "site-menu-" + (index + 1);
      var button = document.createElement("button");
      button.className = "mobile-menu-toggle";
      button.type = "button";
      button.setAttribute("aria-controls", links.id);
      button.setAttribute("aria-expanded", "false");
      button.setAttribute("aria-label", "Open navigation menu");
      button.innerHTML = '<span aria-hidden="true">☰</span> MENU';
      nav.insertBefore(button, links);
      nav.classList.add("mobile-menu-ready");
      function closeMenu() {
        links.classList.remove("mobile-open");
        button.setAttribute("aria-expanded", "false");
        button.setAttribute("aria-label", "Open navigation menu");
        button.innerHTML = '<span aria-hidden="true">☰</span> MENU';
      }
      button.addEventListener("click", function () {
        var open = links.classList.toggle("mobile-open");
        button.setAttribute("aria-expanded", String(open));
        button.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
        button.innerHTML = open ? '<span aria-hidden="true">✕</span> CLOSE' : '<span aria-hidden="true">☰</span> MENU';
      });
      links.querySelectorAll("a").forEach(function (link) { link.addEventListener("click", closeMenu); });
      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") { closeMenu(); button.focus(); }
      });
      window.addEventListener("resize", function () { if (window.innerWidth > 1050) closeMenu(); });
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", setupMobileMenu);
  else setupMobileMenu();
}());
