import bindAll from 'lodash-es/bindAll'

export const bind = that => bindAll(that, Object.getOwnPropertyNames(Object.getPrototypeOf(that)))

export default bind