import flatten from 'lodash/flatten'
import get from 'lodash/get'
import isEqual from 'lodash/isEqual'
import isEqualWith from 'lodash/isEqualWith'
import map from 'lodash/map'
import unionWith from 'lodash/unionWith'

interface ICallback<T, R> {
  (items: Array<T>, indexes: Array<number>, lists: Array<Array<T>>): R
}

export const mapDiff = <T, R>(lists: Array<Array<T>>, callback: ICallback<T, R>, by?: string) => {

  const result: Array<Array<{ item: T, index: number }>> = unionWith(
    flatten(lists.map(list => list.map(item => lists.map(l => {

      let index: number

      return {
        item: l.find((i, iIndex) => {

          const useProp = typeof by === `string`

          if (isEqual(useProp ? get(item, by) : item, useProp ? get(i, by) : i)) {

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

// mapDiff(
//   [
//     [{ a: 1, b: 1 }],
//     [{ a: 2, b: 1 }]
//   ],
//   (items) => {
//     return items
//   },
//   `b`
// )