import {
  meubarYears,
  restOfMachzor,
  firstMolad,
  restOfSimpleYear,
  restOfMeubarYear,
  monthsOrdinary,
  monthsMeubar,
  restOfMonth
} from './constans';

import { multyTime, plusTime, fromArrToString, fromStringToArr } from './math_helpers';

export function getMachzorAndYear(year) {
  let machzorOrder = Math.floor(year / 19);
  if(year % 19 === 0) {
    machzorOrder--;
  }

  let yearOrder = year % 19 || 19;

  return {
    machzorOrder,
    yearOrder
  };
}

export function isMeubarYear(year) {
  const currentYearOfMachzor = getMachzorAndYear(year).yearOrder;
  for(let i = 0; i < meubarYears.length; i++) {
    if(currentYearOfMachzor === meubarYears[i]) {
      return true;
    }
  }
  return false;
}

export function getRestOfAllMachzors(machzorOrder) {
  return multyTime(restOfMachzor, machzorOrder);
}

export function defineDayAfterRests(time) {
  let currentTime = fromStringToArr(time);
  currentTime[0] = currentTime[0] % 7 || 7;
  return fromArrToString(currentTime);
}

export function getRestOfMonths(monthName, months) {
  let result;
  months.forEach((month, index) => {
    if(monthName === month) {
      result = index;
    }
  });
  return multyTime(restOfMonth, result);
}

export function getRestOfYears(yearOrder) {
  let simpleYears = 0;
  let meubarYears = 0;
  for(let i = 1; i < yearOrder; i++) {
    if(isMeubarYear(i)) {
      meubarYears++;
    } else {
      simpleYears++;
    }
  }

  return plusTime(
    multyTime(restOfSimpleYear, simpleYears),
    multyTime(restOfMeubarYear, meubarYears)
  );
}

export function defineMolad(year, month) {
  const currentYear = getMachzorAndYear(year);
  const restOfMachzorsBefore = getRestOfAllMachzors(currentYear.machzorOrder);
  const restOfYearsBefore = getRestOfYears(currentYear.yearOrder);

  const currentMonths = isMeubarYear(currentYear.yearOrder) ? [...monthsMeubar] : [...monthsOrdinary];

  const restOfMonthsBefore = getRestOfMonths(month, currentMonths);

  return defineDayAfterRests(
    plusTime(restOfMachzorsBefore, restOfYearsBefore, restOfMonthsBefore ,firstMolad)
  );
}

function makeCurrentHourString(n) {
  if(n <= 6)
    return n + 6 + ' at night';
  else if(n >= 7 && n <= 12)
    return (n % 6 || 6) + ' at the morning';
  else if(n >= 13 && n < 18)
    return n % 12 + 6 + ' at the morning';
  else if(n === 18)
    return 12 + ' at afternoon';
  else if(n > 18 && n < 22)
    return (n % 18) + ' at afternoon'
  else if(n >= 22)
    return (n % 18) + ' at the evening'
}

export function prettyPrint(molad) {
  let arrMolad = molad.split('.').map(num => Number(num));
  arrMolad[3] = arrMolad[2] % 18 || 18;
  arrMolad[2] = Math.floor(arrMolad[2] / 18);
  return `${arrMolad[0]} day, ${makeCurrentHourString(arrMolad[1])} hours, ${arrMolad[2]} minutes, ${arrMolad[3]} parts`;
}
