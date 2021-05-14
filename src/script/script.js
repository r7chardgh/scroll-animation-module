var st = document.getElementById("scroll-back-btn");
st.addEventListener("click", scrollTop);

function scrollTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

const csscopy = document.getElementById('css-code');
const jscopy = document.getElementById('js-code');
csscopy.addEventListener("focus", copyToClipboard);
jscopy.addEventListener("focus", copyToClipboard);

function copyToClipboard() {
  this.select();
  document.execCommand("copy");
}