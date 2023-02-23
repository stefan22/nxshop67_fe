const capitalize = str =>
  typeof str === 'string' ? str.charAt(0).toUpperCase() + str.slice(1) : 'Username'

export default capitalize
