const mainStateNum = document.querySelectorAll('.main-state__num');
const mainStateName = document.querySelectorAll('.main-state__name');
// const commentsAccountName = document.querySelectorAll('.comments__account-name');
// const commentsTimeBack = document.querySelectorAll('.comments__time-back');
// const commentsText = document.querySelectorAll('.comments__text');
// const accountPage = document.querySelectorAll('.account-page');
const commetsPersone = document.querySelector('.commets__persone');

function response() {
  // убераем заглушку перед рендером

  const replPlug = document.querySelector('.repl');
  replPlug.setAttribute('style', 'display: none');

  const url = 'data.json';
  // const urlPages = 'pictures.json';
  let strLastMessage = '';

  fetch(url)
    .then((respon) => respon.json())
    .then((info) => {
      info.static.forEach((element, i) => {
        if (i === 0) {
          mainStateNum[i].textContent = element.numPerson;
          mainStateName[i].textContent = element.nameCell;
        } else if (i === 1) {
          mainStateNum[i].textContent = element.numMessage;
          mainStateName[i].textContent = element.nameCell;
        } else if (i === 2) {
          mainStateNum[i].textContent = element.numMessage;
          mainStateName[i].textContent = element.nameCell;
        }
      });
      info.lastMessages.forEach((element) => {
        strLastMessage += `<div class="comments__account">
        <img class="account-page" src="${element.imgUrl}" alt="account">
        <div class="comments__page">
          <div class="comments__info-account">
            <div class="comments__account-name">
              <p>${element.namePerson}</p>
              <p>${element.login}</p>
            </div>
            <div class="comments__time-back">
              <p>${element.timeAgo}</p>
            </div>
          </div>
          <div class="comments__text">
            <p>${element.comment}</p>
            <div class="comments__state">
              <img src="${element.imgLike}" alt="twit"><span>${element.repost}</span>
              <img src="${element.imgLoaded}" alt="twit"><span>${element.like}</span>
              <img src="${element.imgRepost}" alt="twit"><span>${element.loaded}</span>
            </div>
          </div>
          </div>
        </div>`;
      });
      commetsPersone.insertAdjacentHTML('beforeend', `${strLastMessage}`);
    });
}

response();
