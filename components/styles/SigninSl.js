import styled from 'styled-components'

const SigninSl = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 920px;
  height: auto;
  header {
    display: flex;
    background: var(--offWhite);
    border: 1px solid var(--ghostwhite);
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    h1 {
      margin: 1rem 0;
    }
    p {
      display: flex;
      margin: 0;
      justify-content: center;
      flex-direction: column;
      color: var(--darkRed);
      font-size: var(--fontSizeMedium);
      font-weight: 400;
      width: 100%;
      height: 60px;
      background-color: var(--lightred);
    }
  }
  .login {
    border: 1px solid var(--ghostwhite);
    padding: 0;
    .login__body {
      padding: 4rem 2rem;
      background-color: var(--offWhite);
      form {
        display: flex;
        flex-direction: column;
        height: auto;
        min-height: 300px;
        .input-field {
          width: 96%;
          margin: 0 auto;
          padding: 1rem;
          position: relative;
          span {
            position: absolute;
            right: 15px;
            top: 15px;
            cursor: pointer;
            font-size: var(--fontSizeSmall);
            ::before {
              content: '?';
              width: 25px;
              height:25px;
              border-radius: 50%;
              margin-right: 3px;
              padding: 2px;
              background-color: var(--lightred);
            }
          }

          label {
            display: flex;
            font-size: var(--fontTxt);
            justify-content: center;
            flex-direction: column;
          }

          input {
            background-color: var(--dgray);
            padding: 10px 20px;
          }

        }
        .buttons-group {
          display: flex;
          justify-content: center;
          width: 100%;
          flex-direction: column;
          margin: 3rem 0;
          .submit-button,.login__no-account {
            display: flex;
            width: 100%;
            justify-content: center;
            margin-bottom: 1rem;
          }
          .login__no-account {
            display: flex;
            flex-direction: column;
            width: 100%;
          }
        }
      }
    }
  }
  
`

export default SigninSl
