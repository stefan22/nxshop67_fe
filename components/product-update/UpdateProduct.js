import { ProductUpdate, FormContainer } from './UpdateProduct.styles'
import { useEditProduct } from '../../hooks/form'

export const UpdateProduct = () => {
  //passing id in useForm
  const { input, loading, handleChange } = useEditProduct()

  if (loading) return <p>Loading...</p>

  return (
    <div className="product-update">
      <ProductUpdate>
        <p>NAME: {input?.name}</p>
        <p>DESC: {input?.description}</p>
        <p>PRICE: {input?.price}</p>
        <p>IMG SRC: {input?.photo?.image.publicUrlTransformed}</p>
      </ProductUpdate>

      <FormContainer>
        <div className="login-title__mobile">
          <h1>Sign in</h1>
        </div>

        <fieldset>
          <label htmlFor="name">
            Name:
            <input
              placeholder="Enter name"
              type="text"
              name="name"
              id="name"
              required={true}
              value={input?.name}
              onChange={e => handleChange(e)}
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
              onChange={e => handleChange(e)}
              value={input?.price}
            />
          </label>

          <label htmlFor="description">
            Description:
            <textarea
              placeholder="Enter description"
              name="description"
              id="description"
              required={true}
              onChange={e => handleChange(e)}
              value={input?.description}
            />
          </label>
        </fieldset>

        <button disabled type="submit">
          Update Product
        </button>
      </FormContainer>
    </div>
  )
}
