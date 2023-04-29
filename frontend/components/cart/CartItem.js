import React from 'react'
import { CartItemInfo, CartListItem } from './Cart.styled'
import Image from 'next/image'
import { GrShop, GrTag } from 'react-icons/gr'
import { GBPCurrencyFormat } from '../../utils'
import RemoveFromCart from './RemoveFromCart'

const CartItem = ({ cartItem }) => {
  const { product } = cartItem
  if (!product) return null

  return (
    <CartListItem>
      <Image
        width="156"
        height="177"
        src={product.photo.image?.publicUrlTransformed}
        alt={product.name}
      />
      <CartItemInfo>
        <h3>
          <GrTag size="20" /> {product.name}
        </h3>
        <p>
          Qty: {cartItem.quantity}
          <em>{GBPCurrencyFormat(product.price)} each</em>
        </p>
        <RemoveFromCart id={cartItem.id} />
        <p>
          Total:
          <em>
            {GBPCurrencyFormat(product.price * cartItem.quantity)} <GrShop size="14" />
          </em>
        </p>
      </CartItemInfo>
    </CartListItem>
  )
}

export default CartItem
