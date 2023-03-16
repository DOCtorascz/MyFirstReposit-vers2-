// функция цензуры
export default function platformFilter(str, array) {
  const arrayResult = [];
  str = str.toLowerCase();
  let strResult = str;
  for (let i = 0; i <= array.length - 1; i += 1) {
    for (let j = 0; j <= str.length - 1; j += 1) {
      const indx = str.indexOf(array[i], j);
      if (indx !== -1) {
        const indxSpace = str.indexOf(' ', indx);
        const uncensored = str.slice(indx, indxSpace);
        arrayResult.push(uncensored);
      }
    }
  }
  const filtArray = arrayResult.filter((item, index) => arrayResult.indexOf(item) === index);

  for (let x = 0; x <= filtArray.length - 1; x += 1) {
    for (let k = 0; k <= str.length - 1; k += 1) {
      strResult = strResult.replace(filtArray[x], '***');
    }
  }
  console.log(strResult);
  return strResult;
};
