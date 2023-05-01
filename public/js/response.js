const mainStateNum = document.querySelectorAll('.main-state__num');
const mainStateName = document.querySelectorAll('.main-state__name');
const commentsAccountName = document.querySelectorAll('.comments__account-name');
const commentsTimeBack = document.querySelectorAll('.comments__time-back');
const commentsText = document.querySelectorAll('.comments__text');
const accountPage = document.querySelectorAll('.account-page');

function response() {
  const url = 'data.json';
  const urlPages = 'pictures.json';

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
      info.lastMessages.forEach((element, i) => {
        if (i === 0) {
          commentsAccountName[0].children[0].textContent = element.namePerson;
          commentsAccountName[0].children[1].textContent = element.login;
          commentsTimeBack[0].children[0].textContent = element.timeAgo;
          commentsText[0].children[0].textContent = element.comment;
          commentsText[0].children[1].children[1].textContent = element.repost;
          commentsText[0].children[1].children[3].textContent = element.like;
          commentsText[0].children[1].children[5].textContent = element.loaded;
        } else if (i === 1) {
          commentsAccountName[i].children[0].textContent = element.namePerson;
          commentsAccountName[i].children[1].textContent = element.login;
          commentsTimeBack[i].children[0].textContent = element.timeAgo;
          commentsText[i].children[0].textContent = element.comment;
          commentsText[i].children[1].children[1].textContent = element.repost;
          commentsText[i].children[1].children[3].textContent = element.like;
          commentsText[i].children[1].children[5].textContent = element.loaded;
        } else if (i === 2) {
          commentsAccountName[i].children[0].textContent = element.namePerson;
          commentsAccountName[i].children[1].textContent = element.login;
          commentsTimeBack[i].children[0].textContent = element.timeAgo;
          commentsText[i].children[0].textContent = element.comment;
          commentsText[i].children[2].children[1].textContent = element.repost;
          commentsText[i].children[2].children[3].textContent = element.like;
          commentsText[i].children[2].children[5].textContent = element.loaded;
        } else if (i === 3) {
          commentsAccountName[i].children[0].textContent = element.namePerson;
          commentsAccountName[i].children[1].textContent = element.login;
          commentsTimeBack[i].children[0].textContent = element.timeAgo;
          commentsText[i].children[0].textContent = element.comment;
          commentsText[i].children[1].children[1].textContent = element.repost;
          commentsText[i].children[1].children[3].textContent = element.like;
          commentsText[i].children[1].children[5].textContent = element.loaded;
        }
      });
    });

  fetch(urlPages)
    .then((respon) => respon.json())
    .then((info) => {
      info.picture.forEach((element, i) => {
        if (i === 1) {
          accountPage[0].setAttribute('src', `${element.imgUrl}`);
        } else if (i === 2) {
          accountPage[1].setAttribute('src', `${element.imgUrl}`);
        } else if (i === 3) {
          accountPage[2].setAttribute('src', `${element.imgUrl}`);
        } else if (i === 4) {
          accountPage[3].setAttribute('src', `${element.imgUrl}`);
        }

        if (i === 0) {
          commentsText[0].children[1].children[0].setAttribute('src', `${element.imgRepost}`);
          commentsText[0].children[1].children[2].setAttribute('src', `${element.imgLike}`);
          commentsText[0].children[1].children[4].setAttribute('src', `${element.imgLoaded}`);
        }
      });
    });
}

response();
