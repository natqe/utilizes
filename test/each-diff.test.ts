import { eachDiff } from '../src/each-diff'

test(
  `Run on each unique object of a lists and fetch the same object from the other lists and give you them to you, for you to be able to compare between them.
    if the object will not exist on some list you get an undefined on he's place.`,
  () => {

    let result: { [key: string]: string } = {}

    const
      listVersionA = [
        {
          name: `Sharon`,
          stars: 100
        },
        {
          name: `Adrien`,
          stars: 100
        }
      ],
      listVersionB = [
        {
          name: `Skye`,
          stars: 100
        },
        {
          name: `Adrien`,
          stars: 150
        }
      ]

    eachDiff(
      [listVersionA, listVersionB],
      ([obVersionA, obVersionB]) => {
        if (obVersionA === undefined) result[obVersionB.name] = `created`
        else if (obVersionB === undefined) result[obVersionA.name] = `deleted`
        else if (obVersionB.stars > obVersionA.stars) result[obVersionA.name] = `updated`
      },
      `name`
    )

    expect(result).toEqual({
      Sharon: `deleted`,
      Adrien: `updated`,
      Skye: `created`
    })

  }
)