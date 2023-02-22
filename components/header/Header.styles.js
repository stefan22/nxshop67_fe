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
    line-height: 4.1;
  }
  ul > a {
    font-size: var(--fontxt);
    font-variant: all-small-caps;
    border: none;
    list-style: none;
  }
  div {
    display: flex;
    transform: translateX(13px);
    width: 40px;
    height: auto;
    vertical-align: text-bottom;
    @media screen and (max-width: 736px) {
      transform: translateX(0);
    }
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
