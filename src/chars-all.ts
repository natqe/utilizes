import { reduce } from 'lodash-es'
import { CHAR_TYPES } from './_char_types'
import { chars } from './chars'

export const charsAll = () => reduce(CHAR_TYPES, (result, type) => result.concat(chars(type)), [] as string[])

export default charsAll