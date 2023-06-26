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

  const url = 'data.json';
  const url2 = 'posts.json';

  fetch(url2)
  .then((respon) => respon.json())
  .then((info) => {
    removeDom();
    render(info);
  });

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
