import * as molad from '../molad'
import {
  monthsOrdinary,
  monthsMeubar
} from '../constans'

describe('getMachzorAndYear', () => {
  it('sholud return correct order of machzorOrder and yearOrder', () => {
    const year = 5777;
    const expected = {
      machzorOrder: 304,
      yearOrder: 1
    };
    expect(molad.getMachzorAndYear(year)).toEqual(expected);
  });

  it('sholud return correct order of machzorOrder and yearOrder2', () => {
    const year = 5776;
    const expected = {
      machzorOrder: 303,
      yearOrder: 19
    };
    expect(molad.getMachzorAndYear(year)).toEqual(expected);
  });
});

describe('isMeubarYear', () => {
  it('should return false if year isnt meuberet', () => {
    const year = 5777;
    const expected = false;
    expect(molad.isMeubarYear(year)).toEqual(expected);
  });

  it('should return true if year is meuberet', () => {
    const year = 5779;
    const expected = true;
    expect(molad.isMeubarYear(year)).toEqual(expected);
  });
})

describe('getRestOfAllMachzors', () => {
  it('should return a rest time from creation to current machzor', () => {
    const machzorOrder = 302;
    const expected = '812.6.410';
    expect(molad.getRestOfAllMachzors(machzorOrder)).toEqual(expected);
  });
});

describe('defineDayAfterRests', () => {
  it('it should return a rest time of days', () => {
    const time = '8.9.793';
    const expected = '1.9.793';
    expect(molad.defineDayAfterRests(time)).toEqual(expected);
  });
  it('it should return a rest time of days', () => {
    const time = '7.9.793';
    const expected = '7.9.793';
    expect(molad.defineDayAfterRests(time)).toEqual(expected);
  });
});


describe('getRestOfMonths', () => {
  it('should return rest of months before current month', () => {
    expect(molad.getRestOfMonths('tishrei', monthsOrdinary)).toEqual('0.0.0');
    expect(molad.getRestOfMonths('adar', monthsOrdinary)).toEqual('7.15.725');
    expect(molad.getRestOfMonths('adar2', monthsMeubar)).toEqual('9.4.438');
    expect(molad.getRestOfMonths('elul', monthsMeubar)).toEqual('18.8.876');
  });
});


describe('getRestOfYears', () => {
  it('should return rest of years of current machzor', () => {
    expect(molad.getRestOfYears(1)).toEqual('0.0.0');
    expect(molad.getRestOfYears(6)).toEqual('23.8.853');
    expect(molad.getRestOfYears(9)).toEqual('39.12.747');
    expect(molad.getRestOfYears(14)).toEqual('62.21.520');
    expect(molad.getRestOfYears(19)).toEqual('87.19.6');
  });
});
