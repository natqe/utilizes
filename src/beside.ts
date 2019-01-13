import values from 'lodash/values'

export const beside = <T extends { [prop: string]: any }>(tree: Array<T>, prop: keyof T) => {

  tree = values(tree)

  const result = [...tree]

  for (const iterator of tree) if (iterator[prop]) result.push(...beside(iterator[prop], prop))

  return result

}

export default beside

const tree = [
  {
    level: 0,
    children: [
      {
        level: 1
      }
    ]
  },
  {
    level: 0,
    children: [
      {
        level: 1
      }
    ]
  }
]