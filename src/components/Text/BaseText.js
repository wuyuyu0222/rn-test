import React from 'react'
import { Text } from 'react-native';

export default function BaseText({ style, children }) {
    return (
        <Text style={[{
            fontSize: 14,
            letterSpacing: 1.2,
            fontFamily: 'Gotham-Light',
            transform: [{ translateY: 2 }],
        }, style]}>
            {children}
        </Text>
    )
}