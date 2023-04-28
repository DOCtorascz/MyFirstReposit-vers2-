const mainStateNum = document.querySelectorAll('.main-state__num');
const mainStateName = document.querySelectorAll('.main-state__name');

function response() {
  const url = 'data.json';

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
