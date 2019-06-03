import { assertLower } from '../src/assert-lower'

test(``, ()=> expect(assertLower(`aBc`, String(`AbC`))).toBe(true))
test(``, ()=> expect(assertLower(`abcD`, String(`abcE`))).toBe(false))