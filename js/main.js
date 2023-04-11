import posSize from './posSize.js';
import posReplace from './posReplace.js';
import valid from './valid.js';
import timeBack from './timeBack.js';
import hashtag from './hashtag.js';
import platformFilter from './platformFilter.js';
import profileRecomendations from './profileRecomendations.js';

const headerFormAutoriz = document.querySelector('.header__form-autoriz')
const popup = document.querySelector('.popup')
const popupClose = document.querySelector('.popup__name-item')

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

function popupOpen() {
  bodyLock()

  popup.setAttribute('style', 'opacity: 1; visibility: visible;')
}

function popupCloses() {
  popupClose.addEventListener('click', () => {
    bodyLock()
    popup.setAttribute('style', 'opacity: 0; visibility: hidden;')
    let body = document.querySelector('body')
    body.setAttribute('class', 'false')
  })
}

function bodyLock() {
  const scrollWidth = window.innerWidth - document.querySelector('body').offsetWidth + 'px'

  const body = document.querySelector('body')
  body.setAttribute('class', 'disable__scroll')

  const getStylePadding = window.getComputedStyle(body).paddingRight

  if (parseInt(getStylePadding) === 0) {
    body.setAttribute('style', `padding-right: ${scrollWidth}`)
  } else {
    body.setAttribute('style', `padding-right: 0`)
  }
}

headerFormAutoriz.addEventListener('click', (event) => {
  event.preventDefault()
})

popupCloses()
headerFormAutoriz.addEventListener('click', popupOpen)
