import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ROUTES from '../constants/Routes'
import HomeScreen from '../screens/HomeScreen'
import CoinDetailScreen from '../screens/CoinDetailScreen'
import TxListScreen from '../screens/TxListScreen'
import TxDetailScreen from '../screens/TxDetailScreen'

const { Navigator, Screen } = createStackNavigator()

export default function MainNavigation() {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name={ROUTES.HOME} component={HomeScreen} />
                <Screen name={ROUTES.COIN_DETAIL} component={CoinDetailScreen} options={({ route }) => ({ title: route.params.name })} />
                <Screen name={ROUTES.TX_LIST} component={TxListScreen} />
                <Screen name={ROUTES.TX_DETAIL} component={TxDetailScreen} />
            </Navigator>
        </NavigationContainer>
    )
}