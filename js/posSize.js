// подсчёт символов без ссылок
export default function posSize(message) {
  // удаление доменов второго уровня
  const array = `.ru .org .com .academy .accountant .accountants .active 
  .actor .adult .aero .agency .airforce .apartments .app .archi .army .associates .asia .adult .aero 
  .attorney .auction .audio .autos .biz .cat .coop .dance 
  .edu .eus .family .fun .gov .info .int .jobs .mil .mobi .museum .name
  .net .one .ong .onl .online .ooo
  .organic .partners .parts .party .pharmacy .photo .photography .photos .physio .pics .pictures .feedback .pink 
  .pizza .place .plumbing .plus .poker .porn .post .press 
  .pro .productions .properties .property .qpon .racing .recipes .red .rehab .ren .rent .rentals
  .report .republican .rest .review .reviews .rich .site .tel .trade .travel .xxx .xyz 
  .yoga .zone .ninja .art .moe .dev`;

  let arrayReverse = array.split('');
  arrayReverse.reverse();
  arrayReverse = arrayReverse.join('');
  arrayReverse = arrayReverse.split(' ');

  let arrayMessage = message.split('');
  arrayMessage.reverse();
  arrayMessage = arrayMessage.join('');

  let result = 0;

  arrayReverse.forEach((item, index) => {
    const indx = arrayMessage.indexOf(arrayReverse[index], 0);
    const indxDoth = arrayMessage.indexOf('.', indx);

    if (indx !== -1 && arrayMessage[indxDoth + 1] !== ' ') {
      const indxSpace = arrayMessage.indexOf(' ', indx);
      const str = arrayMessage.slice(indx, indxSpace);
      result += str.length;
    }
  });

  result = message.length - result;
  console.log(result);
  return result;
}
posSize('Привет! https://github.com Привет, . http://github.racing, Пока www.github.xxx привет мир https://github.ru');
