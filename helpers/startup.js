import cardValues from '../constants/card-values'
import suits from '../constants/suits'

export const initialCardList = () => {
  const suitArray = Object.keys(suits)

  return suitArray.reduce((accum, suitName) => {
    const suitData = suits[suitName]

    return [
      ...accum,
      ...cardValues.map(cardValue => (
        {
          suitName,
          ...cardValue,
          ...suitData,
        }
      )),
    ]
  }, [])
}
