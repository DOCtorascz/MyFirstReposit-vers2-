import timeBack from './timeBack.js';

const commetsPersone = document.querySelector('.commets__persone');

function removeDom() {
  while (commetsPersone.firstChild) {
    commetsPersone.removeChild(commetsPersone.lastChild);
  }
}

function renderMessage(info, arrTime) {
  let strLastMessage = '';
  const m = arrTime;

  info.forEach((element, index) => {
    strLastMessage += `<div class="comments__account">
      <img class="account-page" src="${element.imgUrl}" alt="account">
      <div class="comments__page">
        <div class="comments__info-account">
          <div class="comments__account-name">
            <p>${element.nameperson}</p>
            <p>${element.login}</p>
          </div>
          <div class="comments__time-back">
            <p>${timeBack(m[index] += 1)}</p>
          </div>
        </div>
        <div class="comments__text">
          <p>${element.comment}</p>
          <div class="comments__state">
            <img src="${element.imgLike}" alt="twit"><span>${element.repost}</span>
            <img src="${element.imgLoaded}" alt="twit"><span>${element.likes}</span>
            <img src="${element.imgRepost}" alt="twit"><span>${element.loaded}</span>
          </div>
        </div>
        </div>
      </div>`;
    commetsPersone.insertAdjacentHTML('beforeend', `${strLastMessage}`);
    strLastMessage = '';
  });
}

let flag = 0;

export default function render(info) {
  const arrTime = [];

  info.forEach((item) => {
    arrTime.push(item.timeAgo);
  });

  if (flag === 0) {
    renderMessage(info, arrTime);
    flag = 1;
  }
  if (flag === 1) {
    setInterval(() => {
      removeDom();
      renderMessage(info, arrTime);
    }, 60000);
  }
}

export { removeDom, render };
