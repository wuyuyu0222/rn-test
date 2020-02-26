import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import ROUTES from '../constants/Routes'

export default function WalletDetailScreen({ navigation }) {
    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.HOME)}>
                <Text>To Home</Text>
            </TouchableOpacity>
        </View>
    )
}