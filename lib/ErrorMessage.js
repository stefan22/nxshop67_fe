import React from 'react'
import styled from 'styled-components'

/**
 * @fun ErrorMessage
 * @param error <object>
 * @return jsx
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
      <p>{error.message.replace('GQL Error: ', '')}</p>
    </ErrorSl>
  )
}

export default ErrorMessage
