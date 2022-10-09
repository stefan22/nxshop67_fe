import { gql, useQuery } from '@apollo/client'

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

const useCurrentUser = () => {
  const {
    data: currentUser,
    loading: userLoading,
    error: userError
  } = useQuery(currentUserQuery)

  if (userLoading) return <p>Loading...</p>
  if (userError) return console.log(userError)

  return {
    currentUser: currentUser?.authenticatedItem
  }
}

export { useCurrentUser }
