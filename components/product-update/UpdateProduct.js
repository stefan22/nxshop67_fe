import { useSingleProduct } from '../../hooks/single-product'
import { useProductUpdate } from '../../hooks/product-update'
import FormProductStyles from './FormProduct.styles'
import ProductUpdateStyles from '@/components/product-update/ProductUpdate.styles'
import ErrorMessage from '@/lib/ErrorMessage'
import useForm from '../../hooks/form/useForm'

export const UpdateProduct = ({ id }) => {
  const { input, handleChange } = useForm({
    name: '',
    description: '',
    price: 0
  })
  const { singleProd, singleProdLoading, singleProdError } =
    useSingleProduct(id)

  if (singleProdLoading) return <p>Loading...</p>
  if (singleProdError) return <p>{singleProdError}</p>

  const { Product } = singleProd

  return (
    <div className="product-update">
      {!singleProdLoading && (
        <ProductUpdateStyles>
          <p>NAME: {Product.name}</p>
          <p>DESC: {Product.description}</p>
          <p>PRICE: {Product.price}</p>
          <p>IMG SRC: {Product.photo.image.publicUrlTransformed}</p>
        </ProductUpdateStyles>
      )}
      <FormProductStyles>
        <div className="login-title__mobile">
          <h1>Sign in</h1>
        </div>

        <ErrorMessage error={singleProdError} />

        {/*//form-fields*/}
        <fieldset
          disabled={singleProdLoading}
          aria-busy={singleProdLoading}
        >
          <label htmlFor="name">
            Name:
            <input
              placeholder="Enter name"
              type="text"
              name="name"
              id="name"
              required={true}
              onChange={handleChange}
              value={Product?.name}
            />
          </label>

          <label htmlFor="price">
            Price:
            <input
              placeholder="Enter price"
              type="number"
              name="price"
              id="price"
              required={true}
              onChange={handleChange}
              value={Product?.price}
            />
          </label>

          <label htmlFor="description">
            Description:
            <textarea
              placeholder="Enter description"
              name="description"
              id="description"
              required={true}
              onChange={handleChange}
              value={Product?.description}
            />
          </label>
        </fieldset>

        <button disabled type="submit">
          Update Product
        </button>
      </FormProductStyles>
    </div>
  )
}
