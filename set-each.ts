import set from './set'

export const setEach = <T extends object>(obs: T[], value: any, ...paths: Array<_.Many<string | number | symbol>>) => obs.map(object => set(object, value, ...paths))

export default setEach