import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 0 20px;
  margin: 0 0 8vh;
`

const Navwrap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding: 0;
  height: 57px;
  max-width: 1480px;
  margin: 0 auto;
  justify-content: space-between;
  border-bottom: 1px solid var(--ghostwhite);
  > a {
    width: 67px;
    line-height: 4.5;
    padding-left: 2rem;
  }
  ul > a {
    font-size: var(--fontxt);
    font-variant: all-small-caps;
    border: none;
    list-style: none;
  }
  div {
    img {
      transition: mix-blend-mode 400ms linear 0ms;
      mix-blend-mode: normal;
      &:hover {
        cursor: pointer;
        mix-blend-mode: luminosity;
      }
    }
  }
  button {
    padding: 1.5rem 3rem;
    color: var(--black);
    line-height: var(--lineheightsmall);
  }
`

export { HeaderContainer, Navwrap }
