function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return i[e]=r,t.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r),r("kyEFX").register(JSON.parse('{"hVWfq":"main-page.9a1dcfa7.js","RtErt":"cosmetology.ef73645e.png","ai7cb":"estetic.a5b1303d.png","eQkNZ":"plastic.25133a31.png"}'));var s;s=new URL(r("kyEFX").resolve("RtErt"),import.meta.url).toString();var n;n=new URL(r("kyEFX").resolve("ai7cb"),import.meta.url).toString();var a;a=new URL(r("kyEFX").resolve("eQkNZ"),import.meta.url).toString();const d=e=>document.querySelector(e),l=e=>document.querySelectorAll(e);console.log(e(a));d(".directions__action-title--desctop").addEventListener("click",(t=>{l(".directions__subtitle--desktop").forEach((e=>{e.classList.remove("directions__subtitle--desktop-active")})),l(".directions__data").forEach((e=>{e.classList.add("visually-hidden")})),t.target.classList.add("directions__subtitle--desktop-active"),console.log(t.target.innerText),"Пластична хірургія"===t.target.innerText&&(d("#directions__data-plastick").classList.toggle("visually-hidden"),d(".directions__img-desktop").src=e(s)),"Eстетична гінекологія"===t.target.innerText&&(d("#directions__data-ginecology").classList.toggle("visually-hidden"),d(".directions__img-desktop").src=e(n)),"Косметологія"===t.target.innerText&&(d("#directions__data-cosmetology").classList.toggle("visually-hidden"),d(".directions__img-desktop").src=e(a))}));
//# sourceMappingURL=main-page.9a1dcfa7.js.map