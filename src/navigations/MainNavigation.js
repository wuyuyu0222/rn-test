import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import ROUTES from '../constants/Routes'
import AuthNavigation from './AuthNavigation'
import HomeScreen from '../screens/HomeScreen'
import CoinDetailScreen from '../screens/CoinDetailScreen'
import TxListScreen from '../screens/TxListScreen'
import TxDetailScreen from '../screens/TxDetailScreen'
import WalletDetailScreen from '../screens/WalletDetailScreen'
import WalletHistoryScreen from '../screens/WalletHistoryScreen'
import { useAuth } from '../contexts/auth'
import TestScreen from '../screens/TestScreen'

const { Navigator, Screen } = createStackNavigator()

export default function MainNavigation() {
    const auth = useAuth()
    return (
        <NavigationContainer>
            {!auth.isAuthorized ? <AuthNavigation /> : (
                <Navigator headerMode="none">
                    <Screen name={ROUTES.HOME} component={HomeScreen} />
                    <Screen name={ROUTES.COIN_DETAIL} component={CoinDetailScreen} options={({ route }) => ({ title: route.params.name })} />
                    <Screen name={ROUTES.TX_LIST} component={TxListScreen} />
                    <Screen name={ROUTES.TX_DETAIL} component={TxDetailScreen} />
                    <Screen name={ROUTES.WALLET_DETAIL} component={WalletDetailScreen} />
                    <Screen name={ROUTES.WALLET_HISTORY} component={WalletHistoryScreen} />
                    <Screen name={ROUTES.TEST} component={TestScreen} />
                </Navigator>
            )}
        </NavigationContainer>
    )
}