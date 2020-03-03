import React from 'react'
import { MOCK_COINS } from '../utils/mock'
import Container from '../components/Container'
import BaseText from '../components/Text/BaseText'

export default function CoinDetailScreen({ route }) {
    const { name } = route.params
    const coin = MOCK_COINS.find(coin => coin.name === name)
    return (
        <Container>
            <BaseText>{coin.name}</BaseText>
            <BaseText>{coin.exchange.currency}</BaseText>
            <BaseText>{coin.exchange.amount}</BaseText>
            <BaseText>{coin.exchange.rate}</BaseText>
        </Container>
    )
}