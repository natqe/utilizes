import { includes } from 'lodash-es'

export const includesMany = <T>(collection: ArrayLike<T> | {  [index: string]: T } | {  [index: number]: T }, ...targets: Array<T>) =>
  targets.length && !targets.map(target => includes(collection, target)).some(result => result === false)

export default includesMany