import { exec } from 'child_process'
import { copyFile, exists, readdir, readFile, writeFile } from 'fs'
import Bundler from 'parcel-bundler'
import { promisify } from 'util'
import { createReadme } from './create-readme'
import { PackageJSONModel } from './package-json.model'

const execPromise = promisify(exec)

execPromise(`npm run build`).then(async () => {

  try {

    const
      readFilePromise = (path: string) => promisify(readFile)(path, `utf8`),
      existsPromise = promisify(exists),
      writeFilePromise = promisify(writeFile),
      copyFilePromise = promisify(copyFile),
      files = await promisify(readdir)(`src`),
      packageJSONFileName = `package.json`,
      readmeFileName = `readme.md`,
      readme = await readFilePromise(readmeFileName)

    for (const file of files.filter(file => !file.startsWith(`invoke`) && !file.startsWith(`index`) && !file.startsWith(`_`))) {

      const
        nameFile = file.slice(0, file.lastIndexOf(`.`)),
        outDir = `sub/${nameFile}`,
        readOutDirFile = (file: string) => readFilePromise(`${outDir}/${file}`),
        fileTypeDefinition = `${nameFile}.d.ts`,
        isExist = await existsPromise(`${outDir}/${packageJSONFileName}`),
        state = async () => await existsPromise(`${outDir}/${packageJSONFileName}`) ?
          `${await readOutDirFile(nameFile + `.js`)}${await readOutDirFile(fileTypeDefinition)}${await readOutDirFile(readmeFileName)}`.replace(/\n\t\s/g, ``) :
          ``,
        prevState = await state()

      const fileName = file.slice(0, file.lastIndexOf(`.`))

      await new Bundler(`src/${file}`, {
        outDir,
        cache: false,
        target: 'browser',
        minify: true,
        logLevel: 1,
        scopeHoist: true,
        watch: false
      }).bundle()

      await copyFilePromise(`dist/${fileTypeDefinition}`, `${outDir}/${fileTypeDefinition}`)

      await copyFilePromise(`LICENSE`, `${outDir}/LICENSE`)

      const packageJSONObject = new PackageJSONModel(isExist ? JSON.parse(await readOutDirFile(packageJSONFileName)) : { name: nameFile })

      await createReadme(fileName, readme, packageJSONObject)

      await writeFilePromise(`${outDir}/${packageJSONFileName}`, JSON.stringify(packageJSONObject))

      if (prevState !== await state()) try {
        await execPromise(`npm run start --prefix ${outDir}`)
      } catch (error) {

        console.error(error)

        packageJSONObject.name = `utilizes.${nameFile}`

        await createReadme(fileName, readme, packageJSONObject)

        await writeFilePromise(`${outDir}/${packageJSONFileName}`, JSON.stringify(packageJSONObject))

        await execPromise(`npm run start --prefix ${outDir}`)

      }

    }

  } catch (error) {
    console.error(error)
  }

})