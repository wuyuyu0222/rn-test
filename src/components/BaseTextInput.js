import React from 'react'
import { TextInput, View } from 'react-native';
import COLORS from '../constants/Colors';
import { borderStyle, paddingStyle } from '../constants/Styles';
import BaseText from './Text/BaseText';

export default function BaseTextInput({ style, children, label, ...props }) {
    return (
        <View>
            <BaseText>{label}</BaseText>
            <TextInput {...props} style={[{
                height: 32,
                marginTop: 4,
                marginBottom: 12,
                borderRadius: 8,
                ...paddingStyle(4, 12),
                ...borderStyle(1, 'solid', COLORS.lightBlack)
            }, style]}>
                {children}
            </TextInput>
        </View>
    )
}