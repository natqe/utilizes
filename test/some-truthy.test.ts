import { someTruthy } from '../some-truthy'

test(`Return the first truthy value it find`, () => expect(someTruthy([0, 1, 2], num => num)).toBe(1))

test(`Return the last falsy value it find if non of the given items is truthy`, () => expect(someTruthy([0, false, undefined, null], falsy => falsy)).toBeNull())

test(`The last argument is for iterates from right to left instead of left to right`, () => expect(someTruthy([2, 1, 0], num => num, true)).toBe(1))