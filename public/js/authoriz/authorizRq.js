function authorizRq(e) {
  const hash = 'абвгдеёж$!@^@#зиий$%@@клмно$%@^@#прстуфкцчшщ$%@^@#ыьэюя';
  const account = {
    LOGI: e.target.parentNode.children[0].children[1].value,
    PASSWOR: e.target.parentNode.children[1].children[1].value,
  };

  for (let i = 0; i <= hash.length - 1; i += 1) {
    account.PASSWOR += hash[i + 3];
  }

  const url2 = '/account.json';
  let correct = '';

  const putRqBody = {
    token: account.PASSWOR,
    id: '',
  };

  fetch(url2, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
  })
    .then((respon) => respon.json())
    .then((respon) => {
      respon.forEach((element) => {
        if (element.account_name === account.LOGI && element.account_password === account.PASSWOR) {
          putRqBody.id = respon.length;
          correct = 'Корректно';
          alert('Авторизация прошла успешно');
        }
      });
      if (correct === '') {
        alert('Ошибка 401. Неверно введён запрос');
      } else {
        fetch(url2, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify(putRqBody),
        })
          .then((respons) => respons.json());
      }
    });
}

export default { authorizRq };
