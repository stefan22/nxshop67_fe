import { useState } from 'react'

/*
 * @fn useForm
 * Hook manages state across forms
 * @return inputs,resetForm, handleChange,handleSubmit
 * */

const useForm = () => {
  const [input, setInput] = useState({
    name: '',
    image: '',
    description: '',
    price: 0
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
