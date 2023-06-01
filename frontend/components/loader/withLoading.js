import React, { useState, useEffect } from 'react'
const withLoading =
  (Component, LoadingComponent) =>
  ({ ...rest }) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      let testloader
      testloader = setTimeout(() => {
        if (loading) setLoading(false)
      }, 250)
      return () => clearTimeout(testloader)
    }, [loading])

    if (loading) return <LoadingComponent />
    return <Component {...rest} />
  }

export default withLoading
