import { returns } from '../returns'

test(`Ignore empty array`, () => expect(returns([], '')).toBeUndefined())

test(`returns`, () => expect(returns([() => null])[0]).toBeNull())