import styled from 'styled-components'

export const Wrapper = styled.div`
  border: 1px solid #999;
  border-radius: 5px;
  color: ${ ({ suitColor }) => suitColor };
  display: grid;
  font-size: 3rem;
  grid-template-rows: 37px 1fr 37px;
  height: 11rem;
  padding: 6px;
  width: 6rem;

  h6 {
    margin: 0;
  }

  h6:last-of-type {
    transform: rotate(180deg);
  }

  figure {
    margin: 0 auto;
  }
`
