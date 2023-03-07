//  валидация email
export default function valid(strListMail) {
  let array = `.ru .org .com .academy .accountant .accountants .active 
  .actor .adult .aero .agency .airforce .apartments .app .archi .army .associates .asia .adult .aero 
  .attorney .auction .audio .autos .biz .cat .coop .dance 
  .edu .eus .family .fun .gov .info .int .jobs .mil .mobi .museum .name
  .net .one .ong .onl .online .ooo
  .organic .partners .parts .party .pharmacy .photo .photography .photos .physio .pics .pictures .feedback .pink 
  .pizza .place .plumbing .plus .poker .porn .post .press 
  .pro .productions .properties .property .qpon .racing .recipes .red .rehab .ren .rent .rentals
  .report .republican .rest .review .reviews .rich .site .tel .trade .travel .xxx .xyz 
  .yoga .zone .ninja .art .moe .dev`;

  array = array.split(' ');

  let strSlice = '';
  let res = 0;

  for (let j = 0; j <= strListMail.length - 1; j += 1) {
    const indx = strListMail.indexOf('@', j);

    if (indx !== -1) {
      strSlice = strListMail.slice(indx);
    }
  }

  for (let k = 0; k <= strSlice.length - 1; k += 1) {
    const indxDown = strListMail.indexOf('@');
    let indx = strListMail.indexOf('', strListMail.length);
    const indxUp = strListMail.indexOf('.');

    const list = {
      InTwo: strListMail[indx - 2],
      InOne: strListMail[indx - 1],
      InUp: strListMail[indxUp],
      InUpOne: strListMail[indxUp + 1],
      InDown: strListMail[indxDown],
      InDownOne: strListMail[indxDown + 1],
    };

    if (list.InTwo !== list.InOne && list.InUp !== list.InUpOne && list.InDown !== list.InDownOne) {
      array.forEach(() => {
        array.forEach((item, index) => {
          indx = strSlice.indexOf(array[index]);
          if (indx !== -1) {
            res = 1;
          }
        });
      });
    }
  }

  if (res === 1) {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}
