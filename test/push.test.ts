import { push } from '../src/push'

test(`Using with array that should be inside an object`, () => {

  type ob = {
    path?: {
      to: {
        arr: Array<string>
      }
    }
  }

  const
    ob: ob = {},
    items = ['item1', 'item2']

  expect(push(ob, 'path.to.arr', ...items)).toBe(2)

  expect(ob.path.to.arr).toEqual(items)

})

test(`Using on simple array that attempt to be exist`, () => {

  let arr: Array<string>

  expect(push(arr, 'item')).toBeUndefined()

  arr = []

  expect(push(arr, 'item')).toBe(1)

})