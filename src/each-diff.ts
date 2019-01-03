import { mapDiff } from './map-diff'

export const eachDiff = <T, R>(lists: Array<Array<T>>, callback: (items: Array<T>, indexes: Array<number>, lists: Array<Array<T>>) => R, detectBy?: string) => {
  mapDiff(lists, callback, detectBy)
}

export default eachDiff