import React from 'react'
import Image from 'next/image'
import { CartContainer, Heading, CloseButton, CartListItem } from './Cart.styles'
import { useCurrentUser } from '../../features/current-user'
import { GBPCurrencyFormat } from '../../utils/currencyFormat'
import { cartTotalPrice } from '../../utils/cartTotalPrice'

const CartItem = ({ cartItem }) => {
  const { product } = cartItem
  if (!product) return null

  return (
    <CartListItem>
      <Image
        width="100"
        height="50"
        src={product.photo.image?.publicUrlTransformed}
        alt={product.name}
      />
      <div>
        <h3>{product.name}</h3>
        <p>
          {GBPCurrencyFormat(product.price * cartItem.quantity)} -
          <em>
            {cartItem.quantity} &times;
            {GBPCurrencyFormat(product.price)} each
          </em>
        </p>
      </div>
    </CartListItem>
  )
}

const Cart = ({ close, setClose }) => {
  const { user } = useCurrentUser()

  if (!user) return null

  return (
    <CartContainer className="cart-side" close={close}>
      <CloseButton onClick={() => setClose(!close)} close={close}>
        &#x0058;
      </CloseButton>
      <header>
        <Heading>{`${user?.name}'s Cart`}</Heading>
      </header>
      <ul>
        {user?.cart.map(cartItem => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>{GBPCurrencyFormat(cartTotalPrice(user.cart))}</p>
      </footer>
    </CartContainer>
  )
}

export default Cart
