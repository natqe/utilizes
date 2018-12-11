import bindAll from 'lodash/bindAll'

export const bind = that => bindAll(that, Object.getOwnPropertyNames(Object.getPrototypeOf(that)))

export default bind