// Party Time Fun — Google Analytics 4
(function () {
  "use strict";
  var measurementId = "G-269QTTGPBW";
  if (window.__ptfGa4Loaded) return;
  window.__ptfGa4Loaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(measurementId);
  document.head.appendChild(script);
}());
