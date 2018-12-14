import { interval } from '../interval'

jest.useFakeTimers()

test('Interval stop base on boolean that returned from the callback', () => {

  let counter = 0

  interval(() => ++counter === 5)

  jest.runAllTimers()

  expect(counter).toBe(5)

})

test('Interval stop when error is happend', () => {

  const throwing = jest.fn(() => {
    throw ''
  })

  interval(throwing)

  try {

    jest.runAllTimers()

  } catch{
    expect(throwing).toHaveBeenCalledTimes(1)
  }

})