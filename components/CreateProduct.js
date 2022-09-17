import React, { useState, useEffect } from 'react'
import useForm from '../lib/useForm'
import Form from './styles/FormSl'

const CreateProduct = () => {
  const { input, error, handleChange, handleSubmit } = useForm({})
  const [message, setMessage] = useState(false)

  useEffect(() => {
    setMessage(false)
  }, [])

  return (
    <>
      {message ? (
        <p
          style={{
            display: 'flex',
            // remove all inline styles
            justifyContent: 'center',
            margin: '1rem 0',
            width: '250px',
            alignItems: 'center',
            ouotline: 'none',
            color: 'red',
            border: 'none',
            alignContent: 'center',
            height: '50px'
          }}
        >
          Form has been submitted!
        </p>
      ) : (
        <p></p>
      )}
      <Form
        onSubmit={event => {
          //comma stays
          // for the 'form submitted' msg to appear, onSubmit pass the data,
          // form to clear, and to reset msg in useEff
          setMessage(true), () => handleSubmit(event)
        }}
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
          <input
            placeholder="Enter description"
            type="textarea"
            name="description"
            id="description"
            required={true}
            onChange={handleChange}
            value={input?.description}
          />
        </label>
        <button type="submit">Add Product</button>
      </Form>
    </>
  )
}

export default CreateProduct
