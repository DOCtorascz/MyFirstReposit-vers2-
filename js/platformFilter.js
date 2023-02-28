//функция цензуры
export let platformFilter = (str, array) => {
  let arrayResult = []
  str = str.toLowerCase()
  let strResult = str
  for (let i = 0; i <= array.length - 1; i++) {
    for (let j = 0; j <= str.length - 1; j++) {
      let indx = str.indexOf(array[i], j)
      if (indx != -1) {
        let indxSpace = str.indexOf(' ', indx)
        let uncensored = str.slice(indx, indxSpace)
        arrayResult.push(uncensored)
      }
    }
  }
  let filtArray = arrayResult.filter((item, index) => {
    return arrayResult.indexOf(item) === index
  })
  
  for (let x = 0; x <= filtArray.length - 1; x++) {
    for (let k = 0; k <= str.length - 1; k++) {
      strResult = strResult.replace(filtArray[x], '***')
    }
  }
  console.log(strResult)
}
platformFilter('Да вы что?? Охуели охуелиохуели пизда там охуели?', ['охуели'])
platformFilter('Ты кто такой сука', ['сука'])
platformFilter('пошёл Нахуй', ['нахуй'])