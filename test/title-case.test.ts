import camelCase from 'lodash/camelCase'
import kebabCase from 'lodash/kebabCase'
import lowerCase from 'lodash/lowerCase'
import snakeCase from 'lodash/snakeCase'
import startCase from 'lodash/startCase'
import upperCase from 'lodash/upperCase'
import { camelClassCase } from '../src/camel-class-case'
import { returns } from '../src/returns'
import { titleCase } from '../src/title-case'

const expected = `Title Case`

for (const str of returns([camelCase, kebabCase, lowerCase, snakeCase, startCase, upperCase, camelClassCase], expected))
  test(`${str} should be converted to ${expected}`, () => expect(titleCase(str)).toBe(expected))

