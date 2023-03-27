import React, { useState, useEffect } from 'react'
const withLoading =
  (Component, LoadingComponent) =>
  ({ ...rest }) => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      let timeout = setTimeout(() => {
        return setLoading(false)
      }, 3000)
      return () => clearTimeout(timeout)
    }, [])

    if (loading) return <LoadingComponent />
    return <Component {...rest} />
  }

export default withLoading
