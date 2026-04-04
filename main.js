const navMenuOpenEl = document.querySelector("#nav-open");
const navMenuCloseEl = document.querySelector("#nav-close");

navMenuOpenEl.addEventListener("click", () => overlayOn());
navMenuCloseEl.addEventListener("click", () => overlayOff());

function overlayOn() {
  document.getElementById("nav-menu").style.display = "block";
}

function overlayOff() {
  document.getElementById("nav-menu").style.display = "none";
}
