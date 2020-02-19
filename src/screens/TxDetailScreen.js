import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ROUTES from '../constants/Routes'
import { MOCK_TXS } from '../utils/mock'

export default function TxDetailScreen({ navigation, route }) {
    const { id } = route.params
    const tx = MOCK_TXS.find(tx => tx.id === id)
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.TX_LIST)}>
                <Text>To List</Text>
            </TouchableOpacity>
            <View>
                <Text>Currency: {tx.currency}</Text>
                <Text>Amount: {tx.amount}</Text>
                <Text>Price: {tx.price.amount}{tx.price.currency}</Text>
            </View>
        </View>
    )
}