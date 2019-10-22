import { applyMiddleware, compose, createStore } from 'redux'

import reducers from '../reducers'

let composeFunction = applyMiddleware()

if (process.env.NODE_ENV === 'development') {
  const composeEnhancers = (
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  )
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      maxAge: 25,
    })
    : compose

  composeFunction = composeEnhancers(
    applyMiddleware(),
  )
}

export const initStore = initialState =>
  createStore(
    reducers,
    initialState,
    composeFunction,
  )
