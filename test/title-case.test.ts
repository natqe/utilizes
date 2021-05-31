import { camelCase } from 'lodash-es'
import { kebabCase } from 'lodash-es'
import { lowerCase } from 'lodash-es'
import { snakeCase } from 'lodash-es'
import { startCase } from 'lodash-es'
import { upperCase } from 'lodash-es'
import { camelClassCase } from '../src/camel-class-case'
import { returns } from '../src/returns'
import { titleCase } from '../src/title-case'

const expected = `Title Case`

for (const str of returns([camelCase, kebabCase, lowerCase, snakeCase, startCase, upperCase, camelClassCase], expected))
  test(`${str} should be converted to ${expected}`, () => expect(titleCase(str)).toBe(expected))