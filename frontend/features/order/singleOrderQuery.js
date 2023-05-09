import gql from 'graphql-tag'

const singleOrderQuery = gql`
  query singleOrderQuery($id: ID!) {
    order: Order(where: { id: $id }) {
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

export default singleOrderQuery
