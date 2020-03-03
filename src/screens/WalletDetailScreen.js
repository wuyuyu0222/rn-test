import React from 'react'
import { View, StyleSheet } from 'react-native'
import ROUTES from '../constants/Routes'
import { MOCK_WALLET } from '../utils/mock'
import { getWalletTotalCNY, exchangeCNY } from '../utils/common'
import PercentBar from '../components/PercentBar'
import { useNavigation } from '@react-navigation/native'
import Container from '../components/Container'
import BaseText from '../components/Text/BaseText'
import TitleText from '../components/Text/TitleText'
import BaseButton from '../components/Button/BaseButton'

export default function WalletDetailScreen() {
    return (
        <Container>
            <WalletInfo wallet={MOCK_WALLET} />
        </Container>
    )
}

const WalletInfo = ({ wallet }) => {
    const walletTotal = getWalletTotalCNY(wallet)
    return (
        <View style={styles.walletInfo}>
            <TitleText style={styles.walletTitle}>My Wallet</TitleText>
            <BaseText style={styles.walletTotal}>{walletTotal.toLocaleString()} CNY</BaseText>
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
            <BaseText>{coin.amount} {coin.currency}</BaseText>
            <BaseButton onPress={() => navigation.navigate(ROUTES.WALLET_HISTORY, { currency: coin.currency })}>
                History
            </BaseButton>
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