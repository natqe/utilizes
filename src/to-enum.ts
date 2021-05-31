import { invert } from 'lodash-es'

export const toEnum = (ob: { [k: string]: any }) => ({ ...ob, ...invert(ob) })

export default toEnum