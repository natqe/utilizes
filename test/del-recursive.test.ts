import { delRecursive } from '../src/del-recursive'

test(`Delete recursively all the props of the array input`, () => expect(
  delRecursive(
    {
      id: 1,
      name: 'object',
      inner: {
        id: 1,
        name: 'inner'
      }
    },
    ['id']
  )
).toEqual({
  name: 'object',
  inner: {
    name: 'inner'
  }
}))

test(`Not change nothing if the input array is empty`, () => expect(
  delRecursive(
    {
      id: 1,
      name: 'object',
      inner: {
        id: 1,
        name: 'inner'
      }
    },
    []
  )
).toEqual({
  id: 1,
  name: 'object',
  inner: {
    id: 1,
    name: 'inner'
  }
}))