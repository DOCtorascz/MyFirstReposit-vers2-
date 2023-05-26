import timeBack from './timeBack.js';

const commetsPersone = document.querySelector('.commets__persone');

function removeDom() {
  while (commetsPersone.firstChild) {
    commetsPersone.removeChild(commetsPersone.lastChild);
  }
}

export default function render(info) {
  let strLastMessage = '';
  const flag = 1;
  const arrTime = [];
  info.lastMessages.forEach((item) => {
    arrTime.push(item.timeAgo);
  });

  if (flag === 1) {
    setInterval(() => {
      info.lastMessages.forEach((element, index) => {
        strLastMessage += `<div class="comments__account">
          <img class="account-page" src="${element.imgUrl}" alt="account">
          <div class="comments__page">
            <div class="comments__info-account">
              <div class="comments__account-name">
                <p>${element.namePerson}</p>
                <p>${element.login}</p>
              </div>
              <div class="comments__time-back">
                <p>${timeBack(arrTime[index] += 1)}</p>
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
      removeDom();
      commetsPersone.insertAdjacentHTML('beforeend', `${strLastMessage}`);
      strLastMessage = '';
    }, 60000);
  } else {
    info.lastMessages.forEach((element, index) => {
      strLastMessage += `<div class="comments__account">
        <img class="account-page" src="${element.imgUrl}" alt="account">
        <div class="comments__page">
          <div class="comments__info-account">
            <div class="comments__account-name">
              <p>${element.namePerson}</p>
              <p>${element.login}</p>
            </div>
            <div class="comments__time-back">
              <p>${timeBack(arrTime[index] += 1)}</p>
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
    removeDom();
    commetsPersone.insertAdjacentHTML('beforeend', `${strLastMessage}`);
    strLastMessage = '';
  }
}

export { removeDom, render };
