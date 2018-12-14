import { toEnum } from '../to-enum'

const
  key = '1',
  value = 'one'

test(`To have inverted properties`, () => expect(toEnum({ [key]: value })).toHaveProperty(value, key))