import React from 'react'
/**
 * @fun ErrorMessage
 * @param error <object>
 * @returns {JSX.Element}
 */
const ErrorMessage = ({ error }) => {
  if (!error || !error.message) return null

  if (error?.networkError.result?.length === undefined) return null
  //eslint-disable-next-line no-console
  console.log(`{[ERROR]: 'Error message: ' ${error.message}`)

  return alert(`${(<p>{error?.message}</p>)}`)
}
export default ErrorMessage
