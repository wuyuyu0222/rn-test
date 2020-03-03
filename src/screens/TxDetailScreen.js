import React from 'react'
import { View } from 'react-native'
import { MOCK_TXS } from '../utils/mock'
import Container from '../components/Container'
import BaseText from '../components/Text/BaseText'

export default function TxDetailScreen({ route }) {
    const { id } = route.params
    const tx = MOCK_TXS.find(tx => tx.id === id)
    return (
        <Container>
            <BaseText>Currency: {tx.currency}</BaseText>
            <BaseText>Amount: {tx.amount}</BaseText>
            <BaseText>Price: {tx.price.amount}{tx.price.currency}</BaseText>
        </Container>
    )
}