// замена ссылок
export default function posReplace(message) {
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

  let result = '';
  const arrayResult = [];
  const messageDuble = message;

  let indxEquals = null;

  arrayReverse.forEach((item, index) => {
    for (let j = 0; j <= messageDuble.length - 1; j += 1) {
      const indx2 = arrayMessage.indexOf(arrayReverse[index], j);
      const indxDoth = arrayMessage.indexOf('.', indx2);

      if (indx2 !== -1 && arrayMessage[indxDoth + 1] !== ' ') {
        const indxSpace = arrayMessage.indexOf(' ', indx2);
        let str = arrayMessage.slice(indx2, indxSpace);
        str = str.split('').reverse().join('');
        arrayResult.push(str);
        indxEquals = indx2;
      }
    }
  });

  if (indxEquals == null) {
    console.log(message);
    return message;
  }

  const resultFilter = arrayResult.filter((item, index) => arrayResult.indexOf(item) === index);

  for (let resultReplace = 0; resultReplace <= resultFilter.length - 1; resultReplace += 1) {
    message = message.replace(resultFilter[resultReplace], `<a href="${resultFilter[resultReplace]}">${resultFilter[resultReplace]}</a>`);
    result = message;
  }

  console.log(result);
  return result;
}
posReplace('Привет! git.com git2.ru git3.com');
