import upperFirst from 'lodash-es/upperFirst'
import camelCase from 'lodash-es/camelCase'

export const camelClassCase = (word: string) => upperFirst(camelCase(word))

export default camelClassCase