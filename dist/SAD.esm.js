const t=function(){const t=document.getElementsByTagName("div"),e=Object.values(t).filter((t=>t.hasAttribute("data-sad")));var i=window.scrollY,a=!1;const n=.6*window.innerHeight;function r(){for(var t=null,r=[],o=0;o<e.length;o++)t=e[o],r[o]=t.offsetTop;for(o=0;o<e.length;o++)t=e[o],i>r[o]-n&&"true"!=t.getAttribute("data-view")?t.setAttribute("data-view","true"):i<=r[o]-n&&"true"==t.getAttribute("data-view")&&"forwards"!=t.getAttribute("data-fill-mode")&&t.setAttribute("data-view","false");a=!1}r(),window.addEventListener("scroll",(function(){i=window.scrollY,a||(requestAnimationFrame(r),a=!0)}),!1)};export{t as init};