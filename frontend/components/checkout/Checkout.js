import { loadStripe } from '@stripe/stripe-js'
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js'
import { useRouter } from 'next/router'
import nProgress from 'nprogress'
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { cartTotalPrice } from '../../utils'
import { useCartState } from '../../utils'
import { currentUserQuery, useCurrentUser } from '../../features/current-user'
import { createOrderMutation } from '../../features/order'
import { CheckoutFormStyles } from './Checkout.styled'

const stripe = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY)

const CheckoutForm = () => {
  const { user } = useCurrentUser()
  const router = useRouter()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const stripe = useStripe()
  const elements = useElements()
  const { setClose } = useCartState()

  const [checkout, { error: graphQLError }] = useMutation(createOrderMutation, {
    refetchQueries: [{ query: currentUserQuery }]
  })

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError({ message: '' })
    nProgress.start()

    // zero amount
    if (cartTotalPrice(user?.cart) <= 0) return

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })

    if (error) {
      // eslint-disable-next-line no-console
      console.log('error is ', error)
      setError(error)
      nProgress.done()
      return
    }

    // send token
    const order = await checkout({
      variables: {
        token: paymentMethod?.id
      }
    })

    setLoading(false)
    nProgress.done()
    setClose(true)

    //to usr-acct mini-dashbrd - all orders
    await router.push({
      pathname: `account`,
      query: { id: order.data.checkout.id }
    })
  }

  return (
    <CheckoutFormStyles onSubmit={handleSubmit}>
      {error && <p style={{ fontSize: 12 }}>{error.message}</p>}
      {graphQLError && <p style={{ fontSize: 12 }}>{graphQLError.message}</p>}
      <CardElement />
      <button>Check Out Now</button>
    </CheckoutFormStyles>
  )
}

const Checkout = () => {
  return (
    <Elements stripe={stripe}>
      <CheckoutForm />
    </Elements>
  )
}

export default Checkout
