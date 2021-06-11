'use strict';

const menuButton = document.querySelector('.button-menu');
const openMenu = document.querySelector('.nav-menu');
const closeMenu = document.querySelector('.menu-close');

menuButton.addEventListener('click', () => {
  openMenu.classList.add('is-activ');
  closeMenu.classList.add('is-activ');
});

closeMenu.addEventListener('click', () => {
  openMenu.classList.remove('is-activ');
  closeMenu.classList.remove('is-activ');
});