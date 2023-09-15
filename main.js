"use strict";

let tabOptions = document.querySelectorAll(".tab-option");
let tabData = document.querySelectorAll(".tab-data");
let nav = document.querySelector("nav");
let scrollTopButton = document.querySelector(".scroll-top-btn");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let hamburgerList = document.querySelector(".hamburger-list");

hamburgerMenu.addEventListener("click", () => {
  hamburgerList.classList.toggle("hidden");
});

tabOptions.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabOptions.forEach((t) => t.classList.remove("active-console"));

    tabData.forEach((tabD) => {
      tabD.classList.add("hidden");
    });

    console.log(tab.getAttribute("title"));

    if (tab.getAttribute("title") === "Playstation") {
      document.querySelector(".tab-data-1").classList.remove("hidden");
      tab.classList.add("active-console");
    } else if (tab.getAttribute("title") === "Xbox") {
      document.querySelector(".tab-data-2").classList.remove("hidden");
      tab.classList.add("active-console");
    } else if (tab.getAttribute("title") === "Nintendo") {
      document.querySelector(".tab-data-3").classList.remove("hidden");
      tab.classList.add("active-console");
    }
  });
});

const url =
  "https://api.rawg.io/api/games?key=585f2da7d5ad4fc19f59bc610b2c8781&dates=2023-01-01,2023-09-30&platforms=18,1,7";
const options = {
  method: "GET",
};

let games = [];
let cardsContainer = document.querySelector(".game-cards");
let cardImage = document.querySelectorAll(".card-image");
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    games.push(data.results);
    console.log(games[0]);
    for (let i = 0; i < 9; i++) {
      console.log(games[0][i]);
      cardsContainer.insertAdjacentHTML(
        "beforeend",
        `<a class="block group game cursor-pointer">
      <img
        src=${games[0][i].background_image}
        alt=${games[0][i].name}
        class="object-cover w-18 rounded aspect-square gamecard-image"
        
      />
    
      <div class="mt-3">
        <h3
          class="font-medium text-white group-hover:underline group-hover:underline-offset-4"
        >
          ${games[0][i].name}
        </h3>
        <div class='flex'>
        <img class='w-4 me-2' src='assets/star.svg'>
        <p class="mt-1 text-sm text-gray-400">${games[0][i].rating}</p>
        </div>
        <p class="mt-1 text-sm text-gray-400"> Release date: ${games[0][i].released}</p>
        <p class="mt-1 text-sm text-gray-400"> Genre: ${games[0][i].genres[0].name}</p>
      </div>
    </a>`
      );
    }
  });

const myAtropos = Atropos({
  el: ".my-atropos",
  // rest of parameters
});

const mySecondAtropos = Atropos({
  el: ".my-second-atropos",
  // rest of parameters
});

const myThirdAtropos = Atropos({
  el: ".my-third-atropos",
  // rest of parameters
});

let slides = document.querySelectorAll(".slide");
let slider = document.querySelector(".slider");
let btnToRight = document.querySelector(".slider__btn--right");
let btnToLeft = document.querySelector(".slider__btn--left");
let maxSlides = slides.length;
let currSlide = 0;

slides.forEach((s, i) => {
  s.style.transform = `translateX(${100 * i})%`;
});

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

goToSlide(0);

const nextSlide = function () {
  if (currSlide === maxSlides - 1) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  goToSlide(currSlide);
};

const prevSlide = function () {
  if (currSlide === 0) {
    currSlide = maxSlides - 1;
  } else {
    currSlide--;
  }
  goToSlide(currSlide);
};

btnToRight.addEventListener("click", nextSlide);
btnToLeft.addEventListener("click", prevSlide);

//manipulate slider with arrow keys
document.addEventListener("keydown", (e) => {
  if (e.key == "ArrowRight") {
    nextSlide();
  } else if (e.key == "ArrowLeft") {
    prevSlide();
  }
});

scrollTopButton.addEventListener("click", () => window.scroll(0, 0));

let closeModalBtn = document.querySelector(".close-modal-button");
let overLay = document.querySelector(".overlay");
let modal = document.querySelector(".modal-window");
let signupBtn = document.querySelector(".signup-button");
let submitBtn = document.querySelector(".submit-form-button");

let closingModal = function () {
  modal.classList.add("hidden");
  overLay.classList.add("hidden");
};

let openModal = function () {
  modal.classList.remove("hidden");
  overLay.classList.remove("hidden");
};
closeModalBtn.addEventListener("click", closingModal);
submitBtn.addEventListener("click", closingModal);

signupBtn.addEventListener("click", openModal);

//Scroll Revealing Animation
let sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: 2000,
  delay: 200,
});

sr.reveal(".spiderman-image", { origin: "bottom" });
sr.reveal(".main-section", { origin: "left" });

sr.reveal(".aboutUs-image", { origin: "left" });
sr.reveal(".aboutUs-description", { origin: "right" });

sr.reveal(".console-logos");
sr.reveal(".game-cards");

sr.reveal(".atropos", { interval: 300 });
sr.reveal(".popular-games");

sr.reveal(".service-card", { interval: 300 });
sr.reveal(".best-sellers");

sr.reveal(".slider");
sr.reveal(".slider__btn--left", { origin: "left", delay: 300 });
sr.reveal(".slider__btn--right", { origin: "right", delay: 300 });
sr.reveal(".customer-title");

sr.reveal("#footer", { origin: "bottom" });
