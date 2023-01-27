function posSize(message) {
 //удаление доменов второго уровня
 let array = `.ru .org .com .academy .accountant .accountants .active 
 .actor .adult .aero .agency .airforce .apartments .app .archi .army .associates .asia .adult .aero 
 .attorney .auction .audio .autos .biz .cat .coop .dance 
 .edu .eus .family .fun .gov .info .int .jobs .mil .mobi .museum .name
 .net .one .ong .onl .online .ooo
 .organic .partners .parts .party .pharmacy .photo .photography .photos .physio .pics .pictures .feedback .pink 
 .pizza .place .plumbing .plus .poker .porn .post .press 
 .pro .productions .properties .property .qpon .racing .recipes .red .rehab .ren .rent .rentals
 .report .republican .rest .review .reviews .rich .site .tel .trade .travel .xxx .xyz 
 .yoga .zone .ninja .art .moe .dev`

 let arrayReverse = array.split('')
 arrayReverse.reverse()
 arrayReverse = arrayReverse.join('')
 arrayReverse = arrayReverse.split(' ')

 let arrayMessage = message.split('')
 arrayMessage.reverse()
 arrayMessage = arrayMessage.join('')

 let result = 0

 for (let i = 0; i <= arrayReverse.length - 1; i++) {
  let indx = arrayMessage.indexOf(arrayReverse[i], 0)
  let indxDoth = arrayMessage.indexOf('.', indx)


  if (indx != -1 && arrayMessage[indxDoth + 1] != ' ') {
   let indxSpace = arrayMessage.indexOf(' ', indx)
   let str = arrayMessage.slice(indx, indxSpace)
   result += str.length
  }
 }

 result = message.length - result
 console.log(result)
 return result
}
posSize('Привет! https://github.com Привет, . http://github.racing, Пока www.github.xxx привет мир https://github.ru');

 // function deleteProt (message) {
 // 	Уделение с протоколом
 // 	let str = '';
 //  let indx = message.indexOf('https://');
 //  let indxP = message.indexOf('http://');
 //  let indxW = message.indexOf('www.');
 //  let result = '';

 //  На случай, если ссылок нет
 //  if (indx == -1 && indxP == -1 && indxW == -1) {
 //   console.log(message.length)
 //   return message.length;
 //  }

 //  Если ссылки обнаружены
 //  for (let i = 0; i <= message.length - 1; i++) {

 //   Ищем индекс каждой ссылки
 //   let indxHttps = message.indexOf('https://', i);
 //   let indxHttp = message.indexOf('http://', i);
 //   let indxWww = message.indexOf('www.', i);
 //   let indxResult = null

 //   Если индекс найден вырезаем ссылку и заменяем на пустую строку
 //   if (indxHttps > -1) {
 //    str = message.slice(indxHttps);
 //    indxResult = str.indexOf(' ');
 //    str = str.slice(0, indxResult + 1);
 //    message = message.replace(str, '');
 //    result = message.length;
 //   } else if (indxHttp > -1) {
 //    str = message.slice(indxHttp);
 //    indxResult = str.indexOf(' ');
 //    str = str.slice(0, indxResult + 1);
 //    message = message.replace(str, '');
 //    result = message.length;
 //   } else if (indxWww > -1) {
 //    str = message.slice(indxWww);
 //    indxResult = str.indexOf(' ');
 //    str = str.slice(0, indxResult + 1);
 //    message = message.replace(str, '');
 //    result = message.length;
 //   }
 //  }

 //  Если после редактирования последняя ссылка осталась, а это возможно в случае, если после ссылка нет пробелов и текста
 //  Ищем эту ссылку
 //  let indxLink1 = message.indexOf('https://');
 //  let indxLink2 = message.indexOf('http://');
 //  let indxLink3 = message.indexOf('www.');

 //  Вырезаем текст до ссылки
 //  if (indxLink1 > -1) {
 //   message = message.slice(0, indxLink1);
 //   result = message.length;
 //  } else if (indxLink2 > -1) {
 //   message = message.slice(0, indxLink2);
 //   result = message.length;
 //  } else if (indxLink3 > -1) {
 //   message = message.slice(0, indxLink3);
 //   result = message.length;
 //  }

 //  Возвращаем результат
 //  console.log(result)
 //  return result.length;
 // }


