import { useState } from 'react'

/*
 * @fn useEditProduct
 * @return inputs,resetForm, handleChange
 * */

const useForm = () => {
  const [input, setInput] = useState({
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
      ...input,
      [name]: value
    })
  }

  const resetForm = obj =>
    setInput(
      Object.fromEntries(
        //clear input fields
        Object.entries(obj).map(([itm, val]) => [itm, ' '])
      )
    )

  return {
    input,
    resetForm,
    handleChange
  }
}

export default useForm
