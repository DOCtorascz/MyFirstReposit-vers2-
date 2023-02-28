//функция рекомендаций
export let profileRecommendations = (profile, profiles, count) => {
  let hashProfile = ''
  let arrayProfile = []
  let numArr = []
  let num = 0
  let arrResult = []

  profile.posts = profile.posts.join(' ')

  for (let char of profiles) {
    char.posts = char.posts.join(' ')
  }

  for (let i = 0; i <= profile.posts.length - 1; i++) {
    let indx = profile.posts.indexOf('#', i)

    if (indx != -1) {
      let indx2 = profile.posts.indexOf(' ', indx)
      if (indx2 == -1) {
        hashProfile = profile.posts.slice(indx, profile.posts.length)
        arrayProfile.push(hashProfile)
        break
      }
      hashProfile = profile.posts.slice(indx, indx2)
      arrayProfile.push(hashProfile)
    }
   }

   let arrayFilt = arrayProfile.filter((item, index) => {
    return arrayProfile.indexOf(item) == index
   })

   for (let x = 0; x <= profiles.length - 1; x++) {
    for (let k = 0; k <= arrayFilt.length - 1; k++) {
      let indxArr = profiles[x].posts.indexOf(arrayFilt[k])
      if (indxArr != -1) {
        num += 1 
      }    
    }
    numArr.push(num)
    num = 0
    numArr.sort((a, b) => a - b)

    if (numArr[numArr.length - 1] >= count) {
      arrResult.push(profiles[x].id)
    }
   }

   return arrResult
}

console.log(profileRecommendations({
  id: 256, 
  posts: [
   'Привет. #сегодня был на концерте группы #linkinpark', 
   'как вам новая песня #linkinpark #ss'
  ]
},
[
  {
    id: 257, 
    posts: [
     'Сегодня вышла новая версия #javascript', 
     'как вам новая версия #ss #javascript'
     ]
   },
   {
    id: 258, 
    posts: [
     '#сегодня мне не понравилась новая песня linkinpark #ss'
     ]
    }
  ],
  1
))