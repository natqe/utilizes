import { omitUndefined } from '../src/omit-undefined'

test(``, () => expect(omitUndefined({
  a: null,
  b: `Some value`,
  c: undefined,
  d: false
})).
  toEqual({
    a: null,
    b: `Some value`,
    d: false
  }))