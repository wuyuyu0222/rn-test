import React from 'react'
import { View, Text, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import ROUTES from '../constants/Routes'
import { useNavigation } from '@react-navigation/native'
import { MOCK_COINS } from '../utils/mock'
import COLORS from '../constants/Colors'
import { SHARED_STYLE, paddingStyle, borderStyle } from '../constants/Styles'
import { toPercent } from '../utils/common'

export default function HomeScreen({ navigation }) {
    return (
        <View style={SHARED_STYLE.container}>
            <WalletInfo />
            <View style={styles.navContainer}>
                <TxListButton />
                <MarketButton />
            </View>
            <CoinList />
        </View>
    )
}

const WalletInfo = () => {
    return (
        <View style={[styles.container, styles.walletInfoContainer]}>
            <Text style={SHARED_STYLE.text}>Wallet Info</Text>
        </View>
    )
}

const TxListButton = () => {
    const navigation = useNavigation()
    return (
        <View style={[styles.container, styles.navButtonContainer]}>
            <View style={SHARED_STYLE.button}>
                <TouchableOpacity onPress={() => navigation.navigate(ROUTES.TX_LIST)}>
                    <Text style={SHARED_STYLE.buttonText}>Tx List</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const MarketButton = () => {
    return (
        <View style={[styles.container, styles.navButtonContainer]}>
            <View style={SHARED_STYLE.button}>
                <TouchableOpacity>
                    <Text style={SHARED_STYLE.buttonText}>Market</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const CoinList = () => {
    return (
        <View style={[styles.container, styles.coinListContainer]}>
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
            <View style={styles.coinCardContainer}>
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
        ...paddingStyle(12)
    },
    walletInfoContainer: {
        flex: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    navContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    navButtonContainer: {
        flex: 1,
        width: '50%'
    },
    coinListContainer: {
        flex: 4,
        marginBottom: -12
    },
    coinCardContainer: {
        height: 64,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 12,
        borderRadius: 8,
        ...paddingStyle(0, 12),
        ...borderStyle(1, 'solid', COLORS.yellow400),
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
        ...paddingStyle(0, 12)
    },
    coinNameText: {
        fontSize: 21
    },
    coinExchange: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    currencyText: {
        fontSize: 12,
        marginRight: 8
    },
    amountText: {
        fontSize: 21
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