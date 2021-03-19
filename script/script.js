export const init = () => {
  const target = document.getElementsByTagName("div");
  const movers = Object.values(target).filter((t) =>
    t.hasAttribute("data-sad")
  );
  var lastScrollY = window.scrollY,
    ticking = false;
  const WindowHeight = window.innerHeight * 0.6;
  update();
  function onScroll() {
    lastScrollY = window.scrollY;
    requestTick();
  }

  var st = document.getElementById("scroll-back-btn");
  st.addEventListener("click", scrollTop);

  function scrollTop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  function requestTick() {
    if (!ticking) {
      requestAnimationFrame(update);
      ticking = true;
    }
  }
  function update() {
    var mover = null,
      moverTop = [];

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

  window.addEventListener("scroll", onScroll, false);
};

init();
