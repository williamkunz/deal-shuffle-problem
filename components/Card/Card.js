import React from 'react'

import { Wrapper } from './style'

export default ({ card }) => (
  <Wrapper suitColor={card.color}>
    <h6>{card.displayName}</h6>
    <figure>{card.icon}</figure>
    <h6>{card.displayName}</h6>
  </Wrapper>
)
