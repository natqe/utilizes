import { mapDiff } from '../src/map-diff'

test(
  `Run on each unique object of a lists and fetch the same object from the other lists and give you them to you, for you to be able to compare between them.
    if the object will not exist on some list you get an undefined on he's place.`,
  () => {

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

   const result = mapDiff(
      [listVersionA, listVersionB],
     ([obVersionA, obVersionB]) => {
        if (obVersionA === undefined) return `${obVersionB.name} created`
        else if (obVersionB === undefined) return `${obVersionA.name} deleted`
        else if (obVersionB.stars > obVersionA.stars) return `${obVersionA.name} updated`
      },
      `name`
    )

    expect(result).toEqual([
       `Sharon deleted`,
       `Adrien updated`,
       `Skye created`
    ])

    const resultB = mapDiff(
      [listVersionA, listVersionB],
     ([obVersionA, obVersionB]) => {
        if (obVersionA === undefined) return `${obVersionB.name} created`
        else if (obVersionB === undefined) return `${obVersionA.name} deleted`
        else if (obVersionB.stars > obVersionA.stars) return `${obVersionA.name} updated`
      }
    )

    expect(resultB).toEqual([
      `Sharon deleted`,
      `Adrien deleted`,
      `Skye created`,
      `Adrien created`
   ])

  }
)