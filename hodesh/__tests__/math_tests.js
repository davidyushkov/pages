import * as math from '../math_helpers'

describe('fromStringToArr', () => {
  it('should convert string to an array', () => {
    const str = '1.12.793';
    const expected = [1,12,793];
    expect(math.fromStringToArr(str)).
      toEqual(expected);
  });
});

describe('fromArrToString', () => {
  it('should convert array to a sting', () => {
    const arr = [1,12,793];
    const expected = '1.12.793';
    expect(math.fromArrToString(arr)).
      toEqual(expected);
  });
});

describe('completePositiveTime', () => {
  it('should make fit date', () => {
    const time = [90, 78, 2200];
    const expected = '93.8.40';
    expect(math.completePositiveTime(time)).
      toEqual(expected);
  });
});

describe('shouldComplete', () => {
  it('should return true if date should be corrected', () => {
    const time = [90, 78, 2200];
    const expected = true;
    expect(math.shouldComplete(time)).
      toEqual(expected);
  });

  it('should return false if date is correct', () => {
    const time = [23, 23, 1079];
    const expected = false;
    expect(math.shouldComplete(time)).
      toEqual(expected);
  });
});

describe('multyTime', () => {
  it('should multiply time of type lile 1.12.793 with int number', () => {
    const time = '1.12.793';
    const intNum = 3;
    const expected = '4.14.219';
    expect(math.multyTime(time, intNum)).
      toEqual(expected);
  });
});

describe('plusTime', () => {
  it('should make sum of times of type lile 1.12.793', () => {
    const timeOne = '29.12.793';
    const timeTwo = '29.12.793';
    const expected = '59.1.506';
    expect(math.plusTime(timeOne, timeTwo)).
      toEqual(expected);
  });
  it('should make sum of several args times', () => {
    const times = ['1.20.793', '2.3.890', '3.12.292'];
    const expected = '7.12.895';
    expect(math.plusTime(...times)).
      toEqual(expected);
  });
});

describe('minusTime', () => {
  it('should substruct from one time to other', () => {
    const timeOne = '29.12.793';
    const timeTwo = '1.12.793';
    const expected = '28.0.0';
    expect(math.minusTime(timeOne, timeTwo)).
      toEqual(expected);
  });
});
