/*
 *  @fn useFetch - used for fetching data from an API endpoint.
 *  The usestate hook is used to initialize.
 *  The useEffect hook used to fetch data.
 * @param  It takes a Url/ endpoint parameter
 * @returns data, loading and error <object>
 * */

import { useState, useEffect } from 'react'

const useFetch = url => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const jsonData = await response.json()
        setData(jsonData)
        setLoading(false)
      } catch (err) {
        setError(err)
        setLoading(false)
        // eslint-disable-next-line no-console
        console.log(`Failed to fetch. Error: ${err}`)
      }
    }
    fetchData()
  }, [url])

  return {
    data,
    loading,
    error
  }
}

export default useFetch
