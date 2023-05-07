import gql from 'graphql-tag'

const createOrderMutation = gql`
  mutation createOrderMutation($token: String!) {
    checkout(token: $token) {
      id
      charge
      total
      items {
        id
        name
      }
    }
  }
`

export default createOrderMutation
