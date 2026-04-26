const menuButton = document.querySelector(".header-navbar");
const menuPage = document.querySelector(".menu-page");
const menuPageCloseButton = document.querySelector(".fa-xmark");
const body = document.querySelector("body");
const overlay = document.querySelector(".overlay");

menuButton.addEventListener("click", () => {
  menuPage.classList.toggle("is-menu-open");
  body.classList.toggle("stop-scroll");
  overlay.classList.toggle("is-overlay-open");
});
menuPageCloseButton.addEventListener("click", () => {
  menuPage.classList.toggle("is-menu-open");
  body.classList.toggle("stop-scroll");
  overlay.classList.toggle("is-overlay-open");
});
overlay.addEventListener("click", () => {
  menuPage.classList.toggle("is-menu-open");
  body.classList.toggle("stop-scroll");
  overlay.classList.toggle("is-overlay-open");
});
