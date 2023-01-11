import { useQuery } from '@apollo/client'
import { singleProductQuery } from './singleProductQuery'

export function useSingleProduct(id) {
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
