import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSingleProduct } from '../single-product'

/*
 * @fn useEditProduct
 * @return inputs,resetForm, handleChange
 * */

const useEditProduct = () => {
  const { query } = useRouter()
  const [input, setInput] = useState({
    name: '',
    description: '',
    price: 0
  })
  const [loading, setLoading] = useState(true)

  const {
    singleProduct,
    singleProductLoading,
    singleProductError } = useSingleProduct(query.id)

  useEffect(() => {
    if (singleProduct) {
      const { Product } = singleProduct

      setInput({
        ...Product
      })
      setLoading(false)
    }
  }, [singleProduct])

  const handleChange = e => {
    let { name, value } = e.target

    return setInput({
      ...input,
      [name]: value
    })
  }

  const resetForm = obj =>
    setInput(Object.fromEntries(Object.entries(obj).map(([itm, val]) => [itm, ' '])))

  // eslint-disable-next-line no-console
  if (singleProductError)
    return console.log('[From:useEditProduct] Error Msg: ', singleProductError)

  return {
    input,
    resetForm,
    handleChange,
    singleProductLoading
  }
}

export default useEditProduct
