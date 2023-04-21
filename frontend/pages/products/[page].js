import React from 'react'
import { useRouter } from 'next/router'
import Products from '../../components/products'
import { SkeleLoader, withLoading } from '../../components/loader'

const ProductsPg = () => {
  const { query } = useRouter()
  const page = parseInt(query.page)
  return <Products page={page || 1} />
}

export default withLoading(ProductsPg, SkeleLoader)
