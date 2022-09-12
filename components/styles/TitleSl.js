import styled from 'styled-components'

const TitleSl = styled.h3`
  display: flex;
  line-height: var(--lineHeightSmall);
  transform: skew(-5deg) rotate(-1deg);
  margin-block-end: auto;
  margin: -2em 1rem 0;
  text-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
  z-index: 10;

  a {
    background: var(--red);
    display: block;
    mix-blend-mode: darken;
    font-size: 4rem;
    text-align: center;
    color: var(--white);
    padding: 0;
    width: 100%;
  }
`

export default TitleSl
