'use strict';
const btNav = document.querySelector('.btn-mobile-nav');
const navHeader = document.querySelector('.header');
const mainNav = document.querySelector('.main-nav');
const mainHeader = document.querySelector('.main-header');

btNav.addEventListener('click', function () {
  navHeader.classList.toggle('nav-open');
});

// const navHeight = mainNav.getBoundingClientRect().height;
// const stickyNav = function (entries) {
//   const [entry] = entries;
//   if (!entry.isIntersecting) {
//     mainNav.classList.add('sticky');
//   } else {
//     mainNav.classList.remove('sticky')
//   }
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `${navHeight}px`,
// });
// headerObserver.observe(mainHeader);
