//burger
const burger = document.querySelector('.burger__menu'),
  wrapp = [burger, document.querySelector('.burger__wrapp')];
burger.addEventListener('click', () => {
  wrapp.forEach((e) => {
    e.classList.toggle('active');
  });
});
//filter
const filterItems = document.querySelectorAll('.events__item');
filterItems.forEach((filterItem) => {
  filterItem.addEventListener('click', () => {
    resetActive();
    filterItem.classList.add('active');
  });
});
const resetActive = () => {
  filterItems.forEach((filterItem) => {
    filterItem.classList.remove('active');
  });
};
//header sticky
const header = document.querySelector('header'),
  bodyRect = document.body.getBoundingClientRect();
if (bodyRect.top < 200) {
  header.classList.add('fixed');
}
window.addEventListener('scroll', () => {
  header.classList.toggle('fixed', window.scrollY > 200);
});
// modal window
const openModalBnt = document.querySelector('.open-modal'),
  modalWindow = document.querySelector('.modal-window'),
  windowOverflow = modalWindow.querySelector('.modal-window__overflow'),
  closeBtn = modalWindow.querySelector('.modal-window__close');
if (openModalBnt) {
  openModalBnt.addEventListener('click', () => {
    modalWindow.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    modalWindow.classList.remove('active');
    document.body.style.overflow = 'scroll';
  });

  windowOverflow.addEventListener('click', () => {
    modalWindow.classList.remove('active');
    document.body.style.overflow = 'scroll';
  });
}
// reset scroll
document.addEventListener('DOMContentLoaded', function (event) {
  let scrollpos = localStorage.getItem('scrollpos');
  if (scrollpos) window.scrollTo(0, scrollpos);
});

window.onbeforeunload = function (e) {
  localStorage.setItem('scrollpos', window.scrollY);
};
// show content
const showBtn = document.querySelector('.preview__btn'),
  textItems = document.querySelectorAll('.preview__text');

if (showBtn) {
  showBtn.addEventListener('click', () => {
    textItems.forEach((textItem) => {
      textItem.classList.toggle('show');
    });
    showBtn.classList.add('hide');
  });
}

// slider

// MAIN
const mainSwiper = new Swiper('.slider', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 25,
  grabCursor: true,
  loopedSlides: 5,
  followFinger: false,
  speed: 1000,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    320: {
      spaceBetween: 5,
    },
    375: {
      spaceBetween: 10,
    },
    480: {
      spaceBetween: 15,
    },
    767: {
      spaceBetween: 20,
    },
  },
});

// EVENT
const eventSwiper = new Swiper('.slider-event', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 25,
  grabCursor: true,
  loopedSlides: 3,
  followFinger: false,
  speed: 1000,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    320: {
      spaceBetween: 5,
    },
    375: {
      spaceBetween: 10,
    },
    480: {
      spaceBetween: 15,
    },
    767: {
      spaceBetween: 20,
    },
  },
});

// EVENTS
const eventsSwiper = new Swiper('.slider-events', {
  loop: true,
  slidesPerView: 'auto',
  loopedSlides: 4,
  spaceBetween: 25,
  grabCursor: true,
  followFinger: false,
  speed: 1000,
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    320: {
      spaceBetween: 5,
    },
    375: {
      spaceBetween: 10,
    },
    480: {
      spaceBetween: 15,
    },
    767: {
      spaceBetween: 20,
    },
  },
});

// multiStepForm
const multiStepForm = document.querySelector('[data-multi-step]');

if (multiStepForm) {
  const formSteps = [...multiStepForm.querySelectorAll('[data-step]')];
  const formStepsNum = [...multiStepForm.querySelectorAll('[data-step-num]')];

  let currentStep = formSteps.findIndex((step) => {
    return step.classList.contains('active');
  });
  if (currentStep < 0) {
    currentStep = 0;
    showCurrentStep();
  }
  multiStepForm.addEventListener('click', (e) => {
    let incrementor;
    if (e.target.matches('[data-next]')) {
      incrementor = 1;
    } else if (e.target.matches('[data-previous]')) {
      incrementor = -1;
    }
    if (incrementor == null) return;
    const inputs = [...formSteps[currentStep].querySelectorAll('input')];
    const allValid = inputs.every((input) => input.reportValidity());
    if (allValid) {
      currentStep += incrementor;
      showCurrentStep();
    }
    formStepsNum.forEach((num, i) => {
      if (i === currentStep) {
        num.classList.add('active');
      } else if (i != currentStep) {
        num.classList.remove('active');
      }
    });
  });
  formSteps.forEach((step) => {
    step.addEventListener('animationend', (e) => {
      formSteps[currentStep].classList.remove('hiden');
      e.target.classList.toggle('hiden', !e.target.classList.contains('active'));
    });
  });

  function showCurrentStep() {
    formSteps.forEach((step, index) => {
      step.classList.toggle('active', index === currentStep);
    });
  }
}
const tabs = document.querySelectorAll('.tabs__item');

tabs.forEach((tab) => {
  tab.classList.remove('active');
});

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const changeContent = () => {
      const currTab = tab.dataset.item;
      const tabsContent = document.querySelectorAll('.tabs__content');
      tabsContent.forEach((tabContent) => {
        tabContent.classList.remove('active');
        if (tabContent.dataset.content == currTab) {
          tabContent.classList.add('active');
        }
      });
    };
    resetActive();
    changeContent();
    tab.classList.add('active');
  });
});

