const index = document.querySelectorAll(".index");
const projects = document.querySelectorAll(".projects");
const about = document.querySelectorAll(".about");
const planets = document.querySelectorAll(".inner");
const bodyWrapper = document.querySelector(".body-wrapper");
const burger = document.querySelector(".navbar__burger");
const burgerBars = document.querySelectorAll(".bar");
const menu = document.querySelector(".navbar__menu");
const menuItems = document.querySelectorAll(".menu__link");
const info = document.querySelector(".footer__info");
const load = document.querySelector(".load-wrapper");
const loadCircle = document.querySelector(".lds-default");

let angleBodyRotate = "rotate(-25deg)";
const ESC_KEY = 27;
const ENTER_KEY = 13;
const planetsStack = [
  {
    background: "no-repeat url('../images/html.svg')",
    width: "40px",
    height: "40px",
    top: "50px"
  },
  {
    background: "no-repeat url('../images/css.svg')",
    width: "40px",
    height: "40px",
    top: "100px"
  },
  {
    background: "no-repeat url('../images/js.svg')",
    width: "40px",
    height: "40px",
    top: "180px"
  },
  {
    background: "no-repeat url('../images/react.svg')",
    width: "70px",
    height: "70px",
    top: "274px"
  }
];

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
        e.style.transform = "translateY(-2000px)";
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

planets.forEach((e, i) => {
  e.addEventListener("click", e => {
    e.target.style.background = "none";
    e.target.style.boxShadow = "none";
    e.target.style.borderRadius = "0px";
    e.target.style.top = planetsStack[i].top;
    e.target.style.width = planetsStack[i].width;
    e.target.style.height = planetsStack[i].height;
    e.target.style.background = planetsStack[i].background;
  });
});

particlesJS.load("particles-js", "js/particles.json");

function goToPage(page) {
  bodyWrapper.style.transform = "rotate(0deg)";
  setTimeout(() => {
    load.style.width = "100%";
    loadCircle.style.display = "block";
  }, 500);
  setTimeout(() => {
    window.location.href = page;
  }, 1200);
}

if (info) {
  info.addEventListener("mouseover", function() {
    this.classList.remove("animated");
  });
}

function pageLoader() {
  setTimeout(() => {
    loadCircle.style.display = "none";
    load.style.width = "0%";
  }, 500);
}
pageLoader();
