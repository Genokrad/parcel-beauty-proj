!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},n.parcelRequired7c6=o),o.register("iE7OH",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return r.default(e)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return r.default(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r.default(e,t)};var n,r=(n=o("8NIkP"))&&n.__esModule?n:{default:n}})),o.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var i={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=i[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),i[e]=t),t}})),o("iE7OH").register(JSON.parse('{"EVgbq":"index.9b3694c8.js","ayzb2":"cosmetology.ef73645e.png","ee16w":"sprite.402e809c.svg"}'));var s={};Object.defineProperty(s,"__esModule",{value:!0}),s.default=function(e){return c.default(e)||u.default(e)||a.default(e)||l.default()};var c=d(o("kMC0W")),u=d(o("7AJDX")),l=d(o("8CtQK")),a=d(o("auk6i"));function d(e){return e&&e.__esModule?e:{default:e}}var f;f=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("ayzb2");var _;_=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("ee16w");var p,v=(p=".directions__desktop-wrapper",document.querySelector(p));console.log(v),window.addEventListener("click",(function(e){var n=document.querySelectorAll(".directions__subtitle--desktop");null!==n&&function(e,n){function r(e,n){var r=null;return t(s)(e).find((function(e){r=e===n})),r}r(n.target.classList,"directions__subtitle--desktop-active")&&(n.target.childNodes[2].innerHTML="");r(n.target.classList,"directions__subtitle--desktop")&&e.forEach((function(e){e.classList.remove("directions__subtitle--desktop-active"),n.target.classList.add("directions__subtitle--desktop-active"),console.dir(n.target.innerText)}))}(n,e)}));var b,g=!1;function m(){if(!g){var e='\n  <div class="directions__card">\n    <img\n      class="directions__img"\n      src="'.concat(t(f),'"\n      alt="women"\n    />\n  </div>\n  <div class="directions__card-information">\n    <ul class="directions__action-title directions__action-title--desctop">\n    \n      <li class="directions__item-desctop directions__item-desctop--active">\n        <p class="directions__subtitle directions__subtitle--desktop directions__subtitle--desktop-active">Пластична хірургія</p>\n      </li>\n      <li class="directions__item-desctop">\n        <p class="directions__subtitle directions__subtitle--desktop">Eстетична гінекологія\n        </p>\n      </li>\n      <li >\n        <p class="directions__subtitle directions__subtitle--desktop">Косметологія\n        </p>\n      </li>\n    </ul>\n    \n  </div>');v.insertAdjacentHTML("beforeend",e),g=!0}!function(){var e=document.querySelector(".directions__item-desctop--active");if(e){var n='\n      <div class="directions__card-information">\n\n        <p class="directions__text">\n          Пластика грудей, обличчя, тіла - все для ваших ідеальних ліній,\n          виразного погляду та гармонійних рис\n        </p>\n        <button class="button button--direction">\n          Детальніше<svg viewBox="0 0 32 32 xmlns="http://www.w3.org/2000/svg  class="button__icone">\n            <use xlink:href="'.concat(t(_),'#arrowRight"></use>\n          </svg>\n        </button>\n      </div>\n    ');e.insertAdjacentHTML("beforeend",n)}}()}b=function(e,t){var n;return function(){n||(n=setTimeout((function(){e(),n=null}),t))}}((function(){console.log("Viewport is greater than or equal to 1440px."),renderHello()}),300),window.addEventListener("resize",(function(){if(window.innerWidth>=1440)b();else{var e=v.querySelector("div");e&&(e.remove(),g=!1)}})),window.innerWidth>=1440&&m()}();
//# sourceMappingURL=index.9b3694c8.js.map
