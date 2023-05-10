'use strict';
///////////////////////////////
// Product Information Section
///////////////////////////////
const productInfoBtn = document.querySelector('.product-info');
const productBtn = document.querySelectorAll('.content-btn');
const productContent = document.querySelectorAll('.product-content');
const hiddenProductContent = document.querySelectorAll('.hidden-content');
const hiddenProduct = document.querySelectorAll('.hidden_content');
const productList = document.querySelectorAll('.product-list');
const activeContent = document.querySelector('.active-content');
const showHiddenContent = document.querySelectorAll('.product__');

function productContentInfo() {
  for (let i = 0; i < showHiddenContent.length; i++) {
    showHiddenContent[i].classList.add('hidden-content');
  }
  for (let i = 0; i < productBtn.length; i++) {
    productBtn[i].addEventListener('click', function () {
      showHiddenContent[i].classList.toggle('hidden-content');
      productBtn[i].classList.toggle('active');
    });
  }
}

productContentInfo();
