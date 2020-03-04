import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import MainNavigation from './src/navigations/MainNavigation';
import * as Font from 'expo-font'
import { AuthProvider } from './src/contexts/auth';

const loadFonts = async () => {
    await Font.loadAsync({
        'Gotham': require('./assets/fonts/Gotham-Book.otf'),
        'Gotham-Light': require('./assets/fonts/Gotham-Light.otf'),
    })
}

//TODO: custom font 'Gotham' can't display as expected
export default function App() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        (async () => {
            await loadFonts()
            setLoading(false)
        })()
    }, [])
    if (loading) {
        return null
    }
    return (
        <AuthProvider>
            <View style={{ flex: 1 }}>
                <MainNavigation />
            </View>
        </AuthProvider>
    )
}