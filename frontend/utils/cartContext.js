/*
 * @fn useCartState hook
 * @fn CartContextProvider
 */

import React, { createContext, useContext, useState } from 'react'
// cart context
const CartContext = createContext('')

const CartContextProvider = ({ children }) => {
  const [close, setClose] = useState(true)

  return (
    <CartContext.Provider value={{ close, setClose }}>{children}</CartContext.Provider>
  )
}
const useCartState = () => useContext(CartContext)

export { useCartState, CartContextProvider }
