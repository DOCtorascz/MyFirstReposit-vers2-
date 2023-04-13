// функция рекомендаций
export default function profileRecomendations(profile, profiles, count) {
  let num = 0;
  const arrResult = [];
  const pofilesPost = profile.posts.join(' ');
  const arrayStr = [];
  const result = pofilesPost.split(' ');

  result.forEach((element) => {
    const indx = element.indexOf('#');
    if (indx !== -1) {
      arrayStr.push(element);
    }
  });

  profiles.forEach((item) => {
    const profilesPosts = item.posts.join(' ');
    arrayStr.forEach((element) => {
      const indx = profilesPosts.indexOf(`${element}`);

      if (indx !== -1) {
        num += 1;
      }
    });
    if (num >= count) {
      arrResult.push(item.id);
    }
  });

  console.log(arrResult);
  return arrResult;
}
