import invert from 'lodash-es/invert'

export const toEnum = (ob: { [k: string]: any }) => ({ ...ob, ...invert(ob) })

export default toEnum