import { includesMany } from '../src/includes-many'

test(`includes many should fail when one or more not includes`, () => expect(includesMany(<Array<string>>[`value1`], `value1`, `value2`)).toBe(false))

test(`includes many should success when the array includes all the values`, () => expect(includesMany(<Array<string>>[`value1`, `value2`], `value1`, `value2`)).toBe(true))