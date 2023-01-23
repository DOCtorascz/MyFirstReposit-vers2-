function posSize(message) {
 //удаление доменов второго уровня
 let array = `.ru .org .com .academy .accountant .accountants .active 
   .actor .adult .aero .agency .airforce .apartments .app .archi .army .associates .asia .adult .aero 
   .attorney .auction .audio .autos .biz .cat .coop .dance 
   .edu .eus .family .fun .gov .info .int .jobs .mil .mobi .museum .name
   .net .one .ong .onl .online .ooo
   .organic .partners .parts .party .pharmacy .photo .photography .photos .physio .pics .pictures .feedback .pink 
   .pizza .place .plumbing, .plus, .poker .porn .post .press 
   .pro .productions .properties .property .qpon .racing .recipes .red .rehab .ren .rent .rentals
   .report .republican .rest .review .reviews .rich .site .tel .trade .travel .xxx .xyz 
   .yoga .zone,.ninja .art .moe .dev`

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

 for (let i = 0; i <= arrayReverse.length - 1; i++) {

  for (let j = 0; j <= messageDuble.length - 1; j++) {
   let indx = arrayMessage.indexOf(arrayReverse[i], j)
   let indxDoth = arrayMessage.indexOf('.', indx)

   if (indx != -1 && arrayMessage[indxDoth + 1] != ' ') {
    let indxSpace = arrayMessage.indexOf(' ', indx)
    let str = arrayMessage.slice(indx, indxSpace)
    str = str.split('')
    str.reverse()
    str = str.join('')
    arrayResult.push(str)
    indxEquals = indx
   }
  }
 }

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
posSize('Привет! git.com git2.ru git3.com');