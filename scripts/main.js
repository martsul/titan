const headerTitle = document.querySelector(".header__title");
const headerButton = document.querySelector(".header__button");
const amountSliders = document.querySelectorAll(".service__title").length;
const serviceTitles = document.querySelectorAll(".service__title");
const serviceText = document.querySelectorAll(".service__text");
const serviceImg = document.querySelectorAll(".service__img");

let serviceIteration = 0;

let titleDuration = window.getComputedStyle(headerTitle)["animation-duration"];

titleDuration = titleDuration.slice(0, titleDuration.length - 1) * 1000;

// Function Preview Animation

function previewAnimation() {
  serviceTitles[serviceIteration].classList.add("active");
  serviceText[serviceIteration].classList.add("active");
  serviceImg[serviceIteration].classList.add("active");
  document.querySelector(".service__subtitle").classList.add("active");
}

window.scrollTo({ top: 0 });

document.addEventListener("pointerdown", (event) => {
  event.preventDefault();
});

setTimeout(() => {
  headerTitle.classList.add("after");
  headerButton.classList.add("after");
}, titleDuration + 500);

document.querySelectorAll(".header__block").forEach((element) => {
  element.style.transition = ".4s ease-out";
});

document.querySelector(".header__button").addEventListener("click", () => {
  document.querySelector(".header").classList.add("hidden");
  document.body.classList.add("content");
  setTimeout(previewAnimation, 400);
});

// Add content height

function serviceContentHeight(children, parent) {
  const textHeight = Math.max(
    ...Array.from(document.querySelectorAll(`${children}`)).map(
      (element) => element.offsetHeight
    )
  );

  document.querySelector(`${parent}`).style = `height: ${textHeight + 60}px`;
}

serviceContentHeight(".service__text", ".service__contents");

serviceContentHeight(
  ".trainers__items, .trainers__trainer",
  ".trainers__content"
);

document
  .querySelector(".service__buttons")
  .addEventListener("click", (event) => {
    serviceTitles[serviceIteration].classList.remove("active");
    serviceText[serviceIteration].classList.remove("active");
    serviceImg[serviceIteration].classList.remove("active");

    if (event.target.closest(".next")) {
      if (serviceIteration + 1 > amountSliders - 1) {
        serviceIteration = 0;
      } else {
        serviceIteration++;
      }
    } else if (event.target.closest(".prev")) {
      if (serviceIteration - 1 < 0) {
        serviceIteration = amountSliders - 1;
      } else {
        serviceIteration--;
      }
    }

    serviceTitles[serviceIteration].classList.add("active");
    serviceText[serviceIteration].classList.add("active");
    serviceImg[serviceIteration].classList.add("active");
  });

let trainersIteration = 0;
const trainers = document.querySelectorAll(".trainers__trainer");
const trainersInfo = document.querySelectorAll(".trainers__items");
const maxIteration = trainers.length;

document
  .querySelector(".trainers__buttons")
  .addEventListener("click", (event) => {
    trainers[trainersIteration].classList.remove("active");
    trainersInfo[trainersIteration].classList.remove("active");

    if (event.target.closest(".next")) {
      if (trainersIteration >= maxIteration - 1) {
        trainersIteration = 0;
      } else {
        trainersIteration++;
      }
    }

    if (event.target.closest(".prev")) {
      if (trainersIteration <= 0) {
        trainersIteration = maxIteration - 1;
      } else {
        trainersIteration--;
      }
    }

    trainers[trainersIteration].classList.add("active");
    trainersInfo[trainersIteration].classList.add("active");
  });

// Scroll

const trainersSection = document.querySelector(".trainers");

function positionElement(element) {
  const coords = document.querySelector(element).getBoundingClientRect();
  const yCoords = coords.y;
  const windowHeight = document.documentElement.clientHeight;

  return windowHeight - yCoords;
}

window.addEventListener("scroll", (event) => {
  // Trainers
  const positionTrainers = positionElement(".trainers");

  if (positionTrainers > 100) {
    document.querySelector(".trainers .container").classList.add("active");
  }

  if (positionTrainers > 300) {
    document.querySelector(".trainers__content").classList.add("active");
  } else if (positionTrainers < 300) {
    document.querySelector(".trainers__content").classList.remove("active");
  }
});
