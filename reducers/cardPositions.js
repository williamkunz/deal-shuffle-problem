import { initialCardList } from '../helpers/startup'

const initialState = {
  dealer: initialCardList(),
  player: [],
}


export default (state = initialState, action = { type: '' }) => {
  switch(action.type) {
    case 'SET_ALL_CARDS':
      return {
        ...state,
        dealer: action.dealerCards,
        player: action.playerCards,
      }

    default:
      return initialState
  }
}
