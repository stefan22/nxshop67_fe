import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { currentUserQuery } from './currentUserQuery'

const useCurrentUser = () => {
  const [loading, setLoading] = useState(true)
  const { data: currentUser, loading: userLoading, error: userError } = useQuery(currentUserQuery)

  useEffect(() => {
    setLoading(false)
  }, [currentUser])

  // eslint-disable-next-line no-console
  if (userError) return console.log(userError)

  return {
    currentUser: currentUser?.authenticatedItem,
    userLoading
  }
}

export { useCurrentUser }
