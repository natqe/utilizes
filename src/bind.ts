import { bindAll } from 'lodash-es'

export const bind = that => bindAll(that, Object.getOwnPropertyNames(Object.getPrototypeOf(that)))

export default bind