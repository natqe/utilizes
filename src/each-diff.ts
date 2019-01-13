import { mapDiff } from './map-diff'

export const eachDiff = <T>(lists: Array<Array<T>>, callback: (items: Array<T>, indexes: Array<number>, lists: Array<Array<T>>) => void, detectBy?: keyof T) => {

  mapDiff(lists, callback, detectBy)

  return lists

}

export default eachDiff