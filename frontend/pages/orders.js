import { useQuery } from '@apollo/client'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import ErrorMessage from '../utils/ErrorMessage'
import { OrderItemStyles, OrderUl, OrdersWrapper } from './order/Order.styled'
import { GBPCurrencyFormat } from '../utils/currencyFormat'
import { userOrdersQuery } from '../features/order'

function countItemsInAnOrder(order) {
  return order.items.reduce((tally, item) => tally + item.quantity, 0)
}

const OrdersPage = () => {
  const { data, error, loading } = useQuery(userOrdersQuery)
  if (loading) return <p>Loading...</p>
  if (error) return <ErrorMessage error={error} />
  const { allOrders } = data

  return (
    <OrdersWrapper>
      <Head>
        <title>Your Orders ({allOrders.length})</title>
      </Head>
      <h2>You have {allOrders.length} orders!</h2>
      <OrderUl>
        {allOrders.map((order, idx) => (
          <OrderItemStyles key={idx}>
            <Link passHref href={`/order/${order.id}`}>
              <a>
                <div className="order-meta">
                  <h4>Order #</h4>
                  <p>
                    Number of items: {countItemsInAnOrder(order)}
                    <br />
                    Total amount: {GBPCurrencyFormat(order.total)}
                  </p>
                </div>
                <div className="images">
                  {order.items.map(item => (
                    <Image
                      width={100}
                      height={100}
                      key={`image-${item.id}`}
                      src={item.photo?.image?.publicUrlTransformed}
                      alt={item.name}
                    />
                  ))}
                </div>
              </a>
            </Link>
          </OrderItemStyles>
        ))}
      </OrderUl>
    </OrdersWrapper>
  )
}

export default OrdersPage
