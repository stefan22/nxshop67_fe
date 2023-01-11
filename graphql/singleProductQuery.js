import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'

const SingleProductQuery = gql`
  query singleProductQuery($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
      photo {
        image {
          filename
          publicUrlTransformed
        }
        altText
      }
    }
  }
`

export default function useSingleProduct(id) {
  const {
    data: singleProd,
    loading: singleProdLoading,
    error: singleProdError
  } = useQuery(SingleProductQuery, {
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
