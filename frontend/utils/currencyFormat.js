/**
 * @Fun GB currencyFormat <formats numbers with pence and £ symbol>
 * @param amount {number}
 * @returns {string}
 */

const GBPCurrencyFormat = (amount = 0) => {
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
