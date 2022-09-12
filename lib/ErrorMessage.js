import React from 'react'

const ErrorMessage = ({ error }) => (
  <div>An error ocurred: {error.toString()}</div>
)

export default ErrorMessage
