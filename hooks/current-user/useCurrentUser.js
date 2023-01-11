import { useQuery } from '@apollo/client'
import { currentUserQuery } from './currentUserQuery'

const useCurrentUser = () => {
  const {
    data: currentUser,
    loading: userLoading,
    error: userError
  } = useQuery(currentUserQuery)

  if (userLoading) return <p>Loading...</p>
  // eslint-disable-next-line no-console
  if (userError) return console.log(userError)

  return {
    currentUser: currentUser?.authenticatedItem
  }
}

export { useCurrentUser }
