import styled from 'styled-components'

const PriceTag = styled.span`
  background: var(--red);
  transform: rotate(3deg);
  color: white;
  padding: 5px;
  line-height: 1.1;
  letter-spacing: 1px;
  font-size: 3rem;
  display: inline-block;
  position: absolute;
  top: 110px;
  right: 15px;
  @media screen and (max-width: 736px) {
    top: 75px;
    right: 0px;
  }
`

export default PriceTag
