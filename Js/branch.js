'use strict';
const dropDownBtn = document.querySelectorAll('.btn-form');
const dropDownContent = document.querySelectorAll('.btn-dropdown');

const dropDown = function () {
  for (let i = 0; i < dropDownContent.length; i++) {
    dropDownContent[i].classList.add('hidden-content');
  }
};

for (let i = 0; i < dropDownBtn.length; i++) {
  dropDownBtn[i].addEventListener('click', function () {
    dropDownContent[i].classList.toggle('hidden-content');
  });
}

dropDown();
