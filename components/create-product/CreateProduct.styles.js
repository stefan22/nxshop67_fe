import styled from 'styled-components'

const ProductContainer = styled.form`
  border: 5px solid var(--white);
  padding: 0 5rem;
  font-size: var(--fontSizeTxt);
  line-height: normal;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 612px;
  height: auto;
  justify-content: center;
  @media screen and (max-width: 736px) {
    padding: 0;
    width: 100%;
    border: none;
  }

  .login-title__mobile {
    display: none;
    @media screen and (max-width: 1279px) {
      display: block;
      font-size: var(--fontSizeMedium);
      text-align: center;
      width: 100%;
      margin: 0 0 2rem;
      h1 {
        margin: 0 0 2rem;
      }
    }
  }

  label {
    display: block;
    font-size: var(--fontSizeRegular);
    line-height: 1.15;
    margin-top: 1rem;
    margin-bottom: 2rem;
  }

  input,
  textarea,
  select {
    margin-top: 0.5rem;
    width: 100%;
    background: var(--offWhite);
    padding: 1rem 0.5rem;
    font-size: var(--fontSizeTxt);
    border: 1px solid var(--gray);
    border-radius: 4px;
    box-shadow: var(--b1);

    &:focus {
      outline: 0;
      border-color: var(--red);
    }
  }
  textarea {
    padding: 1.5rem 0.5rem;
  }

  button,
  input[type='submit'] {
    width: auto;
    background: var(--red);
    margin: 0.75rem 0;
    color: var(--white);
    font-size: var(--fontSizeTxt);
    border: 0;
    font-weight: 400;
    padding: 1rem 2rem;
  }
  button {
    font-size: var(--fontSizeRegular);
    line-height: 1.25;
    border-radius: 4px;
    font-weight: 600;
    margin: 0 0 2rem 0;
    box-shadow: var(--bs4);
  }
  button[type='button'] {
    margin-bottom: 0;
  }
  fieldset {
    border: 0;
    padding: 0;
    height: auto;
    margin: 0 0 3rem;

    &[disabled] {
      opacity: 0.5;
    }
    &::before {
      height: 10px;
      content: '';
      display: block;
    }
    &[aria-busy='true']::before {
      background-size: 50% auto;
      animation: 0.5s linear infinite;
    }
  }
`

const LoginContainer = styled.div`
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
  transition: all linear 0.3s;
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

export { ProductContainer, LoginContainer }
