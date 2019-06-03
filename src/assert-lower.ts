export const assertLower = (...strings: Array<string>) => {

  strings = strings.map(item => `${item.toLocaleLowerCase()}`)

  return strings.every(item => !strings.some(other => other !== item))

}

export default assertLower