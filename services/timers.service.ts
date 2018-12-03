import { get } from 'lodash'

export const
  interval = (handler: (...args: any[]) => boolean, timeout?: number, ...args: any[]) => {

    const handle = setInterval(
      (...args: any[]) => {
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