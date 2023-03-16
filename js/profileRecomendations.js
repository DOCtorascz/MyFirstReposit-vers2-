// функция рекомендаций
export default function profileRecomendations(profile, profiles, count) {
  let hashProfile = '';
  const arrayProfile = [];
  const numArr = [];
  let num = 0;
  const arrResult = [];

  profile.posts = profile.posts.join(' ');

  for (const char of profiles) {
    char.posts = char.posts.join(' ');
  }

  for (let i = 0; i <= profile.posts.length - 1; i += 1) {
    const indx = profile.posts.indexOf('#', i);

    if (indx !== -1) {
      const indx2 = profile.posts.indexOf(' ', indx);
      if (indx2 === -1) {
        hashProfile = profile.posts.slice(indx, profile.posts.length);
        arrayProfile.push(hashProfile);
        break;
      }
      hashProfile = profile.posts.slice(indx, indx2);
      arrayProfile.push(hashProfile);
    }
  }

  const arrayFilt = arrayProfile.filter((item, index) => arrayProfile.indexOf(item) === index );
  for (let x = 0; x <= profiles.length - 1; x += 1) {
    for (let k = 0; k <= arrayFilt.length - 1; k += 1) {
      const indxArr = profiles[x].posts.indexOf(arrayFilt[k]);
      if (indxArr !== -1) {
        num += 1;
      }
    }
    numArr.push(num);
    num = 0;
    numArr.sort((a, b) => a - b);

    if (numArr[numArr.length - 1] >= count) {
      arrResult.push(profiles[x].id);
    }
  }

  console.log(arrResult);
  return arrResult;
};
