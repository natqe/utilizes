import { doDeclare } from '../src/do-declare'

export default doDeclare(
  (use: typeof doDeclare) => {

    let
      returnResult: typeof incrementor,
      count = 1

    const incrementor = (a: number) => count += a

    test(`Invoked on declare`, () => {

      returnResult = use(incrementor, [1])

      expect(count).toBe(2)

    })

    test(`Return himself after is invoked`, () => expect(returnResult).toBe(incrementor))

    test(`Not to invoke the func when func is not a func`, () => expect(() =>
      //@ts-ignore
      use(class { })).
      not.toThrowError())

  },
  [doDeclare]
)