import { isMeubarYear } from './molad';
import { defineRoshAshona } from './roshAshona';
import { daysCountInMonths, monthsOrdinary, monthsMeubar } from './constans';

export function daysBetweenRoshAshonas(first, second) {
  if(first === second) { return 6; }

  let result = -1;
  while(first !== second) {
    first++;
    result++;
    if(first > 7) {
      first = 1;
    }
  }

  return result;
}

export function getDaysOfTheYear(year) {
  const isMeubar = isMeubarYear(year);
  const roshAshona = defineRoshAshona(year);
  const nextRoshAshona = defineRoshAshona(year + 1);
  const daysBetween = daysBetweenRoshAshonas(roshAshona, nextRoshAshona);
  const daysInYear = isMeubar === false ? daysOfSimple(daysBetween) : daysOfMeubar(daysBetween);
  const daysInMonths = Object.assign({},daysCountInMonths);
  if(isMeubar) {
    daysInMonths.adar = 30;
    daysInMonths.adar2 = 29;
  }

  if(daysInYear === 383 || daysInYear === 353) {
    daysInMonths.kislev = 29;
  } else if(daysInYear === 385 || daysInYear === 355) {
    daysInMonths.cheshvan = 30;
  }

  return {
    daysInMonths,
    daysInYear
  };
}


export function daysOfMeubar(difference) {
  if(difference === 4) {
    return 383;
  } else if(difference === 5) {
    return 384;
  } else if(difference === 6) {
    return 385
  }
}

export function daysOfSimple(difference) {
  if(difference === 2) {
    return 353;
  } else if(difference === 3) {
    return 354;
  } else if(difference === 4) {
    return 355;
  }
}

export function getDayOfMonth(year, month) {
  const { daysInMonths, daysInYear } = getDaysOfTheYear(year);
  const dayOfRoshAshona = defineRoshAshona(year);
  const isMeubar = isMeubarYear(year);
  const months = isMeubar === false ? monthsOrdinary : monthsMeubar;
  const daysBefore = daysBeforeMonth(month, months, daysInMonths);
  let day = (dayOfRoshAshona + daysBefore) % 7;
  if(day === 0)
    day = 7;
  return day;
}

export function daysBeforeMonth(month, months, daysInMonths) {
  let daysCount = 0;
  for(let i = 0; i < months.length; i++) {
    if(month === months[i]) {
      return daysCount;
    } else {
      daysCount += daysInMonths[months[i]];
    }
  }
}
