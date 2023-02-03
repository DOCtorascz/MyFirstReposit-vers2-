//подсчёт символов без ссылок
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

 let arr = arrayReverse.forEach((item, index) => {
  let indx = arrayMessage.indexOf(arrayReverse[index], 0)
  let indxDoth = arrayMessage.indexOf('.', indx)

  if (indx != -1 && arrayMessage[indxDoth + 1] != ' ') {
   let indxSpace = arrayMessage.indexOf(' ', indx)
   let str = arrayMessage.slice(indx, indxSpace)
   result += str.length
  }

 })

 result = message.length - result
 console.log(result)
 return result
}
posSize('Привет! https://github.com Привет, . http://github.racing, Пока www.github.xxx привет мир https://github.ru');

//замена ссылок
function posReplace(message) {
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

 let result = ''
 let arrayResult = []
 let messageDuble = message

 let indxEquals = null

 let arr = arrayReverse.forEach((item, index) => {

  for (let j = 0; j <= messageDuble.length - 1; j++) {
   let indx2 = arrayMessage.indexOf(arrayReverse[index], j)
   let indxDoth = arrayMessage.indexOf('.', indx2)

   if (indx2 != -1 && arrayMessage[indxDoth + 1] != ' ') {
    let indxSpace = arrayMessage.indexOf(' ', indx2)
    let str = arrayMessage.slice(indx2, indxSpace)
    str = str.split('').reverse().join('')
    arrayResult.push(str)
    indxEquals = indx2
   }
  }

 })

 if (indxEquals == null) {
  console.log(message)
  return message
 }

 let resultFilter = arrayResult.filter((item, index) => {
  return arrayResult.indexOf(item) == index
 })

 for (let resultReplace = 0; resultReplace <= resultFilter.length - 1; resultReplace++) {
  message = message.replace(resultFilter[resultReplace], `<a href="${resultFilter[resultReplace]}">${resultFilter[resultReplace]}</a>`)
  result = message
 }

 console.log(result)
 return result
}
posReplace('Привет! git.com git2.ru git3.com');

//валидация email
function valid(strListMail) {
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
  if (strListMail[indx - 2] != strListMail[indx - 1] && strListMail[indxUp] != strListMail[indxUp + 1] && strListMail[indxDown] != strListMail[indxDown + 1]) {

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
valid('timur-sdsada@burtovoy.org')
valid('timur-sdsada@outlook.sidxte')
valid('timur-sdsada@outlook.dancee')
