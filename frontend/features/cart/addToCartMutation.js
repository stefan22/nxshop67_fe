import gql from 'graphql-tag'

const addToCartMutation = gql`
  mutation addToCartMutation($id: ID!) {
    addToCart(productId: $id) {
      id
    }
  }
`

export default addToCartMutation
