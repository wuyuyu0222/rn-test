import React from 'react'
import { View, StyleSheet } from 'react-native'
import { paddingStyle } from '../constants/Styles'
import Tabs from '../components/Tabs'
import { MOCK_TX_HISTORYS } from '../utils/mock'
import Container from '../components/Container'
import BaseText from '../components/Text/BaseText'
import COLORS from '../constants/Colors'

export default function WalletHistoryScreen({ route }) {
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
        <Container>
            <Tabs routes={routes} />
        </Container>
    )
}

const HistoryList = ({ list }) => {
    return (
        <View>
            {list.map(tx => {
                const datetime = new Date(tx.timestamp)
                return (
                    <View key={tx.id} style={styles.txCard}>
                        <BaseText>{tx.currency}</BaseText>
                        <BaseText>{tx.amount}</BaseText>
                        <View style={styles.txStatus}>
                            <BaseText>{tx.type} {tx.status}</BaseText>
                            <BaseText style={styles.timeText}>{datetime.toLocaleString()}</BaseText>
                        </View>
                    </View>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    txCard: {
        height: 48,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        marginTop: 12,
        ...paddingStyle(12),
    },
    txStatus: {
        height: '100%',
        alignItems: 'flex-end',
    },
    timeText: {
        marginTop: 8,
        fontSize: 11,
    }
})