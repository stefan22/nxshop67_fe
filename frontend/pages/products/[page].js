import React from 'react'
import { useRouter } from 'next/router'
import Products from '../../components/products'

const ProductsPage = () => {
  const { query } = useRouter()
  const page = parseInt(query.page)

  return <Products page={page || 1} />
}

export default ProductsPage
