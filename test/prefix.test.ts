import { prefix } from '../prefix'

test(`Adding fix to beginning of string`, () => expect(prefix(`Mr `, `john`)).toBe(`Mr john`))

test(`Adding fix to beginning of string only if the string is present.`, () => expect(prefix('Mr ', null)).toBe(``))

test(`Adding fix to beginning of string only if the fix is present.`, () => expect(prefix(null, `john`)).toBe(`john`))

test(`Multiple pair fix+string converted to one big string`, () => {

  expect(prefix(`Mr `, `john`, ` is`, ` rich`)).toBe(`Mr john is rich`)

  expect(prefix(`Mr `, `john`, ` is `, undefined)).toBe(`Mr john`)

  expect(prefix('Mr ', 'john', null, ' rich')).toBe(`Mr john rich`)

})
