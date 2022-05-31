!function(){"use strict";var e={957:function(e,t,n){var a=n(83),s=n(455),o=n(691),l=n(804),r=n(902),i=n(823),c=n(462),d=n(846),u=n(852),m=n(522),f=n(76),p=n(209);(0,a.Z)(),(0,s.Z)(),(0,o.Z)(),(0,l.Z)(),(0,r.Z)(),(0,i.Z)(),(0,c.Z)(),(0,u.Z)(),(0,f.Z)(),(0,p.Z)(),(0,d.Z)(),(0,m.Z)()},691:function(e,t){t.Z=()=>{const e=document.querySelector(".burger__menu"),t=[e,document.querySelector(".burger__wrapp")];e.addEventListener("click",(()=>{t.forEach((e=>{e.classList.toggle("active")}))}))}},823:function(e,t){t.Z=()=>{new Swiper(".slider-event",{direction:"horizontal",loop:!0,slidesPerView:1,grabCursor:!0,spaceBetween:25,speed:1e3,centeredSlides:!0,centeredSlidesBounds:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{spaceBetween:5},375:{spaceBetween:10},480:{spaceBetween:15},767:{spaceBetween:20}}})}},902:function(e,t){t.Z=()=>{new Swiper(".slider-events",{direction:"horizontal",loop:!0,slidesPerView:1,spaceBetween:25,grabCursor:!0,loopedSlides:4,followFinger:!0,longSwipes:!1,speed:1e3,centeredSlides:!0,centeredSlidesBounds:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{320:{spaceBetween:5},375:{spaceBetween:10},480:{spaceBetween:15},767:{spaceBetween:20}}})}},852:function(e,t){t.Z=()=>{const e=document.querySelectorAll(".events__item");e.forEach((e=>{e.addEventListener("click",(()=>{t(),e.classList.add("active")}))}));const t=()=>{e.forEach((e=>{e.classList.remove("active")}))}}},455:function(e,t){t.Z=()=>{const e=document.querySelector("header");document.body.getBoundingClientRect().top<200&&e.classList.add("fixed"),window.addEventListener("scroll",(()=>{e.classList.toggle("fixed",window.scrollY>200)}))}},76:function(e,t){t.Z=()=>{const e=document.querySelector(".open-modal"),t=document.querySelector(".modal-window"),n=t.querySelector(".modal-window__overflow"),a=t.querySelector(".modal-window__close");e&&(e.addEventListener("click",(()=>{t.classList.add("active"),document.body.style.overflow="hidden"})),a.addEventListener("click",(()=>{t.classList.remove("active"),document.body.style.overflow="scroll"})),n.addEventListener("click",(()=>{t.classList.remove("active"),document.body.style.overflow="scroll"})))}},83:function(e,t){t.Z=()=>{document.addEventListener("DOMContentLoaded",(function(e){let t=localStorage.getItem("scrollpos");t&&window.scrollTo(0,t)})),window.onbeforeunload=function(e){localStorage.setItem("scrollpos",window.scrollY)}}},846:function(e,t){t.Z=()=>{const e=document.querySelector(".preview__btn"),t=document.querySelectorAll(".preview__text");e&&e.addEventListener("click",(()=>{t.forEach((e=>{e.classList.toggle("show")})),e.classList.add("hide")}))}},804:function(e,t){t.Z=()=>{new Swiper(".swiper",{direction:"horizontal",loop:!0,slidesPerView:"auto",spaceBetween:25,grabCursor:!0,loopedSlides:5,followFinger:!0,longSwipes:!1,speed:1e3,centeredSlides:!0,centeredSlidesBounds:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},breakpoints:{320:{spaceBetween:5},375:{spaceBetween:10},480:{spaceBetween:15},767:{spaceBetween:20}}})}},522:function(e,t){t.Z=()=>{const e=document.querySelector("[data-multi-step]");if(e){const t=[...e.querySelectorAll("[data-step]")],n=[...e.querySelectorAll("[data-step-num]")];let a=t.findIndex((e=>e.classList.contains("active")));function s(){t.forEach(((e,t)=>{e.classList.toggle("active",t===a)}))}a<0&&(a=0,s()),e.addEventListener("click",(e=>{let o;e.target.matches("[data-next]")?o=1:e.target.matches("[data-previous]")&&(o=-1),null!=o&&([...t[a].querySelectorAll("input")].every((e=>e.reportValidity()))&&(a+=o,s()),n.forEach(((e,t)=>{t===a?e.classList.add("active"):t!=a&&e.classList.remove("active")})))})),t.forEach((e=>{e.addEventListener("animationend",(e=>{t[a].classList.remove("hiden"),e.target.classList.toggle("hiden",!e.target.classList.contains("active"))}))}))}}},462:function(e,t){t.Z=()=>{const e=document.querySelectorAll(".tabs__item");e.forEach((t=>{t.addEventListener("click",(()=>{e.forEach((e=>{e.classList.remove("active")})),(()=>{const e=t.dataset.item;document.querySelectorAll(".tabs__content").forEach((t=>{t.classList.remove("active"),t.dataset.content==e&&t.classList.add("active")}))})(),t.classList.add("active")}))}))}},209:function(e,t){t.Z=()=>{document.addEventListener("DOMContentLoaded",(function(){const e=document.querySelector("[data-form-member]"),t=document.querySelector("[data-form-model]"),n=document.querySelector("[data-form-footer]"),a=document.querySelector("[data-form-modal]"),s=document.querySelector("[data-form-request]"),o=document.querySelector("[data-form-lang]"),l=document.querySelector("[data-send-btn]"),r=document.querySelector("[data-alert-input]"),i=document.querySelector("[data-alert-img]"),c=document.querySelector(".steps__btn"),d=document.querySelectorAll(".form-alert__btn"),u=document.querySelector(".check__input"),m=document.querySelector(".questionnaire__block"),f=document.querySelectorAll(".tel");let p=document.getElementById("formImage"),v=document.getElementById("formBlock");if(f.forEach((e=>{e.addEventListener("focus",(()=>{e.value="+"}))})),d.forEach((e=>{e.addEventListener("click",(()=>{r&&r.classList.contains("alert")&&r.classList.remove("alert"),i&&i.classList.contains("alert")&&i.classList.remove("alert")}))})),u&&u.addEventListener("change",(()=>{u.checked?l.removeAttribute("disabled"):l.setAttribute("disabled","")})),e){async function g(t){t.preventDefault();let n=w(e),a=new FormData(e);if(0===n){let t=await fetch("assets/send-mail/member-sendmail.php",{method:"POST",body:a});if(t.ok){let n=await t.json();alert(n.message),e.reset(),L()}}else r.classList.add("alert")}e.addEventListener("submit",g),c.addEventListener("click",(()=>{0===w(e)?c.setAttribute("data-next",""):r.classList.add("alert")}))}if(t){async function y(e){e.preventDefault();let n=w(t),a=new FormData(t);if(a.append("image",p.files),0===n){let e=await fetch("assets/send-mail/model-sendmail.php",{method:"POST",body:a});if(e.ok){let t=await e.json();alert(t.message),L()}else alert("Ошибка")}else r.classList.add("alert")}t.addEventListener("submit",y),p.addEventListener("change",(function(){const e=p.files;v.innerHTML="",e.length>9&&(i.classList.add("alert"),p.value="",m.classList.remove("active"));for(let t of e){let e=new FileReader;e.onload=()=>{let t=document.createElement("img");t.setAttribute("src",e.result),v.appendChild(t)},m.classList.add("active"),e.readAsDataURL(t)}}))}function w(e){let t=0,n=e.querySelectorAll(".--req");for(let e=0;e<n.length;e++){const l=n[e];s(l),l.classList.contains("_email")?o(l)&&(a(l),t++):("checkbox"===l.getAttribute("type")&&!1===l.checked||""===l.value)&&(a(l),t++)}function a(e){e.classList.add("_error")}function s(e){e.classList.remove("_error")}function o(e){return!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value)}return t}function L(){"ua"===o.dataset.formLang?location.href="answer-ua.html":"eng"===o.dataset.formLang?location.href="answer-eng.html":location.href="answer.html"}n.addEventListener("submit",(async function(e){e.preventDefault();let t=w(n),a=new FormData(n);if(0===t){let e=await fetch("assets/send-mail/footer-sendmail.php",{method:"POST",body:a});if(e.ok){let t=await e.json();alert(t.message),n.reset(),L()}else alert("Ошибка")}else r.classList.add("alert")})),a.addEventListener("submit",(async function(e){e.preventDefault();let t=w(a),n=new FormData(a);if(0===t){let e=await fetch("assets/send-mail/modal-sendmail.php",{method:"POST",body:n});if(e.ok){let t=await e.json();alert(t.message),a.reset(),L()}else alert("Ошибка")}else r.classList.add("alert")})),s&&s.addEventListener("submit",(async function(e){e.preventDefault();let t=w(s),n=new FormData(s);if(0===t){let e=await fetch("assets/send-mail/request-sendmail.php",{method:"POST",body:n});if(e.ok){let t=await e.json();alert(t.message),s.reset(),L()}else alert("Ошибка")}else r.classList.add("alert")}))}))}}},t={};function n(a){var s=t[a];if(void 0!==s)return s.exports;var o=t[a]={exports:{}};return e[a](o,o.exports,n),o.exports}n(957),n(691),n(823),n(902),n(852),n(455),n(76),n(83),n(846),n(804),n(522),n(462),n(209)}();