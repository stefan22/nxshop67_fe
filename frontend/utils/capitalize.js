/*
 *  @fn capitalize
 *   Returns a new string with the first character capitalized.
 *   If the input is not a string returns the string 'Username'
 *   @param {String} - the string to capitalize
 *   @returns {String} - the capitalized string or the string 'Username' when input not a string.
 * */
const capitalize = str =>
  typeof str === 'string' ? str.charAt(0).toUpperCase() + str.slice(1) : 'Username'

export default capitalize
