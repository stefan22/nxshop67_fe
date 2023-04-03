import React from 'react'
import { RequestReset, Reset } from '../components/signin'

const PasswordReset = ({ query }) => {
  const { token } = query

  return <>{!token ? <RequestReset /> : <Reset token={token} />}</>
}

export default PasswordReset
