/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _remove_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remove-scroll */ \"./src/assets/js/remove-scroll.js\");\n/* harmony import */ var _header_sticky__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-sticky */ \"./src/assets/js/header-sticky.js\");\n/* harmony import */ var _burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./burger */ \"./src/assets/js/burger.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slider */ \"./src/assets/js/slider.js\");\n/* harmony import */ var _events_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events-slider */ \"./src/assets/js/events-slider.js\");\n/* harmony import */ var _event_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event-slider */ \"./src/assets/js/event-slider.js\");\n/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs */ \"./src/assets/js/tabs.js\");\n/* harmony import */ var _show_content__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./show-content */ \"./src/assets/js/show-content.js\");\n/* harmony import */ var _filter_item__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./filter-item */ \"./src/assets/js/filter-item.js\");\n/* harmony import */ var _steps_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./steps-form */ \"./src/assets/js/steps-form.js\");\n/* harmony import */ var _modal_window__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modal-window */ \"./src/assets/js/modal-window.js\");\n/* harmony import */ var _valid_form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./valid-form */ \"./src/assets/js/valid-form.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_remove_scroll__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_header_sticky__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_burger__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_events_slider__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n(0,_event_slider__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n(0,_tabs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_filter_item__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n(0,_modal_window__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n(0,_valid_form__WEBPACK_IMPORTED_MODULE_11__[\"default\"])();\r\n(0,_show_content__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_steps_form__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n\n\n//# sourceURL=webpack://max/./src/assets/js/app.js?");

/***/ }),

/***/ "./src/assets/js/burger.js":
/*!*********************************!*\
  !*** ./src/assets/js/burger.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst burgerMenu = () =>{\r\n   const burger = document.querySelector(\".burger__menu\"),\r\n      wrapp = [burger, document.querySelector(\".burger__wrapp\")];\r\n      burger.addEventListener(\"click\", (() => {\r\n      wrapp.forEach((e => {\r\n         e.classList.toggle(\"active\")\r\n      }));\r\n   }));\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (burgerMenu);\r\n\n\n//# sourceURL=webpack://max/./src/assets/js/burger.js?");

/***/ }),

/***/ "./src/assets/js/event-slider.js":
/*!***************************************!*\
  !*** ./src/assets/js/event-slider.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst eventSlider = () => {\r\n   const swiper = new Swiper('.slider-event', {\r\n      direction: 'horizontal',\r\n      loop: true,\r\n      slidesPerView: 1,\r\n      grabCursor: true,\r\n      spaceBetween: 25,\r\n      // loopedSlides: 10,\r\n      // followFinger: true,\r\n      // longSwipes: false,\r\n      speed: 1000,\r\n      centeredSlides: true,\r\n      centeredSlidesBounds: true,\r\n      navigation: {\r\n         nextEl: '.swiper-button-next',\r\n         prevEl: '.swiper-button-prev',\r\n      },\r\n      breakpoints: {\r\n         320: {\r\n            spaceBetween: 5\r\n         },\r\n         375: {\r\n           spaceBetween: 10\r\n         },\r\n         480: {\r\n           spaceBetween: 15\r\n         },\r\n         767: {\r\n            spaceBetween: 20,\r\n         }\r\n      }\r\n   });\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (eventSlider);\n\n//# sourceURL=webpack://max/./src/assets/js/event-slider.js?");

/***/ }),

