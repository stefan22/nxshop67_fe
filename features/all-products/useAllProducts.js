import { useQuery } from '@apollo/client'
import { allProductsQuery } from './allProductsQuery'
const useAllProducts = () => {
  const { data: allProds, error: allProdsError, loading: allProdsLoading } = useQuery(allProductsQuery)

  return {
    allProds,
    allProdsError,
    allProdsLoading
  }
}

export { useAllProducts }
