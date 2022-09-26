import React from 'react'
import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'
import ErrorMessage from '@/lib/ErrorMessage'

const singleProductQuery = gql`
  query singleProductQuery($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
    }
  }
`

export default function SingleProductQuery({ id }) {
  const { data, loading, error } = useQuery(singleProductQuery, {
    variables: {
      id
    }
  })

  if (loading) return <p>Loading...</p>
  if (error) return <ErrorMessage error={error} />

  return (
    <>
      <h2>{data?.Product.name}</h2>
      <p>{data?.Product.price}</p>
      <p>{data?.Product.description}</p>
    </>
  )
}
