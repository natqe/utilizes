import { camelCase, merge } from 'lodash'
import { allCombinations } from '../src/all-combinations'

export class PackageJSONModel {

  name: string

  description: string

  keywords: Array<string>

  main: string

  constructor(options: Partial<PackageJSONModel> & { name: PackageJSONModel['name'] }) {

    if (options.version && options.version !== this.version) {

      const version = options.version.split(`.`).map(n => +n)

      if (version[1] > 9 && version[2] > 9) {

        version[1] = version[2] = 0

        ++version[0]

      }
      else if (version[2] > 9) {

        version[2] = 0

        ++version[1]

      } else ++version[2]

      options.version = version.join(`.`)

    }

    options.keywords = [...allCombinations(options.name.split(`.`).pop(), `-`), ...(options.keywords || [])]

    options.main = `${options.name}.js`

    if (!options.description) options.description = `The utilizes method utilizes.${camelCase(options.name)} exported as a Node.js module.`

    // TODO remove
    if (options.scripts && options.scripts.start) options.scripts.start = this.scripts.start

    merge(this, options)

    // TODO remove
    this.version = this.version.trim()

  }

  readonly author = `Natan Farkash`

  readonly license = `MIT`

  readonly homepage = `https://github.com/natqe/utilizes#readme`

  readonly repository = {
    type: `git`,
    url: `git+https://github.com/natqe/utilizes.git`
  }

  readonly bugs = {
    url: `https://github.com/natqe/utilizes/issues`
  }

  version = `1.0.0 `

  scripts = {
    start: `npm publish`
  }

}