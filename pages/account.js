import React from 'react'
import { useCurrentUser } from '../hooks/current-user'

const Account = () => {
  const { currentUser, loading } = useCurrentUser()

  if (loading) return <p>Loading...</p>

  return (
    <>
      <h1>account {currentUser?.name || 'no name'} </h1>
    </>
  )
}

export default Account
