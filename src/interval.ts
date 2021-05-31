import get from 'lodash-es/get'

export const interval = <T, A extends Array<T>>(handler: (...args: A) => boolean, timeout?: number, ...args: A) => {

  const handle: number = <any>setInterval(
    (...args: A) => {
      try {
        if (handler(...args)) clearInterval(handle)
      } catch (e) {

        clearInterval(handle)

        throw new Error(get(e, 'message', e))

      }
    },
    timeout,
    ...args
  )

  return handle

}

export default interval