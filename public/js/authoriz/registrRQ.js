function registrationRq(e) {
  const hash = 'абвгдеёж$!@^@#зиий$%@@клмно$%@^@#прстуфкцчшщ$%@^@#ыьэюя';
  const account = {
    LOGIN: e.target.parentNode.children[0].children[1].value,
    PASSWORD: e.target.parentNode.children[2].children[1].value,
  };

  for (let i = 0; i <= hash.length - 1; i += 1) {
    account.PASSWORD += hash[i + 3];
  }

  const url2 = 'posts.json';

  fetch(url2, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(account),
  })
    .then((respon) => respon.json());
}

export default { registrationRq };
