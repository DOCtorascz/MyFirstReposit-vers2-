//функция хештегов

export let hashtag = (str) => {
  let hashStr = ''
  let arrayStr = []
  let result = str

  for (let i = 0; i <= str.length - 1; i++) {
    let indx = str.indexOf('#', i)

    if (indx != -1) {
      let indx2 = str.indexOf(' ', indx)
      if (indx2 == -1) {
        hashStr = str.slice(indx, str.length)
        arrayStr.push(hashStr)
        break
      }
      hashStr = str.slice(indx, indx2)
      arrayStr.push(hashStr)
    }
   }

   let arrayFilt = arrayStr.filter((item, index) => {
    return arrayStr.indexOf(item) == index
   })
   
   for (let item of arrayFilt) {
    result = result.replace(item, `<a href="/search?tag=${item}">${item}</a>`)
   }

   return result
}

console.log(hashtag("#пРИвет чё каво #пока csdfdsgds#ghfdggdf"))
console.log(hashtag("#Супертема"))
console.log(hashtag("секунду #burtovoy"))
console.log(hashtag("как ваше здоровье #медицина"))