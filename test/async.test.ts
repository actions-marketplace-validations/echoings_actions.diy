import { asyncABC } from '../src/lib/async';

/**
 * asyncABC test
 */
describe('asyncABC test', () => {
  it('works if value is equal', async () => {
    const data = await asyncABC();
    expect(data).toEqual(['a', 'b', 'c']);
  });
});
