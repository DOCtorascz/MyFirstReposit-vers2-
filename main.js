function posSize(message) {
  let str = "";
  let strMess = message;
  let indx = message.indexOf("https://");
  let indxP = message.indexOf("http://");
  let indxW = message.indexOf("www");

  // На случай, если ссылок нет
  if (indx == -1 && indxP == -1 && indxW == -1) {
    console.log(message.length);
    return message.length;
  }

  //Если ссылки обнаружены
  for (let i = 0; i <= message.length - 1; i++) {
    //Ищем индекс каждой ссылки
    let indxHttps = message.indexOf("https://", i);
    let indxResult = null;

    //Если индекс найден меняем ссылку
    if (indxHttps > -1) {
      str = message.slice(indxHttps);
      indxResult = str.indexOf(" ");
      str = str.slice(0, indxResult);

      strMess = message.replace(str, `<a href="${str}">${str}</a>`);
      break;
    }
  }

  for (let j = 0; j <= strMess.length - 1; j++) {
    //Ищем индекс каждой ссылки
    let indxHttp = message.indexOf("http://", j);
    let indxResult = null;

    //Если индекс найден меняем ссылку
    if (indxHttp > -1) {
      str = message.slice(indxHttp);
      indxResult = str.indexOf(" ");
      str = str.slice(0, indxResult);
      strMess = strMess.replace(str, `<a href="${str}">${str}</a>`);
      break;
    }
  }

  for (let x = 0; x <= strMess.length - 1; x++) {
    //Ищем индекс каждой ссылки
    let indxWww = message.indexOf("www.", x);
    let indxResult = null;

    //Если индекс найден меняем ссылку
    if (indxWww > -1) {
      str = message.slice(indxWww);
      strMess = strMess.replace(str, `<a href="${str}">${str}</a>`);
      break;
    }
  }
  console.log(strMess);
  return strMess;
}
posSize("Привет! https://github.com http://github.com www.github.com g");
