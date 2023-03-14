import styled from 'styled-components'

const NavContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex: 4 1;
  height: 57px;
  justify-content: flex-end;
  width: 100%;
  @media screen and (max-width: 980px) {
    display: none;
  }
  a,
  button {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;
    text-transform: uppercase;
    background: none;
    border: 0;
    cursor: pointer;
    @media (max-width: 700px) {
      font-size: var(--fontmedium);
      padding: 0 10px;
    }
    &:before {
      content: '';
      width: 0;
      background: var(--dgray);
      height: 100%;
      left: 0;
      position: absolute;
      transform: skew(-20deg);
      top: 0;
      bottom: 0;
    }
    &:after {
      height: 2px;
      background: var(--darkgrey);
      content: '';
      width: 0%;
      position: absolute;
      transform: translateX(-50%);
      transition: width 0.4s;
      transition-timing-function: cubic-bezier(1, -0.65, 0, 2.31);
      left: 50%;
      margin-top: 2rem;
    }
    &:hover,
    &:focus {
      text-decoration: none;
      outline: none;
      &:after {
        width: calc(100% - 85px);
      }
      @media (max-width: 700px) {
        width: calc(100% - 10px);
      }
    }
  }
`

export default NavContainer
