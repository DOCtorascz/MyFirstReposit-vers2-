// функция хештегов
export default function hashtag(str) {
  const arrayStr = [];
  const result = str.split(' ');

  cont: for (const item of result) {
    for (let i = 0; i <= item.length - 1; i += 1) {
      const indx = item.indexOf('#');
      
      if (indx !== -1) {
        arrayStr.push(item.replace(item, `<a href="/search?tag=${item}">${item}</a>`));
        continue cont;
      } else {
        arrayStr.push(item);
        continue cont;
      }
    }
  }

  const joinStr = arrayStr.join(' ');

  console.log(joinStr);
  return joinStr;
}
