const cardValues = require('../constants/card-values.json')
const suits = require('../constants/suits.json')

const initialCardList = () => {
  const suitArray = Object.keys(suits)

  return suitArray.reduce((accum, suitName) => {
    const suitData = suits[ suitName ]

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

class CardModel {
  __cardsInDeck = initialCardList()
  __playersCards = []

  get cardsInDeck() {
    return this.__cardsInDeck
  }

  get playersCards() {
    return this.__playersCards
  }

  set cardsInDeck(newCardsInDeck) {
    this.__cardsInDeck = newCardsInDeck
  }

  set playersCards(newPlayersCards) {
    this.__playersCards = newPlayersCards
  }

  shuffle() {
    const shuffledCards = [ ...this.__cardsInDeck, ...this.__playersCards ].sort(() => Math.random() - 0.5)

    this.__cardsInDeck = shuffledCards
    this.__playersCards = []
  }

  deal_card(numberOfCardsDealt) {
    let cardsInDeck = this.__cardsInDeck

    const cardsToPlayer = Array(numberOfCardsDealt).fill('').map(card => {
      const [ topCard, ...restOfDeck ] = cardsInDeck
      cardsInDeck = restOfDeck

      return topCard
    })

    this.__cardsInDeck = cardsInDeck
    this.__playersCards = cardsToPlayer
  }

}

module.exports = {
  CardModel,
}
