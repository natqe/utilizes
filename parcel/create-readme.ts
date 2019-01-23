import { writeFile } from 'fs'
import { camelCase, get, uniq } from 'lodash'
import { promisify } from 'util'
import { PackageJSONModel } from './package-json.model'

export const createReadme = (fileName: string, generalReadme: string, packageJSONObject: PackageJSONModel) => {

  const nameCamel = camelCase(fileName)

  let result = get(generalReadme.match(new RegExp(`### ${nameCamel}[^#]+`)), 0)

  if (result) {

    packageJSONObject.description = result.split(`### ${nameCamel}`).pop().split(`**Usage:**`).shift().trim()

    try {

      packageJSONObject.keywords.push(...JSON.parse(result.match(/\*keywords\s(\[(?:.|\n|\s|\t)*\])\s\*keywordsend/)[1]))

      packageJSONObject.keywords = uniq(packageJSONObject.keywords)

    } catch ({ message }) {
      console.error(message)
    }

    result = result.replace(`### ${nameCamel}`, `# ${nameCamel}`).replace(`utilizes/${fileName}`, `${packageJSONObject.name}`)

    result += `\nThis module exported from [utilizes](https://www.npmjs.com/package/utilizes) project.`

    return promisify(writeFile)(`sub/${fileName}/readme.md`, result)

  }

}