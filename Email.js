let strMail = `@hotmail.com;@mail.ru;@inbox.ru;@list.ru;@bk.ru;@internet.ru;@yandex.ru;@gmail.com;@yahoo.com;@hotmail.com;@outlook.com;@rambler.ru;
@myrambler.ru;@autorambler.ru;@lenta.ru;@rambler.ua;@ro.ru`
let domen = ['.com', '.ru']
let array = strMail.split(';')

let result = null
//функция валидации email
function valid(strListMail) {
 //цикл перебора возможных вариантова email
 let arr = array.forEach((item, index) => {
  let str = array[index]
  //цикл перебора основной строки
  for (let j = 0; j <= strListMail.length - 1; j++) {
   let indx2 = strListMail.indexOf(str)
   //условие при котором почта валидна
   if (indx2 != -1) {

    for (let domenEnd = 0; domenEnd <= domen.length - 1; domenEnd++) {
     let indx3 = strListMail.indexOf('', strListMail.length)

     if (strListMail[indx3 - 2] == 'r' || strListMail[indx3 - 2] == 'o') {
      result = true
     }
    }
   }
  }
 })

 console.log(result)
 return result == true
}

valid('timur-sdsada@outlook.com')

