/*
 *  @fn CartContext - a new React context object
 *  @fn CartContextProvider - it uses useState hook to create a state variable 'close', and  a fn 'setClose'.
 *  It renders the children wrapped in Provider, passing state values as context values
 *  @fn useCartState - returns the current value of the cartContext
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
