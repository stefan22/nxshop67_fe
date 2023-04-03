import styled from 'styled-components'
import { motion } from 'framer-motion'

const SignInUpContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 480px;
  height: auto;

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
        height: 40px;
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

            input,
            textarea {
              background-color: var(--dgray);
              padding: 9px 10px;
              border: 1px solid lightgray;
              font-size: var(--fontsmall);
            }
            textarea {
              padding: 15px 10px;
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
              flex-direction: column;
              align-content: center;
              width: 100%;
              margin: 0;
              p,
              a {
                font-size: var(--fontsmall);
                margin: 1.15rem 0 0;
                font-weight: 300;
              }
              a {
                text-decoration: underline;
              }
            }

            .login__no-account {
              display: flex;
              flex-direction: column;
              align-content: center;
              @media screen and (max-width: 1281px) {
                p {
                  font-size: var(--fontsmall);
                }
              }

              button {
                background-color: var(--red);
              }
            }

            .other__links {
              display: flex;
              justify-content: flex-start;
              p,
              a {
                font-size: var(--fontsmall);
                margin: 1.15rem 0 0;
                font-weight: 300;
              }
              a {
                text-decoration: underline;
              }
            }
          }
        }
      }
      &.password__reset {
        .input-field {
          margin-top: 3.5rem;
        }
        .buttons-group {
          margin-top: 3rem;
        }
      }
    }
  }
`

export default SignInUpContainer