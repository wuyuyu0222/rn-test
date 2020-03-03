import React from 'react'
import { View, TouchableOpacity, FlatList } from 'react-native'
import ROUTES from '../constants/Routes'
import { useNavigation } from '@react-navigation/native'
import { MOCK_TXS } from '../utils/mock'
import Container from '../components/Container'
import BaseText from '../components/Text/BaseText'

export default function TxListScreen({ navigation }) {
    return (
        <Container>
            <FlatList
                data={MOCK_TXS}
                renderItem={({ item }) => (
                    <TxCard
                        tx={item}
                    />
                )}
                keyExtractor={item => item.id}
            />
        </Container>
    )
}

const TxCard = (props) => {
    const { id, currency, amount, price } = props.tx
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.navigate(ROUTES.TX_DETAIL, { id: id })}>
            <View>
                <BaseText>Currency: {currency}</BaseText>
                <BaseText>Amount: {amount}</BaseText>
                <BaseText>Price: {price.amount}{price.currency}</BaseText>
            </View>
        </TouchableOpacity>
    )
}