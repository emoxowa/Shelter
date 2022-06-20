// Burger menu на Main Page

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

// Popup на Main Page
const button = document.querySelectorAll(".button__link");
button.addEventListener("click", () => {
  body.classList.add("popup-opened");
});

// Carousel на Main Page

const BTN_LEFT = document.querySelector("#btn-left");
const BTN_RIGHT = document.querySelector("#btn-right");

BTN_LEFT.addEventListener('click', () => {
  alert("На сайте ведутся технические работы по настройке слайдера =))");
});

BTN_RIGHT.addEventListener("click", () => {
  alert("На сайте ведутся технические работы по настройке слайдера =))");
});