/***/ "./src/assets/js/events-slider.js":
/*!****************************************!*\
  !*** ./src/assets/js/events-slider.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst eventsSlider = () => {\r\n   const eventsSlider = new Swiper('.slider-events', {\r\n      direction: 'horizontal',\r\n      loop: true,\r\n      slidesPerView: 1,\r\n      spaceBetween: 25,\r\n      grabCursor: true,\r\n      loopedSlides: 4,\r\n      followFinger: true,\r\n      longSwipes: false,\r\n      speed: 1000,\r\n      centeredSlides: true,\r\n      centeredSlidesBounds: true,\r\n      navigation: {\r\n         nextEl: '.swiper-button-next',\r\n         prevEl: '.swiper-button-prev',\r\n      },\r\n      pagination: {\r\n         el: '.swiper-pagination',\r\n         type: 'bullets',\r\n         clickable: true,\r\n      },\r\n      breakpoints: {\r\n         320: {\r\n            spaceBetween: 5\r\n         },\r\n         375: {\r\n           spaceBetween: 10\r\n         },\r\n         480: {\r\n           spaceBetween: 15\r\n         },\r\n         767: {\r\n            spaceBetween: 20,\r\n         }\r\n      }\r\n   });\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (eventsSlider);\r\n\n\n//# sourceURL=webpack://max/./src/assets/js/events-slider.js?");

/***/ }),

/***/ "./src/assets/js/filter-item.js":
/*!**************************************!*\
  !*** ./src/assets/js/filter-item.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst activeFilterItem = () => {\r\n   const filterItems = document.querySelectorAll('.events__item');\r\n\r\n   filterItems.forEach(filterItem => {\r\n      filterItem.addEventListener('click', () => {\r\n         resetActive()\r\n         filterItem.classList.add('active');\r\n      });\r\n   });\r\n   const resetActive = () => {\r\n      filterItems.forEach(filterItem => {\r\n         filterItem.classList.remove('active');\r\n      });\r\n   }\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (activeFilterItem);\n\n//# sourceURL=webpack://max/./src/assets/js/filter-item.js?");

/***/ }),

/***/ "./src/assets/js/header-sticky.js":
/*!****************************************!*\
  !*** ./src/assets/js/header-sticky.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst headerFixed = () => {\r\n   const\r\n      header = document.querySelector('header'),\r\n      bodyRect = document.body.getBoundingClientRect();\r\n   if (bodyRect.top < 200) {\r\n      header.classList.add('fixed')\r\n   };\r\n   window.addEventListener('scroll', () => {\r\n      header.classList.toggle('fixed', window.scrollY > 200)\r\n   });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (headerFixed);\n\n//# sourceURL=webpack://max/./src/assets/js/header-sticky.js?");

/***/ }),

/***/ "./src/assets/js/modal-window.js":
/*!***************************************!*\
  !*** ./src/assets/js/modal-window.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst showModalWindow = () => {\r\n\r\n   const openModalBnt = document.querySelector('.open-modal'),\r\n   modalWindow = document.querySelector('.modal-window'),\r\n   windowOverflow = modalWindow.querySelector('.modal-window__overflow'),\r\n   closeBtn = modalWindow.querySelector('.modal-window__close');\r\n   if(openModalBnt) {\r\n      openModalBnt.addEventListener('click', () => {\r\n         modalWindow.classList.add('active');\r\n         document.body.style.overflow = 'hidden';\r\n      })\r\n\r\n      closeBtn.addEventListener('click', () => {\r\n         modalWindow.classList.remove('active');\r\n         document.body.style.overflow = 'scroll';\r\n      })\r\n\r\n      windowOverflow.addEventListener('click', () => {\r\n         modalWindow.classList.remove('active');\r\n         document.body.style.overflow = 'scroll';\r\n      })\r\n   }\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (showModalWindow);\r\n\n\n//# sourceURL=webpack://max/./src/assets/js/modal-window.js?");

/***/ }),

/***/ "./src/assets/js/remove-scroll.js":
/*!****************************************!*\
  !*** ./src/assets/js/remove-scroll.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst removeScroll = () => {\r\n   document.addEventListener(\"DOMContentLoaded\", function (event) {\r\n      let scrollpos = localStorage.getItem('scrollpos');\r\n      if (scrollpos) window.scrollTo(0, scrollpos);\r\n   });\r\n\r\n   window.onbeforeunload = function (e) {\r\n      localStorage.setItem('scrollpos', window.scrollY);\r\n   };\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (removeScroll);\r\n\n\n//# sourceURL=webpack://max/./src/assets/js/remove-scroll.js?");

/***/ }),

