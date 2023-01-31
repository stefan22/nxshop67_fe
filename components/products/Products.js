import React from 'react'
import Product from '../product'
import { ProductsContainer } from './Products.styles'
import { useAllProducts } from '../../hooks/all-products'
import ErrorMessage from '@/lib/ErrorMessage'

const Products = () => {
  const { allProds, allProdsLoading, allProdsError } =
    useAllProducts()

  if (allProdsLoading) return <p>Loading...</p>
  if (allProdsError) return <ErrorMessage error={allProdsError} />

  return (
    <ProductsContainer data-testid="all-products">
      {allProds?.allProducts.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </ProductsContainer>
  )
}

export default Products
