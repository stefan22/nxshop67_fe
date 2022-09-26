import React from 'react'
import { useQuery } from '@apollo/client'
import styled from 'styled-components'
import gql from 'graphql-tag'
import Product from './Product'
import ErrorMessage from '../lib/ErrorMessage'

export const allProductsQuery = gql`
  query allProductsQuery {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`

const ProductsListSl = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  overflow-x: hidden;
  width: 100%;
  height: auto;
  justify-content: space-between;
`

const Products = () => {
  const { data, error, loading } = useQuery(allProductsQuery)
  if (loading) return <p>Loading...</p>

  if (error) return <ErrorMessage error={error} />

  const { allProducts } = data
  return (
    <ProductsListSl>
      {allProducts?.map(product => (
        <Product key={product.id} product={product} />
      ))}
    </ProductsListSl>
  )
}

export default Products