/***/ "./src/assets/js/show-content.js":
/*!***************************************!*\
  !*** ./src/assets/js/show-content.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst showContent = () => {\r\n   const showBtn = document.querySelector('.preview__btn'),\r\n   textItems = document.querySelectorAll('.preview__text');\r\n\r\n   if(showBtn) {\r\n      showBtn.addEventListener('click', () => {\r\n         textItems.forEach(textItem => {\r\n            textItem.classList.toggle('show')\r\n         });\r\n         showBtn.classList.add('hide');\r\n      });\r\n   }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (showContent);\r\n\n\n//# sourceURL=webpack://max/./src/assets/js/show-content.js?");

/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\r\nconst slider = () => {\r\n   const swiper = new Swiper('.swiper', {\r\n      direction: 'horizontal',\r\n      loop: true,\r\n      slidesPerView: 'auto',\r\n      spaceBetween: 25,\r\n      grabCursor: true,\r\n      loopedSlides: 5,\r\n      followFinger: true,\r\n      longSwipes: false,\r\n      speed: 1000,\r\n      centeredSlides: true,\r\n      centeredSlidesBounds: true,\r\n      navigation: {\r\n         nextEl: '.swiper-button-next',\r\n         prevEl: '.swiper-button-prev',\r\n      },\r\n      pagination: {\r\n         el: '.swiper-pagination',\r\n         type: 'bullets',\r\n         clickable: true,\r\n      },\r\n      breakpoints: {\r\n         320: {\r\n            spaceBetween: 5\r\n         },\r\n         375: {\r\n           spaceBetween: 10\r\n         },\r\n         480: {\r\n           spaceBetween: 15\r\n         },\r\n         767: {\r\n            spaceBetween: 20,\r\n         }\r\n      }\r\n   });\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (slider);\n\n//# sourceURL=webpack://max/./src/assets/js/slider.js?");

/***/ }),

/***/ "./src/assets/js/steps-form.js":
/*!*************************************!*\
  !*** ./src/assets/js/steps-form.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst multiFormSteps = () => {\r\n   const multiStepForm = document.querySelector(\"[data-multi-step]\")\r\n\r\n   if(multiStepForm) {\r\n      const formSteps = [...multiStepForm.querySelectorAll(\"[data-step]\")]\r\n      const formStepsNum = [...multiStepForm.querySelectorAll(\"[data-step-num]\")]\r\n\r\n      let currentStep = formSteps.findIndex(step => {\r\n         return step.classList.contains(\"active\")\r\n      })\r\n      if (currentStep < 0) {\r\n         currentStep = 0\r\n         showCurrentStep()\r\n      }\r\n      multiStepForm.addEventListener(\"click\", e => {\r\n         let incrementor\r\n         if (e.target.matches(\"[data-next]\")) {\r\n            incrementor = 1\r\n         } else if (e.target.matches(\"[data-previous]\")) {\r\n            incrementor = -1\r\n         }\r\n         if (incrementor == null) return\r\n         const inputs = [...formSteps[currentStep].querySelectorAll(\"input\")]\r\n         const allValid = inputs.every(input => input.reportValidity())\r\n         if (allValid) {\r\n            currentStep += incrementor\r\n            showCurrentStep()\r\n         }\r\n         formStepsNum.forEach((num, i) => {\r\n            if ( i === currentStep) {\r\n               num.classList.add('active')\r\n            } else if (i != currentStep) {\r\n               num.classList.remove('active')\r\n            }\r\n         })\r\n      })\r\n      formSteps.forEach(step => {\r\n         step.addEventListener(\"animationend\", e => {\r\n            formSteps[currentStep].classList.remove(\"hiden\")\r\n            e.target.classList.toggle(\"hiden\", !e.target.classList.contains(\"active\"))\r\n         })\r\n      })\r\n      function showCurrentStep() {\r\n         formSteps.forEach((step, index) => {\r\n            step.classList.toggle(\"active\", index === currentStep)\r\n         })\r\n      }\r\n   }\r\n}\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (multiFormSteps);\r\n\n\n//# sourceURL=webpack://max/./src/assets/js/steps-form.js?");

/***/ }),

