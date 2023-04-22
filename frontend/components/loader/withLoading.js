import React, { useState, useEffect } from 'react'
const withLoading =
  (Component, LoadingComponent) =>
  ({ ...rest }) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      let testTimeout
      if (loading) {
        testTimeout = setTimeout(function () {
          setLoading(false)
        }, 500)
      }
      return () => testTimeout
    }, [loading])

    if (loading) return <LoadingComponent />
    return <Component {...rest} />
  }

export default withLoading
