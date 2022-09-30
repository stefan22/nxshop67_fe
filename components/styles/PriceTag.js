import styled from 'styled-components'

const PriceTag = styled.span`
  background: var(--darkgrey);
  transform: rotate(3deg);
  color: white;
  color(--black);
  padding: 5px;
  line-height: 1.1;
  letter-spacing: 1px;
  font-size: 2.5rem;
  display: inline-block;
  position: absolute;
  box-shadow: var(--bs5);
  top: 90px;
  right: 0;
  @media screen and (max-width: 736px) {
    top: 107px;
    right: 0;
  }
`

export default PriceTag
