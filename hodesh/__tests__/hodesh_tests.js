import * as hodesh from '../hodoshim'

describe('days between rosh ashonas', () => {
  it('should return correct days', () => {
    expect(hodesh.daysBetweenRoshAshonas(5,5)).toEqual(6);
    expect(hodesh.daysBetweenRoshAshonas(2,7)).toEqual(4);
    expect(hodesh.daysBetweenRoshAshonas(5,2)).toEqual(3);
  });
});

describe('day the month starts', () => {
  it('should get correct day the month starts', () => {
    expect(hodesh.getDayOfMonth(5779,'nisan')).toEqual(7);
    expect(hodesh.getDayOfMonth(5790,'shevat')).toEqual(7);
    expect(hodesh.getDayOfMonth(5778,'tishrei')).toEqual(5);
    expect(hodesh.getDayOfMonth(5779,'adar2')).toEqual(6);
    expect(hodesh.getDayOfMonth(5778,'elul')).toEqual(1);
  });
})
