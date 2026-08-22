(function () {
  "use strict";

  function enhanceTrustSection() {
    if (!document.querySelector(".trust-section") || document.getElementById("trust-card-enhancements")) return;
    var style = document.createElement("style");
    style.id = "trust-card-enhancements";
    style.textContent = [
      ".home-theme .trust-section{max-width:1160px;margin:0 auto 30px;padding:26px 24px;text-align:center;background:linear-gradient(180deg,#fff,#fff9fd);border-radius:28px;}",
      ".home-theme .trust-section h2{font-size:34px;margin-bottom:22px;}",
      ".home-theme .trust-grid{gap:16px;}",
      ".home-theme .trust-item{position:relative;min-height:142px;padding:22px 14px 18px!important;border-width:2px!important;border-style:solid!important;border-radius:22px!important;background:#fff!important;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 10px 24px rgba(64,15,101,.10)!important;}",
      ".home-theme .trust-check{display:none!important;}",
      ".home-theme .trust-item:before{display:flex;align-items:center;justify-content:center;width:48px;height:48px;margin:0 auto 12px;border-radius:50%;font-size:25px;line-height:1;background:var(--trust-soft);color:var(--trust-accent);box-shadow:0 5px 13px rgba(64,15,101,.08);}",
      ".home-theme .trust-item:nth-child(1){--trust-accent:#7a25b4;--trust-soft:#f4e9fb;border-color:#cfaee6!important}.home-theme .trust-item:nth-child(1):before{content:'🛡️';}",
      ".home-theme .trust-item:nth-child(2){--trust-accent:#f0a900;--trust-soft:#fff5d8;border-color:#f2cf6c!important}.home-theme .trust-item:nth-child(2):before{content:'★';}",
      ".home-theme .trust-item:nth-child(3){--trust-accent:#12aeb7;--trust-soft:#e4f8f9;border-color:#88dadd!important}.home-theme .trust-item:nth-child(3):before{content:'🏛️';}",
      ".home-theme .trust-item:nth-child(4){--trust-accent:#f51b9a;--trust-soft:#ffe8f5;border-color:#f6a4d0!important}.home-theme .trust-item:nth-child(4):before{content:'✓';font-weight:900;}",
      ".home-theme .trust-item:nth-child(5){--trust-accent:#11b4bc;--trust-soft:#e3f8f9;border-color:#83dadd!important}.home-theme .trust-item:nth-child(5):before{content:'✦';font-weight:900;}",
      ".home-theme .trust-item:hover{transform:translateY(-3px);transition:transform .2s ease,box-shadow .2s ease;box-shadow:0 14px 30px rgba(64,15,101,.14)!important;}",
      "@media(max-width:700px){.home-theme .trust-section{margin:0 12px 24px;padding:20px 12px}.home-theme .trust-section h2{font-size:27px}.home-theme .trust-item{min-height:128px;padding:18px 10px 15px!important}.home-theme .trust-item:before{width:42px;height:42px;font-size:21px;margin-bottom:9px}.home-theme .celebrate p{font-size:clamp(7px,2.2vw,9px)!important;letter-spacing:.05em!important;white-space:nowrap!important;margin-left:auto!important;margin-right:auto!important}}"
    ].join("");
    document.head.appendChild(style);
  }

  function setupMobileMenu() {
    enhanceTrustSection();
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
