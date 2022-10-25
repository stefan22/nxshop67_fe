import styled from 'styled-components'

const PriceDesc = styled.h3`
  display: flex;
  line-height: var(--lineHeightNormal);
  height: 30px;
  margin: 0;
  z-index: 10;

  span {
    background: var(--darkgrey);
    display: block;
    mix-blend-mode: darken;
    font-size: var(--fontSizeLarge);
    text-align: center;
    color: var(--white);
    padding: 0;
    width: 99%;
    margin: 0 auto;
  }
`

export default PriceDesc;
