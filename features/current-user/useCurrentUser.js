import { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { currentUserQuery } from './currentUserQuery'

const useCurrentUser = () => {
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState({ name: '', email: '', id: '' })
  const [error, setError] = useState('')
  const { data: currentUser, loading: userLoading, error: userError } = useQuery(currentUserQuery)

  useEffect(() => {
    let isAuthenticated = new Promise(function (resolve) {
      return resolve(currentUser?.data.authenticatedItem)
    })
    isAuthenticated
      .then(data => {
        const { authenticatedItem } = data
        return setUser({
          name: authenticatedItem.name,
          email: authenticatedItem.email,
          id: authenticatedItem.id
        })
      })
      .catch(err => setError(userError))
      .finally(() => setLoading(false))
  }, [currentUser, userError])

  // eslint-disable-next-line no-console
  if (userError) return console.log(userError)

  return {
    currentUser: currentUser?.authenticatedItem,
    userLoading,
    userError
  }
}

export { useCurrentUser }
