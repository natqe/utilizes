import { ensureUnique } from '../ensure-unique'

test(`Return the str with number in the end when the array have already the str, first time the number is 2`, () => expect(ensureUnique('name', ['name', 'otherName', 'oneMoreName'])).toBe(`name2`))

test(`Work with object when the third argument evaluate to the name of the prop. Increment the last number, when array have already the same str`, () =>
  expect(ensureUnique('name', [{ nickname: 'name' }, { nickname: 'name2' }], 'nickname')).toBe(`name3`))

test(`Work with array of numbers`, () => expect(ensureUnique(1, [1, 3])).toBe(2))

test(`The fourth argument is for case insensitive checking. default is false`, () => expect(ensureUnique('name', ['name', 'Name2'], null, true)).toBe('name3'))

test(`If no items given return the str`, () => expect(ensureUnique('name', [], null, true)).toBe('name'))