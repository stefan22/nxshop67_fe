import { gql } from '@apollo/client'
export const currentUserQuery = gql`
  query {
    authenticatedItem {
      ... on User {
        id
        email
        name
      }
    }
  }
`
