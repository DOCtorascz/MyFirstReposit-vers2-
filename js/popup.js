const headerFormAutoriz = document.querySelector('.header__form-autoriz');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__name-images');
const body = document.querySelector('body');

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

function popupOpen() {
  bodyLock();

  popup.setAttribute('style', 'opacity: 1; visibility: visible;');
}

function popupCloses() {
  window.addEventListener('click', (e) => {
    if (e.target === popup || e.target === popupClose) {
      bodyLock();
      popup.setAttribute('style', 'opacity: ; visibility: hidden;');
      body.setAttribute('class', 'false');
    }
  });
}

headerFormAutoriz.addEventListener('click', (event) => {
  event.preventDefault();
});

popupCloses();
headerFormAutoriz.addEventListener('click', popupOpen);
