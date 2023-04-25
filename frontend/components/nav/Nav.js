import React from 'react'
import Link from 'next/link'
import { NavContainer } from './Nav.styled'
import SignOut from '../signout'
import Cart from '../cart'
import { GrMoney, GrLogout, GrLogin, GrShop, GrUser } from 'react-icons/gr'
import { useCartState } from '../../utils'
import { useCurrentUser } from '../../features/current-user'
import CartCount from '../cart/CartCount'

const Nav = () => {
  const { user, loading } = useCurrentUser()
  const { close, setClose } = useCartState()
  if (loading) return <p>Loading....</p>

  return (
    <>
      <NavContainer close={close} data-testid="menu-links">
        <span>
          <GrMoney />
          <Link href="/products">Products</Link>
        </span>

        {!user && (
          <span>
            <GrLogin />
            <Link href="/signin">Signin</Link>
          </span>
        )}

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

            <span id="nav-cart" onClick={() => setClose(!close)}>
              <GrShop />
              <Link href="#">Cart</Link>{' '}
              <CartCount
                count={user.cart.reduce(
                  (acc, ele) => acc + (ele.product ? ele.quantity : 0),
                  0
                )}
              />
            </span>
          </>
        )}
      </NavContainer>
      <Cart setClose={setClose} close={close} />
    </>
  )
}

export default Nav
