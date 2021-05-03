var st = document.getElementById("scroll-back-btn");
st.addEventListener("click", scrollTop);

function scrollTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}