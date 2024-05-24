const menuBar = document.querySelector(".hamburger");
const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");
const closeNav = document.querySelector(".nav-close");

menuBar.addEventListener("click", function () {
  nav.classList.add("show");
  overlay.classList.remove("hidden");
});

closeNav.addEventListener("click", function () {
  nav.classList.remove("show");
  overlay.classList.add("hidden");
});

overlay.addEventListener("click", function () {
  nav.classList.remove("show");
  overlay.classList.add("hidden");
});
