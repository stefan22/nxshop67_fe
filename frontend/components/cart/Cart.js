import React from 'react'
import {
  CartContainer,
  HeadingWrapper,
  Heading,
  CloseButton,
  FooterInfo
} from './Cart.styled'
import { useCurrentUser } from '../../features/current-user'
import { GBPCurrencyFormat } from '../../utils'
import { cartTotalPrice } from '../../utils'
import { GrClose, GrCreditCard, GrBasket } from 'react-icons/gr'
import CartItem from './CartItem'

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
          <GrCreditCard size={20} />
        </p>
        <p>{GBPCurrencyFormat(cartTotalPrice(user.cart))}</p>
      </FooterInfo>
    </CartContainer>
  )
}

export default Cart
