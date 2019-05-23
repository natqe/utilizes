import { numericCode } from '../src/numeric-code'

const sampleCode = numericCode()

test(`Default size is six`, () => expect(sampleCode).toHaveLength(6))

test(`Size can be chosen`, () => expect(numericCode(15)).toHaveLength(15))

test(`Should be random`, () => expect(numericCode()).not.toEqual(sampleCode))