import set from './set'

type Many<T> = T | ReadonlyArray<T>

export const setEach = <T extends object>(obs: T[], value: any, ...paths: Array<Many<string | number | symbol>>) => obs.map(object => set(object, value, ...paths))

export default setEach