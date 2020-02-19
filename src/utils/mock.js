export const MOCK_COINS = [
    { name: 'BTC', exchange: { currency: 'USDT', amount: 7845, rate: -0.00394 } },
    { name: 'ETH', exchange: { currency: 'USDT', amount: 1123, rate: -0.00184 } },
    { name: 'LTC', exchange: { currency: 'USDT', amount: 476, rate: -0.00394 } },
    { name: 'USDT', exchange: { currency: 'CNY', amount: 7.12, rate: 0.00014 } }
]
export const MOCK_TXS = [
    { id: 0, currency: 'BTC', amount: 1.001, price: { currency: 'CNY', amount: 500 } },
    { id: 1, currency: 'BTC', amount: 0.402, price: { currency: 'CNY', amount: 500 } },
    { id: 2, currency: 'BTC', amount: 0.005, price: { currency: 'CNY', amount: 500 } }
]