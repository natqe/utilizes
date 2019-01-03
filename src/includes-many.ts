import includes from 'lodash/includes'

export const includesMany = <T>(collection: ArrayLike<T> | _.Dictionary<T> | _.NumericDictionary<T>, ...targets: Array<T>) =>
  targets.length && !targets.map(target => includes(collection, target)).some(result => result === false)

export default includesMany