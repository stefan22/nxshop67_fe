/*
 *  @fn mechain <Higher Order Function>
 *  A HOF that takes another fn as its argument and returns a new fn that chains together fn with the bind method
 *  to return a new fn
 *  @param {Function} - the fn to chain with bind
 *  @returns {Function} - a new fn that accepts any number of arguments, binds them to fn and returns the
 *  result of calling fn with bound arguments.
 *
 * */
export const mechain =
  fn =>
  (...args) =>
    fn.bind(...args)

/*
 *   @fn not <negates>
 *   Returns a new function that negates the result of calling the given function with the provided arguments
 *  @param {Function} - the function to negate.
 *  @returns {Function} - a new fn that returns the opposite Boolean value of the result of calling fn with the
 *   provided arguments
 * */

export const not =
  fn =>
  (...args) =>
    !fn(...args)
