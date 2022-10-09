import React from 'react'
import Link from 'next/link'
import NavSl from './styles/NavSl'
import { useCurrentUser } from '@/graphql/currentUserQuery'

const Nav = () => {
  const { currentUser } = useCurrentUser()
  console.log('user ', currentUser) //id,name,email
  return (
    <NavSl data-testid="menu-links">
      <Link href="/products">Products</Link>
      {currentUser && (
        <>
          <Link href="/account">Account</Link>
          <Link href="/order">Order</Link>
          <Link href="/signout">Signout</Link>
        </>
      )}
      {!currentUser && <Link href="/signin">Signin</Link>}
    </NavSl>
  )
}

export default Nav
