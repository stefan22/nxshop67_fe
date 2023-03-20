import React from 'react'
import Head from 'next/head'
import { useCurrentUser } from '../features/current-user'
import capitalize from '../utils/capitalize'
import { GrMoney } from 'react-icons/gr'

const Account = () => {
  const { user, loading } = useCurrentUser()

  if (loading) return <p>Loading...</p>
  let isUsername = capitalize(user?.name)

  return (
    <>
      <Head>
        <title>NXShop67 - Account:{isUsername}</title>
      </Head>
      <h1>Welcome {isUsername} </h1>
      <p>Lorem zoom zoom</p>
    </>
  )
}

export default Account
