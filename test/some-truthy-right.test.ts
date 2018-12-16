import someTruthy from '../src/some-truthy'
import { someTruthyRight } from '../src/some-truthy-right'

test(`Return the first truthy value it found, from the right to left`, () => expect(someTruthyRight([0, 1, 2], num => num)).toBe(2))

test(`Return the last falsy value if non of the given items is truthy, from the right to left`, () => expect(someTruthyRight([0, false, undefined, null], falsy => falsy)).toBe(0))
