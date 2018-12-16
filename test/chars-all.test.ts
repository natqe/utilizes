import { chars } from '../src/chars'
import { charsAll } from '../src/chars-all'

test(`Return all chars of the english language`, () => expect(charsAll()).toEqual([...chars(), ...chars('upper'), ...chars('number')]))