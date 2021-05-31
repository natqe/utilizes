import lowerCase from 'lodash-es/lowerCase'
import startCase from 'lodash-es/startCase'

export const titleCase = (value: string) => startCase(lowerCase(value))

export default titleCase