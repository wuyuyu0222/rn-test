import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ROUTES from '../constants/Routes'
import SignInScreen from '../screens/SignInScreen'

const { Navigator, Screen } = createStackNavigator()

export default function AuthNavigation() {
    return (
        <Navigator>
            <Screen name={ROUTES.SIGN_IN} component={SignInScreen} />
        </Navigator>
    )
}