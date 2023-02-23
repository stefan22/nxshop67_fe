import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import productsPaginationQuery from './productsPaginationQuery'
import getConfig from 'next/config'

const useProductsPagination = ({ page }) => {
  // env set to 5
  const { publicRuntimeConfig } = getConfig()
  const perPage = Number(publicRuntimeConfig.GQL_PER_PAGE) || 2

  const { data: allProds } = useQuery(productsPaginationQuery, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage
    }
  })
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (allProds) {
      let isProducts = allProds?.allProducts
      setItems(isProducts)
    }
  }, [allProds])

  return {
    items,
    loading,
    setLoading
  }
}

export default useProductsPagination
