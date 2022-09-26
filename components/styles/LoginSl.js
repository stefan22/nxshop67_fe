import styled from 'styled-components'
// import Arrows from '../../public/static/arrows.png'

const LoginSl = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  align-content: baseline;
  justify-content: center;
  width: 100%;
  padding: 0;
  margin: 5rem 0;
  box-sizing: border-box;
  min-height: 69vh;
  text-align: left;
  border-radius: 12px;
  background-color: #eee;
  @media screen and (max-width: 1279px) {
    background: transparent;
  }

  .loginLeftContainer {
    width: 49%;
    padding: 0;
    margin: 0;
    background: var(--white);
    border: 1px solid var(--offWhite);
    flex-direction: column;
    display: flex;
    z-index: 0;
    justify-content: center;
    position: relative;
    @media screen and (max-width: 1279px) {
      display: none;
    }

    .left-item {
      text-align: center;
      color: #595959;
      padding: 0;
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .login-title {
        margin-top: 0;
        font-size: var(--fontSizeRegular);
      }

      .login-sub-title {
        font-size: 20px;
        margin: 0;
        min-height: 50%;
      }

      .redirect-signup {
        font-size: 16px;
      }
    }
  }
`

export default LoginSl
