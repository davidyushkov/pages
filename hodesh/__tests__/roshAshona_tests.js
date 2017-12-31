import * as rosh from '../roshAshona'

describe('isAduDay', () => {
  it('should return true if day is adu', () => {
    [1,4,6].forEach(num => {
      expect(rosh.isAduDay(num)).toEqual(true);
    });
    [2,3,5,7].forEach(num => {
      expect(rosh.isAduDay(num)).toEqual(false);
    });
  });
});

describe('isHalfDay', () => {
  it('should return true if hour is 18 or more', () => {
    expect(rosh.isHalfDay(18)).toEqual(true);
    expect(rosh.isHalfDay(22)).toEqual(true);
    expect(rosh.isHalfDay(17)).toEqual(false);
  });
});

describe('is39204', () => {
  it('should return true if more than 3.9.204 and current year is ordinary', () => {
    expect(rosh.is39204('3.9.204', 5777)).toEqual(true);
    expect(rosh.is39204('3.9.204', 5779)).toEqual(false);
    expect(rosh.is39204('3.9.203', 5777)).toEqual(false);
    expect(rosh.is39204('3.18.104', 5777)).toEqual(true);
  });
});

describe('is215589', () => {
  it('should return true if more than 2.15.589 and current year is meuberet', () => {
    expect(rosh.is215589('2.15.589', 5779)).toEqual(true);
    expect(rosh.is215589('2.15.589', 5777)).toEqual(false);
    expect(rosh.is215589('2.15.588', 5779)).toEqual(false);
    expect(rosh.is215589('2.15.600', 5779)).toEqual(true);
  });
});