/***/ "./src/assets/js/tabs.js":
/*!*******************************!*\
  !*** ./src/assets/js/tabs.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst changeTabContent = () => {\r\n   const tabs = document.querySelectorAll('.tabs__item');\r\n   const resetActive = () => {\r\n      tabs.forEach(tab => {\r\n         tab.classList.remove('active');\r\n      });\r\n   };\r\n\r\n   tabs.forEach(tab => {\r\n      tab.addEventListener('click', () => {\r\n         const changeContent = () => {\r\n            const currTab = tab.dataset.item;\r\n            const tabsContent = document.querySelectorAll('.tabs__content');\r\n            tabsContent.forEach(tabContent => {\r\n               tabContent.classList.remove('active');\r\n               if (tabContent.dataset.content == currTab) {\r\n                  tabContent.classList.add('active');\r\n               };\r\n            });\r\n         };\r\n         resetActive();\r\n         changeContent();\r\n         tab.classList.add('active');\r\n      });\r\n   });\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (changeTabContent);\n\n//# sourceURL=webpack://max/./src/assets/js/tabs.js?");

/***/ }),

/***/ "./src/assets/js/valid-form.js":
/*!*************************************!*\
  !*** ./src/assets/js/valid-form.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst validForm = () => {\r\n   document.addEventListener('DOMContentLoaded', function () {\r\n      const formMember = document.querySelector(\"[data-form-member]\");\r\n      const formModel = document.querySelector(\"[data-form-model]\");\r\n      const formFooter = document.querySelector(\"[data-form-footer]\");\r\n      const formModal = document.querySelector('[data-form-modal]')\r\n      const formRequest = document.querySelector(\"[data-form-request]\");\r\n      const formLangData = document.querySelector(\"[data-form-lang]\");\r\n      const sendBtn = document.querySelector('[data-send-btn]')\r\n      const formAlert = document.querySelector(\"[data-alert-input]\");\r\n      const imgAlert = document.querySelector(\"[data-alert-img]\");\r\n      const formBtn = document.querySelector(\".steps__btn\");\r\n      const formAlertBtns = document.querySelectorAll(\".form-alert__btn\");\r\n      const formCheckbox = document.querySelector('.check__input');\r\n      const uploadImg = document.querySelector(\".questionnaire__block\");\r\n      const tels = document.querySelectorAll('.tel');\r\n      let fileInput = document.getElementById(\"formImage\");\r\n      let imageContainer = document.getElementById(\"formBlock\");\r\n\r\n      tels.forEach(tel => {\r\n         tel.addEventListener('focus', () => {\r\n            tel.value = '+'\r\n         })\r\n      })\r\n\r\n      formAlertBtns.forEach(formAlertBtn => {\r\n         formAlertBtn.addEventListener('click', () => {\r\n            if (formAlert && formAlert.classList.contains('alert')) {\r\n               formAlert.classList.remove('alert')\r\n            }\r\n            if (imgAlert && imgAlert.classList.contains('alert')) {\r\n               imgAlert.classList.remove('alert')\r\n            }\r\n         })\r\n      })\r\n\r\n      if (formCheckbox) {\r\n         formCheckbox.addEventListener('change', () => {\r\n            if (formCheckbox.checked) {\r\n               sendBtn.removeAttribute('disabled');\r\n            } else {\r\n               sendBtn.setAttribute('disabled', '');\r\n            }\r\n         });\r\n      }\r\n\r\n      //formMemberSend\r\n      if (formMember) {\r\n         formMember.addEventListener('submit', formMemberSend);\r\n         formBtn.addEventListener('click', () => {\r\n            let error = formValidate(formMember);\r\n            if (error === 0) {\r\n               formBtn.setAttribute('data-next', '')\r\n            } else {\r\n               formAlert.classList.add('alert')\r\n            }\r\n         })\r\n\r\n         async function formMemberSend(e) {\r\n            e.preventDefault();\r\n\r\n            let error = formValidate(formMember);\r\n            let formMemberData = new FormData(formMember);\r\n\r\n            if (error === 0) {\r\n               let response = await fetch('assets/send-mail/member-sendmail.php', {\r\n                  method: 'POST',\r\n                  body: formMemberData\r\n               });\r\n               if (response.ok) {\r\n                  let result = await response.json();\r\n                  alert(result.message);\r\n                  formMember.reset();\r\n                  locationReplace();\r\n               }\r\n            } else {\r\n               formAlert.classList.add('alert')\r\n            }\r\n         }\r\n      }\r\n\r\n      // formModelSend\r\n      if (formModel) {\r\n         formModel.addEventListener('submit', formModelSend);\r\n         fileInput.addEventListener('change', preview);\r\n\r\n         async function formModelSend(e) {\r\n            e.preventDefault();\r\n\r\n            let error = formValidate(formModel);\r\n            let formModelData = new FormData(formModel);\r\n\r\n            formModelData.append('image', fileInput.files);\r\n\r\n            if (error === 0) {\r\n               let response = await fetch('assets/send-mail/model-sendmail.php', {\r\n                  method: 'POST',\r\n                  body: formModelData\r\n               });\r\n               if (response.ok) {\r\n                  let result = await response.json();\r\n                  alert(result.message);\r\n                  locationReplace();\r\n               } else {\r\n                  alert('Ошибка');\r\n               }\r\n            } else {\r\n               formAlert.classList.add('alert')\r\n            }\r\n         }\r\n      }\r\n\r\n      // formFooter\r\n      formFooter.addEventListener('submit', formFooterSend);\r\n      async function formFooterSend(e) {\r\n         e.preventDefault();\r\n\r\n         let error = formValidate(formFooter);\r\n         let formFooterData = new FormData(formFooter);\r\n\r\n         if (error === 0) {\r\n            let response = await fetch('assets/send-mail/footer-sendmail.php', {\r\n               method: 'POST',\r\n               body: formFooterData\r\n            });\r\n            if (response.ok) {\r\n               let result = await response.json();\r\n               alert(result.message);\r\n               formFooter.reset();\r\n               locationReplace();\r\n            } else {\r\n               alert('Ошибка');\r\n            }\r\n         } else {\r\n            formAlert.classList.add('alert')\r\n         }\r\n      }\r\n\r\n      // formModal\r\n      formModal.addEventListener('submit', formModalSend);\r\n      async function formModalSend(e) {\r\n         e.preventDefault();\r\n\r\n         let error = formValidate(formModal);\r\n         let formModalData = new FormData(formModal);\r\n\r\n         if (error === 0) {\r\n            let response = await fetch('assets/send-mail/modal-sendmail.php', {\r\n               method: 'POST',\r\n               body: formModalData\r\n            });\r\n            if (response.ok) {\r\n               let result = await response.json();\r\n               alert(result.message);\r\n               formModal.reset();\r\n               locationReplace();\r\n            } else {\r\n               alert('Ошибка');\r\n            }\r\n         } else {\r\n            formAlert.classList.add('alert')\r\n         }\r\n      }\r\n\r\n      // formRequest\r\n      if(formRequest) {\r\n         formRequest.addEventListener('submit', formRequestSend);\r\n      }\r\n\r\n      async function formRequestSend(e) {\r\n         e.preventDefault();\r\n\r\n         let error = formValidate(formRequest);\r\n         let formRequestData = new FormData(formRequest);\r\n\r\n         if (error === 0) {\r\n            let response = await fetch('assets/send-mail/request-sendmail.php', {\r\n               method: 'POST',\r\n               body: formRequestData\r\n            });\r\n            if (response.ok) {\r\n               let result = await response.json();\r\n               alert(result.message);\r\n               formRequest.reset();\r\n               locationReplace();\r\n            } else {\r\n               alert('Ошибка');\r\n            }\r\n         } else {\r\n            formAlert.classList.add('alert')\r\n         }\r\n      }\r\n\r\n      // Form Valid\r\n      function formValidate(form) {\r\n         let error = 0;\r\n         let formReq = form.querySelectorAll('.--req');\r\n\r\n         for (let index = 0; index < formReq.length; index++) {\r\n            const input = formReq[index];\r\n            formRemoveError(input);\r\n\r\n            if (input.classList.contains('_email')) {\r\n               if (emailTest(input)) {\r\n                  formAddError(input);\r\n                  error++;\r\n               }\r\n            } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {\r\n               formAddError(input);\r\n               error++;\r\n            } else {\r\n               if (input.value === '') {\r\n                  formAddError(input);\r\n                  error++\r\n               }\r\n            }\r\n         }\r\n\r\n         function formAddError(input) {\r\n            input.classList.add('_error');\r\n         }\r\n\r\n         function formRemoveError(input) {\r\n            input.classList.remove('_error');\r\n         }\r\n\r\n         function emailTest(input) {\r\n            return !/^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,8})+$/.test(input.value);\r\n         }\r\n\r\n         return error;\r\n      }\r\n\r\n      //Form img preview\r\n      function preview() {\r\n         const inputFiles = fileInput.files;\r\n         imageContainer.innerHTML = \"\";\r\n         if (inputFiles.length > 9) {\r\n            imgAlert.classList.add('alert')\r\n            fileInput.value = '';\r\n            uploadImg.classList.remove(\"active\")\r\n         }\r\n\r\n         for (let i of inputFiles) {\r\n            let reader = new FileReader();\r\n            reader.onload = () => {\r\n               let img = document.createElement(\"img\");\r\n               img.setAttribute(\"src\", reader.result);\r\n               imageContainer.appendChild(img);\r\n            }\r\n            uploadImg.classList.add(\"active\")\r\n            reader.readAsDataURL(i);\r\n         }\r\n      }\r\n\r\n      // location change func\r\n      function locationReplace() {\r\n         if (formLangData.dataset.formLang === 'ua') {\r\n            location.href = 'answer-ua.html'\r\n         } else if (formLangData.dataset.formLang === 'eng') {\r\n            location.href = 'answer-eng.html'\r\n         } else {\r\n            location.href = 'answer.html'\r\n         }\r\n      }\r\n   });\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (validForm);\n\n//# sourceURL=webpack://max/./src/assets/js/valid-form.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/assets/js/app.js");
/******/ 	__webpack_require__("./src/assets/js/burger.js");
/******/ 	__webpack_require__("./src/assets/js/event-slider.js");
/******/ 	__webpack_require__("./src/assets/js/events-slider.js");
/******/ 	__webpack_require__("./src/assets/js/filter-item.js");
/******/ 	__webpack_require__("./src/assets/js/header-sticky.js");
/******/ 	__webpack_require__("./src/assets/js/modal-window.js");
/******/ 	__webpack_require__("./src/assets/js/remove-scroll.js");
/******/ 	__webpack_require__("./src/assets/js/show-content.js");
/******/ 	__webpack_require__("./src/assets/js/slider.js");
/******/ 	__webpack_require__("./src/assets/js/steps-form.js");
/******/ 	__webpack_require__("./src/assets/js/tabs.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/assets/js/valid-form.js");
/******/ 	
/******/ })()
;