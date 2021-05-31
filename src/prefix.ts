import { chunk } from 'lodash-es'
import { flattenDeep } from 'lodash-es'
import { replace } from 'lodash-es'

export const prefix = (...args) => chunk(flattenDeep(args), 2).map(([fix, str]) => fix || typeof fix === 'number' ? replace(str, /.+/, `${fix}$&`) : str as string).join('')

export default prefix 