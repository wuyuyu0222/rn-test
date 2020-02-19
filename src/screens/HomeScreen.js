import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import ROUTES from '../constants/Routes'
import { useNavigation } from '@react-navigation/native'
import { MOCK_COINS } from '../utils/mock'

export default function HomeScreen({ navigation }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.TX_LIST)}>
                <Text>To Tx List</Text>
            </TouchableOpacity>
            <CoinList />
        </View>
    )
}

const CoinList = () => {
    return (
        <View>
            <FlatList
                data={MOCK_COINS}
                renderItem={({ item }) => (
                    <CoinCard
                        name={item.name}
                        exchange={item.exchange}
                    />
                )}
                keyExtractor={item => item.name}
            />
        </View>
    )
}

const CoinCard = (props) => {
    const { name, exchange } = props
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.COIN_DETAIL, { name: name })}>
            <View>
                <Text>{name}</Text>
                <Text>{exchange.currency}</Text>
                <Text>{exchange.amount}</Text>
                <Text>{exchange.rate}</Text>
            </View>
        </TouchableOpacity>
    )
}