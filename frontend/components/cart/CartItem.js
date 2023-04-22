import React from 'react'
import { CartItemInfo, CartListItem } from './Cart.styles'
import Image from 'next/image'
import { GrShop, GrTag } from 'react-icons/gr'
import { GBPCurrencyFormat } from '../../utils'

const CartItem = ({ cartItem }) => {
  const { product } = cartItem
  if (!product) return null

  return (
    <CartListItem>
      <Image
        width="128"
        height="142"
        src={product.photo.image?.publicUrlTransformed}
        alt={product.name}
      />
      <CartItemInfo>
        <h3>
          <GrTag size="16" /> {product.name}
        </h3>
        <p>
          Qty: {cartItem.quantity}
          <em>{GBPCurrencyFormat(product.price)} each</em>
        </p>

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
