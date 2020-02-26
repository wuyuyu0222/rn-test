import { MOCK_COINS } from "./mock"

export function toPercent(num, digit = 2) {
    const percent = (+num * 100).toFixed(digit)
    return `${percent}%`
}

export function getWalletTotalCNY(wallet) {
    let totalAmount = 0
    wallet.forEach(coin => {
        const amount = exchangeCNY(coin.currency, coin.amount)
        totalAmount += amount
    })
    return totalAmount
}

export function exchangeCNY(currency, amount) {
    let usdtAmount = 0
    if (currency === 'USDT') {
        usdtAmount = amount
    } else {
        const exchangeCoin = MOCK_COINS.find(c => c.name === currency)
        if (exchangeCoin) {
            usdtAmount = amount * exchangeCoin.exchange.amount
        }
    }
    const usdtCoin = MOCK_COINS.find(c => c.name === 'USDT')
    const cnyValue = usdtAmount * usdtCoin.exchange.amount
    return cnyValue
}