import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

export const camelClassCase = (word: string) => upperFirst(camelCase(word))

export default camelClassCase