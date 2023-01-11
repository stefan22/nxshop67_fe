import React from 'react'
import styled from 'styled-components'
import Product from './Product'
import { useAllProducts } from '../hooks/all-products'
import ErrorMessage from '../lib/ErrorMessage'

const ProductsListSl = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-x: hidden;
  width: 100%;
  max-width: 1440px;
  height: auto;
  justify-content: space-between;
`

const Products = () => {
  const { allProds, allProdsLoading, allProdsError } =
    useAllProducts()

  if (allProdsLoading) return <p>Loading...</p>
  if (allProdsError) return <ErrorMessage error={allProdsError} />


  return (
    <ProductsListSl data-testid="all-products">
      {allProds?.allProducts.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </ProductsListSl>
  )
}

export default Products
