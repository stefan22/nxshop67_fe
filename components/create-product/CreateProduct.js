import React from 'react'
import Router from 'next/router'
import useAddForm from '../../hooks/form'
import { ProductContainer, LoginContainer } from './CreateProduct.styles'
import ErrorMessage from '@/lib/ErrorMessage'
import { useCreateProduct } from '../../hooks/create-product'

/*
 *  I have remove routed page linked to this component atm
 * */
const CreateProduct = () => {
  const { input, resetForm, handleChange } = useAddForm()
  const [createProduct, createProductLoading, createProductError] = useCreateProduct()

  return (
    <LoginContainer>
      <div className="loginLeftContainer">
        <div className="left-item">
          <div className="login-title">
            <h1>Usr accnt new itm selling form</h1>
          </div>

          <h2 className="login-sub-title">have 2 finish p theme!</h2>
          <div className="redirect-signup">
            New product to db by user of the acct: (sell) aproval req. Other form deals w user selling/
            editing already approvd listing - no image needed there
            <br />
            edit btn should b shown only to owner of itm when signed in. - keeping both forms for now
          </div>
        </div>
      </div>

      {/*//rightside container*/}
      <ProductContainer
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
        <fieldset disabled={createProductLoading} aria-busy={createProductLoading}>
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
            <input type="file" name="image" id="image" className="image-upload" onChange={handleChange} />
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
      </ProductContainer>
    </LoginContainer>
  )
}

export default CreateProduct
