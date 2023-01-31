import React from 'react'
import Link from 'next/link'
import NavContainer from './Nav.styles'
import SignOut from '../SignOut'

import { useCurrentUser } from '../../hooks/current-user'

const Nav = () => {
  const { currentUser } = useCurrentUser()

  return (
    <NavContainer data-testid="menu-links">
      <Link href="./products">Products</Link>
      {currentUser && (
        <>
          <Link href="./account">Account</Link>
          <Link href="./order">Order</Link>
          <SignOut />
        </>
      )}
      {!currentUser && <Link href="./signin">Signin</Link>}
    </NavContainer>
  )
}

export default Nav
