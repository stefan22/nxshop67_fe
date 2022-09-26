import styled from 'styled-components'

const FormSl = styled.form`
  border: 5px solid var(--white);
  padding: 0 5rem;
  font-size: var(--fontSizeTxt);
  line-height: normal;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  width: 51%;
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

export default FormSl
