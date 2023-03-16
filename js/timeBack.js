//  ФУНКЦИЯ ВРЕМЕНИ
export default function timeBack(time) {
  const minute = 60;
  const hour = 1440;
  const day = 525600;

  if (time < minute) {
    if (String(time)[String(time).length - 1] === '1' && time !== 11) {
      return `${time} минуту назад`;
    } else if ((String(time)[String(time).length - 1] === '2' && String(time)[String(time).length - 2] !== '1') || (String(time)[String(time).length - 1] === '3') && (String(time)[String(time).length - 2] !== '1') || (String(time)[String(time).length - 1] === '4') && (String(time)[String(time).length - 2] !== '1')) {
      return `${time} минуты назад`;
    } else {
      return `${time} минут назад`;
    }
  } else if (time >= minute && time < hour) {
    let timeHour = time / 60;
    timeHour = Math.trunc(timeHour);
    const times = time - (60 * timeHour);
    if (times < 30) {
      if ((String(timeHour)[String(timeHour).length - 1] === '1') && (String(timeHour)[String(timeHour).length - 2] !== '1')) {
        return `${timeHour} час назад`;
      } else if ((String(timeHour)[String(timeHour).length - 1] === '2' && String(timeHour)[String(timeHour).length - 2] !== '1') || (String(timeHour)[String(timeHour).length - 1] === '3' && String(timeHour)[String(timeHour).length - 2] !== '1') || (String(timeHour)[String(timeHour).length - 1] === '4' && String(timeHour)[String(timeHour).length - 2] !== '1')) {
        return `${timeHour} часа назад`;
      } else {
        return `${timeHour} часов назад`;
      }
    } else if (times >= 30) {
      timeHour += 1;
      if (String(timeHour)[String(timeHour).length - 1] === '1' && String(timeHour)[String(timeHour).length - 2] !== '1') {
        return `${timeHour} час назад`;
      } else if ((String(timeHour)[String(timeHour).length - 1] === '2' && String(timeHour)[String(timeHour).length - 2] !== '1') || (String(timeHour)[String(timeHour).length - 1] === '3' && String(timeHour)[String(timeHour).length - 2] !== '1') || (String(timeHour)[String(timeHour).length - 1] === '4' && String(timeHour)[String(timeHour).length - 2] !== '1')) {
        return `${timeHour} часа назад`;
      } else {
        return `${timeHour} часов назад`;
      }
    }
  } else if (time <= day && time >= hour) {
    let timeDay = time / 1440;
    timeDay = Math.trunc(timeDay);
    if (String(timeDay)[String(timeDay).length - 1] === '1' && String(timeDay)[String(timeDay).length - 2] !== '1') {
      return `${timeDay} день назад`;
    } else if ((String(timeDay)[String(timeDay).length - 1] === '2' && String(timeDay)[String(timeDay).length - 2] !== '1') || (String(timeDay)[String(timeDay).length - 1] === '3' && String(timeDay)[String(timeDay).length - 2] !== '1') || (String(timeDay)[String(timeDay).length - 1] === '4' && String(timeDay)[String(timeDay).length - 2] !== '1')) {
      return `${timeDay} дня назад`;
    } else {
      return `${timeDay} дней назад`;
    }
  } else {
    return 'более года назад';
  }
};
