import { partialEqual } from '../src/partial-equal'

test(``, () => expect(partialEqual({ a: 1, b: 2 }, { a: 1, b: 1 })).toBe(true))
test(``, () => expect(partialEqual(1, 1)).toBe(true))
test(``, () => expect(partialEqual({}, {})).toBe(true))
test(``, () => expect(partialEqual(1, 2)).toBe(false))
test(``, () => expect(partialEqual({ a: 2, b: 2 }, { a: 1, b: 1 })).toBe(false))
test(``, () => expect(partialEqual({ a: 2, b: 2 }, { a: 1, b: 2 }, `a`, `b`)).toBe(false))
test(``, () => expect(partialEqual({ a: 2, b: 2 }, { a: 1, b: 2 }, `b`)).toBe(true))
test(``, () => expect(partialEqual({ a: 2, b: 2 }, { a: 1, b: 1 }, `a`, `b`)).toBe(false))