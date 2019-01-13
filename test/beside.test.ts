import { beside } from '../src/beside'

const tree = [
  {
    level: 0,
    id: 1,
    children: [
      {
        level: 1,
        id: 2
      }
    ]
  },
  {
    level: 0,
    id: 3,
    children: [
      {
        level: 1,
        id: 4
      }
    ]
  }
]

test(`Put children beside there father`, () => expect(beside(tree, `children`)).toContain(tree[0].children[0]))