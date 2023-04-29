import gql from 'graphql-tag'

const removeFromCartMutation = gql`
  mutation removeFromCartMutation($id: ID!) {
    deleteCartItem(id: $id) {
      id
      user {
        name
      }
      quantity
    }
  }
`

export default removeFromCartMutation
