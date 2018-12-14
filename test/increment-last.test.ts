import { incrementLast } from '../increment-last'

test(`Increment the last number of a given string`, () => expect(incrementLast('name1')).toBe(`name2`))

test(`Treat zero number as the part of the string and start increment after`, () => expect(incrementLast('name01')).toBe(`name02`))

test(`When the given string does not end with number, the default number is 2`, () => expect(incrementLast('name')).toBe(`name2`))

test(`The second argument is the default number to use when the given string does not end with number`, () => expect(incrementLast('name', 5)).toBe(`name5`))

test(`Default number has no effect when the string is end with number`, ()=>expect(incrementLast('name1', 5)).toBe(`name2`))