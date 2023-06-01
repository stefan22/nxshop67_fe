import { GBPCurrencyFormat } from '../utils/currencyFormat'

describe('currencyFormat function', () => {
  it('should return a string value', () => {
    expect(GBPCurrencyFormat(1)).toEqual('£0.01')
    expect(GBPCurrencyFormat(10)).toEqual('£0.10')
    expect(GBPCurrencyFormat(45090)).toEqual('£450.90')
  })
  it('should throw an error when wrong type passed', () => {
    expect(GBPCurrencyFormat('100')).toEqual('Amount passed not a number')
  })
})
