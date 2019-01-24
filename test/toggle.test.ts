import { toggle } from '../src/toggle'

const object = {
  foo: {
    bar: false
  }
}

test(`Toggle property truthines. if the value is falsy set it to true, otherwise set it to false. return the current value`, () => {

  toggle(object, `foo.bar`)

  expect(object.foo.bar).toBe(true)

  expect(toggle(object, `foo.bar`)).toBe(false)

})

test(`The third parameter is the values to toggle between. default to "[true, false]".`, () => {

  toggle(object, `foo.bar`, 1)

  expect(object.foo.bar).toBe(1)

  toggle(object, `foo.bar`, 1)

  expect(object.foo.bar).toBe(false)

  toggle(object, `foo.bar`, 0)

  expect(object.foo.bar).toBe(0)

  toggle(object, `foo.bar`, 0)

  expect(object.foo.bar).toBe(true)

  toggle(object, `foo.bar`, 0, 1)

  expect(object.foo.bar).toBe(0)

  toggle(object, `foo.bar`, 0, 1)

  expect(object.foo.bar).toBe(1)

  toggle(object, `foo.bar`, 0, 1, 2)

  expect(object.foo.bar).toBe(2)

  toggle(object, `foo.bar`, 0, 1, 2)

  expect(object.foo.bar).toBe(0)

  toggle(object, `foo.bar`, 0, undefined)

  expect(object.foo.bar).toBe(undefined)

  toggle(object, `foo.bar`, 0, undefined)

  expect(object.foo.bar).toBe(0)

  toggle(object, `foo.bar`, [0, `string`])

  expect(object.foo.bar).toBe(`string`)

})