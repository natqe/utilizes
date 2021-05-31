import { camelCase } from 'lodash-es'
import { kebabCase } from 'lodash-es'
import { lowerCase } from 'lodash-es'
import { snakeCase } from 'lodash-es'
import { upperCase } from 'lodash-es'
import { camelClassCase } from '../src/camel-class-case'
import { returns } from '../src/returns'
import { titleCase } from '../src/title-case'

const expected = `CamelCaseClass`

for (const str of returns([camelCase, kebabCase, lowerCase, snakeCase, upperCase, titleCase], expected))
  test(`${str} should be converted to ${expected}`, () => expect(camelClassCase(str)).toBe(expected))