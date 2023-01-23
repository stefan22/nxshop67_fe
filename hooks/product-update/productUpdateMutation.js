import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'

export const productUpdateMutation = gql`
  mutation productUpdateMutation(
    $id: ID!
    $name: String
    $description: String
    $price: Int
  ) {
    updateProduct(
      id: $id
      data: {
        id: $id
        name: $name
        description: $description
        price: $price
      }
    ) {
      id
      name
      description
      price
    }
  }
`
