'use strict';

const elemToggleFunc = function (elem) {
    elem.classList.toggle("active");
    console.log(elem.classList.contains("active") ? "Navbar opened" : "Navbar closed"); // Debug log
}

/**navbar toggle*/

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when clicking on any navbar link
 */
for (let i=0; i < navbarLinks.length; i++) {
    navElemArr.push(navbarLinks[i]);
}

/**
 * add event on all elements for toggling navbar
 */
for (let i=0; i<navElemArr.length; i++) {
    navElemArr[i].addEventListener("click", function () {
        elemToggleFunc(navbar);
        elemToggleFunc(overlay);
    });
}