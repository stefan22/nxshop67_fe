import React from 'react'
import { CartCountContainer, ShopCount } from './Cart.styled'

const CartCount = ({ count }) => (
  <CartCountContainer count={count}>
    <ShopCount count={count}>
      {count.toString().length === 1 ? `0${count}` : `${count}`}
    </ShopCount>
  </CartCountContainer>
)

export default CartCount
