import React from 'react'
import Link from 'next/link'
import NavContainer from './Nav.styles'
import SignOut from '../signout'

import { useCurrentUser } from '../../features/current-user'

const Nav = () => {
  const { user, loading } = useCurrentUser()

  if (loading) return <p>Loading....</p>

  return (
    <NavContainer data-testid="menu-links">
      <Link href="/products">Products</Link>
      {user && (
        <>
          <Link href="/account">Account</Link>
          <SignOut />
        </>
      )}
      <Link href="/contact-us">Contact-us</Link>
      {!user && <Link href="/signin">Signin</Link>}
    </NavContainer>
  )
}

export default Nav
