import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider, DefaultTheme, Button } from 'react-native-paper';
import MainNavigation from './src/navigations/MainNavigation';
import { SHARED_STYLE, paddingStyle } from './src/constants/Styles';
import COLORS from './src/constants/Colors';
import * as Font from 'expo-font'

const theme = Object.assign(DefaultTheme, {
    roundness: 8,
    colors: Object.assign(DefaultTheme.colors, {
        primary: COLORS.black
    }),
    // fonts: {
    //     light: {
    //         fontFamily: 'Gotham-light',
    //     },
    //     medium: {
    //         fontFamily: 'Gotham',
    //     },
    //     regular: {
    //         fontFamily: 'Gotham-light'
    //     },
    //     thin: {
    //         fontFamily: 'Gotham-light'
    //     }
    // }
})

//TODO: custom font 'Gotham' can't display as expected
export default function App() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const loadFont = async () => {
            await Font.loadAsync({
                'Gotham': require('./assets/fonts/GothamBook.ttf'),
                'Gotham-light': require('./assets/fonts/GothamLight.ttf'),
            })
        }
        (async () => {
            await loadFont()
            setLoading(false)
        })()
    }, [])
    if (loading) {
        return null
    }
    return (
        <Provider theme={theme}>
            <View style={styles.homeView}>
                <Button>test</Button>
                <MainNavigation />
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    homeView: {
        flex: 1
    }
})