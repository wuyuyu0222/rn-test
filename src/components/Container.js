import React from 'react'
import { View } from 'react-native';
import { paddingStyle } from '../constants/Styles';
import COLORS from '../constants/Colors';

export default function Container({ style, children }) {
    return (
        <View style={[{
            flex: 1,
            backgroundColor: COLORS.gray,
            position: 'relative',
            width: '100%',
            ...paddingStyle(24, 12)
        }, style]}>
            {children}
        </View>
    )
}