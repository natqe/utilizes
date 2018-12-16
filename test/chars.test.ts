import { chars } from '../src/chars'

const lowerLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

test(`Return all lower case letter of the english lunghuge`, () => expect(chars('lower')).toEqual(lowerLetters))

test(`Return by default letters lower`, () => expect(chars()).toEqual(lowerLetters))

test(`Return upper letters of the english lunghuge`, () => expect(chars(`upper`)).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']))

test(`Return numbers from zero to nine`, () => expect(chars(`number`)).toEqual(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']))