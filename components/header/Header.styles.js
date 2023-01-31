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

export default HeaderContainer
