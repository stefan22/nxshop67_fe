import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: calc(100% - 40px);
  padding: 0 20px;
  margin: 0 0 8vh;
`

const Navwrap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  padding: 0;
  max-width: 1440px;
  margin: 0 auto;
  justify-content: space-between;
  border-bottom: 1px solid var(--ghostwhite);
  > a {
    width: 67px;
    height: 45px;
  }

  ul > a {
    padding: 1.5rem 3rem;
    line-height: 1;
    border: none;
    list-style: none;
  }

  div {
    display: flex;
    transform: translateX(13px);
    width: 40px;
    height: 45px;
    vertical-align: sub;
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
    line-height: 1;
  }
`

export { HeaderContainer, Navwrap }
