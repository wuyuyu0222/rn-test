import React from 'react';
import { View } from 'react-native';
import { Provider, DefaultTheme, Button } from 'react-native-paper';
import MainNavigation from './src/navigations/MainNavigation';
import { SHARED_STYLE } from './src/constants/Styles';
import COLORS from './src/constants/Colors';

const theme = Object.assign(DefaultTheme, {
    colors: Object.assign(DefaultTheme.colors, {
        primary: COLORS.black
    })
})

export default function App() {
    return (
        <Provider theme={theme}>
            <View style={SHARED_STYLE.container}>
                <Button>test</Button>
                <MainNavigation />
            </View>
        </Provider>
    )
}