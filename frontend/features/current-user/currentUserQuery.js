import { gql } from '@apollo/client'

const currentUserQuery = gql`
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

export default currentUserQuery
