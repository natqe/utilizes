import { omitNil } from '../src/omit-nil'

test(``, () => expect(omitNil({
  a: null,
  b: `Some value`,
  c: undefined,
  d: false
})).
  toEqual({
    b: `Some value`,
    d: false
  }))