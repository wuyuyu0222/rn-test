import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import ROUTES from '../constants/Routes'
import { useNavigation } from '@react-navigation/native'
import { MOCK_COINS, MOCK_WALLET } from '../utils/mock'
import { SHARED_STYLE, paddingStyle } from '../constants/Styles'
import { toPercent, getWalletTotalCNY } from '../utils/common'
import OutlinedButton from '../components/OutlinedButton'

export default function HomeScreen() {
    return (
        <View style={SHARED_STYLE.container}>
            <WalletInfo />
            <View style={[SHARED_STYLE.row, styles.navRow]}>
                <TxListButton />
                <MarketButton />
            </View>
            <CoinList />
        </View>
    )
}

const WalletInfo = () => {
    const navigation = useNavigation()
    const walletTotal = getWalletTotalCNY(MOCK_WALLET)
    return (
        <View style={styles.walletInfo}>
            <TouchableOpacity style={[SHARED_STYLE.card, styles.walletCard]} onPress={() => navigation.navigate(ROUTES.WALLET_DETAIL)}>
                <Text style={[SHARED_STYLE.text, SHARED_STYLE.titileText, styles.walletTitle]}>My Wallet</Text>
                <Text style={SHARED_STYLE.text}>{walletTotal.toLocaleString()} CNY</Text>
            </TouchableOpacity>
        </View>
    )
}

const TxListButton = () => {
    const navigation = useNavigation()
    return (
        <View style={[SHARED_STYLE.col, styles.navCol]}>
            <OutlinedButton onPress={() => navigation.navigate(ROUTES.TX_LIST)}>Tx List</OutlinedButton>
        </View>
    )
}

const MarketButton = () => {
    return (
        <View style={[SHARED_STYLE.col, styles.navCol]}>
            <OutlinedButton disabled={true}>Market</OutlinedButton>
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
        <TouchableOpacity style={[SHARED_STYLE.card, styles.coinCard]} onPress={() => navigation.navigate(ROUTES.COIN_DETAIL, { name: name })}>
            <View style={styles.coinIcon}>
                <Image style={styles.iconImage} source={icon} />
            </View>
            <View style={styles.coinInfo}>
                <Text style={[SHARED_STYLE.text, SHARED_STYLE.titileText]}>{name}</Text>
                <View style={styles.coinExchange}>
                    <Text style={[SHARED_STYLE.text, styles.currencyText]}>
                        {`${name}/${exchange.currency}`}
                    </Text>
                    <Text style={[SHARED_STYLE.text, styles.amountText, styles[exchangeState]]}>{exchange.amount}</Text>
                </View>
            </View>
            <View style={styles.coinRate}>
                <Ionicons name={`ios-arrow-${exchangeState}`} size={16} style={styles.rateIcon} />
                <Text style={[SHARED_STYLE.text, styles.rateText, styles[exchangeState]]}>{rateText}</Text>
            </View>
        </TouchableOpacity>
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
        marginLeft: -12,
        marginRight: -12,
        marginBottom: 18
    },
    navCol: {
        ...paddingStyle(0, 12),
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
        transform: [{ translateY: 2 }]
        // transform: [{ translateY: 5 }]
    },
    coinRate: {
        flexDirection: 'row',
        width: '30%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    rateIcon: {
        marginRight: 8,
        transform: [{ translateY: -1 }]
    },
    rateText: {
        fontSize: 18
    },
    down: {
        // color: COLORS.red400
    },
    up: {
        // color: COLORS.green400
    }
})