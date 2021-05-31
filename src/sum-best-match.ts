import { find } from 'lodash-es'
import { maxBy } from 'lodash-es'
import { mean } from 'lodash-es'
import { findBestMatch } from 'string-similarity'

export interface Rating {
  target: string;
  rating: number;
}
export interface BestMatch {
  ratings: Rating[];
  bestMatch: Rating;
}

export const sumBestMatch = (mainStrings: string[], targetStrings: string[]) => {

  const
    allMainRatings = mainStrings.map(str => findBestMatch(str, targetStrings).ratings),
    ratings: Rating[] = targetStrings.map(target => ({
      target,
      rating: mean(allMainRatings.map(rates => find(rates, { target }).rating))
    }))

  return <BestMatch>{
    ratings,
    bestMatch: maxBy(ratings, 'rating')
  }

}

export default sumBestMatch