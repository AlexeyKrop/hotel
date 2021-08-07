"use strict";
// Slider
const slider = () => {
  const sliderItem = document.querySelectorAll(".slider__item");
  let currenSlider = 1;
  const moveSlider = () => {
    currenSlider++;
    if (currenSlider >= sliderItem.length) {
      sliderItem[currenSlider - 1].classList.remove("slider__item-active");
      currenSlider = 0;
      sliderItem[currenSlider].classList.add("slider__item-active");
    } else {
      sliderItem[currenSlider - 1].classList.remove("slider__item-active");
      sliderItem[currenSlider].classList.add("slider__item-active");
    }
  };
  setInterval(moveSlider, 2000);
};
slider();

// open subMenu
const openSubMenu = () => {
  const formGuestItemMain = document.querySelector(".form-guest__item-main"),
    formGuestItem = document.querySelector(".form-guest__item");
  formGuestItemMain.addEventListener("click", () => {
    formGuestItem.classList.toggle("form-guest__item-active");
  });
};
openSubMenu();

// counter guest
const guestCounter = () => {
  const formGuestButton = document.querySelectorAll(".form-guest__btn");
  formGuestButton.forEach((item) => {
    let counter = 1;
    item.addEventListener("click", (event) => {
      event.preventDefault();
      const target = event.target;
      let formGuestAmount = item.querySelector(".form-guest__amount");
      if (target.matches(".form-guest__button-plus")) {
        counter++;
        formGuestAmount.textContent = counter;
      } else if (target.matches(".form-guest__button-minus")) {
        if (counter > 1) {
          counter--;
        } else {
          counter = 1;
        }
        formGuestAmount.textContent = counter;
      }
    });
  });
};
guestCounter();

// reset popup
const popupReset = () => {
  const formGuestReset = document.querySelector(".form-guest__reset"),
    formGuestAmount = document.querySelectorAll(".form-guest__amount");
  formGuestReset.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.target;
    if (target.matches(".form-guest__clean")) {
      formGuestAmount.forEach((item) => {
        item.textContent = 1;
      });
    }
  });
};
popupReset();
