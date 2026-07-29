//navbar.js

const openButton = document.getElementById("mobile-menu-button");

const closeButton = document.getElementById("mobile-menu-close");

const mobileMenu = document.getElementById("mobile-menu");

const overlay = document.getElementById("mobile-overlay");

function openMenu() {
  mobileMenu.classList.remove("translate-x-full");

  overlay.classList.remove("hidden");
}

function closeMenu() {
  mobileMenu.classList.add("translate-x-full");

  overlay.classList.add("hidden");
}

openButton.addEventListener("click", openMenu);

closeButton.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);
