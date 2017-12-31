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

//if current year is ordinary and molad more then 3.9.204
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

//if previous year is meuberet and molad more then 2.15.589
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

//moladTishrey sholud be a result of defineMolad fn
export function defineRoshAshona(moladTishrei, year) {
  const currentYear = year - 1;
  const moladTishreiArr = fromStringToArr(moladTishrei);
  const isMeubar = isMeubarYear(currentYear);

  if(isMeubar && is215589(moladTishrei, currentYear)) {
    console.log('here');
    moladTishreiArr[0] = 3;
    return fromArrToString(moladTishreiArr);
  } else if(!isMeubar && is39204(moladTishrei, currentYear)) {
    moladTishreiArr[0] = 5;
    return fromArrToString(moladTishreiArr);
  }

  if(isAduDay(moladTishreiArr[0])) {
    moladTishreiArr[0] += 1;
  }
  if(isHalfDay(moladTishreiArr[1])) {
    moladTishreiArr[0] += 1;
  }

  if(isAduDay(moladTishreiArr[0] % 7)) {
    moladTishreiArr[0] += 1;
  }

  if(moladTishreiArr[0] > 7) {
    moladTishreiArr[0] = moladTishreiArr[0] % 7;
  }

  return fromArrToString(moladTishreiArr);
}
