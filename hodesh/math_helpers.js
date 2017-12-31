export function completePositiveTime(time) {
  let currentTime = [...time];

  if(shouldComplete(currentTime)) {
    currentTime.forEach( (num, index) => {
      if(index === 1) {
        currentTime[0] += Math.floor(num/24);
        currentTime[1] = num % 24;
      } else if(index === 2) {
        currentTime[1] += Math.floor(num/1080);
        currentTime[2] = num % 1080;
      }
    });
  }

  return shouldComplete(currentTime)  ?
    completePositiveTime(currentTime) :
    fromArrToString(currentTime);
}

export function shouldComplete(timeArr) {
  if(timeArr[1] > 24 || timeArr[2] > 1080) {
    return true;
  }
  return false;
}

export function fromStringToArr(string) {
  return string.split('.').map(elem => Number(elem));
}

export function fromArrToString(arr) {
  return arr.join('.');
}

export function multyTime(time, number) {
  let result = [];
  fromStringToArr(time).forEach(num => result.push(num * number));
  return completePositiveTime(result);
}

export function plusTime() {
  let nums = Array.prototype.slice.call(arguments);
  nums = nums.map(num => fromStringToArr(num));
  const sum = nums.reduce((first, second) => {
  	return first.map((num, index) => num + second[index]);
  });
  return completePositiveTime(sum);
}

export function minusTime(timeOne, timeTwo) {
  let result = [];
  let currentFirst = fromStringToArr(timeOne);
  let currentSecond = fromStringToArr(timeTwo);
  currentFirst.forEach((el, index) => {
    result.push(el - currentSecond[index]);
  });
  return completePositiveTime(result);
}
