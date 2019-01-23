import { toggle } from '../src/toggle'

test(`Toggle property truthines. if the value is falsy set it to true, otherwise set it to false. return the current value`, () => {

  const object = {
    foo: {
      bar: false
    }
  }

  toggle(object, `foo.bar`)

  expect(object.foo.bar).toBe(true)

  expect(toggle(object, `foo.bar`)).toBe(false)

})