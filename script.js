function posSize(message) {
  let str = '';
  let indx = message.indexOf('https://');
  let result = '';
  // На случай, если ссылок нет
  if (indx == -1) {
    return message.length;
  }
  //Если ссылки обнаружены
  for (let i = 0; i <= message.length - 1; i++) {
    //Ищем индекс каждой ссылки
    let indx2 = message.indexOf('https://', i);
    //Если индекс найден вырезаем ссылку и заменяем на пустую строку
    if (indx2 > -1) {
      str = message.slice(indx2);
      let indx3 = str.indexOf(' ');
      str = str.slice(0, indx3 + 1);
      message = message.replace(str, '');
      result = message.length;
   }
  }
  // Если после редактирования последняя ссылка осталась, а это возможно в случае, если после ссылка нет пробелов и текста
  // Ищем эту ссылку
  let indx3 = message.indexOf('https://');
  //Вырезаем текст до ссылки
  if (indx3 > -1) {
	  message = message.slice(0, indx3);
	  result = message.length;
  }
  //Возвращаем результат
  return result.length;
}
posSize('Привет! https://github.com')
