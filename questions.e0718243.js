!function(){function e(e,r,n,t){Object.defineProperty(e,r,{get:n,set:t,enumerable:!0,configurable:!0})}function r(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},c=n.parcelRequired7c6;null==c&&((c=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,r){o[e]=r},n.parcelRequired7c6=c),c.register("iE7OH",(function(r,n){var t,o;e(r.exports,"register",(function(){return t}),(function(e){return t=e})),e(r.exports,"resolve",(function(){return o}),(function(e){return o=e}));var c={};t=function(e){for(var r=Object.keys(e),n=0;n<r.length;n++)c[r[n]]=e[r[n]]},o=function(e){var r=c[e];if(null==r)throw new Error("Could not resolve bundle with id "+e);return r}})),c.register("aNJCr",(function(r,n){var t;e(r.exports,"getBundleURL",(function(){return t}),(function(e){return t=e}));var o={};function c(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}t=function(e){var r=o[e];return r||(r=function(){try{throw new Error}catch(r){var e=(""+r.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return c(e[2])}return"/"}(),o[e]=r),r}})),c("iE7OH").register(JSON.parse('{"43nup":"questions.e0718243.js","ee16w":"sprite.402e809c.svg"}'));var i;i=c("aNJCr").getBundleURL("43nup")+c("iE7OH").resolve("ee16w");var u=document.querySelectorAll(".accordion__checkbox"),l=document.querySelectorAll(".accordion__label"),f=document.querySelectorAll(".accordion__list");u.forEach((function(e,n){e.addEventListener("change",(function(){l[n].querySelector("use").setAttribute("xlink:href",e.checked?"".concat(r(i),"#minus"):"".concat(r(i),"#plus")),l[n].style.backgroundColor=e.checked?"#DC3C3C":"rgba(52, 56, 69, 0.1)",l[n].style.fill=e.checked?"#ffffff":"#1E1E2B",e.checked?f[n].style.display="grid":f[n].style.display="none"}))}))}();
//# sourceMappingURL=questions.e0718243.js.map