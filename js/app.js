"use strict";

var burger = document.querySelector('.burger-opener'),
    nav = document.querySelector('.nav');
burger.addEventListener('click', function () {
  return nav.classList.toggle('active-nav');
});