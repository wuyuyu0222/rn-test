import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ROUTES from '../constants/Routes'
import { MOCK_COINS } from '../utils/mock'

export default function CoinDetailScreen({ navigation, route }) {
    const { name } = route.params
    const coin = MOCK_COINS.find(coin => coin.name === name)
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.HOME)}>
                <Text>To Home</Text>
            </TouchableOpacity>
            <Text>{coin.name}</Text>
            <Text>{coin.exchange.currency}</Text>
            <Text>{coin.exchange.amount}</Text>
            <Text>{coin.exchange.rate}</Text>
        </View>
    )
}