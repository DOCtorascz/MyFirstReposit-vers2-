import valid from './valid.js';
import registrationRq from './authoriz/registrationRq.js';
import authorizRq from './authoriz/authorizRq.js';

const headerFormAutoriz = document.querySelectorAll('.regPopup');
const headerFormAutoriz2 = document.querySelectorAll('.openPopup');
const headerFormRegistr = document.querySelector('.registr');
const popup = document.querySelector('.popup');
const popup2 = document.querySelector('.popup2');
const popupClose = document.querySelectorAll('.popup__name-images');
const body = document.querySelector('body');
const formContent = document.querySelectorAll('.name__content');
const formContentErr = document.querySelectorAll('.name__content__err');
const formRegistr = document.querySelectorAll('.fr');
const authoriz = document.querySelector('.autho');

function bodyLock() {
  let scrollWidth = window.innerWidth - document.querySelector('body').offsetWidth;
  scrollWidth += 'px';
  body.setAttribute('class', 'disable__scroll');

  const getStylePadding = window.getComputedStyle(body).paddingRight;
  const parsePadding = Number(getStylePadding.slice(0, getStylePadding.length - 2));

  if (parsePadding === 0) {
    body.setAttribute('style', `padding-right: ${scrollWidth}`);
  } else {
    body.setAttribute('style', 'padding-right: 0');
  }
}

function keyboard() {
  for (let i = 0; i <= formRegistr.length - 1; i += 1) {
    formRegistr[i].addEventListener('keydown', () => {
      const contentInput = formRegistr[i].value;

      if (contentInput !== '') {
        formContent[i].setAttribute('style', 'opacity: 1; visibility: visible;');
      } else {
        formContent[i].setAttribute('style', 'opacity: 0; visibility: hidden;');
      }
    });
  }
}

function popupOpenHead() {
  bodyLock();
  popup.setAttribute('style', 'opacity: 1; visibility: visible;');
  keyboard();
}

function popupOpenAutoriz() {
  bodyLock();
  popup2.setAttribute('style', 'opacity: 1; visibility: visible;');
  keyboard();
}

function popupCloses() {
  window.addEventListener('click', (e) => {
    if (e.target === popup || e.target === popupClose[0]) {
      e.preventDefault();
      bodyLock();
      popup.setAttribute('style', 'opacity: ; visibility: hidden;');
      body.setAttribute('class', 'false');
    }
  });
}

function popupClosesAutoriz() {
  window.addEventListener('click', (e) => {
    if (e.target === popup2 || e.target === popupClose[1]) {
      e.preventDefault();
      bodyLock();
      popup2.setAttribute('style', 'opacity: ; visibility: hidden;');
      body.setAttribute('class', 'false');
    }
  });
}

document.addEventListener('click', (e) => {
  if (e.target === headerFormAutoriz[0] || e.target === headerFormAutoriz[1]) {
    e.preventDefault();
    bodyLock();
    popupOpenHead();
  }
});

document.addEventListener('click', (e) => {
  if (e.target === headerFormAutoriz2[0] || e.target === headerFormAutoriz2[1]) {
    e.preventDefault();
    bodyLock();
    popupOpenAutoriz();
  }
});

document.addEventListener('click', (e) => {
  if (e.target === headerFormRegistr) {
    registrationRq.registrationRq(e);
    e.preventDefault();
    for (let j = 0; j <= headerFormRegistr.parentNode.children.length - 2; j += 1) {
      const valueInput = headerFormRegistr.parentNode.children[j].children[1];
      const valueInput2 = headerFormRegistr.parentNode.children[2].children[1].value;

      if (j === 1 && valid(valueInput.value) !== true) {
        valueInput.setAttribute('style', 'background: #FF97C3; border: 1px solid red;');
        formContentErr[j].setAttribute('style', 'opacity: 1; visibility: visible;');
      } else if (j === 1 && valid(valueInput.value) === true) {
        valueInput.setAttribute('style', 'background: white; border: 1px solid #DFDFDF;');
        formContentErr[j].setAttribute('style', 'opacity: 0; visibility: hidden;');
      }

      if (valueInput.value !== valueInput2 && j === 3) {
        valueInput.setAttribute('style', 'background: #FF97C3; border: 1px solid red;');
        formContentErr[j].setAttribute('style', 'opacity: 1; visibility: visible;');
      } else if (valueInput.value === valueInput2) {
        valueInput.setAttribute('style', 'background: white; border: 1px solid #DFDFDF;');
        formContentErr[j].setAttribute('style', 'opacity: 0; visibility: hidden;');
      }
    }
  }
});

authoriz.addEventListener('click', (e) => {
  authorizRq.authorizRq(e);
});

popupCloses();
popupClosesAutoriz();
