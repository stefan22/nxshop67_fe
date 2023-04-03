import { useState } from 'react'

/*
 * @fn useEditProduct
 * @return inputs,resetForm, handleChange
 * */

const useForm = () => {
  const [inputs, setInput] = useState({
    name: '',
    description: '',
    price: 0,
    email: '',
    password: ''
  })

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

  const resetForm = obj => {
    const isReset = Object.fromEntries(
      Object.entries(obj).map(([key, val]) => [key, ' '])
    )
    setInput(isReset)
  }

  return {
    inputs,
    resetForm,
    handleChange
  }
}

export default useForm
