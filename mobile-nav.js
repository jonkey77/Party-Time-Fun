(function(){
  "use strict";
  function load(src){var s=document.createElement('script');s.src=src;s.defer=true;document.head.appendChild(s);}
  load('./mobile-nav-core.js?v=20260903-1');
  load('./artist-nav.js?v=20260903-1');

  function addReviewGraphic(){
    var section=document.querySelector('.home-ratings');
    if(!section)return;
    section.style.maxWidth='900px';
    section.style.padding='0';
    section.style.background='transparent';
    section.style.border='0';
    section.style.boxShadow='none';
    section.innerHTML='<a href="https://g.page/r/CYtyzs0sqrYsEAE/review" aria-label="Leave Party Time Fun a Google review" style="display:block;text-decoration:none"><img src="./Party_Time_Fun_Google_Review.png?v=20260908-1" alt="Party Time Fun - Leave us a review on Google" style="display:block;width:100%;height:auto;border-radius:20px;box-shadow:0 8px 20px rgba(64,15,101,.12)"></a>';
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',addReviewGraphic);else addReviewGraphic();
})();
