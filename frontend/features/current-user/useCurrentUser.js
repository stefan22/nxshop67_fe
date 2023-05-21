import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import currentUserQuery from './currentUserQuery'

const useCurrentUser = () => {
  const [loading, setLoading] = useState(true)
  const { data: user } = useQuery(currentUserQuery)

  useEffect(() => {
    if (user) return setLoading(false)
  }, [user])

  return {
    user: user?.authenticatedItem,
    loading
  }
}

export default useCurrentUser
