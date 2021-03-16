var target = document.getElementsByTagName("div");
var movers = Object.values(target).filter((t) => t.hasAttribute("data-sad")),
  lastScrollY = 0,
  ticking = false;
window.addEventListener("scroll", onScroll, false);

// export function init() {
//   var target = document.getElementsByTagName("div");
//   var tArray = Object.values(target).filter((t) => t.hasAttribute("data-sad"));
//   tArray.map((t, index) => {

//   });
// }
//return array which contains data-sad

function onScroll() {
  lastScrollY = window.scrollY;
  requestTick();
}

var st = document.getElementById("scroll-back-btn");
st.addEventListener("click", scrollTop);

function scrollTop() {
  window.scrollTo(0, 0);
}

function requestTick() {
  if (!ticking) {
    requestAnimationFrame(update);
    ticking = true;
  }
}
function update() {
  var mover = null,
    moverTop = [],
    WindowHeight = window.innerHeight *0.6,
    offset = 0;

  for (var m = 0; m < movers.length; m++) {
    mover = movers[m];
    moverTop[m] = mover.offsetTop;
  }

  for (var m = 0; m < movers.length; m++) {
    mover = movers[m];

    if (
      lastScrollY > moverTop[m] - WindowHeight &&
      mover.getAttribute("data-view") != "true"
    ) {
      mover.setAttribute("data-view", "true");
    } else if (
      lastScrollY <= moverTop[m] - WindowHeight &&
      mover.getAttribute("data-view") == "true"
    ) {
      mover.setAttribute("data-view", "false");
    }
  }

  ticking = false;
}

// init();
