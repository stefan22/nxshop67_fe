/**
 *  @fn GBPCurrencyformat - formats an amount in GBP currency type format
 *    @param {Number }- it takes a numbe as its only argument.
 *   @returns {Object} - options object containing the settings for the currency format
 */

const GBPCurrencyFormat = amount => {
  if (typeof amount === 'string') return `Amount passed not a number`
  // GBP £ settings
  const options = {
    style: 'currency',
    currency: 'GBP',
    maximumFractionDigits: 2
  }
  // pass default options
  const poundFormatReady = new Intl.NumberFormat(options.currency, options)
  // pass amount
  return poundFormatReady.format(amount / 100)
}

export { GBPCurrencyFormat }
