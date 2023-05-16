import React from 'react'
import { useQuery } from '@apollo/client'
import Image from 'next/image'
import Head from 'next/head'
import ErrorMessage from '../../utils'
import { OrderContainer, OrderItem, OrderItems, OrderWrapper } from './Order.styled'
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
    <OrderContainer>
      <Head>
        <title>NXShop67 - Order:{order.id}</title>
      </Head>

      <h3>
        Order Id:
        <span>{order.id}</span>
      </h3>
      <h5>
        Transaction:
        <span>{order.charge}</span>
      </h5>
      <OrderWrapper>
        <h4>
          Shøp67<span style={{ fontSize: '0.75rem', color: 'darkred' }}>®</span>
        </h4>
        <p>
          Order Total:
          <span>{GBPCurrencyFormat(order.total)}</span>
        </p>
        <p>
          Total items:
          <span>{order.items.length}</span>
        </p>
        <OrderItems>
          {order.items.map(item => (
            <OrderItem key={item.id}>
              <Image
                width={175}
                height={175}
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
            </OrderItem>
          ))}
        </OrderItems>
      </OrderWrapper>
    </OrderContainer>
  )
}

export default SingleOrderPage
