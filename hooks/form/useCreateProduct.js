import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSingleProduct } from '../single-product'

/*
 * @fn useEditProduct
 * @return inputs,resetForm, handleChange
 * */

const useCreateProduct = () => {
  const { query } = useRouter()
  const [input, setInput] = useState({
    name: '',
    description: '',
    price: 0
  })
  const [loading, setLoading] = useState(true)

  const { singleProd, singleProdLoading, singleProdError } = useSingleProduct(query.id)

  useEffect(() => {
    if (singleProd) {
      const { Product } = singleProd
      setInput({
        ...Product
      })
      setLoading(false)
    }
  }, [singleProd])

  const handleChange = e => {
    let { name, value } = e.target

    return setInput({
      ...input,
      [name]: value
    })
  }

  const resetForm = obj => setInput(Object.fromEntries(Object.entries(obj).map(([itm, val]) => [itm, ' '])))

  // eslint-disable-next-line no-console
  if (singleProdError) return console.log('[From:useCreateProduct] Error Msg: ', singleProdError)

  return {
    input,
    resetForm,
    handleChange,
    singleProdLoading
  }
}

export default useCreateProduct
