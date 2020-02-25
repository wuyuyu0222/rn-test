import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ROUTES from '../constants/Routes'
import { MOCK_COINS } from '../utils/mock'
import { SHARED_STYLE } from '../constants/Styles'

export default function CoinDetailScreen({ navigation, route }) {
    const { name } = route.params
    const coin = MOCK_COINS.find(coin => coin.name === name)
    return (
        <View style={SHARED_STYLE.container}>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.HOME)}>
                <Text style={SHARED_STYLE.text}>To Home</Text>
            </TouchableOpacity>
            <Text style={SHARED_STYLE.text}>{coin.name}</Text>
            <Text style={SHARED_STYLE.text}>{coin.exchange.currency}</Text>
            <Text style={SHARED_STYLE.text}>{coin.exchange.amount}</Text>
            <Text style={SHARED_STYLE.text}>{coin.exchange.rate}</Text>
        </View>
    )
}