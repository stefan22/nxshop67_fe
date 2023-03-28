import React from 'react'
import { RequestReset, Reset } from '../components/signin'

const query = { token: false }
const PasswordReset = ({ query }) => {
  const { token } = query
  return <>{!token ? <RequestReset /> : <Reset />}</>
}

export default PasswordReset
