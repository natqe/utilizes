import flatten from 'lodash/flatten'
import get from 'lodash/get'
import isEqual from 'lodash/isEqual'
import map from 'lodash/map'
import unionWith from 'lodash/unionWith'

export const mapDiff = <T, R>(lists: Array<Array<T>>, callback: (items: Array<T>, indexes: Array<number>, lists: Array<Array<T>>) => R, detectBy?: keyof T) => {

  const result: Array<Array<{ item: T, index: number }>> = unionWith(
    flatten(lists.map(list => list.map(item => lists.map(l => {

      let index: number

      return {
        item: l.find((i, iIndex) => {

          const useProp = typeof detectBy === `string`

          if (isEqual(useProp ? get(item, detectBy) : item, useProp ? get(i, detectBy) : i)) {

            index = iIndex

            return true

          }

        }),
        index
      }

    })))),
    isEqual
  )

  return result.map((value) => callback(map(value, `item`), map(value, `index`), lists))

}

export default mapDiff