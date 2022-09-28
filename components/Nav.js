import React from 'react'
import Link from 'next/link'
import NavSl from './styles/NavSl'

const Nav = () => {
  return (
    <NavSl data-test="menu-links">
      <Link href="/products">Products</Link>

      <Link href="/account">Account</Link>

      <Link href="/order">Order</Link>

      <Link href="/signin">Signin</Link>

      <Link href="/cart">Cart</Link>
    </NavSl>
  )
}

export default Nav
