import { CHAR_TYPES } from './_char_types'

export const chars = (type: keyof typeof CHAR_TYPES = CHAR_TYPES.lower) => {

  const notNum = type !== CHAR_TYPES.number

  return Array(notNum ? 26 : 10).fill(null).map((_, i) => notNum ? String.fromCharCode(i + (type === CHAR_TYPES.lower ? 97 : 65)) : `${i}`)

}

export default chars