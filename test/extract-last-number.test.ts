import { extractLastNumber } from '../extract-last-number'

test(`Return array with, first item is str without the last number, second item is the number`, () => expect(extractLastNumber('name2')).toEqual(['name', 2]))

test(`If the given string not have number in the end shuold return null in the second place of the returned array`, () => expect(extractLastNumber('name')).toEqual(['name', null]))