// validation
document.addEventListener('DOMContentLoaded', function () {
  const formMember = document.querySelector('[data-form-member]');
  const formModel = document.querySelector('[data-form-model]');
  const formFooter = document.querySelector('[data-form-footer]');
  const formModal = document.querySelector('[data-form-modal]');
  const formRequest = document.querySelector('[data-form-request]');
  const formLangData = document.querySelector('[data-form-lang]');
  const sendBtn = document.querySelector('[data-send-btn]');
  const formAlert = document.querySelector('[data-alert-input]');
  const imgAlert = document.querySelector('[data-alert-img]');
  const formBtn = document.querySelector('.steps__btn');
  const formAlertBtns = document.querySelectorAll('.form-alert__btn');
  const formCheckbox = document.querySelector('.check__input');
  const tels = document.querySelectorAll('.tel');

  tels.forEach((tel) => {
    tel.addEventListener('focus', () => {
      tel.value = '+';
    });
  });

  formAlertBtns.forEach((formAlertBtn) => {
    formAlertBtn.addEventListener('click', () => {
      if (formAlert && formAlert.classList.contains('alert')) {
        formAlert.classList.remove('alert');
      }
      if (imgAlert && imgAlert.classList.contains('alert')) {
        imgAlert.classList.remove('alert');
      }
    });
  });

  if (formCheckbox) {
    formCheckbox.addEventListener('change', () => {
      if (formCheckbox.checked) {
        sendBtn.removeAttribute('disabled');
      } else {
        sendBtn.setAttribute('disabled', '');
      }
    });
  }

  //formMemberSend
  if (formMember) {
    formMember.addEventListener('submit', formMemberSend);
    formBtn.addEventListener('click', () => {
      let error = formValidate(formMember);
      if (error === 0) {
        formBtn.setAttribute('data-next', '');
      } else {
        formAlert.classList.add('alert');
      }
    });

    async function formMemberSend(e) {
      e.preventDefault();

      let error = formValidate(formMember);
      let formMemberData = new FormData(formMember);

      if (error === 0) {
        let response = await fetch('assets/send-mail/member-sendmail.php', {
          method: 'POST',
          body: formMemberData,
        });
        if (response.ok) {
          let result = await response.json();
          alert(result.message);
          formMember.reset();
          locationReplace();
        }
      } else {
        formAlert.classList.add('alert');
      }
    }
  }

  // formModelSend
  if (formModel) {
    formModel.addEventListener('submit', formModelSend);
    fileInput.addEventListener('change', preview);

    async function formModelSend(e) {
      e.preventDefault();

      let error = formValidate(formModel);
      let formModelData = new FormData(formModel);

      if (error === 0) {
        let response = await fetch('assets/send-mail/model-sendmail.php', {
          method: 'POST',
          body: formModelData,
        });
        if (response.ok) {
          let result = await response.json();
          alert(result.message);
          locationReplace();
        } else {
          alert('Ошибка');
        }
      } else {
        formAlert.classList.add('alert');
      }
    }
  }

  // formFooter
  formFooter.addEventListener('submit', formFooterSend);
  async function formFooterSend(e) {
    e.preventDefault();

    let error = formValidate(formFooter);
    let formFooterData = new FormData(formFooter);

    if (error === 0) {
      let response = await fetch('assets/send-mail/footer-sendmail.php', {
        method: 'POST',
        body: formFooterData,
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        formFooter.reset();
        locationReplace();
      } else {
        alert('Ошибка');
      }
    } else {
      formAlert.classList.add('alert');
    }
  }

  // formModal
  formModal.addEventListener('submit', formModalSend);
  async function formModalSend(e) {
    e.preventDefault();

    let error = formValidate(formModal);
    let formModalData = new FormData(formModal);

    if (error === 0) {
      let response = await fetch('assets/send-mail/modal-sendmail.php', {
        method: 'POST',
        body: formModalData,
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        formModal.reset();
        locationReplace();
      } else {
        alert('Ошибка');
      }
    } else {
      formAlert.classList.add('alert');
    }
  }

  // formRequest
  if (formRequest) {
    formRequest.addEventListener('submit', formRequestSend);
  }

  async function formRequestSend(e) {
    e.preventDefault();

    let error = formValidate(formRequest);
    let formRequestData = new FormData(formRequest);

    if (error === 0) {
      let response = await fetch('assets/send-mail/request-sendmail.php', {
        method: 'POST',
        body: formRequestData,
      });
      if (response.ok) {
        let result = await response.json();
        alert(result.message);
        formRequest.reset();
        locationReplace();
      } else {
        alert('Ошибка');
      }
    } else {
      formAlert.classList.add('alert');
    }
  }

  // Form Valid
  function formValidate(form) {
    let error = 0;
    let formReq = form.querySelectorAll('.--req');

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
        formAddError(input);
        error++;
      } else {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
    }

    function formAddError(input) {
      input.classList.add('_error');
    }

    function formRemoveError(input) {
      input.classList.remove('_error');
    }

    function emailTest(input) {
      return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }

    return error;
  }

  //create element

  const formImage = document.getElementById('formImage');
  if (formImage) {
    formImage.addEventListener('click', function () {
      const imagesBox = document.querySelector('.questionnaire__photo');
      const wrapp = document.createElement('div');
      wrapp.classList.add('image-wrapp');
      imagesBox.appendChild(wrapp);
    });
  }

  // location change func
  function locationReplace() {
    if (formLangData.dataset.formLang === 'ua') {
      location.href = 'answer-ua.html';
    } else if (formLangData.dataset.formLang === 'eng') {
      location.href = 'answer-eng.html';
    } else {
      location.href = 'answer.html';
    }
  }
});
