import styled from 'styled-components'

const PriceTag = styled.span`
  background: var(--darkgrey);
  transform: rotate(3deg) perspective(80px);
  color: white;
  color(--black);
  padding: 5px;
  line-height: 1.1;
  letter-spacing: 1px;
  font-size: 2.5rem;
  width: 50%;
  display: inline-block;
  max-width: fit-content;
  position: absolute;
  border: 1px solid #333;
  box-shadow: var(--b);
  overflow: hidden;
  top: 90px;
  right: 10px;
  @media screen and (max-width: 736px) {
    top: 5%;
    right: 5%;
    font-size: 3rem;
  }
`

export default PriceTag
