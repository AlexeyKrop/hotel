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
