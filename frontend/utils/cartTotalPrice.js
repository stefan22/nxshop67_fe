/*
 * @fn cartTotalPrice
 * It calculates the total cost of  cart's products.
 *  @param - it takes a cart array as its only argument
 *  @returns - the total value at the accumulator ( total price of all items in the cart)
 */

const cartTotalPrice = cart => {
  return cart.reduce((acc, cartItem) => {
    if (!cartItem.product) return acc
    return acc + cartItem.quantity * cartItem.product.price
  }, 0)
}

export { cartTotalPrice }
