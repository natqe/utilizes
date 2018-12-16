import { oneOrAll } from '../src/one-or-all'

test(`Return the value when is have value that are not array`, () => expect(oneOrAll(0)).toBe(0))

test(`Return one when is have only one item`, () => expect(oneOrAll([0])).toBe(0))

test(`Return all when is have more then one item`, () => expect(oneOrAll(['item', 'item2'])).toHaveLength(2))

test(`Ignore when its not have an items`, () => expect(oneOrAll([])).toBeUndefined())