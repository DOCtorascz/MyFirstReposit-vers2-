// функция хештегов
export default function hashtag(str) {
  const arrayStr = [];
  const result = str.split(' ');

  result.forEach((element) => {
    const indx = element.indexOf('#');
    if (indx !== -1) {
      arrayStr.push(element.replace(element, `<a href="/search?tag=${element}">${element}</a>`));
    } else if (element !== '') {
      arrayStr.push(element);
    }
  });

  const joinStr = arrayStr.join(' ');

  console.log(joinStr);
  return joinStr;
}
