import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import ROUTES from '../constants/Routes'
import { useNavigation } from '@react-navigation/native'
import { MOCK_COINS, MOCK_WALLET } from '../utils/mock'
import COLORS from '../constants/Colors'
import { SHARED_STYLE, paddingStyle, borderStyle } from '../constants/Styles'
import { toPercent, getWalletTotalCNY } from '../utils/common'
import OutlinedButton from '../components/OutlinedButton'

export default function HomeScreen() {
    return (
        <View style={[SHARED_STYLE.container, styles.container]}>
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
                <Text style={[SHARED_STYLE.text, styles.walletTitle]}>My Wallet</Text>
                <Text style={SHARED_STYLE.text}>{walletTotal} CNY</Text>
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

    return (
        <TouchableOpacity style={[SHARED_STYLE.card, styles.coinCard]} onPress={() => navigation.navigate(ROUTES.COIN_DETAIL, { name: name })}>
                <View style={styles.coinIcon}>
                    <Image style={styles.iconImage} source={icon} />
                </View>
                <View style={styles.coinInfo}>
                    <Text style={[SHARED_STYLE.text, styles.coinNameText]}>{name}</Text>
                    <View style={styles.coinExchange}>
                        <Text style={[SHARED_STYLE.text, styles.currencyText]}>
                            {`${name}/${exchange.currency}`}
                        </Text>
                        <Text style={[SHARED_STYLE.text, styles.amountText, styles[exchangeState]]}>{exchange.amount}</Text>
                    </View>
                </View>
                <View style={styles.coinRate}>
                    <Text style={[SHARED_STYLE.text, styles.rateText, styles[exchangeState]]}>{toPercent(exchange.rate)}</Text>
                </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        ...paddingStyle(48, 12)
    },
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
        fontSize: 18,
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
    coinNameText: {
        fontSize: 21,
        fontFamily: 'Gotham',
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
        width: '30%',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    rateText: {
        fontSize: 18
    },
    down: {
        color: COLORS.red400
    },
    up: {
        color: COLORS.green400
    }
})