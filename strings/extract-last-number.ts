export const extractLastNumber = (str: string): [string, number] => {

  let
    matched = str.match(/\d+$/),
    num = matched && +matched[0] || null

  return [num ? str.slice(0, str.lastIndexOf(`${num}`)) : str, num]

}

export default extractLastNumber