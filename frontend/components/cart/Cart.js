import React from 'react'
import Image from 'next/image'
import {
  CartContainer,
  HeadingWrapper,
  Heading,
  CloseButton,
  CartListItem,
  CartItemInfo,
  FooterInfo
} from './Cart.styles'
import { useCurrentUser } from '../../features/current-user'
import { GBPCurrencyFormat } from '../../utils/currencyFormat'
import { cartTotalPrice } from '../../utils/cartTotalPrice'
import { GrClose, GrTag, GrShop, GrCreditCard, GrBasket } from 'react-icons/gr'
// GrFormTrash,  GrTrash,  GrCart

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
            CART <GrBasket />
          </Heading>
        </header>
      </HeadingWrapper>
      <ul>
        {user?.cart.map(cartItem => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>
      <FooterInfo>
        <span style={{ visibility: 'hidden' }}></span>
        <p>
          <GrCreditCard size={16} />
        </p>
        <p>{GBPCurrencyFormat(cartTotalPrice(user.cart))}</p>
      </FooterInfo>
    </CartContainer>
  )
}

export default Cart
