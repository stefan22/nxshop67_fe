import React from 'react'
import {
  CartContainer,
  HeadingWrapper,
  Heading,
  CloseButton,
  FooterInfo
} from './Cart.styled'
import { useCurrentUser } from '../../features/current-user'
import { GBPCurrencyFormat } from '../../utils/currencyFormat'
import { cartTotalPrice } from '../../utils/cartTotalPrice'
import { GrClose, GrCreditCard, GrBasket } from 'react-icons/gr'
import CartItem from './CartItem'
import Checkout from '../checkout'

const Cart = ({ close, setClose }) => {
  const { user } = useCurrentUser()

  if (!user) return null
  // eslint-disable-next-line no-console
  console.log(user.cart)
  return (
    <CartContainer className="cart-side" close={close}>
      <HeadingWrapper>
        <CloseButton onClick={() => setClose(!close)} close={close}>
          <GrClose />
        </CloseButton>
        <header>
          <Heading>
            CART <GrBasket size={14} />
          </Heading>
        </header>
      </HeadingWrapper>
      <ul>
        {user?.cart.map(cartItem => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </ul>

      <FooterInfo>
        <div className="footer-total">
          <GrCreditCard size={16} /> Total amount <span>(inc.taxes)</span>
          <p> {GBPCurrencyFormat(cartTotalPrice(user.cart))}</p>
        </div>
        <div className="footer-checkout">
          <Checkout />
        </div>
      </FooterInfo>
    </CartContainer>
  )
}

export default Cart
