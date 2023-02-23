import { useMutation } from '@apollo/client'
import productUpdateMutation from './productUpdateMutation'

function useProductUpdate(id) {
  const {
    data: productUpdate,
    loading: productUpdateLoading,
    error: productUpdateError
  } = useMutation(productUpdateMutation, {
    variables: {
      id
    }
  })

  return {
    productUpdate,
    productUpdateLoading,
    productUpdateError
  }
}

export default useProductUpdate
