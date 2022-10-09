import React from 'react'
import { useCurrentUser } from '@/graphql/currentUserQuery'

const Account = () => {
  const { currentUser } = useCurrentUser()
  console.log('user ', currentUser) //id,name,email

  return (
    <>
      <h1>{currentUser?.name} account </h1>
      <p>{currentUser?.email}</p>
      <p>{currentUser?.id}</p>
    </>
  )
}

export default Account
