import React from 'react'
import Link from 'next/link'
import NavContainer from './Nav.styles'
import SignOut from '../signout'
import { GrMoney, GrLogout, GrLogin, GrShop, GrUser, GrContact } from 'react-icons/gr'

import { useCurrentUser } from '../../features/current-user'

const Nav = () => {
  const { user, loading } = useCurrentUser()

  if (loading) return <p>Loading....</p>

  return (
    <NavContainer data-testid="menu-links">
      <span>
        <GrMoney />
        <Link href="/products">Products</Link>
      </span>
      <span>
        <GrShop />
        <Link href="/">Cart</Link>
      </span>
      {user && (
        <>
          <span>
            <GrUser />
            <Link href="/account">Account</Link>
          </span>

          <span>
            <GrLogout />
            <SignOut />
          </span>
        </>
      )}
      {!user && (
        <span>
          <GrLogin />
          <Link href="/signin">Signin</Link>
        </span>
      )}
      <span>
        <GrContact />
        <Link href="/contact-us">Contact-us</Link>
      </span>
    </NavContainer>
  )
}

export default Nav
