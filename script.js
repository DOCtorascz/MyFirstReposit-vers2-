function posSize(message) {
  let str = "";
  let indx = message.indexOf("https://");
  let indxP = message.indexOf("http://");
  let indxW = message.indexOf("www");
  let result = "";

  // На случай, если ссылок нет
  if (indx == -1 && indxP == -1 && indxW == -1) {
    console.log(message.length);
    return message.length;
  }

  //Если ссылки обнаружены
  for (let i = 0; i <= message.length - 1; i++) {
    //Ищем индекс каждой ссылки
    let indxHttps = message.indexOf("https://", i);
    let indxHttp = message.indexOf("http://", i);
    let indxWww = message.indexOf("www.", i);
    let indxResult = null;

    //Если индекс найден вырезаем ссылку и заменяем на пустую строку
    if (indxHttps > -1) {
      str = message.slice(indxHttps);
      indxResult = str.indexOf(" ");
      str = str.slice(0, indxResult + 1);
      message = message.replace(str, "");
      result = message.length;
    } else if (indxHttp > -1) {
      str = message.slice(indxHttp);
      indxResult = str.indexOf(" ");
      str = str.slice(0, indxResult + 1);
      message = message.replace(str, "");
      result = message.length;
    } else if (indxWww > -1) {
      str = message.slice(indxWww);
      indxResult = str.indexOf(" ");
      str = str.slice(0, indxResult + 1);
      message = message.replace(str, "");
      result = message.length;
    }
  }

  // Если после редактирования последняя ссылка осталась, а это возможно в случае, если после ссылка нет пробелов и текста
  // Ищем эту ссылку
  let indxLink1 = message.indexOf("https://");
  let indxLink2 = message.indexOf("http://");
  let indxLink3 = message.indexOf("www.");

  //Вырезаем текст до ссылки
  if (indxLink1 > -1) {
    message = message.slice(0, indxLink1);
    result = message.length;
  } else if (indxLink2 > -1) {
    message = message.slice(0, indxLink2);
    result = message.length;
  } else if (indxLink3 > -1) {
    message = message.slice(0, indxLink3);
    result = message.length;
  }

  //Возвращаем результат
  console.log(result);
  return result.length;
}
posSize(
  "Привет! https://github.com Привет http://github.com Пока www.github.com"
);
