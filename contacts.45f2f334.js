function e(e,r,t,o){Object.defineProperty(e,r,{get:t,set:o,enumerable:!0,configurable:!0})}function r(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in o)return o[e].exports;if(e in n){var r=n[e];delete n[e];var t={id:e,exports:{}};return o[e]=t,r.call(t.exports,t,t.exports),t.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,r){n[e]=r},t.parcelRequired7c6=s),s.register("kyEFX",(function(r,t){var o,n;e(r.exports,"register",(function(){return o}),(function(e){return o=e})),e(r.exports,"resolve",(function(){return n}),(function(e){return n=e}));var s={};o=function(e){for(var r=Object.keys(e),t=0;t<r.length;t++)s[r[t]]=e[r[t]]},n=function(e){var r=s[e];if(null==r)throw new Error("Could not resolve bundle with id "+e);return r}})),s("kyEFX").register(JSON.parse('{"5ZPII":"contacts.45f2f334.js","lp5u4":"sprite.435c5729.svg"}'));var i;i=new URL(s("kyEFX").resolve("lp5u4"),import.meta.url).toString();const l=e=>document.querySelector(e),c=e=>{console.log(e),"modal"===e&&(u(),l(".header-modal").classList.toggle("visually-hidden")),"servicess"===e&&(d(".header-modal__icon use"),l(".header-modal__services-list--servicess").classList.toggle("visually-hidden")),"doctors"===e&&(console.log(e),d(".header-modal__icon--doctors use"),l(".header-modal__services-list--doctors").classList.toggle("visually-hidden"))},d=e=>{const t=l(e),o=t.getAttribute("xlink:href");o===`${r(i)}#chevronUp`?t.setAttribute("xlink:href",`${r(i)}#chevronBot`):o===`${r(i)}#chevronBot`?t.setAttribute("xlink:href",`${r(i)}#chevronUp`):t.setAttribute("xlink:href",`${r(i)}#chevronBot`)},u=()=>{const e=document.querySelector(".header__hamburger use"),t=e.getAttribute("xlink:href");t===`${r(i)}#hamburger`?e.setAttribute("xlink:href",`${r(i)}#cross`):t===`${r(i)}#cross`?e.setAttribute("xlink:href",`${r(i)}#hamburger`):e.setAttribute("xlink:href",`${r(i)}#cross`)};l(".header__hamburger").addEventListener("click",(()=>c("modal"))),l(".button--header-modal").addEventListener("click",(()=>c("servicess"))),l("#button-doctors").addEventListener("click",(()=>c("doctors")));
//# sourceMappingURL=contacts.45f2f334.js.map
