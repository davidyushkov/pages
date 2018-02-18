import { adu } from './constans'
import { fromStringToArr, fromArrToString } from './math_helpers'
import { defineMolad, isMeubarYear } from './molad'

/*
every function should get as an argument molad of tishrei
and acording to 4 rules we can get the day rosh-ahona should fall
*/

export function isAduDay(moladDay) {
  return adu.some(day => day === moladDay);
}

export function isHalfDay(moladHour) {
  return moladHour >= 18;
}

//if current year is ordinary and molad is or more then 3.9.204
export function is39204(molad, year) {
  const isMeubar = isMeubarYear(year);
  const moladArr = fromStringToArr(molad);
  if(!isMeubar && moladArr[0] === 3 && moladArr[1] === 9 && moladArr[2] >= 204) {
    return true;
  }
  if(!isMeubar && moladArr[0] === 3 && moladArr[1] > 9) {
    return true;
  }
  return false;
}

//if previous year is meuberet and molad is or more then 2.15.589
export function is215589(molad, year) {
  const isMeubar = isMeubarYear(year - 1);
  const moladArr = fromStringToArr(molad);
  if(isMeubar && moladArr[0] === 2 && moladArr[1] === 15 && moladArr[2] >= 589) {
    return true;
  }
  if(isMeubar && moladArr[0] === 2 && moladArr[1] > 15) {
    return true;
  }
  return false;
}

export function defineRoshAshona(year) {
  const moladTishrei = defineMolad(year, 'tishrei');
  const isSimpleYear = !isMeubarYear(year);
  const isMeubarYearBefore = isMeubarYear(year - 1);
  const [day, hour] = fromStringToArr(moladTishrei);
  // console.log(moladTishrei, isSimpleYear, isMeubarYearBefore, day,  hour);

  if(isMeubarYearBefore && is215589(moladTishrei,year)) {
    return 3;
  } else if(isSimpleYear && is39204(moladTishrei,year)) {
    return 5;
  }

  let currentResult = day;
  if(isHalfDay(hour) && isAduDay(day + 1)) {
    currentResult = (day + 2)%7 === 0 ? 7 : (day + 2)%7;
  } else if(isHalfDay(hour) && !isAduDay(day + 1)) {
    currentResult = (day + 1)%7 === 0 ? 7 : (day + 1)%7;
  }

  if(currentResult === 0) {
    ++currentResult;
  }

  if(isAduDay(currentResult)) {
    currentResult = currentResult + 1;
  }

  return currentResult;
}

// for(let i = 5700; i < 5800; i++) {
//   console.log(i, defineRoshAshona(i));
// }
// console.log(defineRoshAshona(5781));
