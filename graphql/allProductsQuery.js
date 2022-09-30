import { useQuery } from '@apollo/client'
import gql from 'graphql-tag'

const allProductsQuery = gql`
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

const useAllProducts = () => {
  const {
    data: allProds,
    error: allProdsError,
    loading: allProdsLoading
  } = useQuery(allProductsQuery)

  return {
    allProds,
    allProdsError,
    allProdsLoading
  }
}

export default useAllProducts
