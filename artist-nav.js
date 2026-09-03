(function(){
  "use strict";
  function addMeetTheArtistsLink(){
    var groups=document.querySelectorAll('.top .links');
    groups.forEach(function(links){
      if(links.querySelector('a[href="meet-the-artists.html"],a[href="./meet-the-artists.html"]')) return;
      var link=document.createElement('a');
      link.href='meet-the-artists.html';
      link.textContent='MEET THE ARTISTS';
      var gallery=links.querySelector('a[href="gallery.html"],a[href="./gallery.html"]');
      if(gallery && gallery.nextSibling){links.insertBefore(link,gallery.nextSibling);}else{links.appendChild(link);}
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',addMeetTheArtistsLink); else addMeetTheArtistsLink();
})();
