import { chars } from '../chars'
import { charsAll } from '../chars-all'

test(`Return all chars of the english language`, () => expect(charsAll()).toEqual([...chars(), ...chars('upper'), ...chars('number')]))