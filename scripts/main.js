const headerTitle = document.querySelector(".header__title");
const headerButton = document.querySelector(".header__button");
const amountSliders = document.querySelectorAll(".service__title").length;
const serviceTitles = document.querySelectorAll(".service__title");
const serviceText = document.querySelectorAll(".service__text");
const serviceImg = document.querySelectorAll(".service__img");
let serviceIteration = 0;

let titleDuration = window.getComputedStyle(headerTitle)["animation-duration"];

titleDuration = titleDuration.slice(0, titleDuration.length - 1) * 1000;

document.querySelector(".header").addEventListener("pointerdown", (event) => {
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
  setTimeout(() => {
    serviceTitles[serviceIteration].classList.add("active");
    serviceText[serviceIteration].classList.add("active");
    serviceImg[serviceIteration].classList.add("active");
  }, 400);
});

// Add content height

function serviceContentHeight() {
  const textHeight = Math.max(
    ...Array.from(document.querySelectorAll(".service__text")).map(
      (element) => element.offsetHeight
    )
  );

  document.querySelector(
    ".service__contents"
  ).style = `height: ${textHeight}px`;
}

serviceContentHeight();

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
