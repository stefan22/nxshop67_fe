import { useState } from 'react'

/*
 * @fn useEditProduct
 * @return inputs,resetForm, handleChange
 * */

const initialState = {
  name: '',
  description: '',
  price: 0,
  email: '',
  password: ''
}

const useForm = () => {
  const [inputs, setInput] = useState(initialState)

  const handleChange = e => {
    let { name, value, type } = e.target

    if (type === 'number') {
      value = parseInt(value)
    }

    if (type === 'file') {
      value = e.target.files[0]
    }

    return setInput({
      ...inputs,
      [name]: value
    })
  }

  const resetForm = () => {
    let isReset = Object.fromEntries(
      Object.entries(inputs).map(([key, val]) => [key, ' '])
    )
    return setInput(isReset)
  }

  const formClear = () => setInputs(initialState)

  return {
    inputs,
    resetForm,
    formClear,
    handleChange
  }
}

export default useForm
