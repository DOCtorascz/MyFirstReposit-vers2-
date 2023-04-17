//  ФУНКЦИЯ ВРЕМЕНИ
export default function timeBack(time) {
  const minute = 60;
  const hour = 1440;
  const day = 525600;

  let result = null;

  if (time < minute) {
    const timeEver = {
      minut1: String(time)[String(time).length - 1],
      minut2: String(time)[String(time).length - 2],
    };

    const variablesMinut = {
      one: timeEver.minut1 === '2' && timeEver.minut2 !== '1',
      two: timeEver.minut1 === '3' && timeEver.minut2 !== '1',
      three: timeEver.minut1 === '4' && timeEver.minut2 !== '1',
    };

    if (timeEver.minut1 === '1' && time !== 11) {
      result = `${time} минуту назад`;
    } else if (variablesMinut.one || variablesMinut.two || variablesMinut.three) {
      result = `${time} минуты назад`;
    } else {
      result = `${time} минут назад`;
    }
  } else if (time >= minute && time < hour) {
    let timeHour = time / 60;
    timeHour = Math.trunc(timeHour);

    const timeEver = {
      hour1: String(timeHour)[String(timeHour).length - 1],
      hour2: String(timeHour)[String(timeHour).length - 2],
    };

    const variablesHour = {
      one: timeEver.hour1 === '1' && timeEver.hour2 !== '1',
      two: timeEver.hour1 === '2' && timeEver.hour2 !== '1',
      three: timeEver.hour1 === '3' && timeEver.hour2 !== '1',
      four: timeEver.hour1 === '3' && timeEver.hour2 !== '1',
      five: timeEver.hour1 === '2' && timeEver.hour2 !== '1',
      six: timeEver.hour1 === '3' && timeEver.hour2 !== '1',
      seven: timeEver.hour1 === '4' && timeEver.hour2 !== '1',
    };

    const times = time - (60 * timeHour);
    if (times < 30) {
      if (variablesHour.one) {
        result = `${timeHour} час назад`;
      } else if (variablesHour.two || variablesHour.three || variablesHour.four) {
        result = `${timeHour} часа назад`;
      } else {
        result = `${timeHour} часов назад`;
      }
    } else if (times >= 30) {
      timeHour += 1;
      if (timeEver.hour1 === '1' && timeEver.hour2 !== '1') {
        result = `${timeHour} час назад`;
      } else if (variablesHour.five || variablesHour.six || variablesHour.seven) {
        result = `${timeHour} часа назад`;
      } else {
        result = `${timeHour} часов назад`;
      }
    }
  } else if (time <= day && time >= hour) {
    let timeDay = time / 1440;
    timeDay = Math.trunc(timeDay);

    const timeEver = {
      day1: String(timeDay)[String(timeDay).length - 1],
      day2: String(timeDay)[String(timeDay).length - 2],
    };

    const variablesDay = {
      one: timeEver.day1 === '2' && timeEver.day2 !== '1',
      two: timeEver.day1 === '3' && timeEver.day2 !== '1',
      three: timeEver.day1 === '4' && timeEver.day2 !== '1',
    };

    if (timeEver.day1 === '1' && timeEver.day2 !== '1') {
      result = `${timeDay} день назад`;
    } else if (variablesDay.one || variablesDay.two || variablesDay.three) {
      result = `${timeDay} дня назад`;
    } else {
      result = `${timeDay} дней назад`;
    }
  } else {
    result = 'более года назад';
  }

  console.log(result);
  return result;
}
