export function run() {
  var movers = document.querySelectorAll(".mover.hide-left"),
    lastScrollY = 0,
    ticking = false;

  function onScroll() {
    lastScrollY = window.scrollY;
    requestTick();
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
      halfWindowHeight = window.innerHeight * 0.5,
      offset = 0;

    for (var m = 0; m < movers.length; m++) {
      mover = movers[m];
      moverTop[m] = mover.offsetTop;
    }

    for (var m = 0; m < movers.length; m++) {
      mover = movers[m];

      if (lastScrollY > moverTop[m] - halfWindowHeight) {
        mover.classList.add("move-in-left");
      } else if (lastScrollY <= moverTop[m] - halfWindowHeight) {
        mover.classList.remove("move-in-left");
      }
    }

    ticking = false;
  }

  // only listen for scroll events

  window.addEventListener("scroll", onScroll, false);
}
