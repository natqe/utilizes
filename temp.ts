// import fileStem from 'file-stem'
// import { copyFile, readdir } from 'fs'
// import { promisify } from 'util'

// readdir(`src`, (error, files) => {

//   for (const file of files.filter(file => !file.startsWith(`invoke`) && !file.startsWith(`index`) && !file.startsWith(`_`))) {

//     const copyFileAsync = promisify(copyFile)

//     copyFileAsync(`sub/${fileStem(file)}/package.json`, `parcel/packages/${fileStem(file)}.json`)

//   }

// })