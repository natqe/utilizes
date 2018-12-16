import { maxByLastNumber } from '../src/max-by-last-number'

test(`Return the item with the highest suffix number`, () => expect(maxByLastNumber(`name`, [`name1`, `name2`, `otherName`])).toBe(`name2`))

test(`Third argument for treating array of objects and checking by property`, () => expect(maxByLastNumber(`name`, [{ nickname: `name3` }, { nickname: `name2` }], `nickname`)).toBe(`name3`))

test(`When no ending number mach return the initial string`, () => expect(maxByLastNumber(`name`, [`nameSD`, `name`, `otherName`])).toBe(`name`))