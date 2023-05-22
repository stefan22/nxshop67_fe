import { GBPCurrencyFormat } from '../utils'

describe('currencyFormat function', () => {
  it('should return a type string value of "£0.01" when given num 1', () => {
    expect(GBPCurrencyFormat(1)).toEqual('£0.01')
    expect(GBPCurrencyFormat(10)).toEqual('£0.10')
    expect(GBPCurrencyFormat(40)).toEqual('£0.40')
    expect(GBPCurrencyFormat(150)).toEqual('£1.50')
    expect(GBPCurrencyFormat(3000)).toEqual('£30.00')
    expect(GBPCurrencyFormat(45000)).toEqual('£450.00')
    expect(GBPCurrencyFormat(50000000)).toEqual('£500,000.00')
  })

  it('should return: "Amount passed not a number" when passing any string type arg', () => {
    expect(GBPCurrencyFormat('111')).toEqual('Amount passed not a number')
  })
})
