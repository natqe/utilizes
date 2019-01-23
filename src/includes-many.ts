import includes from 'lodash/includes'

interface Dictionary<T> {
  [index: string]: T
}

interface NumericDictionary<T> {
  [index: number]: T
}

export const includesMany = <T>(collection: ArrayLike<T> | Dictionary<T> | NumericDictionary<T>, ...targets: Array<T>) =>
  targets.length && !targets.map(target => includes(collection, target)).some(result => result === false)

export default includesMany