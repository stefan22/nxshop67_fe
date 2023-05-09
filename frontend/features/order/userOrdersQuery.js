import gql from 'graphql-tag'

const userOrdersQuery = gql`
  query userOrdersQuery {
    allOrders {
      id
      charge
      total
      user {
        id
      }
      items {
        id
        name
        description
        price
        quantity
        photo {
          image {
            publicUrlTransformed
          }
        }
      }
    }
  }
`

export default userOrdersQuery
