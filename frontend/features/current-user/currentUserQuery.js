import { gql } from '@apollo/client'

const currentUserQuery = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
        cart {
          id
          quantity
          product {
            id
            price
            name
            photo {
              image {
                publicUrlTransformed
              }
            }
          }
        }
      }
    }
  }
`

export default currentUserQuery
