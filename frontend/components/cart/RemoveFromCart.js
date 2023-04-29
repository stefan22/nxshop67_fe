import { useMutation } from '@apollo/client'
import { removeFromCartMutation } from '../../features/cart'
import { RemoveItem } from './Cart.styled'
import { GrFormTrash } from 'react-icons/gr'
import React from 'react'

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteCartItem))
}

const RemoveFromCart = ({ id }) => {
  const [removeFromCart, { loading }] = useMutation(removeFromCartMutation, {
    variables: { id },
    update
  })

  return (
    <RemoveItem
      disabled={loading}
      onClick={removeFromCart}
      type="button"
      title="Remove item from cart"
    >
      <GrFormTrash size={22} />
    </RemoveItem>
  )
}

export default RemoveFromCart
