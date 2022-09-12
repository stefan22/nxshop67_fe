import styled from 'styled-components'

const LogoSl = styled.h1`
  font-size: 2rem;
  display: flex;
  flex: 0 1;
  margin: 13px 0 11px 15px;
  height: 54px;
  justify-content: center;
  flex-direction: column;
  position: relative;
  background: var(--red);
  transform: skew(-4deg);
  transition: all 700ms linear 0ms;
  &:hover {
    color: var(--white);
    background: var(--white);
  }

  a {
    color: white;
    transition: all 0.5s linear 20ms;
    text-transform: uppercase;
    padding: 10px 20px;
    line-height: 1.8;
    &:hover {
      mix-blend-mode: multiply;
      background: black;
      text-decoration: none;
    }
  }
`

export default LogoSl
