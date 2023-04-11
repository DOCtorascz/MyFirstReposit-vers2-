import posSize from './posSize.js';
import posReplace from './posReplace.js';
import valid from './valid.js';
import timeBack from './timeBack.js';
import hashtag from './hashtag.js';
import platformFilter from './platformFilter.js';
import profileRecomendations from './profileRecomendations.js';

const headerFormAutoriz = document.querySelector('.header__form-autoriz');
const footerFormAutoriz = document.querySelector('.footer__form-autoriz');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__name-images');
const body = document.querySelector('body');
const formContent = document.querySelectorAll('.name__content');
const formRegistr = document.querySelectorAll('.fr');

posSize('Привет! https://gЛДОТithub.party https://githuОООb.rich ЧТО ЭТО ТАКОЕ https://gitАФЫАhub.xxx');
posReplace('as.plus fdsf f.rest ');
valid('timu@mail.online');
timeBack(5);
hashtag('#привет#приветs ');
platformFilter('блядь', ['блядь']);
profileRecomendations(
  {
    id: 256,
    posts: [
      'Привет. #сегодня был на #концерте группы #linkinpark',
      'как вам #новая песня #linkinpark #ss',
    ],
  },
  [
    {
      id: 257,
      posts: [
        'Сегодня вышла новая версия #javascript',
        'как вам #сегодня новая версия #ss #javascript',
      ],
    },
    {
      id: 258,
      posts: [
        '#сегодня мне не #концерте понравилась #ss #ss #новая песня linkinpark #ss',
      ],
    },
  ],
  5,
);

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

function popupOpenFooter() {
  popupOpenHead();
  keyboard();
}

function popupCloses() {
  window.addEventListener('click', (e) => {
    if (e.target === popup || e.target === popupClose) {
      e.preventDefault();
      bodyLock();
      popup.setAttribute('style', 'opacity: ; visibility: hidden;');
      body.setAttribute('class', 'false');
    }
  });
}

headerFormAutoriz.addEventListener('click', (event) => {
  event.preventDefault();
});

footerFormAutoriz.addEventListener('click', (e) => {
  e.preventDefault();
});

popupCloses();
headerFormAutoriz.addEventListener('click', popupOpenHead);
footerFormAutoriz.addEventListener('click', popupOpenFooter);
