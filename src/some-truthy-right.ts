import { someTruthy } from './some-truthy'

export const someTruthyRight = <T, Y>(array: T[], callbackfn: (value: typeof array[0], index: number, list: typeof array) => Y) => someTruthy(array, callbackfn, true)

export default someTruthyRight