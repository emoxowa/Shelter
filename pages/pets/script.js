// Popup на Pets Page

const burger = document.querySelector(".burger");
const menu = document.querySelector(".header__menu");
const logo = document.querySelector(".logo");
const body = document.body;

burger.addEventListener("click", function () {
  burger.classList.toggle("is-active");
  menu.classList.toggle("open");
  logo.classList.toggle("logo_open-menu");
  body.classList.toggle("menu-opened");
});

menu.addEventListener("click", function (event) {
  if (event.target.closest(".menu__link")) {
    burger.classList.remove("is-active");
    menu.classList.remove("open");
    logo.classList.remove("logo_open-menu");
    body.classList.remove("menu-opened");
  }
});

document.addEventListener("click", function (event) {
  if (!event.target.closest(".header__wrapper")) {
    burger.classList.remove("is-active");
    menu.classList.remove("open");
    logo.classList.remove("logo_open-menu");
    body.classList.remove("menu-opened");
  }
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("header__wrapper")) {
    burger.classList.remove("is-active");
    menu.classList.remove("open");
    logo.classList.remove("logo_open-menu");
    body.classList.remove("menu-opened");
  }
});

// Popup на Pets Page

// Pagination на Pets Page
