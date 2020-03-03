import React from 'react'
import { View, FlatList, Image, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ROUTES from '../constants/Routes'
import { useNavigation } from '@react-navigation/native'
import { MOCK_COINS, MOCK_WALLET } from '../utils/mock'
import { paddingStyle } from '../constants/Styles'
import { toPercent, getWalletTotalCNY } from '../utils/common'
import Container from '../components/Container'
import OutlinedButton from '../components/Button/OutlinedButton'
import BaseText from '../components/Text/BaseText'
import TitleText from '../components/Text/TitleText'
import Card from '../components/Card'

export default function HomeScreen() {
    return (
        <Container>
            <WalletInfo />
            <NavButtonGroup />
            <CoinList />
        </Container>
    )
}

const WalletInfo = () => {
    const navigation = useNavigation()
    const walletTotal = getWalletTotalCNY(MOCK_WALLET)
    return (
        <View style={styles.walletInfo}>
            <Card style={styles.walletCard} onPress={() => navigation.navigate(ROUTES.WALLET_DETAIL)}>
                <TitleText style={styles.walletTitle}>My Wallet</TitleText>
                <BaseText>{walletTotal.toLocaleString()} CNY</BaseText>
            </Card>
        </View>
    )
}

const NavButtonGroup = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.navRow}>
            <View style={styles.navCol}>
                <OutlinedButton style={styles.navButton} onPress={() => navigation.navigate(ROUTES.TX_LIST)}>Tx List</OutlinedButton>
            </View>
            <View style={styles.navCol}>
                <OutlinedButton style={styles.navButton} disabled={true}>Market</OutlinedButton>
            </View>
        </View>
    )
}

const CoinList = () => {
    return (
        <View style={styles.coinList}>
            <FlatList
                data={MOCK_COINS}
                renderItem={({ item }) => (
                    <CoinCard
                        name={item.name}
                        exchange={item.exchange}
                        icon={item.icon}
                    />
                )}
                keyExtractor={item => item.name}
            />
        </View>
    )
}

const EXCHANGE_STATE = {
    UP: 'up',
    DOWN: 'down'
}

const CoinCard = (props) => {
    const { name, exchange, icon } = props
    const navigation = useNavigation()
    const exchangeState = exchange.rate >= 0 ? EXCHANGE_STATE.UP : EXCHANGE_STATE.DOWN
    const rateText = exchange.rate >= 0 ? toPercent(exchange.rate) : toPercent(exchange.rate * -1)
    return (
        <Card style={styles.coinCard} onPress={() => navigation.navigate(ROUTES.COIN_DETAIL, { name: name })}>
            <View style={styles.coinIcon}>
                <Image style={styles.iconImage} source={icon} />
            </View>
            <View style={styles.coinInfo}>
                <TitleText>{name}</TitleText>
                <View style={styles.coinExchange}>
                    <BaseText style={styles.currencyText}>
                        {`${name}/${exchange.currency}`}
                    </BaseText>
                    <BaseText style={styles.amountText}>
                        {exchange.amount}
                    </BaseText>
                </View>
            </View>
            <View style={styles.coinRate}>
                <Ionicons name={`ios-arrow-${exchangeState}`} size={16} style={styles.rateIcon} />
                <BaseText style={styles.rateText}>{rateText}</BaseText>
            </View>
        </Card>
    )
}

const styles = StyleSheet.create({
    walletInfo: {
        flex: 2,
        marginBottom: 18,
    },
    walletCard: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    walletTitle: {
        marginBottom: 20
    },
    navRow: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: -12,
        marginRight: -12,
        marginBottom: 18
    },
    navCol: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        ...paddingStyle(0, 12),
    },
    navButton: {
        height: 36,
        width: '100%',
    },
    coinList: {
        flex: 8,
        marginBottom: -12
    },
    coinCard: {
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
        ...paddingStyle(0, 12),
    },
    coinIcon: {
        width: '20%'
    },
    iconImage: {
        width: 48,
        height: 48,
        resizeMode: 'contain'
    },
    coinInfo: {
        width: '50%',
        ...paddingStyle(0, 12),
    },
    coinExchange: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    currencyText: {
        marginRight: 8
    },
    amountText: {
        fontSize: 21,
        transform: [{ translateY: 5 }]
    },
    coinRate: {
        flexDirection: 'row',
        width: '30%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    rateIcon: {
        marginRight: 6,
        transform: [{ translateY: -2 }]
    },
    rateText: {
        fontSize: 18
    }
})