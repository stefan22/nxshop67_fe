import { FormContainer } from './UpdateProduct.styles'
import { useEditProduct } from '../../hooks/edit-product'

export const EditProduct = () => {
  //passing id in useForm
  const { input, loading, handleChange } = useEditProduct()
  if (loading) return <p>Loading...</p>

  return (
    <FormContainer>
      <ul>
        <li>
          <span>Name:</span> {input.name}
        </li>
        <li>
          <span>Desc:</span> {input.description}
        </li>
        <li>
          <span>Price:</span> {input.price}
        </li>
        <li>
          <span>Img src:</span> {input.photo?.image.publicUrlTransformed}
        </li>
      </ul>

      <form>
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
      </form>
    </FormContainer>
  )
}
