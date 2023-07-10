import { render, removeDom } from './render.js';

const mainStateNum = document.querySelectorAll('.main-state__num');
const mainStateName = document.querySelectorAll('.main-state__name');
let flag = 1;

function response() {
  // убераем заглушку перед рендером
  if (flag === 1) {
    const replPlug = document.querySelector('.repl');
    replPlug.setAttribute('style', 'display: none');
    flag = 0;
  }

  const postRqBody = {
    messId: '7',
    imgurl: '1st Street',
    nameperson: 'Los Angeles',
    login: 'Harry Monroe',
    timeago: 'USA',
    repost: 'USA',
    likes: 'USA',
    loaded: 'USA',
    comment: 'USA',
    imgrepost: 'USA',
    imglike: 'USA',
    imgloaded: 'USA',
  };

  // const putRqBody = {
  //   loginRow: 'nameperson',
  //   loginNew: '2hels',
  //   id: '7',
  // };

  const url = 'data.json';
  const url2 = 'posts.json';

  fetch(url2)
    .then((respon) => respon.json())
    .then((info) => {
      removeDom();
      render(info);
    });

  fetch(url2, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(postRqBody),
  })
    .then((respon) => respon.json());

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
    });
}

response();
