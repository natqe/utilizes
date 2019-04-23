import { suffix } from '../src/suffix'

test(`Adding fix to the end of string`, () => expect(suffix(`Mr `, `john`)).toBe(`Mr john`))

test(`connect two numbers`, () => expect(suffix(0, 0)).toBe(`00`))

test(`connect two numbers`, () => expect(suffix(0, `null`)).toBe(`0null`))

test(`connect two numbers`, () => expect(suffix(`null`, 0)).toBe(`null0`))

test(`Adding fix to the end of string only if the string is present.`, () => expect(suffix('Mr ', null)).toBe('Mr '))

test(`Adding fix to the end of string only if the fix is present.`, () => expect(suffix(null, `john`)).toBe(``))
