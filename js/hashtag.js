// функция хештегов
export default function hashtag(str) {
  let hashStr = null;
  const arrayStr = [];
  let result = str;

  for (let i = 0; i <= str.length - 1; i += 1) {
    const indx = str.indexOf('#', i);

    if (indx !== -1) {
      const indx2 = str.indexOf(' ', indx);
      if (indx2 === -1) {
        hashStr = str.slice(indx, str.length);
        arrayStr.push(hashStr);
        break;
      }
      hashStr = str.slice(indx, indx2);
      arrayStr.push(hashStr);
    }
  }

  const arrayFilt = arrayStr.filter((item, index) => arrayStr.indexOf(item) === index);

  for (const item of arrayFilt) {
    result = result.replace(item, `<a href="/search?tag=${item}">${item}</a>`);
  }

  return result;
}
