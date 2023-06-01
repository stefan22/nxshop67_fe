import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client'
import productsPaginationQuery from './productsPaginationQuery'
import Constants from '../../utils/constants'

const useProductsPagination = ({ page }) => {
  // env set to 5
  const perPage = Constants.SET_PAGINATION_NAV_PER_PAGE

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
