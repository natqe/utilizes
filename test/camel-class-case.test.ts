import camelCase from 'lodash-es/camelCase'
import kebabCase from 'lodash-es/kebabCase'
import lowerCase from 'lodash-es/lowerCase'
import snakeCase from 'lodash-es/snakeCase'
import upperCase from 'lodash-es/upperCase'
import { camelClassCase } from '../src/camel-class-case'
import { returns } from '../src/returns'
import { titleCase } from '../src/title-case'

const expected = `CamelCaseClass`

for (const str of returns([camelCase, kebabCase, lowerCase, snakeCase, upperCase, titleCase], expected))
  test(`${str} should be converted to ${expected}`, () => expect(camelClassCase(str)).toBe(expected))