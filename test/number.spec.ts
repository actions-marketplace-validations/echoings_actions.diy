import { double, power } from '../src/lib/number';

/**
 * number test
 */
describe('number test', () => {
  it('works if value is equal', () => {
    expect(double(2)).toEqual(4);
  });

  it('works if value is equal', () => {
    expect(power(2, 4)).toEqual(16);
  });
});
