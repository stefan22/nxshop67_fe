import { useState } from 'react'

/*
 * @fn useForm
 * Hook for managing state across forms
 * @return inputs,error, handleChange,handleSubmit <object>
 * */

const useForm = () => {
  const [input, setInput] = useState({
    //createProduct form input fields
    name: '',
    description: '',
    price: 0
  })
  const [error, setError] = useState(false)

  const handleChange = e => {
    const { name, value, type } = e.target

    if (type === 'number') {
      let price = parseInt(value)
      setInput({
        ...input,
        [name]: price
      })
    }

    setInput({
      ...input,
      [name]: value
    })
  }

  const clearForm = obj =>
    Object.fromEntries(
      //clear input fields
      Object.entries(obj).map(([itm, val]) => [itm, ' '])
    )

  const handleSubmit = e => {
    e.preventDefault()
    const { name, price, description } = input
    //error as is fine for now
    if (price === 0 && name.length <= 3 && description.length <= 3) {
      return setError(true) //exit if
    }
    // disable-eslint-next-line
    console.log(
      input.name,
      '\n\n',
      input.price,
      '\n\n',
      input.description
    )
    //form submitted, clear fields
    clearForm(input)
  }

  return {
    input,
    error,
    handleChange,
    handleSubmit
  }
}

export default useForm
