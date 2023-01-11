import React from 'react'
import Router from 'next/router'
import useForm from '../hooks/form/useForm'
import FormSl from './styles/FormSl'
import LoginSl from './styles/LoginSl'
import AxionSVG from './axionSVG/AxionSVG'
import ErrorMessage from '../lib/ErrorMessage'
import { useCreateProduct } from '../hooks/create-product'

const CreateProduct = () => {
  const { input, resetForm, handleChange } = useForm({
    name: '',
    description: '',
    price: 0,
    image: ''
  })
  const [createProduct, createProductLoading, createProductError] =
    useCreateProduct()

  return (
    <LoginSl>
      {/*//leftside container*/}
      <div className="loginLeftContainer">
        <div className="left-item">
          <AxionSVG width={400} height={400} />

          <div className="login-title">
            <h1>Create a new product</h1>
          </div>

          <h2 className="login-sub-title">Welcome back!</h2>
          <div className="redirect-signup">
            In order to add a new product to database:
            <br />
            Fill out the <b>product form</b>, and press &quot;
            <b>Add Product</b>&quot; button.
          </div>
        </div>
      </div>

      {/*//rightside container*/}
      <FormSl
        onSubmit={async event => {
          event.preventDefault()
          let res = await createProduct({ variables: input })
          resetForm(input)

          await Router.push({
            pathname: `/product/${res?.data.createProduct.id}`
          })
        }}
      >
        <div className="login-title__mobile">
          <h1>Sign in</h1>
        </div>

        <ErrorMessage error={createProductError} />

        {/*//form-fields*/}
        <fieldset
          disabled={createProductLoading}
          aria-busy={createProductLoading}
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
              value={input?.name}
            />
          </label>

          <label htmlFor="image">
            Image:
            <input
              type="file"
              name="image"
              id="image"
              className="image-upload"
              onChange={handleChange}
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
              onChange={handleChange}
              value={input?.description}
            />
          </label>
        </fieldset>

        {/*//buttons*/}
        <button type="submit">Add Product</button>
        <button onClick={() => resetForm(input)} type="button">
          Reset Form
        </button>
      </FormSl>
    </LoginSl>
  )
}

export default CreateProduct
