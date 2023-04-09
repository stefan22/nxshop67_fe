/*
 * @fn cartTotalPrice
 * It calculates the total cost of a cart's products
 * @param user cart items <Object>
 */

const cartTotalPrice = cart => {
  return cart.reduce((acc, cartItem) => {
    if (!cartItem.product) return acc
    return acc + cartItem.quantity * cartItem.product.price
  }, 0)
}

export { cartTotalPrice }
