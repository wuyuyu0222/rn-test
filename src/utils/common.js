import { MOCK_COINS } from "./mock"

export function toPercent(num) {
    const percent = (+num * 100).toFixed(2)
    return `${percent}%`
}

export function getWalletTotalCNY(wallet) {
    let usdtValue = 0
    const usdt = wallet.find(c => c.currency === 'USDT')
    if (usdt) {
        usdtValue += usdt.amount
    }
    wallet.filter(c => c.currency !== 'USDT').forEach(coin => {
        const exchangeCoin = MOCK_COINS.find(c => c.name === coin.name)
        if (exchangeCoin) {
            usdtValue += coin.amount * c.exchange.amount
        }
    })
    const usdtCoin = MOCK_COINS.find(c => c.name === 'USDT')
    const cnyValue = usdtValue * usdtCoin.exchange.amount
    return cnyValue
}