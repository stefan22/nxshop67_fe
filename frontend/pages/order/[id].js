import React from 'react'
import { useQuery } from '@apollo/client'
import Image from 'next/image'
import Head from 'next/head'
import ErrorMessage from '../../utils'
import { OrderStyles } from './Order.styled'
import { GBPCurrencyFormat } from '../../utils'
import { singleOrderQuery } from '../../features/order'

const SingleOrderPage = ({ query }) => {
  const { data, error, loading } = useQuery(singleOrderQuery, {
    variables: { id: query.id }
  })
  if (loading) return <p>Loading...</p>
  if (error) return <ErrorMessage error={error} />
  const { order } = data
  return (
    <OrderStyles>
      <Head>
        <title>NXShop67 - Order:{order.id}</title>
      </Head>

      <p>
        <span>Order Id:</span>
        <span>{order.id}</span>
      </p>
      <p>
        <span>Charge:</span>
        <span>{order.charge}</span>
      </p>
      <p>
        <span>Order Total:</span>
        <span>{GBPCurrencyFormat(order.total)}</span>
      </p>
      <p>
        <span>ItemCount:</span>
        <span>{order.items.length}</span>
      </p>
      <div className="items">
        {order.items.map(item => (
          <div className="order-item" key={item.id}>
            <Image
              width={200}
              height={200}
              src={item.photo.image.publicUrlTransformed}
              alt={item.title}
            />
            <div className="item-details">
              <h2>{item.name}</h2>
              <p>Qty: {item.quantity}</p>
              <p>Each: {GBPCurrencyFormat(item.price)}</p>
              <p>Sub Total: {GBPCurrencyFormat(item.price * item.quantity)}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </OrderStyles>
  )
}

export default SingleOrderPage
