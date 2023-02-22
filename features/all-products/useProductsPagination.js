import { useQuery } from '@apollo/client'
import { productsPaginationQuery } from './productsPaginationQuery'

const useProductsPagination = (page, perPage) => {
  const {
    data: allProds,
    error: allProdsError,
    loading: allProdsLoading
  } = useQuery(productsPaginationQuery, {
    variables: {
      skip: page * perPage - perPage,
      first: perPage
    }
  })

  return {
    allProds,
    allProdsError,
    allProdsLoading
  }
}

export { useProductsPagination }
