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

export const MOCK_WALLET = [
    { currency: 'BTC', amount: 0.122 },
    { currency: 'ETH', amount: 122.733 },
    { currency: 'LTC', amount: 102.11 },
    { currency: 'USDT', amount: 1299.12 }
]

export const MOCK_TX_HISTORYS = [
    { id: 0, currency: 'BTC', amount: 0.004, type: 'received', status: 'success', timestamp: new Date().toISOString() },
    { id: 1, currency: 'BTC', amount: 0.030, type: 'received', status: 'failed', timestamp: new Date().toISOString() },
    { id: 2, currency: 'ETH', amount: 2.341, type: 'send', status: 'failed', timestamp: new Date().toISOString() },
    { id: 3, currency: 'ETH', amount: 0.757, type: 'received', status: 'success', timestamp: new Date().toISOString() },
    { id: 4, currency: 'BTC', amount: 0.010, type: 'received', status: 'success', timestamp: new Date().toISOString() },
    { id: 5, currency: 'BTC', amount: 0.002, type: 'send', status: 'success', timestamp: new Date().toISOString() },
    { id: 6, currency: 'BTC', amount: 0.004, type: 'received', status: 'success', timestamp: new Date().toISOString() },
    { id: 7, currency: 'LTC', amount: 5.030, type: 'received', status: 'failed', timestamp: new Date().toISOString() },
    { id: 8, currency: 'BTC', amount: 0.002, type: 'send', status: 'failed', timestamp: new Date().toISOString() },
    { id: 9, currency: 'BTC', amount: 0.007, type: 'received', status: 'success', timestamp: new Date().toISOString() },
    { id: 10, currency: 'BTC', amount: 0.010, type: 'received', status: 'success', timestamp: new Date().toISOString() },
    { id: 11, currency: 'LTC', amount: 10.002, type: 'send', status: 'success', timestamp: new Date().toISOString() }
]