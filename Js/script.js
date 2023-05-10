'use strict';
const imgSlides = document.querySelectorAll('.my-slides');

///////////////////////////////
// Making Carousel Images
///////////////////////////////
let slideIndex = 0;
const showSlides = function () {
  let i;
  for (i = 0; i < imgSlides.length; i++) {
    imgSlides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > imgSlides.length) {
    slideIndex = 1;
  }
  imgSlides[slideIndex - 1].style.display = 'block';

  setTimeout(showSlides, 5000);
};
showSlides();
