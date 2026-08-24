(function () {
  "use strict";

  function enhanceHomepageLogoFormat() {
    if (!document.body.classList.contains("home-theme")) return;
    var logo = document.querySelector(".hero-logo-card img");
    if (!logo) return;
    logo.setAttribute("src", "./logo-transparent.webp?v=20260823-4");
    logo.setAttribute("loading", "eager");
    logo.setAttribute("fetchpriority", "high");
    logo.setAttribute("decoding", "async");
  }

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
      ".home-theme .service-bubble h3{font-family:Arial,Helvetica,sans-serif!important;font-weight:900!important;letter-spacing:.01em!important;text-shadow:none!important;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}.home-theme .service-note{font-family:Arial,Helvetica,sans-serif!important;font-size:13px!important;line-height:1.42!important;font-weight:800!important;color:#46146f!important;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility}",
      "@media(max-width:700px){.home-theme .brandmark{position:relative!important}.home-theme .brand-name{font-size:52px!important;line-height:.92!important;text-shadow:0 2px 8px rgba(255,255,255,.18)!important}.home-theme .brand-name .party{color:#ffd45c!important}.home-theme .brand-name .time{color:#ff73b9!important}.home-theme .brand-name .fun{color:#55e3e7!important}.home-theme .brandmark:after{content:'✦  ✧  ✦';position:absolute;right:-3px;top:-8px;color:#fff3a8;font-size:12px;letter-spacing:3px;text-shadow:0 0 7px #fff,0 0 10px #ffe46b;pointer-events:none}.home-theme .brand-tag{font-size:11px!important;letter-spacing:.045em!important;margin-top:8px!important}.home-theme .service-line{font-size:clamp(13px,3.8vw,15px)!important;line-height:1.15!important;letter-spacing:-.055em!important;white-space:nowrap!important;font-weight:900!important;transform:scaleX(.90);transform-origin:center;width:111%!important;margin-left:-5.5%!important;margin-bottom:15px!important}.home-theme .hero-copy{width:100%!important;max-width:100%!important;overflow:visible!important}.home-theme .hero-copy h1{width:100%!important;max-width:100%!important;font-size:clamp(37px,10.5vw,49px)!important;line-height:1!important;font-weight:900!important;letter-spacing:-.035em!important;color:#fff!important;text-shadow:0 3px 0 rgba(72,7,108,.38),0 7px 18px rgba(48,4,78,.48),0 0 14px rgba(255,255,255,.14)!important}.home-theme .hero-copy h1 .headline-first{display:block!important;white-space:nowrap!important;color:#fff!important}.home-theme .hero-copy h1 strong{display:block!important;white-space:nowrap!important;margin-top:7px!important;font-size:1.08em!important;color:#ffe21f!important;font-weight:900!important;text-shadow:0 3px 0 rgba(142,93,0,.26),0 7px 18px rgba(63,10,91,.44),0 0 22px rgba(255,226,31,.38)!important}.home-theme .hero-copy p{font-size:17px!important;line-height:1.4!important;max-width:350px!important;margin-top:18px!important}.home-theme .central{font-size:31px!important}.home-theme .celebrate p{display:block!important;width:calc(100% - 24px)!important;max-width:360px!important;margin:8px auto 0!important;padding:0 4px!important;font-size:clamp(12.5px,3.55vw,14.5px)!important;line-height:1.3!important;letter-spacing:.04em!important;white-space:nowrap!important;font-weight:900!important;box-sizing:border-box!important}.home-theme .hero-photo{display:flex!important;justify-content:center!important;align-items:center!important;width:100%!important;max-width:100%!important;padding:0 12px!important;box-sizing:border-box!important}.home-theme .hero-photo img{display:block!important;width:auto!important;max-width:min(88vw,340px)!important;height:auto!important;max-height:none!important;object-fit:contain!important;object-position:center!important;border-radius:24px!important;margin:0 auto!important}.home-theme .hero-actions .btn-secondary{display:none!important}.home-theme .trust-item:nth-child(1){background:#fff3f8!important;border-color:#f7c8da!important}.home-theme .trust-item:nth-child(2){background:#f1fbfb!important;border-color:#bfe8e8!important}.home-theme .trust-item:nth-child(3){background:#f8f3ff!important;border-color:#d9c8ef!important}.home-theme .trust-item:nth-child(4){background:#fff9e8!important;border-color:#f1dfaa!important}.home-theme .trust-item:nth-child(5){background:#f4f9ff!important;border-color:#c9def2!important}.home-theme .service-bubble h3{white-space:nowrap!important;font-size:17px!important;padding-left:9px!important;padding-right:9px!important}.home-theme .service-bubble h3{white-space:nowrap!important;font-size:18px!important;padding-left:10px!important;padding-right:10px!important}}",
      "@media(max-width:420px){.home-theme .brand-name{font-size:47px!important}.home-theme .brandmark:after{font-size:10px;right:0;top:-7px}.home-theme .hero-copy h1{font-size:clamp(34px,9.9vw,43px)!important;letter-spacing:-.045em!important}.home-theme .hero-copy h1 strong{font-size:1.07em!important}.home-theme .celebrate p{font-size:12.5px!important;letter-spacing:.025em!important;width:calc(100% - 30px)!important}.home-theme .hero-photo img{max-width:min(86vw,320px)!important}}"
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
      ".gallery-category-links{display:flex;flex-wrap:nowrap;gap:10px;justify-content:center;align-items:center}",
      ".gallery-category-links a{display:inline-flex;align-items:center;justify-content:center;padding:11px 15px;border-radius:999px;background:#f4eafb;color:#4e1979;font-weight:900;border:2px solid #ead8f1}",
      ".gallery-category-links a:hover{background:#4e1979;color:#fff}",
      ".gallery-category{scroll-margin-top:130px}",
      ".gallery-category>h2{padding-bottom:12px;border-bottom:4px solid var(--accent)}",
      "@media(max-width:600px){.gallery-category-nav{margin:8px 0 28px;padding:18px 12px}.gallery-category-links{gap:8px;flex-wrap:wrap}.gallery-category-links a{width:100%;padding:12px 14px}.gallery-category{margin-top:36px!important;margin-bottom:44px!important}.gallery-category>h2{font-size:32px!important}}"
    ].join("");
    document.head.appendChild(style);
    var labels={"Face Painting":"🎨 Face Painting","Balloon Twisting":"🎈 Balloon Twisting","Custom Balloon Centerpieces":"🎈 Balloon Centerpieces","Glitter Bar":"✨ Glitter Bar","Glitter Tattoos":"✨ Glitter Tattoos","Temporary Tattoo Designs":"⭐ Temporary Tattoos"};
    var nav=document.createElement("section"); nav.className="gallery-category-nav"; nav.id="gallery-category-nav"; nav.innerHTML='<h2>Browse the Gallery</h2><p>Choose a category to jump directly to the type of entertainment you want to see.</p><div class="gallery-category-links"></div>';
    var links=nav.querySelector(".gallery-category-links");
    categories.forEach(function(section,index){var heading=section.querySelector("h2");if(!heading)return;var name=heading.textContent.trim();var id="gallery-"+name.toLowerCase().replace(/&/g,"and").replace(/[^a-z0-9]+/g,"-").replace(/^-|-$/g,"");if(!id||id==="gallery-")id="gallery-category-"+(index+1);section.id=id;var link=document.createElement("a");link.href="#"+id;link.textContent=labels[name]||name;links.appendChild(link);});
    categories[0].parentNode.insertBefore(nav,categories[0]);
  }

  function enhanceServiceGalleryFlow() {
    var serviceMap={
      "Face Painting":"service-face-painting",
      "Balloon Twisting":"service-balloon-twisting",
      "Glitter Bar":"service-glitter-bar",
      "Glitter Tattoos":"service-glitter-tattoos",
      "Airbrush Tattoos":"service-airbrush-tattoos"
    };
    document.querySelectorAll("main .section h2").forEach(function(heading){
      var name=heading.textContent.trim();
      if(serviceMap[name]){var section=heading.closest(".section");if(section&&!section.id)section.id=serviceMap[name];}
    });
    var categories=Array.prototype.slice.call(document.querySelectorAll("main .gallery-category"));
    if(!categories.length)return;
    if(!document.getElementById("gallery-service-actions-style")){
      var style=document.createElement("style");
      style.id="gallery-service-actions-style";
      style.textContent=".gallery-service-actions{display:flex;justify-content:center;gap:12px;flex-wrap:wrap;margin:28px auto 4px}.gallery-service-actions a{display:inline-flex;align-items:center;justify-content:center;min-width:170px;padding:11px 18px;border-radius:999px;text-decoration:none;font-size:14px;font-weight:900;box-sizing:border-box}.gallery-back-services{border:2px solid #4e1979;background:#fff;color:#4e1979}.gallery-back-services:hover{background:#f5ecfb}.gallery-book-service{border:2px solid #f51b9a;background:#f51b9a;color:#fff;box-shadow:0 6px 16px rgba(245,27,154,.20)}.gallery-book-service:hover{filter:brightness(.96)}@media(max-width:520px){.gallery-service-actions{gap:9px;margin-top:22px}.gallery-service-actions a{width:100%;max-width:310px;min-width:0;padding:12px 16px;font-size:14px}}";
      document.head.appendChild(style);
    }
    var backLinks={
      "Face Painting":"services.html#service-face-painting",
      "Balloon Twisting":"services.html#service-balloon-twisting",
      "Custom Balloon Centerpieces":"services.html",
      "Glitter Bar":"services.html#service-glitter-bar",
      "Glitter Tattoos":"services.html#service-glitter-tattoos",
      "Temporary Tattoo Designs":"services.html#service-airbrush-tattoos"
    };
    categories.forEach(function(section){
      if(section.querySelector(".gallery-service-actions"))return;
      var heading=section.querySelector("h2");if(!heading)return;
      var name=heading.textContent.trim();
      var actions=document.createElement("div");actions.className="gallery-service-actions";
      actions.innerHTML='<a class="gallery-back-services" href="#gallery-category-nav">← BACK TO GALLERY CATEGORIES</a><a class="gallery-book-service" href="bundles.html">VIEW PACKAGES &amp; BUNDLES →</a>';
      section.appendChild(actions);
    });
  }

  function addBackToHome() {
    if (document.body.classList.contains("home-theme") || document.querySelector(".back-home-wrap")) return;
    var footer = document.querySelector("footer");
    if (!footer) return;
    var style = document.createElement("style");
    style.id = "back-home-style";
    style.textContent = ".back-home-wrap{text-align:center;padding:24px 18px 28px;background:#fffafd}.back-home-link{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:12px 20px;border:2px solid #4e1979;border-radius:999px;color:#4e1979;background:#fff;font-size:15px;font-weight:900;text-decoration:none;box-shadow:0 7px 18px rgba(64,15,101,.10)}.back-home-link:hover{background:#4e1979;color:#fff}@media(max-width:600px){.back-home-wrap{padding:20px 16px 24px}.back-home-link{min-width:190px;padding:13px 20px;font-size:16px}}";
    document.head.appendChild(style);
    var wrap = document.createElement("div");
    wrap.className = "back-home-wrap";
    wrap.innerHTML = '<a class="back-home-link" href="./index.html" aria-label="Back to Party Time Fun home page">← Back to Home</a>';
    footer.parentNode.insertBefore(wrap, footer);
  }

  function addHomepageBackToTop() {
    if (!document.body.classList.contains("home-theme") || document.querySelector(".back-top-wrap")) return;
    var footer = document.querySelector("footer");
    if (!footer) return;
    if (!document.getElementById("back-top-style")) {
      var style = document.createElement("style");
      style.id = "back-top-style";
      style.textContent = ".back-top-wrap{display:none}@media(max-width:700px){.back-top-wrap{display:block;text-align:center;padding:18px 16px 20px;background:#fffafd}.back-top-link{display:inline-flex;align-items:center;justify-content:center;gap:7px;padding:11px 18px;border:2px solid #4e1979;border-radius:999px;background:#fff;color:#4e1979;font-size:15px;font-weight:900;text-decoration:none;box-shadow:0 6px 16px rgba(64,15,101,.10)}.back-top-link:active{transform:translateY(1px)}}";
      document.head.appendChild(style);
    }
    var wrap = document.createElement("div");
    wrap.className = "back-top-wrap";
    wrap.innerHTML = '<a class="back-top-link" href="#" aria-label="Back to top of page">↑ Back to Top</a>';
    wrap.querySelector("a").addEventListener("click", function(event){event.preventDefault();window.scrollTo({top:0,behavior:"smooth"});});
    footer.parentNode.insertBefore(wrap, footer);
  }

  function removeDuplicateMobileBookNow() {
    if (document.getElementById("single-mobile-book-now")) return;
    var style = document.createElement("style");
    style.id = "single-mobile-book-now";
    style.textContent = '@media(max-width:1050px){.top .links a[href="./book.html"]:not(.book-pill){display:none!important}}';
    document.head.appendChild(style);
  }

  function setupReliableForms(){var booking=document.getElementById("booking-form");if(booking&&!booking.dataset.reliableNativeSubmit){var replacement=booking.cloneNode(true);replacement.dataset.reliableNativeSubmit="true";booking.parentNode.replaceChild(replacement,booking);booking=replacement;var packageMap={"Color & Fun Package":["Face Painting","Balloon Twisting"],"Sparkle Package":["Glitter Bar","Glitter Tattoos"],"Party Favorites Package":["Face Painting","Balloon Twisting","Glitter Tattoos"],"Deluxe Party Package":["Face Painting","Balloon Twisting","Glitter Bar","Glitter Tattoos"],"Ultimate Party Time Fun Package":["Face Painting","Balloon Twisting","Glitter Bar","Glitter Tattoos","Temporary Tattoo Designs"]};var packageSlugs={"color-fun":"Color & Fun Package","sparkle":"Sparkle Package","party-favorites":"Party Favorites Package","deluxe":"Deluxe Party Package","ultimate":"Ultimate Party Time Fun Package"};var packageSelect=booking.querySelector("#package-deal");var checks=Array.prototype.slice.call(booking.querySelectorAll(".service-check"));var serviceError=booking.querySelector("#service-error");function applyPackage(name){if(!packageMap[name])return;var included=packageMap[name];checks.forEach(function(box){box.checked=included.indexOf(box.value)!==-1});if(serviceError)serviceError.style.display="none"}if(packageSelect){packageSelect.addEventListener("change",function(){applyPackage(packageSelect.value)});var requested=new URLSearchParams(window.location.search).get("package");if(requested&&packageSlugs[requested]){packageSelect.value=packageSlugs[requested];applyPackage(packageSelect.value)}}booking.addEventListener("submit",function(event){var hasService=checks.some(function(box){return box.checked});if(!hasService){event.preventDefault();if(serviceError)serviceError.style.display="block";if(checks[0])checks[0].focus();return}var button=booking.querySelector('button[type="submit"]');var status=booking.querySelector("#form-status");if(status)status.textContent="Sending your request…";if(button){button.disabled=true;button.textContent="SENDING…"}})}}

  function setupMobileMenu(){enhanceHomepageLogoFormat();enhanceTrustSection();enhanceGallerySections();enhanceServiceGalleryFlow();addBackToHome();addHomepageBackToTop();removeDuplicateMobileBookNow();setupReliableForms();document.querySelectorAll(".top .nav").forEach(function(nav,index){var links=nav.querySelector(".links");if(!links||nav.querySelector(".mobile-menu-toggle"))return;if(!links.id)links.id="site-menu-"+(index+1);var button=document.createElement("button");button.className="mobile-menu-toggle";button.type="button";button.setAttribute("aria-controls",links.id);button.setAttribute("aria-expanded","false");button.setAttribute("aria-label","Open navigation menu");button.innerHTML='<span aria-hidden="true">☰</span> MENU';nav.insertBefore(button,links);nav.classList.add("mobile-menu-ready");function closeMenu(){links.classList.remove("mobile-open");button.setAttribute("aria-expanded","false");button.setAttribute("aria-label","Open navigation menu");button.innerHTML='<span aria-hidden="true">☰</span> MENU'}button.addEventListener("click",function(){var open=links.classList.toggle("mobile-open");button.setAttribute("aria-expanded",String(open));button.setAttribute("aria-label",open?"Close navigation menu":"Open navigation menu");button.innerHTML=open?'<span aria-hidden="true">✕</span> CLOSE':'<span aria-hidden="true">☰</span> MENU'});links.querySelectorAll("a").forEach(function(link){link.addEventListener("click",closeMenu)});document.addEventListener("keydown",function(event){if(event.key==="Escape"){closeMenu();button.focus()}});window.addEventListener("resize",function(){if(window.innerWidth>1050)closeMenu()})})}
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",setupMobileMenu);else setupMobileMenu();
}());
