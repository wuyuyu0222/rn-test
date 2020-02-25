import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import ROUTES from '../constants/Routes'
import { useNavigation } from '@react-navigation/native'
import { MOCK_COINS } from '../utils/mock'
import COLORS from '../constants/Colors'
import { SHARED_STYLE, paddingStyle, borderStyle } from '../constants/Styles'
import { toPercent } from '../utils/common'
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
    return (
        <View style={[styles.walletInfo]}>
            <Text style={SHARED_STYLE.text}>Wallet Info</Text>
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
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.COIN_DETAIL, { name: name })}>
            <View style={styles.coinCard}>
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
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        ...paddingStyle(0, 12)
    },
    walletInfo: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    navRow: {
        marginLeft: -12,
        marginRight: -12,
    },
    navCol: {
        ...paddingStyle(0, 12),
    },
    coinList: {
        flex: 4,
        marginBottom: -12
    },
    coinCard: {
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
        borderRadius: 8,
        ...paddingStyle(0, 12),
        ...borderStyle(1, 'solid', COLORS.lightBlack),
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