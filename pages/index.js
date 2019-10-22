import React from 'react'
import { connect } from 'react-redux'

import Card from '../components/Card'

import { CardTable } from '../style/global'

const IndexPage = ({
  dealer,
  player,

  dealCard,
  shuffle,
}) => {

  return (
    <main>
      <div>
        <p>Dealer has {dealer.length} cards</p>
      </div>

      <div>
        <button
          name="deal"
          onClick={() => dealCard(dealer, player)}
        >
          Deal Card
        </button>

        <button
          name="shuffle"
          onClick={() => shuffle(dealer, player)}
        >
          shuffle deck
        </button>
      </div>

      <div>
        <p>Your cards</p>

        <CardTable>
          {player.map(card => (
            <Card
              card={card}
              key={`${ card.suitName }-${ card.displayName }`}
            >
              <p>{card.displayName}</p>
              <figure>{card.icon}</figure>
            </Card>
          ))}
        </CardTable>
      </div>
    </main>

  )
}


export default connect(
  state => ({ ...state }),
  dispatch => ({
    dealCard: (dealerCards = [], playerCards = []) => {
      const [ topCard, ...dealersLeftovers] = dealerCards

      if (!topCard) return false

      return dispatch({
        type: 'SET_ALL_CARDS',
        dealerCards: dealersLeftovers,
        playerCards: [
          topCard,
          ...playerCards,
        ],
      })
    },

    shuffle: (dealer, player) => {
      // const perf1 = performance.now()
      const shuffledCards = [ ...dealer, ...player ].sort(() => Math.random() - 0.5)
      // const perf2 = performance.now()

      // console.log('sort() took:', perf2 - perf1)

      return dispatch({
        type: 'SET_ALL_CARDS',
        dealerCards: shuffledCards,
        playerCards: [],
      })
    },
  })
)(IndexPage)
