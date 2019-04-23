import { returns } from '../src/returns'

test(`returns`, () => expect(returns([() => null])[0]).toBeNull())

test(`invoke with the arguments`, () => expect(returns([(a, b) => a + b, (a, b) => a - b], 2, 1)).toEqual([3, 1]))