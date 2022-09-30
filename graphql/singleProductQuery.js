import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'

const singleProductQuery = gql`
  query singleProductQuery($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
    }
  }
`

export default function useSingleProduct({ id }) {
  const {
    data: singleProd,
    loading: singleProdLoading,
    error: singleProdError
  } = useQuery(singleProductQuery, {
    variables: {
      id
    }
  })

  return {
    singleProd,
    singleProdLoading,
    singleProdError
  }
}
