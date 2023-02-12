import styled from 'styled-components'

const SignInUpContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 480px;
  height: auto;
  transition: all linear 0.3s 0ms;

  .login {
    padding: 0;
    width: 100%;
    min-height: 600px;
    max-width: 480px;
    margin-bottom: 1rem;
    
    header {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      text-align: center;

      h1 {
        margin: 2rem 0 0;
        font-size: var(--fontmedium);
        @media screen and (max-width: 1281px) {
          margin: 0;
        }
      }
      p {
        display: flex;
        margin: 0;
        justify-content: center;
        flex-direction: column;
        color: var(--satred);
        font-size: var(--fontxt);
        font-weight: 300;
        width: 100%;
        height: 50px;
        &.error-message {
          font-size: var(--fontbase);
        }
      }
    }

    .login__body {
      padding: 1rem 2rem 1rem;
      @media screen and (max-width: 1281px) {
        padding: 0;
      }
      form {
        display: flex;
        flex-direction: column;
        height: auto;
        min-height: 300px;
        width: 100%;
        fieldset {
          padding: 0;
          margin: 0;
          .input-field {
            width: 100%;
            margin: 2rem 0 2rem;
            padding: 0;
            position: relative;

            label {
              display: flex;
              font-weight: 300;
              justify-content: center;
              flex-direction: column;
              font-size: var(--fontone);

              span {
                position: absolute;
                right: 5px;
                top: 3px;
                cursor: pointer;
                font-weight: 300;
                font-size: var(--fontsmall);
              }
            }

            input {
              background-color: var(--dgray);
              padding: 9px 10px;
              border: 1px solid lightgray;
              font-size: var(--fontsmall);
            }
          }

          .buttons-group {
            display: flex;
            justify-content: center;
            width: 100%;
            flex-direction: column;
            margin: 4rem 0 2rem;

            .submit-button,
            .login__no-account {
              display: flex;
              width: 100%;
              justify-content: center;
              margin: 0;
              p {
                font-size: var(--fontsmall);
              }
            }

            .submit-button {
              display: flex;

              button {
                font-size: var(--fontxt);
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 42px;
                font-weight: 400;
                @media screen and (max-width: 1281px) {
                  font-weight: 300;
                }
              }
            }

            .login__no-account {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-content: center;
              width: 100%;
              @media screen and (max-width: 1281px) {
                p {
                  font-size: var(--fontsmall);
                }
              }

              button {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                width: 100%;
                height: 42px;
                font-weight: 400;
                background-color: var(--red);
                @media screen and (max-width: 1281px) {
                  font-weight: 300;
                }
              }
            }
          }
        }
      }
    }
  }
`

export default SignInUpContainer
