import React from 'react'
import { View, Text, TouchableOpacity, FlatList } from 'react-native'
import ROUTES from '../constants/Routes'
import { useNavigation } from '@react-navigation/native'
import { MOCK_TXS } from '../utils/mock'

export default function TxListScreen({ navigation }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.HOME)}>
                <Text>To Home</Text>
            </TouchableOpacity>
            <FlatList
                data={MOCK_TXS}
                renderItem={({ item }) => (
                    <TxCard
                        tx={item}
                    />
                )}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.TX_DETAIL)}>
                <Text>To Detail</Text>
            </TouchableOpacity>
        </View>
    )
}

const TxCard = (props) => {
    const { id, currency, amount, price, createAt } = props.tx
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.TX_DETAIL, { id: id })}>
            <View>
                <Text>Currency: {currency}</Text>
                <Text>Amount: {amount}</Text>
                <Text>Price: {price.amount}{price.currency}</Text>
            </View>
        </TouchableOpacity>
    )
}