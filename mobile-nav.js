(function () {
  "use strict";

  function enhanceTrustSection() {
    if (!document.querySelector(".trust-section") || document.getElementById("trust-card-enhancements")) return;
    var style = document.createElement("style");
    style.id = "trust-card-enhancements";
    style.textContent = [
      ".home-theme .trust-section{max-width:1160px;margin:0 auto 30px;padding:26px 24px;text-align:center;background:linear-gradient(180deg,#fff,#fff9fd);border-radius:28px}",
      ".home-theme .trust-section h2{font-size:34px;margin-bottom:22px}",
      ".home-theme .trust-grid{gap:16px}",
      ".home-theme .trust-item{position:relative;min-height:142px;padding:22px 14px 18px!important;border:2px solid;border-radius:22px!important;background:#fff!important;display:flex;flex-direction:column;align-items:center;justify-content:center;box-shadow:0 10px 24px rgba(64,15,101,.10)!important}",
      ".home-theme .trust-check{display:none!important}",
      "@media(max-width:700px){.home-theme .brand-name{font-size:50px!important}.home-theme .brand-tag{font-size:11px!important;letter-spacing:.055em!important;margin-top:8px!important}.home-theme .service-line{font-size:clamp(13px,3.8vw,15px)!important;line-height:1.15!important;letter-spacing:-.055em!important;white-space:nowrap!important;font-weight:900!important;transform:scaleX(.90);transform-origin:center;width:111%!important;margin-left:-5.5%!important;margin-bottom:15px!important}.home-theme .hero-copy p{font-size:19px!important;line-height:1.4!important;max-width:360px!important}.home-theme .central{font-size:34px!important}.home-theme .celebrate p{font-size:clamp(12px,3.5vw,15px)!important;line-height:1.3!important;white-space:nowrap!important;font-weight:800!important}}"
    ].join("");
    document.head.appendChild(style);
  }

  function enhanceGallerySections() {
    var categories = Array.prototype.slice.call(document.querySelectorAll("main .gallery-category"));
    if (!categories.length || document.getElementById("gallery-category-nav")) return;

    var style = document.createElement("style");
    style.id = "gallery-category-nav-style";
    style.textContent = [
      ".gallery-category-nav{margin:18px auto 42px;padding:22px;background:#fff;border-radius:24px;box-shadow:0 12px 30px rgba(65,22,91,.10);text-align:center}",
      ".gallery-category-nav h2{margin:0 0 14px;color:#4e1979;font-size:clamp(28px,4vw,40px)}",
      ".gallery-category-nav p{margin:0 auto 18px;max-width:720px;line-height:1.55;color:#68457c}",
      ".gallery-category-links{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}",
      ".gallery-category-links a{display:inline-flex;align-items:center;justify-content:center;padding:11px 15px;border-radius:999px;background:#f4eafb;color:#4e1979;font-weight:900;border:2px solid #ead8f1}",
      ".gallery-category-links a:hover{background:#4e1979;color:#fff}",
      ".gallery-category{scroll-margin-top:130px}",
      ".gallery-category>h2{padding-bottom:12px;border-bottom:4px solid var(--accent)}",
      "@media(max-width:600px){.gallery-category-nav{margin:8px 0 28px;padding:18px 12px}.gallery-category-links{gap:8px}.gallery-category-links a{width:100%;padding:12px 14px}.gallery-category{margin-top:36px!important;margin-bottom:44px!important}.gallery-category>h2{font-size:32px!important}}"
    ].join("");
    document.head.appendChild(style);

    var labels = {
      "Face Painting":"🎨 Face Painting",
      "Balloon Twisting":"🎈 Balloon Twisting",
      "Custom Balloon Centerpieces":"🎈 Balloon Centerpieces",
      "Glitter Bar":"✨ Glitter Bar",
      "Glitter Tattoos":"✨ Glitter Tattoos",
      "Temporary Tattoo Designs":"⭐ Temporary Tattoos"
    };

    var nav = document.createElement("section");
    nav.className = "gallery-category-nav";
    nav.id = "gallery-category-nav";
    nav.innerHTML = '<h2>Browse the Gallery</h2><p>Choose a category to jump directly to the type of entertainment you want to see.</p><div class="gallery-category-links"></div>';
    var links = nav.querySelector(".gallery-category-links");

    categories.forEach(function (section, index) {
      var heading = section.querySelector("h2");
      if (!heading) return;
      var name = heading.textContent.trim();
      var id = "gallery-" + name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
      if (!id || id === "gallery-") id = "gallery-category-" + (index + 1);
      section.id = id;
      var link = document.createElement("a");
      link.href = "#" + id;
      link.textContent = labels[name] || name;
      links.appendChild(link);
    });

    categories[0].parentNode.insertBefore(nav, categories[0]);
  }

  function setupReliableForms() {
    var booking = document.getElementById("booking-form");
    if (booking && !booking.dataset.reliableNativeSubmit) {
      var replacement = booking.cloneNode(true);
      replacement.dataset.reliableNativeSubmit = "true";
      booking.parentNode.replaceChild(replacement, booking);
      booking = replacement;

      var packageMap = {
        "Color & Fun Package":["Face Painting","Balloon Twisting"],
        "Sparkle Package":["Glitter Bar","Glitter Tattoos"],
        "Party Favorites Package":["Face Painting","Balloon Twisting","Glitter Tattoos"],
        "Deluxe Party Package":["Face Painting","Balloon Twisting","Glitter Bar","Glitter Tattoos"],
        "Ultimate Party Time Fun Package":["Face Painting","Balloon Twisting","Glitter Bar","Glitter Tattoos","Temporary Tattoo Designs"]
      };
      var packageSlugs = {
        "color-fun":"Color & Fun Package",
        "sparkle":"Sparkle Package",
        "party-favorites":"Party Favorites Package",
        "deluxe":"Deluxe Party Package",
        "ultimate":"Ultimate Party Time Fun Package"
      };
      var packageSelect = booking.querySelector("#package-deal");
      var checks = Array.prototype.slice.call(booking.querySelectorAll(".service-check"));
      var serviceError = booking.querySelector("#service-error");

      function applyPackage(name) {
        if (!packageMap[name]) return;
        var included = packageMap[name];
        checks.forEach(function (box) { box.checked = included.indexOf(box.value) !== -1; });
        if (serviceError) serviceError.style.display = "none";
      }

      if (packageSelect) {
        packageSelect.addEventListener("change", function () { applyPackage(packageSelect.value); });
        var requested = new URLSearchParams(window.location.search).get("package");
        if (requested && packageSlugs[requested]) {
          packageSelect.value = packageSlugs[requested];
          applyPackage(packageSelect.value);
        }
      }

      booking.addEventListener("submit", function (event) {
        var hasService = checks.some(function (box) { return box.checked; });
        if (!hasService) {
          event.preventDefault();
          if (serviceError) serviceError.style.display = "block";
          if (checks[0]) checks[0].focus();
          return;
        }
        var button = booking.querySelector('button[type="submit"]');
        var status = booking.querySelector("#form-status");
        if (status) status.textContent = "Sending your request…";
        if (button) {
          button.disabled = true;
          button.textContent = "SENDING…";
        }
      });
    }
  }

  function setupMobileMenu() {
    enhanceTrustSection();
    enhanceGallerySections();
    setupReliableForms();

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

      links.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMenu);
      });

      document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
          closeMenu();
          button.focus();
        }
      });

      window.addEventListener("resize", function () {
        if (window.innerWidth > 1050) closeMenu();
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupMobileMenu);
  } else {
    setupMobileMenu();
  }
}());
