import styled from 'styled-components'

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 88px;
  margin-bottom: 5vh;
  @media screen and (max-width: 736px) {
    margin-bottom: 0;
  }
`

const Navwrap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 57px;
  vertical-align: middle;
  padding: 0;
  max-width: 1440px;
  margin: 0 auto;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid var(--ghostwhite);
  object-fit: cover;
  mix-blend-mode: normal;
  ul > a {
    padding: 1.5rem 3rem;
    line-height: 1;
    border: none;
    list-style: none;
  }

  a {
    margin-left: 1rem;
    cursor: pointer;
    & > div > img {
      transition: mix-blend-mode 700ms linear 0ms;
      mix-blend-mode: normal;
      &:hover {
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
