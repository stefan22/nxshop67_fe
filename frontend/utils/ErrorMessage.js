import React from 'react'
import styled from 'styled-components'

/**
 *  @fn ErrorMessage
 *  @param {Object }It takes an error prop (object) that returns 'message' when 'Network error'
 * @return {Null} Checks if Error or error.message is falsy, if so returns null
 *
 */

const ErrorSl = styled.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid red;
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`

const ErrorMessage = ({ error }) => {
  if (!error || !error.message) return null
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error, i) => (
      <ErrorSl key={i}>
        <p>{error.message.replace('GQL Error: ', '')}</p>
      </ErrorSl>
    ))
  }
  return (
    <ErrorSl>
      <p data-test="error-message">{error.message.replace('GQL Error: ', '')}</p>
    </ErrorSl>
  )
}

export default ErrorMessage
