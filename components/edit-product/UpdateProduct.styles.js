import styled from 'styled-components'
import { motion } from 'framer-motion'

const FormContainer = styled(motion.div)`
  padding: 0 5rem;
  font-size: var(--fontxt);
  line-height: normal;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  justify-content: center;
  ul {
    margin: 0;
    padding: 1rem;
    border-radius: 3px;
    box-shadow: var(--bs4);
    border: 1px solid var(--logray);
    background: var(--itemho);
    li {
      list-style: none;
      font-size: var(--fontsmall);
      margin-bottom: 0.5rem;
      line-height: 1.25;
      color: var(--satred);
      span {
        font-weight: 500;
        color: var(--medgrey);
        font-size: var(--fontsmall);
      }
    }
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: auto;
    font-size: var(--fontxt);
    .login-title__mobile {
      display: none;
    }
    label {
      display: block;
      margin-top: 1rem;
      margin-bottom: 1rem;
      font-size: var(--fontone);
    }
    input,
    textarea,
    select {
      margin: 0.5rem 0;
      width: 100%;
      height: 42px;
      padding: 5px 10px;
      font-size: var(--fontsmall);
      color: var(--gray);
      border: 1px solid var(--gray);
      border-radius: 3px;
      box-shadow: var(--b1);
      &:focus {
        outline: 0;
        border-color: var(--red);
      }
    }
    textarea {
      padding: 15px 10px;
      min-height: 120px;
    }
    button {
      background: var(--red);
      height: 42px;
      border-radius: 4px;
      font-weight: 300;
      margin: 0 0 2rem 0;
      font-size: var(--fontxt);
      box-shadow: var(--bs4);
    }
    fieldset {
      border: 0;
      padding: 0;
      height: auto;
      margin: 0 0 2rem;
      &[disabled] {
        opacity: 0.5;
      }
      &::before {
        height: 10px;
        content: '';
        display: block;
      }
    }
  }
`

export { FormContainer }
