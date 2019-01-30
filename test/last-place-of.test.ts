import { lastPlaceOf } from '../src/last-place-of'
import { scenarios } from '../src/scenarios'

test(`Return the last place of a given input in a given value.`, () => {
  for (const result of scenarios(lastPlaceOf, [`abca`, `a`], [[1, 2, 3, 1], 1])) expect(result).toBe(4)
})