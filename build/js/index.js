const orbitsCircles = document.querySelectorAll(".inner");
const bodyWrapper = document.querySelector(".body-wrapper");
const burger = document.querySelector(".navbar__burger");
const burgerBars = document.querySelectorAll(".bar");
const menu = document.querySelector(".navbar__menu");
const menuItems = document.querySelectorAll(".menu__link");

let angleBodyRotate = "rotate(-25deg)";
const ESC_KEY = 27;
const ENTER_KEY = 13;

function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

burger.addEventListener("click", rotateBody);
burger.addEventListener("click", toggleMenu);
burger.addEventListener("focus", e => {
  e.target.addEventListener("keydown", e => {
    if (e.keyCode == ENTER_KEY) {
      debouncedToggleMenu();
    }
  });
});
window.addEventListener("keydown", e => {
  closeMenu(e);
});

var debouncedToggleMenu = debounce(() => {
  rotateBody();
  toggleMenu();
}, 500);

function closeMenu(e) {
  if (menu.style.display == "block" && e.keyCode == ESC_KEY) {
    debouncedToggleMenu();
  }
}

function rotateBody() {
  switch (bodyWrapper.style.transform) {
    case "":
      bodyWrapper.style.transform = angleBodyRotate;
      break;
    case "rotate(0deg)":
      bodyWrapper.style.transform = angleBodyRotate;
      break;
    case angleBodyRotate:
      bodyWrapper.style.transform = "rotate(0deg)";
      break;
  }
}

function toggleMenu() {
  burgerBars.forEach(item => {
    item.classList.toggle("change");
  });
  if (menu.style.display == "block") {
    setTimeout(() => {
      menu.style.display = "none";
      menuItems.forEach(e => {
        e.style.transform = "translateY(-600px)";
      });
    }, 500);
  } else {
    menu.style.display = "block";
    menuItems.forEach((_, i, a) => {
      setTimeout(() => {
        a[a.length - i - 1].style.transform = "translateY(-20px)";
      }, i * 300 + 400);
    });
  }
}

orbitsCircles.forEach(e => {
  e.addEventListener("mouseover", function(e) {
    e.target.classList.add("inner__opacity");
  });
});

orbitsCircles.forEach(function(e) {
  e.addEventListener("mouseout", function(e) {
    e.target.classList.remove("inner__opacity");
  });
});

particlesJS.load("particles-js", "js/particles.json");

menuItems[1].addEventListener("click", function() {
  bodyWrapper.style.transform = "rotate(-120deg)";
});
