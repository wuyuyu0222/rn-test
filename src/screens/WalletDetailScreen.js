import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import ROUTES from '../constants/Routes'
import { SHARED_STYLE } from '../constants/Styles'
import { MOCK_WALLET } from '../utils/mock'
import { getWalletTotalCNY, exchangeCNY } from '../utils/common'
import PercentBar from '../components/PercentBar'
import { useNavigation } from '@react-navigation/native'

export default function WalletDetailScreen({ navigation }) {
    return (
        <View style={SHARED_STYLE.container}>
            <TouchableOpacity style={SHARED_STYLE.navButton} onPress={() => navigation.navigate(ROUTES.HOME)}>
                <Text style={SHARED_STYLE.buttonText}>Home</Text>
            </TouchableOpacity>
            <WalletInfo wallet={MOCK_WALLET} />
        </View>
    )
}

const WalletInfo = ({ wallet }) => {
    const walletTotal = getWalletTotalCNY(wallet)
    return (
        <View style={styles.walletInfo}>
            <Text style={[SHARED_STYLE.text, SHARED_STYLE.titileText, styles.walletTitle]}>My Wallet</Text>
            <Text style={[SHARED_STYLE.text, styles.walletTotal]}>{walletTotal.toLocaleString()} CNY</Text>
            {wallet.map(coin => {
                const cnyAmount = exchangeCNY(coin.currency, coin.amount)
                return (
                    <View key={coin.currency} style={styles.coinContainer}>
                        <CoinInfo coin={coin} />
                        <PercentBar value={(cnyAmount / walletTotal)} />
                    </View>
                )
            })}
        </View>
    )
}

const CoinInfo = ({ coin }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.coinInfo}>
            <Text style={SHARED_STYLE.text}>{coin.amount} {coin.currency}</Text>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.WALLET_HISTORY, { currency: coin.currency })}>
                <Text style={[SHARED_STYLE.text, SHARED_STYLE.buttonText]}>History</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    walletInfo: {
        alignItems: 'center'
    },
    walletTitle: {
        marginBottom: 20
    },
    walletTotal: {
        marginBottom: 20
    },
    coinContainer: {
        width: '100%',
        height: 78,
    },
    coinInfo: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8
    }
})