import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SHARED_STYLE, paddingStyle } from '../constants/Styles'
import Tabs from '../components/Tabs'
import ROUTES from '../constants/Routes'
import { MOCK_TX_HISTORYS } from '../utils/mock'

export default function WalletHistoryScreen({ navigation, route }) {
    const { currency } = route.params
    const txs = MOCK_TX_HISTORYS.filter(t => t.currency === currency)
    const AllHistory = () => {
        return <HistoryList list={txs} />
    }

    const ReceivedHistory = () => {
        return <HistoryList list={txs.filter(t => t.type === 'received')} />
    }

    const SendHistory = () => {
        return <HistoryList list={txs.filter(t => t.type === 'send')} />
    }
    const routes = [
        { title: 'All', view: AllHistory },
        { title: 'Received', view: ReceivedHistory },
        { title: 'Send', view: SendHistory },
    ]
    return (
        <View style={SHARED_STYLE.container}>
            <TouchableOpacity style={SHARED_STYLE.navButton} onPress={() => navigation.navigate(ROUTES.WALLET_DETAIL)}>
                <Text style={SHARED_STYLE.buttonText}>My Wallet</Text>
            </TouchableOpacity>
            <Tabs routes={routes} />
        </View>
    )
}

const HistoryList = ({ list }) => {
    return (
        <View>
            {list.map(tx => {
                const datetime = new Date(tx.timestamp)
                return (
                    <View key={tx.id} style={styles.txCard}>
                        <Text style={SHARED_STYLE.text}>{tx.currency}</Text>
                        <Text style={SHARED_STYLE.text}>{tx.amount}</Text>
                        <Text style={SHARED_STYLE.text}>{tx.type} {tx.status}</Text>
                        <View>
                            <Text style={SHARED_STYLE.text}>{datetime.toLocaleDateString()}</Text>
                            <Text style={SHARED_STYLE.text}>{datetime.toLocaleTimeString()}</Text>
                        </View>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    txCard: {
        height: 32,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 12,
        ...paddingStyle(0, 12),
    },
})