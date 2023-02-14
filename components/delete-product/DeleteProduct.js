import { useMutation } from '@apollo/client'
import gql from 'graphql-tag'
import DeleteButton from './Delete.styles'

const deleteProductMutation = gql`
  mutation deleteProductMutation($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`

//update apollo cache of deleted product
const update = (cache, payload) => {
  const {
    data: {
      deleteProduct: { id, name }
    }
  } = payload
  // eslint-disable-next-line no-console
  console.log(`Product: ${name}, id: ${id} deleted.`)
  cache.evict(payload)
}

const DeleteProduct = ({ id, btnName }) => {
  const [deleteProduct, { loading: loadingDeleteProduct, error: errorDeleteProduct }] = useMutation(
    deleteProductMutation,
    {
      variables: { id },
      update
    }
  )
  // eslint-disable-next-line no-console
  if (errorDeleteProduct) return console.log(`[Error:mesage] ${errorDeleteProduct}`)
  return (
    <DeleteButton>
      <button
        type="button"
        disabled={loadingDeleteProduct}
        onClick={() => {
          if (confirm('To permanently delete this product press OK.')) {
            deleteProduct(id).catch(err => alert(err.message))
          }
        }}
      >
        {btnName} &#x23F5;
      </button>
    </DeleteButton>
  )
}

export default DeleteProduct
