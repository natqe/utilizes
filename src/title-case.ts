import lowerCase from 'lodash/lowerCase'
import startCase from 'lodash/startCase'

export const titleCase = (value: string) => startCase(lowerCase(value))

export default titleCase