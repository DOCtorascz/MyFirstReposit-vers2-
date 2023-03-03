//валидация email
export function valid(strListMail) {
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
  
  array = array.split(' ')

 let strSlice = ''
 let res = 0

 for (let j = 0; j <= strListMail.length - 1; j++) {
  let indx = strListMail.indexOf('@', j)

  if (indx != -1) {
   strSlice = strListMail.slice(indx)
   strSlice = strSlice
  }
 }

 for (let k = 0; k <= strSlice.length - 1; k++) {
  let indxDown = strListMail.indexOf('@')
  let indx = strListMail.indexOf('', strListMail.length)
  let indxUp = strListMail.indexOf('.')

  let strListMailIndx_2 = strListMail[indx - 2];
  let strListMailIndx_1 = strListMail[indx - 1];
  let strListMailIndxUp = strListMail[indxUp];
  let strListMailIndxUp_1 = strListMail[indxUp + 1];
  let strListMailIndxDown = strListMail[indxDown];
  let strListMailIndxDown_1 = strListMail[indxDown + 1];

  if (strListMailIndx_2 != strListMailIndx_1 && strListMailIndxUp != strListMailIndxUp_1 && strListMailIndxDown != strListMailIndxDown_1) {

   let arr = array.forEach((item, index) => {
    let arr2 = array.forEach((item, index) => {
     let indx = strSlice.indexOf(array[index])
     if (indx != -1) {
      res = 1
     }
    })
   })
  }
 }

 if (res == 1) {
  console.log(true)
  return true
 } else {
  console.log(false)
  return false
 }
}

valid('timur-sdsada@outlook.com')
valid('timur-sdsada@burtovoy..org')
valid('timur-sdsada@outlook.sidxte')
valid('timur-sdsada@outlook.dancee')