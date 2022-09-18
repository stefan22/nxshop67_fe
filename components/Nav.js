import Link from 'next/link'
import NavSl from './styles/NavSl'

const Nav = () => {
  return (
    <NavSl>
      <Link href="/products">Products</Link>

      <Link href="/sale">Sale</Link>

      <Link href="/signin">Orders</Link>

      <Link href="/account">Account</Link>

      <Link href="/cart">Cart</Link>
    </NavSl>
  )
}

export default Nav
