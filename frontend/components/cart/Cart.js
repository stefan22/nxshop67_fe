import React from 'react'
import Image from 'next/image'
import {
  CartContainer,
  HeadingWrapper,
  Heading,
  CloseButton,
  CartListItem
} from './Cart.styles'
import { useCurrentUser } from '../../features/current-user'
import { GBPCurrencyFormat } from '../../utils/currencyFormat'
import { cartTotalPrice } from '../../utils/cartTotalPrice'
import { CartItemInfo } from './Cart.styles'
import {
  GrClose,
  GrTag,
  GrFormTrash,
  GrShop,
  GrTrash,
  GrCreditCard,
  GrBasket,
  GrCart
} from 'react-icons/gr'
import { AiOutlinePoundCircle } from 'react-icons/ai'

const CartItem = ({ cartItem }) => {
  const { product } = cartItem
  if (!product) return null

  return (
    <CartListItem>
      <Image
        width="100"
        height="100"
        src={product.photo.image?.publicUrlTransformed}
        alt={product.name}
      />
      <CartItemInfo>
        <h3>
          <GrTag /> {product.name}
        </h3>
        <p>
          {GBPCurrencyFormat(product.price * cartItem.quantity)} -
          <em>
            {cartItem.quantity} <GrShop />
            {GBPCurrencyFormat(product.price)} each
          </em>
        </p>
      </CartItemInfo>
    </CartListItem>
  )
}

const Cart = ({ close, setClose }) => {
  const { user } = useCurrentUser()

  if (!user) return null

  return (
    <CartContainer className="cart-side" close={close}>
      <HeadingWrapper>
        <CloseButton onClick={() => setClose(!close)} close={close}>
          <GrClose />
        </CloseButton>
        <header>
          <Heading>
            CART <GrCart />
          </Heading>
        </header>
      </HeadingWrapper>
      <ul>
        {user?.cart.map(cartItem => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <footer>
        <p>
          <AiOutlinePoundCircle />
          {GBPCurrencyFormat(cartTotalPrice(user.cart))}
        </p>
      </footer>
    </CartContainer>
  )
}

export default Cart
