import { flatten } from 'lodash-es'
import { get } from 'lodash-es'
import { isEqual } from 'lodash-es'
import { map } from 'lodash-es'
import { unionWith } from 'lodash-es'

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