export const MOCK_COINS = [
    { name: 'BTC', exchange: { currency: 'USDT', amount: 7845, rate: -0.0394 }, icon: require('../../assets/images/btc-icon.png') },
    { name: 'ETH', exchange: { currency: 'USDT', amount: 1123, rate: -0.0184 }, icon: require('../../assets/images/eth-icon.png') },
    { name: 'LTC', exchange: { currency: 'USDT', amount: 476, rate: -0.0394 }, icon: require('../../assets/images/ltc-icon.png') },
    { name: 'USDT', exchange: { currency: 'CNY', amount: 7.12, rate: 0.0014 }, icon: require('../../assets/images/usdt-icon.png') }
]
export const MOCK_TXS = [
    { id: 0, currency: 'BTC', amount: 1.001, price: { currency: 'CNY', amount: 500 } },
    { id: 1, currency: 'BTC', amount: 0.402, price: { currency: 'CNY', amount: 500 } },
    { id: 2, currency: 'BTC', amount: 0.005, price: { currency: 'CNY', amount: 500 } }
]