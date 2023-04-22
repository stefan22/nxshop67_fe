import React from 'react'
import Head from 'next/head'
import { useCurrentUser } from '../../features/current-user'
import { capitalize } from '../../utils'
import { GrMoney } from 'react-icons/gr'

const Account = () => {
  const { user } = useCurrentUser()
  let username

  if (user?.name) username = capitalize(user?.name)

  return (
    <>
      <Head>
        <title>NXShop67 - Account:{username}</title>
      </Head>
      <h1>
        Account{' '}
        <GrMoney
          id="gmoney"
          size={24}
          style={{
            stroke: 'red',
            strokeWiidth: '1px',
            fillRule: 'evenodd',
            fill: 'grey'
          }}
        />{' '}
        Central
      </h1>

      <h3> Welcome {username}</h3>
    </>
  )
}

export default Account
