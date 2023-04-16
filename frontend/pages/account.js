import React from 'react'
import Head from 'next/head'
import { useCurrentUser } from '../features/current-user'
import capitalize from '../utils/capitalize'
import { GrMoney } from 'react-icons/gr'

const Account = () => {
  const { user, loading } = useCurrentUser()
  let username
  if (loading) return <p>Loading...</p>
  if (user?.name) username = capitalize(user?.name)

  return (
    <>
      <Head>
        <title>NXShop67 - Account:{username}</title>
      </Head>
      <h1>
        Welcome <GrMoney /> {username}{' '}
      </h1>
      <p>Lorem zoom zoom</p>
    </>
  )
}

export default Account
