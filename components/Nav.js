import React from 'react'
import Link from 'next/link'
import NavSl from './styles/NavSl'
import SignOut from "./SignOut";


import { useCurrentUser } from '../graphql/currentUserQuery'

const Nav = () => {
  const { currentUser } = useCurrentUser()

  console.log('nav user ', currentUser)

  return (
    <NavSl data-testid="menu-links">
      <Link href="/products">Products</Link>
      {currentUser && (
        <>
          <Link href="/account">Account</Link>
          <Link href="/order">Order</Link>

            <SignOut />

        </>
      )}
      {!currentUser && <Link href="/signin">Signin</Link>}
    </NavSl>
  )
}

export default Nav
