import { useMutation } from '@apollo/client'
import { createProductMutation } from './createProductMutation'

const useCreateProduct = () => {
  const [createProduct, { loading: createProductLoading, error: createProductError }] =
    useMutation(createProductMutation)

  return [createProduct, createProductLoading, createProductError]
}

export { useCreateProduct }
