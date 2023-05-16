'use strict'
const btNav = document.querySelector('.btn-mobile-nav');
const nav = document.querySelector('.header');

btNav.addEventListener('click', function () {
  nav.classList.toggle('nav-open');
});
