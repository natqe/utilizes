import { set } from '../set'

test(`Set value to path in object. path can br one or more path's`, () => expect(set({ prop: 1 }, 2, 'prop', 'anotherProp', '0.0')).toEqual({
  prop: 2,
  anotherProp: 2,
  0: [2]
}))

test(`Value can bea function that invoked to preduce the actual value to set`, () => expect(set({ prop: 1 }, (currentValue: number) => currentValue === 1 ? 2 : 1, 'prop', 'anotherProp', '0.0')).toEqual({
    prop: 2,
    anotherProp: 1,
    0: [1]
}))