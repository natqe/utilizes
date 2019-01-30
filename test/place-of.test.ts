import { placeOf } from '../src/place-of'
import { scenarios } from '../src/scenarios'

test(`Return the first place of a given input in a given value.`, () => {
  for (const result of scenarios(placeOf, [`abc`, `b`], [[1, 2, 3], 2])) expect(result).toBe(2)
})